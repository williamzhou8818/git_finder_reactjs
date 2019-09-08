import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducdr from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../type';


const AlertState = prop => {

    const  initialState = null;

    const [state, dispatch] = useReducer(AlertReducdr, initialState);

    // SET Alert

    const setAlert = (msg, type) => {

        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        });
        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
    };

    return <AlertContext.Provider 
        value={{
            alert: state,
            setAlert
        }}
    >
        {prop.children}
    </AlertContext.Provider>
}

export default AlertState;