// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
}
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
}
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
}

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    content: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; //TODO: 여기 작성

    case "DELETE_TODO":
      return state.filter(item => item.id !== action.payload); //TODO: 여기 작성

    case "SWITCH_TODO":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {...item, isDone : !item.isDone};
        } else {
          return item;
        }
      }); //TODO: 여기 작성
    default:
      return state;
  }
};

export default todos;
