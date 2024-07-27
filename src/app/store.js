// redux imports
import { configureStore } from "@reduxjs/toolkit";
// todoSlice imports
import todosReducer from "../features/counter/todoSlice";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
