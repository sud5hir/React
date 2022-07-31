import React from 'react';
export default class CounterStateClassComp extends React.Component {
    constructor(props) {

        super(props);

        this.state = { count: 1 };
    }

    incrementCounter = () => {

        this.setState({ count: this.state.count + 1 });

    }

    decrementCounter = () => {

        this.setState({ count: this.state.count - 1 });

    }

    render() {
        return (
            <>
                <h6>Welcome To Counter Compoenet...</h6>
                <input type="submit" onClick={this.incrementCounter} value="Increment"></input>
                <input type="submit" onClick={this.decrementCounter} value="Decrement"></input>
                {/* <input type="Submit" onClick={() => this.setState({ count: this.state.count + 1 })} value="CounterWithArrow" ></input> */}
                <h6>{this.state.count}</h6>
            </>
        )
    }
}

