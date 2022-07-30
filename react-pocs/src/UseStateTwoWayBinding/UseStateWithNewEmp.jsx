import react, { useState } from 'react';

export default function UseStateWithNewEmp() {

    const [name, setName] = useState("sudhir")

    const testChangeName = (e) => {
        setName(e.target.value);
      
    }

    return (

        <div>

            <h2>Welcome to New Employee Component...</h2>

            <p>

                <label>Employee Name :

                    <input type="text" value={name}

                        onChange={testChangeName}></input>

                </label>

            </p>

            <p>

                Entered Name is : <b>{name}</b>

            </p>

        </div>

    )
}
