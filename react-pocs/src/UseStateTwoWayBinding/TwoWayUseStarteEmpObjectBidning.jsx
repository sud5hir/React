import React, { useState } from "react";

export default function TwoWayUseStarteEmpObjectBidning() {

    const [employee, setEmployeeData] = useState(
        { Id: '', Name: '' }
    );

    const [employees, setEmployeeDatas] = useState([]);

    const changeEmployeeInfo = (e) => {
        setEmployeeData(prevstate => (
            { ...prevstate, [e.target.name]: e.target.value })
        );
    }
    const prepareEmployeeInfos = () => {
        setEmployeeDatas(prevstate => (
            [...prevstate, employee]
        ));
        console.log(employees);
        setEmployeeData(prevstate => ({
            ...prevstate, Id: '', Name: ''
        }));
    }
    
    return (

        <div>

            <h2>Welcome to Employee Component...</h2>
            <p>
                <label>Employee ID :
                    <input type="text" name="Id" value={employee.Id}
                        onChange={changeEmployeeInfo}></input>
                </label>
            </p>

            <p>
                <label>Employee Name :
                    <input type="text" name="Name" value={employee.Name}
                        onChange={changeEmployeeInfo}></input>
                </label>
            </p>

            <p>
                Employee ID is : <b>{employee.Id}</b>, Name is : <b>{employee.Name}</b> ,

            </p>
            <p>
                <input type="submit" value="Submit" onClick={prepareEmployeeInfos}></input>
            </p>
            {/* <SalaryComponent salary={employee.Salary} onSalaryChange={changeEmployeeInfo}></SalaryComponent> */}
            <div>
                <table>
                    <tr>
                        <td>id: </td>
                        <td>name</td>
                    </tr>
                    {employees.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Id}</td>
                            <td>{item.Name}</td>
                        </tr>
                    ))}
                </table>



            </div>

        </div>




    )
}