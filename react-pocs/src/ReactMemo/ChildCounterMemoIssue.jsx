import React from "react"
const ChildCounterMemoIssue = ({ increaseCounter3, value, children }) => {
    console.log('Render: ', children)

    return (
        <div>
            <button onClick={() => increaseCounter3()}>
                {children}: {value}
            </button>
        </div>
    )
}

export default React.memo(ChildCounterMemoIssue)
