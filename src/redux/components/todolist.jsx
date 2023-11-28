import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ListCard from './listcard';

function TodoList( { isAction } ) {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
  return (
    <StTodoListBox>
        <h4>{ isAction ? "Working" : "Finish"}</h4>
        {
            todos
            .filter((item) => item.isDone === !isAction)
            .map((item) => {
                return (
                    <ListCard key={item.id} item={item} isAction={isAction} dispatch={dispatch}/>
                )
            })
        }
    </StTodoListBox>
  )
}

export default TodoList;

const StTodoListBox = styled.div`
    border: 1px solid black;
    font-size: 20px;
    padding: 10px;
    margin: 20px 50px 20px 50px;
`