import { createStore } from 'redux'
import deepFreeze from 'deep-freeze'

const noteReducer = (state = [], action) => {
    if(action.type === 'new_note'){
        return state.concat(action.data)
    }
    return state
}

const store = createStore(noteReducer)
deepFreeze(state)

export { store }