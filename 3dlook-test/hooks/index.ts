import {useDispatch} from "react-redux";
import { markAsDoneAction, removeItemAction, fetchTodoAsyncAction } from '../store/actions/todoActions';

export const useTaskActions = ()=> {
    const dispatch = useDispatch();
    return {
        finishTask:(taskId:number )=>dispatch(markAsDoneAction(taskId)),
        removeTask: (taskId:number ) => dispatch(removeItemAction(taskId)),
        fetchTodoAsyncAction: (userId:string )=>dispatch(fetchTodoAsyncAction(userId))
    }
}