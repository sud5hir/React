import React from 'react';

class LifeCycleCounterComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = { count: 50 };
    }

    // //It is called just before calling the render() method. cannot write html here
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps:->" + state.count);
        return {
            count: Number.parseInt(state.count) + 1
        };
        //return null;
    }

    componentDidMount() {
        console.log("componentDidMount");

        setTimeout(() => {
            this.setState({ count: this.state.count + 1 })
        }, 500);
        document.getElementById("id1").innerHTML = "componentDidMount :" + `${this.state.count}`;
    }

    shouldComponentUpdate(props, state) {
        console.log("shouldComponentUpdate");
        document.getElementById("id2").innerHTML = "shouldComponentUpdate (state.count) :" + state.count;
        //not use this
        document.getElementById("id3").innerHTML = "shouldComponentUpdate(this.state.count) :" + this.state.count;
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("getSnapshotBeforeUpdate");
        document.getElementById("id4").innerHTML = "getSnapshotBeforeUpdate before update :" + prevstate.count;
        return prevstate;
    }

    componentDidUpdate(prevprops, prevstate) {
        console.log("componentDidUpdate");
        document.title = "after update :" + `${this.state.count}`;
        document.getElementById("id5").innerHTML = "componentDidUpdate after update({this.state) :" + `${this.state.count}`;
        document.getElementById("id6").innerHTML = "componentDidUpdate after update(prevstate) :" + `${prevstate.count}`;
    }

    ChangeCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log('render' + this.state.count)
        return (
            <>
                <br></br>
                <h3>LifeCycleCounterComponent</h3>
                <br></br>
                <div id="id67"></div>
                <br></br>
                <br></br>
                <div id="id1"></div>
                <br></br>
                <div style={{ color: "blue" }} id="id2"></div>
                <div style={{ color: "red" }} id="id3"></div>
                <br></br>
                <div id="id4"></div>
                <br></br>
                <div id="id5"></div>
                <br></br>
                <div id="id6"></div>
                <br></br>

                <button onClick={this.ChangeCount}>Change Count</button>

                {/* <h1> {this.state.count} </h1> */}
                {/* <button onClick={() => this.setState({ count: this.state.count + 1 })} >Change Time</button> */}

                {/* <button onClick={() => ChangeTime(this.state)} >Change Time1</button> */}
            </>
        )
    }
}

export default LifeCycleCounterComponent;
