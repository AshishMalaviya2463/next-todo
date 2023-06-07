import { authActionTypes } from "@/app/constant"

const initialState = {
    token: null,
    isLoggedIn: false,
    user: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authActionTypes.USER_LOGIN:
            return {
                ...action.payload,
                isLoggedIn: true
            }
        case authActionTypes.REMOVE_TOKEN:
            return {
                token: null,
                isLoggedIn: false,
                user: null
            }
        default:
            return state
    }
}