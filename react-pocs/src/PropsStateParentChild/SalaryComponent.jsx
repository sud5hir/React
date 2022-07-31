import React from 'react';

//it is resualable component

export default class SalaryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basic: this.props.BasicSalary,
            hra: this.props.HRA,
            sa: this.props.SpecialAllowance
        };
    }

    updateSalary = () => {
        let salary = parseInt(this.refs.BasicSalary.value) + parseInt(this.refs.HRA.value) + parseInt(this.refs.SpecialAllowance.value);
        this.props.onSalaryChanged(salary);
    }

    render() {
        return <div>
            <h1>Salary Details...</h1>
            <p>
                <label>Basic Salary : <b>{this.props.BasicSalary}</b></label>
            </p>
            <p>
                <label>HRA : <b>{this.props.HRA}</b></label>
            </p>
            <p>
                <label>Special Allowance : <b>{this.props.SpecialAllowance}</b></label>
            </p>
            <br></br>
            <p>
                <label>Basic Salary :<input type="text" defaultValue={this.state.basic} ref="BasicSalary" /></label>
            </p>
            <p>
                <label>HRA : <input type="text" defaultValue={this.state.hra} ref="HRA" /></label>
            </p>
            <p>
                <label>Special Allowance : <input type="text" defaultValue={this.state.sa} ref="SpecialAllowance" /></label>
            </p>
            <button onClick={this.updateSalary}>Update</button>
        </div>
    }
}


