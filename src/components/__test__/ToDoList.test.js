import React from 'react'
import ToDoList from '../ToDoList'
import { render, fireEvent, screen } from '@testing-library/react'


test('render todo list title correctly', () => {
    const { getByTestId } = render(<ToDoList />)

    const titleEl = getByTestId('todo-title')

    expect(titleEl.textContent).toBe('to do List')

})

test('text input render correctly', () => {
    const { getByPlaceholderText } = render(<ToDoList />)

    const placeHolderText = getByPlaceholderText('todo...')

    expect(placeHolderText).toBeInTheDocument()

})

test('add todo button render correctly', () => {
    const { getByTestId } = render(<ToDoList />)

    const addBtnEl = getByTestId('add-todo-btn')

    expect(addBtnEl.textContent).toBe('Add')
})

test('clearAll todo button render correctly', () => {
    const { getByTestId } = render(<ToDoList />)

    const clearAllBtnEl = getByTestId('clearAll-btn')

    expect(clearAllBtnEl.textContent).toBe('Clear All')
})

test('change input to "practice react testing library"', () => {
    const { getByTestId } = render(<ToDoList />)

    const inputEl = getByTestId('todo-input')

    fireEvent.change(inputEl, {
        target: {
            value: 'practice react testing library'
        }
    })

    expect(inputEl.value).toBe('practice react testing library')
})

test('change input and add to todo list', () => {
    const { getByTestId } = render(<ToDoList />)

    const inputEl = getByTestId('todo-input')
    const addBtnEl = getByTestId('add-todo-btn')

    fireEvent.change(inputEl, {
        target: {
            value: 'practice react testing library'
        }
    })

    expect(inputEl.value).toBe('practice react testing library')

    fireEvent.click(addBtnEl)

    const toDoItem = screen.getByText(/practice react testing library/i)

    expect(toDoItem).toBeInTheDocument()

})

test('remove finished todo item', () => {
    const { getByTestId } = render(<ToDoList />)

    const inputEl = getByTestId('todo-input')
    const addBtnEl = getByTestId('add-todo-btn')

    fireEvent.change(inputEl, {
        target: {
            value: 'practice react testing library'
        }
    })

    expect(inputEl.value).toBe('practice react testing library')

    fireEvent.click(addBtnEl)

    const toDoEl = getByTestId('todo-list')
    const removeBtnEl = getByTestId('remove-todo-btn')

    expect(toDoEl.textContent).toBe("practice react testing library ")

    fireEvent.click(removeBtnEl)

    const existedToDoItem = screen.queryByTestId('todo-list')

    expect(existedToDoItem).toBe(null)
})

test('add three items and clicked clear all button', () => {
    const { getByTestId } = render(<ToDoList />)

    const inputEl = getByTestId('todo-input')
    const addBtnEl = getByTestId('add-todo-btn')
    const clearAllBtnEl = getByTestId('clearAll-btn')

    fireEvent.change(inputEl, {
        target: {
            value: 'practice react testing library1'
        }
    })

    expect(inputEl.value).toBe('practice react testing library1')

    fireEvent.click(addBtnEl)

    const toDoItem1 = screen.getByText(/practice react testing library1/i)

    expect(toDoItem1).toBeInTheDocument()
    fireEvent.change(inputEl, {
        target: {
            value: 'practice react testing library2'
        }
    })

    expect(inputEl.value).toBe('practice react testing library2')

    fireEvent.click(addBtnEl)

    const toDoItem2 = screen.getByText(/practice react testing library2/i)

    expect(toDoItem2).toBeInTheDocument()
    fireEvent.change(inputEl, {
        target: {
            value: 'practice react testing library3'
        }
    })

    expect(inputEl.value).toBe('practice react testing library3')

    fireEvent.click(addBtnEl)

    const toDoItem3 = screen.getByText(/practice react testing library3/i)

    expect(toDoItem3).toBeInTheDocument()

    fireEvent.click(clearAllBtnEl)

    const existedToDoItem = screen.queryByTestId('todo-list')

    expect(existedToDoItem).toBe(null)
})