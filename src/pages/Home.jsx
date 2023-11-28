import React from "react";
import Input from "../redux/components/input";
import TodoList from "../redux/components/todolist";

const Home = () => {
  return <>
    <Input />
    <TodoList isAction={true}/>
    <TodoList isAction={false}/>
  </>;
};

export default Home;
