import react from 'react';

export default function ButtonComponent(props) {

    const clickHander = () => {
        props.clickHander("Submit Button")
    }

    return (
        <div>
            <h1>{props.buttonName}</h1>
            <input type='Submit' onClick={clickHander} value={props.buttonName} ></input>
        </div>
    )
}