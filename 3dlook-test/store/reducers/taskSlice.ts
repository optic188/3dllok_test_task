import { SAVE_TODO, DELETE_TODO, FETCH_TODO } from "../actionTypes";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { fetchTodoAsyncAction } from '../actions/todoActions';
import { HYDRATE } from "next-redux-wrapper";

const initialState:ITaskState = {
    todoList: [],
    loading: true,
};
interface ITaskState {
    todoList: ITodoItem[];
    loading: boolean;
}
export interface ITodoItem {
    completed: boolean,
    id: number
    title: string
    userId: number
}


// Task Slice
export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        markItemAsDone(state, action) {
            console.log(action)
            state.todoList = state.todoList.map((elem)=> {
                if(elem.id ===action.payload) {
                    elem.completed = true
                }
                return elem
            } )
        },
        removeItem(state, action) {
            state.todoList = state.todoList.filter((elem)=> elem.id !== action.payload ? true : false)
        }

        // Special reducer for hydrating the state. Special case for next-redux-wrapper
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoAsyncAction.pending, (state) => {
                 state.loading = true;
            })
            .addCase(fetchTodoAsyncAction.fulfilled, (state, action) => {
                return {
                    loading: false,
                    todoList: action.payload
                }
            })
            .addCase(fetchTodoAsyncAction.rejected, (state) => {
                 state.loading = false;
                 state.todoList = []
            })
    },
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload,
    //         };
    //     },
    // },
});

export const { markItemAsDone, removeItem } = taskSlice.actions;

export const selectTodoList = (state: AppState) => state.task.todoList;

export default taskSlice.reducer;
