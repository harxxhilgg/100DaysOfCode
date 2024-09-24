import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice.js'

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()

    // dispatcher uses reducer and changes value in store.

    dispatch(addTodo(input))
    setInput('') 
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 p-3 text-center">
      <input 
        type='text'
        className='bg-gray-900 outline-none p-3 text-white rounded-lg w-2/3 focus:outline-white'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
      <button
        type='submit'
        className='ml-5 bg-gray-900 p-3 duration-200 outline-none border-2 border-gray-900 rounded-[5rem] text-white hover:border-solid hover:border-2 hover:border-white focus:outline-white'

      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
