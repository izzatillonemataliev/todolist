// redux imports
import { createSlice } from "@reduxjs/toolkit";

// react toastify
import toast from "react-hot-toast";

const initialStateFromLocal = () => {
  return (
    JSON.parse(localStorage.getItem("todos")) || {
      todos: [],
      completedCount: 0,
      unCompletedCount: 0,
    }
  );
};
export const todoSlice = createSlice({
  name: "todos",
  initialState: initialStateFromLocal,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
      todoSlice.caseReducers.calculateTotal(state);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
      toast.success("Deleted TODO List");
      todoSlice.caseReducers.calculateTotal(state);
    },
    changeStatusTodo: (state, { payload }) => {
      const item = state.todos.find((todo) => todo.id == payload);
      item.completed = !item.completed;
      todoSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      localStorage.setItem("todos", JSON.stringify(state));
      let done = 0;
      let notDone = 0;

      state.todos.forEach((todo) => {
        if (todo.completed) {
          done += 1;
        } else {
          notDone += 1;
        }
      });
      state.completedCount = done;
      state.unCompletedCount = notDone;
    },
  },
});

export const { addTodo, removeTodo, changeStatusTodo } = todoSlice.actions;
export default todoSlice.reducer;
