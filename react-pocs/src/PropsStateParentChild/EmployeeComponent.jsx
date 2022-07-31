import React from 'react';
import SalaryComponent from './SalaryComponent';

export default class EmployeeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { updatedSalary: 0 };
    }

    getUpdatedSalary = (salary) => {
        this.setState({ updatedSalary: salary });
        document.getElementById('age').innerHTML = this.state.updatedSalary;
        document.title = 'You are ' + this.state.updatedSalary + ' years old!'
    }

    render() {
        return <div>

            <h1>Employee Component...</h1>
            <br></br>
            <div id='age'>Age:</div>
            <br></br>
            <p>
                <label>Id : <b>{this.props.Id}</b></label>
            </p>
            <p>
                <label>Name : <b>{this.props.Name}</b></label>
            </p>
            <p>
                <label>Location : <b>{this.props.Location}</b></label>
            </p>
            <p>
                <label>Total Salary : <b>{this.props.Salary}</b></label>
            </p>

            <br></br>

            <p>
                <label>Updated Salary : <b>{this.state.updatedSalary}</b></label>
            </p>

            <SalaryComponent BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></SalaryComponent>
        </div>
    }
}
