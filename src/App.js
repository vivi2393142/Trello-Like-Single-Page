import React from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './dnd/constants';
// import PropTypes from 'prop-types';

const List = (props) => {
    const doneList = props.listItems.map((item) => {
        return (
            <AddCard
                key={nanoid()}
                id={item.id}
                listItems={props.listItems}
                setListItems={props.setListItems}
                listTitle={item.title}
                listCards={item.cards}
                // titleText={item.title}
            />
        );
    });
    return (
        <div className='card-list'>
            {doneList}
            <AddList setListItems={props.setListItems} listItems={props.listItems} />
        </div>
    );
};

const AddList = (props) => {
    // set task text input
    const [inputText, setInputText] = React.useState('');
    const toggleTextInput = (event) => {
        setInputText(event.target.value);
    };
    // toggle add list
    const toggleAddAList = (event) => {
        document.querySelector('.add-list-button').classList.toggle('hide');
        document.querySelector('.add-save-list-button').classList.toggle('hide');
        document.querySelector('.list-input').classList.toggle('hide');
        document.querySelector('.list-edit').classList.toggle('card-init-toggle');
    };
    const setNewCard = () => {
        if (inputText === '') {
            toggleAddAList();
        } else {
            props.setListItems([...props.listItems, { id: nanoid(), title: inputText, cards: [] }]);
            setInputText('');
        }
    };
    return (
        <div className='list edit list-edit'>
            <input
                className='input-box list-input hide'
                onChange={toggleTextInput}
                value={inputText}
            ></input>
            <button className='add-init-button add-list-button' onClick={toggleAddAList}>
                + Add a list
            </button>
            <div className='add-save-close-buttons add-save-list-button hide'>
                <button className='add-save-button' onClick={setNewCard}>
                    Add List
                </button>
                <button className='add-close-button' onClick={toggleAddAList}>
                    X
                </button>
            </div>
        </div>
    );
};

const SingleCard = (props) => {
    return (
        <div
            index={props.index}
            className='single-card'
            draggable='true'
            id={props.cardId}
            onDrop={(event) => {
                props.setDargEnd(parseInt(event.target.getAttribute('index')));
                props.setDargEndId(event.target.getAttribute('id'));
            }}
        >
            {props.item}
        </div>
    );
};

const DraggableCard = (props) => {
    let index = props.index;
    let cardId = props.cardId;
    const [, drag] = useDrag({
        item: { cardId, index, type: ItemTypes.CARD },
    });
    return (
        <div ref={drag}>
            <SingleCard
                cardId={cardId}
                item={props.item}
                index={index}
                setDargEnd={props.setDargEnd}
                setDargEndId={props.setDargEndId}
            />
        </div>
    );
};

const CardList = (props) => {
    const [dragEnd, setDargEnd] = React.useState(0);
    const [dragEndId, setDargEndId] = React.useState('');
    // handle card move
    let newCards = props.listCards;
    let draggingId = '';
    const handleMoveCards = (fromIndex, toIndex) => {
        let cards = props.listCards;
        for (let k in cards) {
            let item = cards[k];
            if (k == fromIndex) {
                cards.splice(k, 1);
                cards.splice(toIndex, 0, item);
                break;
            }
        }
        newCards = cards;
        const newList = props.listItems.map((item) => {
            if (item.id === draggingId) {
                return {
                    id: item.id,
                    title: item.title,
                    cards: newCards,
                };
            } else {
                return item;
            }
        });
        props.setListItems(newList);
    };
    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => {
            draggingId = item.cardId;
            if (draggingId === dragEndId) {
                handleMoveCards(item.index, dragEnd);
            }
        },
    });

    // render
    const returnList = props.listCards.map((item, index) => {
        let id = nanoid();
        return (
            <DraggableCard
                key={id}
                cardId={props.cardId}
                id={id}
                item={item}
                index={index}
                setDargEnd={setDargEnd}
                setDargEndId={setDargEndId}
            />
        );
    });
    return <div ref={drop}>{returnList}</div>;
};

