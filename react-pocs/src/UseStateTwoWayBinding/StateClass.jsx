import React from 'react';
class StateClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.name);
        this.state = { count: 50 };
    }

    ChangeTime1 = () => {
        this.setState({ count: this.state.count + 1 });
        document.getElementById("abc1").innerHTML = "after update :" + `${this.state.count}`;
    }

    ChangeTime = () => {
        this.setState((prevState, props) => { return { count: prevState.count + 1 } }
        )
    }

    render() {
        return (
            <>
                <div id="abc1"></div>
                <h1> {this.state.count} </h1>
                <h2> props:{this.props.name} </h2>
                <button onClick={this.ChangeTime} >Change Time</button>
                <button onClick={this.ChangeTime1} >Change Time1</button>
                {/* <button onClick={() => ChangeTime(this.state)} >Change Time1</button> */}
            </>
        )
    }

}
export default StateClass;