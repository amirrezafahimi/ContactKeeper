import React, {useReducer} from 'react';
import {v4} from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import {
    SET_ALERT,
    REMOVE_ALERT
} from "../types";

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // set alert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = v4();
        dispatch({type: SET_ALERT, payload: {msg, type, id}});

        setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}>

        </AlertContext.Provider>
    );
};

export default AlertState;