import { todoActiontypes } from "@/app/constant"

const initialState = []

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case todoActiontypes.GET_ALL_TODOES:
            return action.payload
        default:
            return state
    }
}