const AddCard = (props) => {
    // console.log(props.setListItems);
    // set task text input
    const [inputText, setInputText] = React.useState('');
    const [inputTitle, setInputTitle] = React.useState(props.listTitle);
    // toggle input
    const toggleTextInput = (event) => {
        setInputText(event.target.value);
    };
    // toggle title input
    const toggleTitleInput = (event) => {
        setInputTitle(event.target.value);
    };
    // edit title
    const editTitle = (event) => {
        event.target.parentNode.childNodes.forEach((item) => {
            item.classList.toggle('hide');
        });
    };
    // save title
    const saveTitle = (event) => {
        event.target.parentNode.childNodes.forEach((item) => {
            item.classList.toggle('hide');
        });
        const newList = props.listItems.map((item) => {
            if (item.id === props.id) {
                return { id: item.id, title: inputTitle, cards: item.cards };
            } else {
                return item;
            }
        });
        props.setListItems(newList);
        console.log(newList);
    };
    // toggle add list
    const toggleAddAList = (event, customTarget) => {
        let newTarget = '';
        if (customTarget) {
            newTarget = customTarget;
        } else {
            newTarget = event.target.parentNode;
        }
        newTarget.querySelector('.add-card-button').classList.toggle('hide');
        newTarget.querySelector('.add-save-card-button').classList.toggle('hide');
        newTarget.querySelector('.card-input').classList.toggle('hide');
    };
    // close card
    const closeCard = (event) => {
        let newTarget = event.target.parentNode.parentNode;
        toggleAddAList(null, newTarget);
    };
    // set new card
    const setNewCard = (event) => {
        if (inputText === '') {
            let newTarget = event.target.parentNode.parentNode;
            toggleAddAList(null, newTarget);
        } else {
            const newList = props.listItems.map((item) => {
                const newCards = [...item.cards, inputText];
                if (item.id === props.id) {
                    return { id: props.id, title: props.listTitle, cards: newCards };
                } else {
                    return item;
                }
            });
            props.setListItems(newList);
            setInputText('');
        }
    };
    // delete a list
    const deleteList = (event) => {
        const newList = props.listItems.filter((item) => {
            if (item.id !== props.id) {
                return item;
            }
        });
        props.setListItems(newList);
    };

    // render
    return (
        <div className='card'>
            <div className='card-title-box'>
                <div className='card-title'>{props.listTitle}</div>
                <input
                    className='card-title-input hide'
                    value={inputTitle}
                    onChange={toggleTitleInput}
                ></input>
                <button className='card-title-edit hide' onClick={saveTitle}>
                    save
                </button>
                <button className='card-title-edit' onClick={editTitle}>
                    edit
                </button>
            </div>
            <CardList
                listCards={props.listCards}
                setListItems={props.setListItems}
                listItems={props.listItems}
                cardId={props.id}
            />
            <input
                className='input-box card-input hide'
                value={inputText}
                onChange={toggleTextInput}
            ></input>
            <button className='add-init-button add-card-button' onClick={toggleAddAList}>
                + Add a Card
            </button>
            <div className='add-save-close-buttons add-save-card-button hide'>
                <button className='add-save-button' onClick={setNewCard}>
                    Add Card
                </button>
                <button className='add-close-button' onClick={closeCard}>
                    X
                </button>
            </div>
            <button className='add-init-button add-card-button' onClick={deleteList}>
                Delete List
            </button>
        </div>
    );
};

const App = () => {
    const [listItems, setListItems] = React.useState([
        { id: nanoid(), title: '1', cards: ['1', '2', '3', '4'] },
        { id: nanoid(), title: '2', cards: ['11', '22', '33', '44'] },
    ]);
    return (
        <div className='App'>
            <h1>Trello-Like Single Page App</h1>
            <List listItems={listItems} setListItems={setListItems} />
        </div>
    );
};

export default App;
