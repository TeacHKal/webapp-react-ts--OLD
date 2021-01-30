import React from 'react';
import './index.scss';
import {useDispatch} from "react-redux";
import {increase} from "../../features/counter/actions";
import {addTodo, loadTodosAsync, pingPong} from "../../features/todos/actions";
interface IProps {}

export const Test: React.FC<IProps> = () => {
    const dispatch = useDispatch();

    //dispatch(addTodo('New Task' ));

    const onBtnClick = () => {
        //dispatch(pingPong('New Task' ));
        dispatch(pingPong('lalal'));
        //dispatch(loadTodosAsync.request);
    }
    return(
        <div className={'test_con'}>
            <p>TEST SCREEN</p>
            <button onClick={() => onBtnClick()}>Button</button>
        </div>
    );
}