import React from 'react';

export default class LifeCycleCharacterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { character: "A" };
        console.log("constructor :->" + this.state.character);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps :->" + state);
        return null;
    }

    componentDidMount() {

        console.log("componentDidMount Changing character From A to B");

        setTimeout(() => {
            this.setState({
                character: "B"
            })
        }, 2000);
    }

    shouldComponentUpdate(props, state) {
        console.log("shouldComponentUpdate -> State(state.character):->" + state.character);
        console.log("shouldComponentUpdate -> currentState(this.state.character):->" + this.state.character);
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate) {

        console.log("getSnapshotBeforeUpdate -> prevCharacter->" + prevstate.character);
        console.log("getSnapshotBeforeUpdate -> updatedCharacter:->" + this.state.character);
    }

    componentDidUpdate(prevprops, prevState) {
        console.log("componentDidUpdate -> prevCharacter->" + prevState.character);
        console.log("componentDidUpdate-> updatedCharacter :->" + this.state.character);
    }

    componentWillUnmount() {
        console.log("componentDidUnmount");
    }
    ChangeLetter = () => {
        console.log("Change Character");
        this.setState({
            character: "C"
        })
    }

    render() {
        console.log('render' + this.state.character)
        return (
            <>
                <h1>LifeCycleCharacterComponent</h1>
                <h3>Character:{this.state.character}</h3>
                <br></br>
                <button onClick={this.ChangeLetter} >Change Letter</button>
                <br></br>
            </>
        )
    }

}
