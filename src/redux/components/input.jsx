import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addTodo } from '../modules/todos';

function Input() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const SubmitBtnClickHandler = (e) => {
        e.preventDefault();

        const newTodo = {
              id: shortid.generate(),
              title,
              content,
              isDone: false,
            }
        dispatch(addTodo(newTodo));
    }

    const TitleInputChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const ContentInputChangeHandler = (event) => {
        setContent(event.target.value);
    }
  return (
    <StInputBox>
        <form onSubmit={SubmitBtnClickHandler}>
            <input value={title} type='test' onChange={TitleInputChangeHandler}/>
            <input value={content} type='test' onChange={ContentInputChangeHandler}/>
            <button type='submit'>추가</button>
        </form>
    </StInputBox>
  )
}

export default Input;

const StInputBox = styled.div`
    border: 1px solid black;
    font-size: 20px;
    padding: 20px;
`