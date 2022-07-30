import React from "react"
const Counter = ({ value, children }) => {
    console.log('Render: ', children)

    return (
        <div>
            {children}: {value}
        </div>
    )
}

export default React.memo(Counter)