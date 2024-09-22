/* 
how to configure store?
*/ 

import { configureStore } from '@reduxjs/toolkit';
import todoRecuder from '../features/todo/todoSlice.js';

export const store = configureStore({
  reducer: todoRecuder
})