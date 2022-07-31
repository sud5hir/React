import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./counter.css"

class CartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <h3>Name is From Cart Componenet : {this.props.name}</h3>
                <button onClick={() => this.props.changName('Teqstories India PVT LTD')}>Change Name</button>
                {/* <div className="twoway" >
                    <input className="plusinput" type="Submit" onClick={() => this.props.increment(5)} Value="+" ></input>
                    <input className="input" type="text" value={this.props.count} name="Location"></input>
                    <input className="minusinput" type="Submit" onClick={() => this.props.decrement(6)} Value="-" ></input>
                </div> */}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changName: (name) => { dispatch({ type: 'STRING_CHANGE', payload: name }) },
        // increment: (count) => { dispatch({ type: 'INCREMENT', payload: count }) },
        // decrement: (count) => { dispatch({ type: 'DECREMENT', payload: count }) }
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        count: state.count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);