import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./taskTypes"

export const addTask = (task)=> {
    return {
        type:ADD_TASK,
        payload: task
    }
}

export const editTask = (task) =>{
    return {
        type: EDIT_TASK,
        payload: task
    }
}

export const deleteTask = (taskId) =>{
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}