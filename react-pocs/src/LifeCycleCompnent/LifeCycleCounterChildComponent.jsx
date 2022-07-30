import React from 'react';

class LifeCycleCounterChildComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log("LifeCycleCounterChildComponent:->constructor");

    }

    // //It is called just before calling the render() method.
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleCounterChildComponent:->getDerivedStateFromProps");
        // document.getElementById("id").innerHTML = "getDerivedStateFromProps :" + `${state}`;
        // return {
        //     count: Number.parseInt(props.count) + 1
        // };
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleCounterChildComponent:->componentDidMount");

    }

    shouldComponentUpdate(props, state) {
        console.log("LifeCycleCounterChildComponent:->shouldComponentUpdate");

        return false;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("LifeCycleCounterChildComponent:->getSnapshotBeforeUpdate");

    }

    componentDidUpdate() {
        console.log("LifeCycleCounterChildComponent:->componentDidUpdate");

    }
    render() {
        console.log('LifeCycleCounterChildComponent:->render');
        return (
            <>
                <br></br>

                <h1>LifeCycleCounterChildComponent</h1>
                <br></br>

            </>
        )
    }
}

export default LifeCycleCounterChildComponent;