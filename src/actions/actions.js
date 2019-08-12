const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text: text
    }
};

export {
    addTodo
};