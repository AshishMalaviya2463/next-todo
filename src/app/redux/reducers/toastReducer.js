import { toastActionTypes } from "@/app/constant"

const initialState = {
    message: "",
    type: null
}

export default function toastReducer(state = initialState, action) {
    switch (action.type) {
        case toastActionTypes.SUCCESS_TOAST:
            return {
                message: action.payload,
                type: "success"
            }
        case toastActionTypes.ERROR_TOAST:
            return {
                message: action.payload,
                type: "error"
            }
        case toastActionTypes.CLEAR_TOAST:
            return {
                message: "",
                type: null
            }
        default:
            return state
    }
}