import React, { useCallback } from "react"
import Age from "./Age"
import Salary from "./Salary"

const ReactCallback = () => {
    const [age, setAge] = React.useState(0)
    const [salary, setSalary] = React.useState(0)

    const IncreaseAge = useCallback(() => {
        setAge(age => age + 1)
    }, [age])
    const IncreaseSalary = useCallback(() => {
        setSalary(salary => salary + 1)
    }, [salary])


    return (
        <>
            <span>Age: {age}</span>
            {/* <button onClick={increaseCounter1}>Increase counter 1</button> */}
            <Age IncreaseAge={IncreaseAge} >Age</Age>
            <span>Salary:{salary}</span>
            <Salary IncreaseSalary={IncreaseSalary} >Salary</Salary>
            {/* <button onClick={increaseCounter2}>Increase counter 2</button> */}
        </>)
}
export default ReactCallback;