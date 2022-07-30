
import react, { useState, useEffect } from 'react';

export default function TestUseStateMultiple() {

    const [counter, setCounter] = useState(20);
    const [name, setName] = useState("sudhir");
    const [array, setArray] = useState(['usd', 'eur', 'inr']);
    const [object, setObject] = useState({ name: 'sudhir', id: 1 });
    let [emptyObject, setEmptyObject] = useState({});
    let textInput = react.createRef();
    const arrorwSetCounter = () => {
        setCounter(counter + 1);
    };

    const arrorwSetName = (e) => {
        setName(e.target.value);
    };

    const arrowSetArray = () => {
        setArray(array.fill("jpy"))
    };

    const arrowSetObject = (e) => {
        setObject({ ...object, [e.target.name]: e.target.value })
    }

    const arrowSetEmptyObject = () => {

        setEmptyObject(textInput.current.value);
    }

    useEffect(
        () => {
            console.log(emptyObject)
        }
    );

    return (
        <div>
            <h6>{counter}</h6>
            <input type="Submit" value="counter" onClick={arrorwSetCounter}></input>
            <h6>{name}</h6>
            <input type="text" onChange={arrorwSetName}></input>
            <br></br>
            <select>
                {array.map(item => (
                    <option key={item}>{item}
                    </option>
                ))}
            </select>

            <input type="Submit" value="RefreshArray" onClick={arrowSetArray}></input>
            <h6>{object.name}</h6>

            <br></br>
            <input type="text" name="name" onChange={arrowSetObject}></input>

            <h6>{object.id}</h6>
            <input type="text" name="id" onChange={arrowSetObject}></input>
            <br></br>

            <input ref={textInput} placeholder="Type a message..." />
            <input type="Submit" onClick={arrowSetEmptyObject}></input>

            <br></br>

        </div>
    )

}