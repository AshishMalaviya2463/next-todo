export const authorizationHeaderToken = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export const authActionTypes = {
    USER_LOGIN: "USER_LOGIN",
    REMOVE_TOKEN: "REMOVE_TOKEN"
}

export const todoActiontypes = {
    GET_ALL_TODOES: "GET_ALL_TODOES"
}

export const toastActionTypes = {
    ERROR_TOAST: "ERROR_TOAST",
    SUCCESS_TOAST: "SUCCESS_TOAST",
    CLEAR_TOAST: "CLEAR_TOAST"
}