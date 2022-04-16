const initState = {
  todos: [],
};

// var updateTodo = (todos, value, id) => {
//     for(let i = 0; i < todos.length; i++)
//     {
//         if()
//     }
// }

const reducerTodo = (state = initState, action) => {
  switch (action.type) {
    case "add_todo":
      const todo_add = {
        value: action.payload.value,
        id: action.payload.id,
      };
      return {
        ...state,
        todos: [...state.todos, todo_add],
      };
    case "edit_todo": // tu tu oke
    //   const todo_edit = state.todos.findIndex(action.payload.id);
    //   const newTodos_edit = state.todos.map((todo, index) => {
    //     return todo.id === action.payload.id ? todo.value = action.payload.value : todo;
    //   });
      const newTodos_edit = [];
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.payload.id) {
            newTodos_edit.push({value: action.payload.value, id: action.payload.id});
        } else {
            newTodos_edit.push(state.todos[i]);
        }
      }
      return {
        ...state,
        todos: newTodos_edit,
      };
    case "delete_todo": // xoa truoc
      const newTodos_delete = [];
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.payload) {
        } else {
          newTodos_delete.push(state.todos[i]);
        }
      }
      return {
        ...state,
        todos: newTodos_delete,
      };
    default:
      return state;
  }
  //return state
};

export default reducerTodo;
