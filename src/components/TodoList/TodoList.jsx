import { useContext } from 'react'
import { TodosContext } from '../../context/TodoContext'
import Todo from '../Todo/Todo'
import './styles.css'

function TodoList () {
  const { todos } = useContext(TodosContext)

  return (
    <div>
      <h2>TODO LIST</h2>
      <div className='todos_container'>
        {
        todos.length > 0 && todos.map(todo => {
          return (
            <Todo key={todo._id} id={todo._id} topic={todo.topic} details={todo.details} />
          )
        })
        }
      </div>
    </div>
  )
}

export default TodoList
