const initialState = {
    text: "Clean Hands",
}

const todoList = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return Object.assign({}, state, {todos:
                [...state.todos, {
                    text: action.text
                }]
            })
    }
    return state;
}

export default todoList;