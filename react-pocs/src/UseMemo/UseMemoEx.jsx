import React, { useState, useMemo } from 'react';

function UseMemoEx() {
    const [counter, setcounter] = useState(0);
    const [title, settitle] = useState('UseMemo');

    const multipliedCounter = useMemo(() => {
        console.log('useMemo', counter + 100)
        return counter + 100
    }, [counter])


    const changeTitle = () => { settitle('UseMemo example') }

    return (
        <div>
            <p>Title : {title}</p>
            <p>Counter: {multipliedCounter}</p>
            <button onClick={() => setcounter(counter + 1)}>+ Counter</button>
            <button onClick={() => setcounter(counter - 1)}>- Counter</button>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    )
}

export default UseMemoEx;

