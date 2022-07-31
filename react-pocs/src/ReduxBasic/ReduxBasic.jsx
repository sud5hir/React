//import react from 'react';
//import { createStore } from 'redux';
const redux = require('redux');

function ReduxBasic() {

    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';

    const employeeData = {
        salary: 15000
    };

    const reducer = (state = employeeData, action) => {
        switch (action.type) {
            case INCREMENT:
                return { salary: state.salary + 1000 };
            case DECREMENT:
                return { salary: state.salary - 1000 };
            default:
                return state;
        }
    }

    const Increment = () => {
        store.dispatch({ type: INCREMENT });
        console.log(store.getState().salary);
    };

    const Decrement = () => {
        store.dispatch({ type: DECREMENT });
        console.log(store.getState().salary);
    }

    const store = redux.createStore(reducer);

    return (
        <div>
            {employeeData.salary}
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>

    );
}

export default ReduxBasic;