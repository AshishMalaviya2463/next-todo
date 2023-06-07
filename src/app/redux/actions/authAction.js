import { authActionTypes } from "@/app/constant"
import axios from "axios"
import { errorToastAction, successToastAction } from "./toastAction"

export const registrationAction = (data, router, clearStateData) => async (dispatch) => {
    await axios.post("/api/registration", data)
        .then(data => {
            if (data.status === 201) {
                router.push("/login")
                clearStateData()
                setTimeout(() => dispatch(successToastAction("Registration Sccessfull.")), 1000)
            }
        })
        .catch(err => {
            setTimeout(() => dispatch(errorToastAction(err.response.data.message)), 1000)
        })
}

export const loginAction = (userData, router) => async (dispatch) => {
    await axios.post("/api/login", userData)
        .then(data => {
            if (data.status === 200) {
                dispatch({ type: authActionTypes.USER_LOGIN, payload: { token: data.data.token, user: data.data.user } })
                router.push("/todos")
                setTimeout(() => dispatch(successToastAction(data.data.message)), 1000)
            }
        })
        .catch(err => dispatch(errorToastAction(err.response.data.message)))
}


export const logOutAction = () => (dispatch) => {
    dispatch({ type: authActionTypes.REMOVE_TOKEN })
    setTimeout(() => dispatch(successToastAction("Log Out Successfull.")), 1000)

}

export const removeTokenAction = (router) => (dispatch) => {
    dispatch({ type: authActionTypes.REMOVE_TOKEN })
    router.push("/login")
    setTimeout(() => dispatch(errorToastAction("Token expired. Please refresh the page and log in again.")), 1000)

}