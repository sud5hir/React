import React from 'react';

export default class StateWIthCountCharacters extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            message: '',

            counter: 10

        };

    }

    onMessageChange(text) {
        this.setState({
            message: 'Message has ' + text.length + ' number of Characters',
            counter: this.state.counter + 1
        });
    }
    render() {
        return <div>
            <h2>Welcome to Count Characters Component...</h2>
            <p>
                <label>Enter Message : <input type="text"
                    onChange={e => this.onMessageChange(e.target.value)}></input></label>
            </p>

            <p>
                <label>{this.state.message}</label>
            </p>
            <p>
                <label>{this.state.counter}</label>
            </p>
        </div>
    }
}
