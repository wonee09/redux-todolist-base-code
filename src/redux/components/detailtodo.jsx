import React from 'react'
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailTodo() {
    const paramId = useParams().id;
    const navigate = useNavigate();

    const todos = useSelector((state) => state.todos);
    const filteredTodo = todos.filter((item) => item.id === paramId)[0];

  return (
    <StDetail>
        <h3>TodoList 상세보기</h3>
        제목 : {filteredTodo.title}
        <br />
        내용 : {filteredTodo.content}
        <br />
        완료여부 : {filteredTodo.isDone.toString()}
        <br />
        <button onClick={() => {navigate(`/`)}}>홈페이지로 이동</button>
    </StDetail>
  )
}

export default DetailTodo;

const StDetail = styled.div`
  font-size: 20px;
  padding: 10px;
  border: 1px solid black;
  margin: 20px 50px 20px 50px;
`