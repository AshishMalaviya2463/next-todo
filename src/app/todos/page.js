'use client'

import React, { useEffect, useState } from 'react'
import TodoList from '../components/TodoList'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import { authorizationHeaderToken } from '../constant';
import { useRouter } from 'next/navigation';

const page = () => {

    const [todo, setTodo] = useState("")
    const [todoesData, setTodoesData] = useState([])
    const [listType, setListType] = useState(1)
    const [editTodo, setEditTodo] = useState({})
    const router = useRouter()

    useEffect(() => {
        axios.get("/api/todos", authorizationHeaderToken)
            .then(res => {
                if (res.status === 200) {
                    setTodoesData(res.data.data)
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    localStorage.removeItem("token")
                    alert("Token expired. Please refresh the page and log in again.")
                    router.push("/login")
                }
            })
    }, [])

    const addEditDisabled = todo.trim().length === 0 || (editTodo?.todo !== undefined && editTodo.todo === todo)

    const handleAddTodo = async () => {
        const todoData = {
            todo,
            status: false
        }

        await axios.post("/api/todos", todoData, authorizationHeaderToken)
            .then(res => {
                if (res.status === 200) {
                    setTodoesData(res.data.data)
                    setTodo("")
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    localStorage.removeItem("token")
                    alert("Token expired. Please refresh the page and log in again.")
                    router.push("/login")
                }
            })
    }

    const handleClickEdit = (data) => {
        setEditTodo(data)
        setTodo(data.todo)
    }

    const handleEditTodo = async () => {
        await axios.post(`/api/todos/${editTodo._id}`, { todo }, authorizationHeaderToken)
            .then(res => {
                if (res.status === 200) {
                    setTodoesData(res.data.data)
                    setTodo("")
                    setEditTodo({})
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    localStorage.removeItem("token")
                    alert("Token expired. Please refresh the page and log in again.")
                    router.push("/login")
                }
            })
    }

    const handleStatusChange = async (todo) => {
        await axios.post(`/api/todos/${todo._id}`, { status: !todo.status }, authorizationHeaderToken)
            .then(res => {
                if (res.status === 200) {
                    setTodoesData(res.data.data)
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    localStorage.removeItem("token")
                    alert("Token expired. Please refresh the page and log in again.")
                    router.push("/login")
                }
            })
    }

    const handleClickDelete = async (data) => {
        await axios.delete(`/api/todos/${data._id}`, authorizationHeaderToken)
            .then(res => {
                if (res.status === 200) {
                    setTodoesData(res.data.data)
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    localStorage.removeItem("token")
                    alert("Token expired. Please refresh the page and log in again.")
                    router.push("/login")
                }
            })
    }

    return (
        <>
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
        </>
    )
}

export default page