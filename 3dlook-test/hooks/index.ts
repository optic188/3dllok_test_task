import {useDispatch} from "react-redux";
import { markAsDoneAction, removeItemAction, fetchTodoAsyncAction } from '../store/actions/todoActions';

export const useTaskActions = ()=> {
    const dispatch = useDispatch();
    return {
        finishTask:(taskId)=>dispatch(markAsDoneAction(taskId)),
        removeTask: (taskId) => dispatch(removeItemAction(taskId)),
        fetchTodoAsyncAction: ()=>dispatch(fetchTodoAsyncAction())
    }
}