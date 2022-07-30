import React from "react"
const Age = ({ IncreaseAge, children }) => {
    console.log('Render: ', children)
    return (
        <div>
            <button onClick={() => IncreaseAge()}>Age</button>
        </div>
    )
}

export default React.memo(Age)