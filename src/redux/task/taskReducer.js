import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './taskTypes';

const initialState = {
    tasks:[
        {id: "1", title: "running", completed:false},
        {id: "4", title: "meditation", completed:false},
        {id: "3", title: "Give water to plants", completed:false},
        {id: "5", title: "read for 15 minutes", completed:false},
    ]
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