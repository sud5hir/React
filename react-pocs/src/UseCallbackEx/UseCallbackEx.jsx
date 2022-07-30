import React, { useState, useMemo, useCallback } from 'react';
import LifeCycleCounterChildComponent from './LifeCycleCompnent/LifeCycleCounterChildComponent';

function UseCallbackEx() {
    const [title, settitle] = useState('UseCallback');
    const [data, setData] = useState('hello world');

    const changeTitle = useCallback(
        () => {
            settitle('UseCallbac Example')
        },
        [title],
    )

    const changeData = () => {
        setData('hi');
    }

    return (
        <div>
            <p>Title : {title}</p>
            <LifeCycleCounterChildComponent title={title} data={data} />
            <button onClick={changeTitle}>Change Title</button>
            <button onClick={changeData}>Change Data</button>
        </div>
    )
}

export default UseCallbackEx;
