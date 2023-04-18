import React, { useState, useEffect, createContext } from 'react'

import { useTodo } from '../hooks'
import { updateLocalStorage } from '../Utils/localStorage.utils'

export const TodosContext = createContext(null)

const localStorageTodos = JSON.parse(window.localStorage.getItem('todos')) || []

function TodoContextProvider ({ children }) {
  const [todos, setTodos] = useState(localStorageTodos)

  const { getAllTodo } = useTodo()

  const updateTodos = (todosArray) => {
    setTodos(todosArray)
  }

  const getTodoOfUser = async () => {
    const { data } = await getAllTodo()
    updateTodos(data.todo)
    updateLocalStorage('todos', data.todo)
  }

  useEffect(() => {
    getTodoOfUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TodosContext.Provider value={{ updateTodos, todos, getTodoOfUser }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodoContextProvider
