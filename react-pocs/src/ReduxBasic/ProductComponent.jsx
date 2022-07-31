import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./counter.css"

class ProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <h3>Name is From Product Component: {this.props.name}</h3>
                <button onClick={() => this.props.changName('Teqstories PVT LTD')}>Change Name</button>
                {/* <div className="twoway" >
                    <input className="plusinput" type="Submit" onClick={() => this.props.increment(6)} Value="+" ></input>
                    <input className="input" type="text" value={this.props.count} name="Location"></input>
                    <input className="minusinput" type="Submit" onClick={() => this.props.decrement(5)} Value="-" ></input>
                </div> */}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changName: (name) => { dispatch({ type: 'STRING_CHANGE', payload: name }) },
        // increment: (count) => { dispatch({ type: 'INCREMENT', payload: count }) },
        // decrement: (count) => { dispatch({ type: 'DECREMENT', payload: count }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
