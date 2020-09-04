//initial state
const initialState = { user:{}, numberOfDogs: 3, name: 'henry' }
//action type - like destination?
const SET_USER_SESSION = "SET_USER_SESSION"
//action builder - type and payload
export function setUserSession(data){
    return {
        type: SET_USER_SESSION,
        payload: data
    }
}
//reducer
export default function reducer (state = initialState, action) {
    switch(action.type){
        case SET_USER_SESSION: 
            return {...state, user: action.payload}
        default: return state
    }
}