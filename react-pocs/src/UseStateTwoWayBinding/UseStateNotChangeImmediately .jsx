import react, { useState, useEffect } from 'react'
const BasicEffect = () => {
    const [age, setAge] = useState(0)
    const handleClick = () => {
        setAge(age + 1)
        console.log(age);
        document.getElementById('age').innerHTML = age;
        document.title = 'You are ' + age + ' years old!'
    }

    // useEffect(() => {
    //     document.title = 'You are ' + age + ' years old!'
    // })

    return <div>
        <div id='age'></div>
        <p> Look at the title of the current tab in your browser {age} </p>
        <button onClick={handleClick}>Update Title!! </button>
    </div>
}

export default BasicEffect;