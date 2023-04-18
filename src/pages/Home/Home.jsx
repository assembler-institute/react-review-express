import { useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTodo, useUser } from '../../hooks'
import { TodosContext } from '../../context/TodoContext'

import './styles.css'
import { TodoList } from '../../components'

function Home () {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { addTodo } = useTodo()
  const { checkUser } = useUser()
  const { getTodoOfUser } = useContext(TodosContext)

  useEffect(() => {
    if (!JSON.parse(window.localStorage.getItem('user'))) {
      checkUser().then((data) => {
        if (data.msg === 'Exists') {
          window.localStorage.setItem('user', 'true')
          window.localStorage.setItem('userID', data.id)
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (data) => {
    await addTodo(data)
    getTodoOfUser()
    reset()
  }
  return (
    <div className='home_container'>
      <h1>React TODO List</h1>

      <div className=''>
        <h2>ADD TODO</h2>
        <form className='form_container' onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Add topic ' {...register('topic', { required: 'The topic is requerid', minLength: 5 })} />
          <p className={`error_message ${errors.topic && 'show'}`}>Error</p>
          {/* {errors && errors.topic && <p className='error_message'>{errors.topic.message}</p>} */}
          <input placeholder='Add Details' {...register('details', { required: 'The details is requerid', minLength: 10 })} />
          <p className={`error_message ${errors.details && 'show'}`}>Error</p>
          {/* {errors && errors.details && <p className='error_message'>{errors.details.message}</p>} */}
          <button type='submit'>Submit</button>
        </form>
      </div>
      <TodoList />

    </div>
  )
}

export default Home
