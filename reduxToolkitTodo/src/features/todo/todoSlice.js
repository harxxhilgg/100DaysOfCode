// nonoid - generates unique id's.

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{id: 1, text: 'hello world!'}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
    /* 
      we'll get two thing form here, state and action
      state - access of initialState, at line 5
      action - like we wanted to change something using id, then id we'll get from action
    */

    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), 
        text: action.payload
      }
      state.todos.push(todo)
    }, 
    
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer