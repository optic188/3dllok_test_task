import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {AppThunk} from "../store";
import {markItemAsDone, removeItem} from "../reducers/taskSlice";


export const fetchTodoAsyncAction = createAsyncThunk(
    'todo/fetchTodo',
    async (userId?:string) => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos', { params:{userId}})
        // The value we return becomes the `fulfilled` action payload
        return data.data;
    }
);
export const markAsDoneAction =
    (taskId: number): AppThunk =>
        (dispatch, getState) => {
            dispatch(markItemAsDone(taskId));
        };
export const removeItemAction =
    (taskId: number): AppThunk =>
        (dispatch, getState) => {
            dispatch(removeItem(taskId));
        };
