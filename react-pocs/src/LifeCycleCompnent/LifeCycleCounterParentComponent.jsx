import React from 'react';
import LifeCycleCounterChildComponent from './LifeCycleCounterChildComponent'
class LifeCycleCounterParentComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log("LifeCycleCounterParentComponent:->constructor");
        this.state = { count: 50 };
    }

    // //It is called just before calling the render() method.
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleCounterParentComponent:->getDerivedStateFromProps");
        // document.getElementById("id").innerHTML = "getDerivedStateFromProps :" + `${state}`;
        // return {
        //     count: Number.parseInt(props.count) + 1
        // };
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleCounterParentComponent:->componentDidMount");
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 })
        }, 500);
        document.getElementById("id1").innerHTML = "componentDidMount :" + `${this.state.count}`;
    }

    shouldComponentUpdate(props, state) {
        console.log("LifeCycleCounterParentComponent:->shouldComponentUpdate");
        document.getElementById("id2").innerHTML = "shouldComponentUpdate (state.count) :" + state.count;
        document.getElementById("id3").innerHTML = "shouldComponentUpdate(this.state.count) :" + this.state.count;
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("LifeCycleCounterParentComponent:->getSnapshotBeforeUpdate");
        document.getElementById("id4").innerHTML = "getSnapshotBeforeUpdate before update :" + prevstate.count;
    }

    componentDidUpdate(prop, state) {
        console.log("LifeCycleCounterParentComponent:->componentDidUpdate");
        document.title = "after update :" + `${this.state.count}`;
        document.getElementById("id5").innerHTML = "componentDidUpdate after update :" + `${this.state.count}`;
    }

    ChangeCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log('LifeCycleCounterParentComponent->render' + this.state.count)
        return (
            <>
                <br></br>
                <hr></hr>
                <h1> {this.state.count} </h1>
                <br></br>
                <h3>LifeCycleCounterComponent</h3>
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
                <button onClick={this.ChangeCount}>Change Count</button>
                <LifeCycleCounterChildComponent></LifeCycleCounterChildComponent>
                {/* <h1> {this.state.count} </h1> */}
                {/* <button onClick={() => this.setState({ count: this.state.count + 1 })} >Change Time</button> */}

                {/* <button onClick={() => ChangeTime(this.state)} >Change Time1</button> */}
            </>
        )
    }
}

export default LifeCycleCounterParentComponent;