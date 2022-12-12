import {useDispatch} from "react-redux";
import { markItemAsDone , ITodoItem, } from '../store/reducers/taskSlice';
import { AppThunk } from '../store/store';
import { markAsDoneAction, removeItemAction, fetchTodoAsyncAction } from '../store/actions/todoActions';

export const useTaskActions = ()=> {
    const dispatch = useDispatch();
    return {
        finishTask:(taskId)=>dispatch(markAsDoneAction(taskId)),
        removeTask: (taskId) => dispatch(removeItemAction(taskId)),
        fetchTodoAsyncAction: ()=>dispatch(fetchTodoAsyncAction())
    }
}