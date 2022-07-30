import React from "react"
const Salary = ({ IncreaseSalary, children }) => {
    console.log('Render: ', children)
    return (
        <div>
            <button onClick={() => IncreaseSalary()}>Salary</button>
        </div>
    )
}

export default React.memo(Salary)