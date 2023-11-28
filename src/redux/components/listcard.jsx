import React from 'react'
import styled from 'styled-components'
import { switchTodo, deleteTodo } from '../modules/todos';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ListCard({ item, isAction, dispatch }) {
    const todos = useSelector((state) => state.todos);
    const navigate = useNavigate();

    const SwitchBtnClickHandler = (id) => {
        dispatch(switchTodo(id))
    }

    const DeleteBtnClickHandler = (id) => {
        dispatch(deleteTodo(id))
    }
  return (
    <StTodoBox key={item.id}>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        <button onClick={() => {SwitchBtnClickHandler(item.id)}}>{ isAction ? "완료" : "취소" }</button>
        <button onClick={() => {DeleteBtnClickHandler(item.id)}}>삭제</button>
        <br/>
        <button onClick={() => {navigate(`/${item.id}`)}}>상세페이지로 이동</button>
    </StTodoBox>
  )
}

export default ListCard;

const StTodoBox = styled.div`
    background-color: yellow;
    padding: 10px;
    margin: 5px;
`