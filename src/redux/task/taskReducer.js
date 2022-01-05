import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './taskTypes';

const initialState = {
    tasks:[]
}

const taskReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_TASK: return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
        case DELETE_TASK: return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload)
        }
        case EDIT_TASK: return {
            ...state,
            tasks: state.tasks.map(task => {
                if(task.id === action.payload.id){
                   return task = {...task, ...action.payload }
                }
                return task;
            } )
        }
        default: return state;
    }
}

export default taskReducer;