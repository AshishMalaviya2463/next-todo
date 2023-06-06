import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import DeleteModal from './DeleteModal';

const TodoList = ({ todoes, handleStatusChange, listType, onClickDelete, handleClickEdit }) => {

    const [todosData, setTodosData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [deleteTodoData, setDeleteTodoData] = useState({})

    const onClickDeleteModal = () => {
        onClickDelete(deleteTodoData)
        setShowModal(false)
    }

    useEffect(() => {
        if (todoes) {
            if (todoes.length > 0) {
                if (listType === 1) {
                    setTodosData(todoes)
                } else if (listType === 2) {
                    setTodosData(todoes.filter(data => data.status === true))
                } else if (listType === 3) {
                    setTodosData(todoes.filter(data => data.status === false))
                }
            } else {
                setTodosData([])
            }
        } else {
            setTodosData([])
        }
    }, [todoes, listType])

    return (
        <div className="datatable-container">
            {/* ======= Table ======= */}
            <table className="datatable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Status</th>
                        <th>Todo</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todosData && todosData?.length > 0 ?
                            todosData?.map(todo => (
                                <tr key={todo._id}>
                                    <td>
                                        <input type="checkbox" className='cursor-pointer' checked={todo.status} onChange={(e) => handleStatusChange(todo)} />
                                    </td>
                                    <td>
                                        {
                                            todo.status ?
                                                <Badge bg="success" className='fs-6'>Completed</Badge>
                                                :
                                                <Badge bg="warning" className='fs-6'>Pending</Badge>
                                        }
                                    </td>
                                    <td>{todo.todo}</td>
                                    <td>
                                        {new Date(todo.createdAt).toISOString().replace('-', '/').split('T')[0].replace('-', '/').split("/").reverse().join("/")}{" "}
                                        {new Date(todo.createdAt).toLocaleString('en-US', { hour: 'numeric', minute: "numeric", second: "numeric", hour12: true })}
                                    </td>
                                    <td>
                                        {new Date(todo.updatedAt).toISOString().replace('-', '/').split('T')[0].replace('-', '/').split("/").reverse().join("/")}{" "}
                                        {new Date(todo.updatedAt).toLocaleString('en-US', { hour: 'numeric', minute: "numeric", second: "numeric", hour12: true })}
                                    </td>
                                    <td className='d-flex justify-content-start align-items-center'>
                                        <Button variant="danger" className='me-2' onClick={() => {
                                            setDeleteTodoData(todo)
                                            setShowModal(true)
                                        }}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                        {todo.status || <Button variant="primary" onClick={() => handleClickEdit(todo)}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </Button>}
                                    </td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td colSpan={6} className="fs-6 text-center">
                                    No data available in this list
                                </td>
                            </tr>
                    }
                </tbody>
            </table>
            <DeleteModal showModal={showModal} onClickSure={onClickDeleteModal} setShowModal={setShowModal} />
        </div >

    )
}

export default TodoList