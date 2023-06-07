'use client'

import React, { useEffect, useState } from 'react'
import TodoList from '../components/TodoList'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { authorizationHeaderToken } from '../constant';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, deleteTodoAction, editTodoAction, getAllTodoesAction } from '../redux/actions/todoAction';
import TextTransition, { presets } from 'react-text-transition';

const todos = () => {

    const [todo, setTodo] = useState("")
    const [listType, setListType] = useState(1)
    const [editTodo, setEditTodo] = useState({})
    const [index, setIndex] = React.useState(0);
    const router = useRouter()
    const dispatch = useDispatch()
    const { authDetails, todoesData } = useSelector(state => state)
    const TEXTS = ['Productivity', 'Organization', 'Efficiency', 'Focus', 'Clarity'];

    useEffect(() => {
        authDetails.isLoggedIn ?
            dispatch(getAllTodoesAction(authorizationHeaderToken(authDetails.token), router))
            :
            router.push("/login")
    }, [])

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, [])

    const addEditDisabled = todo.trim().length === 0 || (editTodo?.todo !== undefined && editTodo.todo === todo)

    const handleAddTodo = async () => {
        const todoData = {
            todo,
            status: false,
            userId: authDetails.user._id
        }

        dispatch(addTodoAction(todoData, authorizationHeaderToken(authDetails.token), router, setTodo))
    }

    const handleClickEdit = (data) => {
        setEditTodo(data)
        setTodo(data.todo)
    }

    const handleEditTodo = async () => {
        const clearEdit = () => {
            setTodo("")
            setEditTodo({})
        }
        dispatch(editTodoAction(editTodo._id, { todo }, authorizationHeaderToken(authDetails.token), router, clearEdit))
    }

    const handleStatusChange = async (todo) => {
        dispatch(editTodoAction(todo._id, { status: !todo.status }, authorizationHeaderToken(authDetails.token), router))
    }

    const handleClickDelete = async (data) => {
        dispatch(deleteTodoAction(data._id, authorizationHeaderToken(authDetails.token), router))
    }



    return (
        <div className='container'>
            <h1 className='m-0 p-0 mt-3 text-center'>Unlock Your <TextTransition className='d-inline-block m-0 changing_text' springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>    Potential with our TODO List!</h1>
            <div className="todo_container">
                <input type="text" className="form__field" placeholder="Enter TODO" value={todo} onChange={(e) => setTodo(e.target.value)} />
                {
                    editTodo?.todo !== undefined
                        ?
                        <>
                            <button type="button" className="send_btn btn--primary btn--inside uppercase" onClick={() => handleEditTodo()} disabled={addEditDisabled}>Update</button>
                            <button type="button" className="send_btn btn--primary uppercase ms-2" onClick={() => {
                                setEditTodo({})
                                setTodo("")
                            }}>Cancel</button>
                        </>
                        :
                        <button type="button" className="send_btn btn--primary btn--inside uppercase" onClick={() => handleAddTodo()} disabled={addEditDisabled}>Add</button>
                }

            </div>
            <div className='text-center mt-5'>
                <ButtonGroup>
                    <Button className={`mx-2 list_type_btn ${listType === 1 ? "active" : ""} btn--primary`} onClick={() => setListType(1)}>All</Button>
                    <Button className={`mx-2 list_type_btn ${listType === 2 ? "active" : ""} btn--primary`} onClick={() => setListType(2)}>Completed</Button>
                    <Button className={`mx-2 list_type_btn ${listType === 3 ? "active" : ""} btn--primary`} onClick={() => setListType(3)}>Pending</Button>
                </ButtonGroup>
            </div>
            <TodoList todoes={todoesData} handleStatusChange={handleStatusChange} listType={listType} onClickDelete={handleClickDelete} handleClickEdit={handleClickEdit} />
        </div>
    )
}

export default todos