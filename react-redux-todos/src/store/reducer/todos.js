export default function todosReducer (state = [], action) {
    switch(action.type) {
        case 'addTodo':
            return [
                ...state,
                {
                    id: Date.now(),
                    todo: action.payload.todo,
                    completed: false,
                }
            ]
        case 'changeCompletedById':
            state.forEach(item => {
                if (item.id === action.payload.id) {
                    item.completed = action.payload.completed
                }
            }) 
            return [...state]  
        case 'changeAllCompleted': {
            state.forEach(item => {
                item.completed = action.payload.completed
            })
            return [...state]
        }
        case 'deleteTodoById':
            return state.filter(item => item.id !== action.payload.id)
        case 'clearCompleted':
            return state.filter(item => !item.completed)
        case 'editTodoById':
            state.forEach(item => {
                if (item.id === action.payload.id) {
                    item.todo = action.payload.todo
                }
            })
            return [...state]    
        default:
            return state    
    }
}