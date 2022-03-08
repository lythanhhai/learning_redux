const initState = {
    todos: []
}

const reducer = (state =initState, action) => {
    switch(action.type)
    {
        case "add_todo":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
    //return state
}

export default reducer
