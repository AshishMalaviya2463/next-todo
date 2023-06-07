import { todoActiontypes } from "@/app/constant"
import axios from "axios"
import { removeTokenAction } from "./authAction"
import { successToastAction } from "./toastAction"

export const getAllTodoesAction = (token, router) => async (dispatch) => {
    await axios.get("/api/todos", token)
        .then(res => {
            if (res.status === 200) {
                dispatch({ type: todoActiontypes.GET_ALL_TODOES, payload: res.data.data })
            }
        })
        .catch(err => {
            if (err.response.status === 401) {
                dispatch(removeTokenAction(router))
            }
        })
}

export const addTodoAction = (todoData, token, router, setTodo) => async (dispatch) => {
    await axios.post("/api/todos", todoData, token)
        .then(res => {
            if (res.status === 200) {
                dispatch({ type: todoActiontypes.GET_ALL_TODOES, payload: res.data.data })
                dispatch(successToastAction("TODO Created Successfull."))
                setTodo("")
            }
        })
        .catch(err => {
            if (err.response.status === 401) {
                dispatch(removeTokenAction(router))
            }
        })
}

export const editTodoAction = (id, data, token, router, clearEdit) => async (dispatch) => {
    await axios.post(`/api/todos/${id}`, data, token)
        .then(res => {
            if (res.status === 200) {
                dispatch({ type: todoActiontypes.GET_ALL_TODOES, payload: res.data.data })
                clearEdit && clearEdit()
                clearEdit ?
                    dispatch(successToastAction("TODO Updated Successfull."))
                    :
                    dispatch(successToastAction("Status Updated Successfull."))
            }
        })
        .catch(err => {
            if (err.response.status === 401) {
                dispatch(removeTokenAction(router))
            }
        })
}

export const deleteTodoAction = (id, token, router) => async (dispatch) => {
    await axios.delete(`/api/todos/${id}`, token)
        .then(res => {
            if (res.status === 200) {
                dispatch({ type: todoActiontypes.GET_ALL_TODOES, payload: res.data.data })
                dispatch(successToastAction("TODO Deleted Successfull."))
            }
        })
        .catch(err => {
            if (err.response.status === 401) {
                dispatch(removeTokenAction(router))
            }
        })
}