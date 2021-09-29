import React, { useState } from 'react';

const ToDoList = () => {

    const [toDoList, setToDoList] = useState([])
    const [inputValue, setInputValue] = useState("")


    const handleAddClicked = () => {
        let tempToDoList = [...toDoList]
        tempToDoList.push(inputValue)
        setToDoList(tempToDoList)
    }

    const handleClearClicked = (itemIndex) => {
        let tempToDoList = [...toDoList]
        tempToDoList.splice(itemIndex, 1)
        setToDoList(tempToDoList)
    }
    const handleClearAllClicked = () => {
        setToDoList([])
    }

    const toDoListResult = (
        <ul>
            {toDoList.map((toDoItem, index) => (
                <li key={index}>
                    <span data-testid="todo-list">{toDoItem} </span>
                    <button data-testid="remove-todo-btn" onClick={() => { handleClearClicked(index) }}>clear</button>
                </li>
            ))}
        </ul>
    )

    return (
        <React.Fragment>
            <div>
                <h2 data-testid="todo-title">to do List</h2>
                <div>
                    <input
                        type="text"
                        data-testid="todo-input"
                        placeholder="todo..."
                        value={inputValue}
                        onChange={(e) => { setInputValue(e.target.value) }}
                    />
                    <button
                        data-testid="add-todo-btn"
                        onClick={handleAddClicked}
                    >
                        Add
                    </button>
                </div>
                <div>
                    <button
                        data-testid="clearAll-btn"
                        onClick={handleClearAllClicked}
                    >
                        Clear All
                    </button>
                </div>
                <div>
                    {toDoListResult}
                </div>
            </div>
        </React.Fragment >
    );
}

export default ToDoList;