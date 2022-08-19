import React from 'react';
import CounterStateClassComp from '../PropsStateParentChild/CounterStateClassComp';
import LoaderComponent from './LoaderComponent';

export default class ConditionalRenderingComponent extends React.Component {
    constructor(params) {                
        super(params);
        this.state = { flag: true };

        setTimeout(() => {
            this.setState({ flag: false })
        }, 2000);
    }

    GetCompBasedOnSwitch = (flag) => {

        switch (flag) {
            case true:
                return <CounterStateClassComp></CounterStateClassComp>;
                break;
            case false:
                return <LoaderComponent></LoaderComponent>;
                break;
            default:
                return null;
        };
    }

    RenderingWithIife = (flag) => {
        (function () {
            if (flag) {
                return <CounterStateClassComp></CounterStateClassComp>;
            } else {
                return <LoaderComponent></LoaderComponent>;
            }
        })()
    };

    render() {

        let { flag } = this.state;
        //Normal Functional Call
        
        let displayIfComp;

        if (flag) {
            displayIfComp = <LoaderComponent></LoaderComponent>;
        } else {
            displayIfComp = <CounterStateClassComp></CounterStateClassComp>;
        }

        // let IiffBasedRender =
        //     (function () {
        //         if (flag) {
        //             return <CounterStateClassComp></CounterStateClassComp>;
        //         } else {
        //             return <LoaderComponent></LoaderComponent>;
        //         }
        //     })();


        // let SwitchBasedRendering = () => {
        //     switch (flag) {
        //         case true:
        //             return <LoaderComponent></LoaderComponent>;
        //             break;
        //         case false:
        //             return <CounterStateClassComp></CounterStateClassComp>;
        //             break;
        //         default:
        //             return null;
        //     }
        // }

        return (<div >

            <span> <b> Afet 5 second Rendering Ordered will be reversed </b></span>
            <br></br><br></br>

            <span> <b> And Operator and Compoent Rendering  : </b></span>
            <br></br><br></br>

            {flag && <LoaderComponent></LoaderComponent>}

            <br></br>

            <span> <b> Tenary operator  Rendering  : </b></span>
            <br></br><br></br>
            {flag ? <CounterStateClassComp></CounterStateClassComp> : <LoaderComponent></LoaderComponent>}
            <br></br>

            <span> <b> If Else Based Rendering :</b></span>
            <br></br><br></br>
            {displayIfComp}

            <br></br>
            <span> <b> IIFE() Based Rendering :</b></span>
            <br></br><br></br>
            {this.RenderingWithIife(flag)};

            <br></br>
            <span> <b> SwitchBased Rendering :</b></span>
            <br></br><br></br>
            {this.GetCompBasedOnSwitch(flag)};

        </div>);
    }
}
