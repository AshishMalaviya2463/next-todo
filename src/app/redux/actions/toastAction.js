import { toastActionTypes } from "@/app/constant"

export const clearToastAction = () => (dispatch) => {
    dispatch({ type: toastActionTypes.CLEAR_TOAST })
}

export const successToastAction = (message) => (dispatch) => {
    dispatch({ type: toastActionTypes.SUCCESS_TOAST, payload: message })
    // setTimeout(() => {
    //     dispatch(clearToastAction())
    // }, 3000)
}

export const errorToastAction = (message) => (dispatch) => {
    dispatch({ type: toastActionTypes.ERROR_TOAST, payload: message })
    // setTimeout(() => {
    //     dispatch(clearToastAction())
    // }, 3000)
}