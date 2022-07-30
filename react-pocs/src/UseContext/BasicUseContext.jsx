
import react, { useState } from 'react';

var userDetailsStore = react.createContext(null);

export default function UseContextTest() {

    const [userDetails, setUserDetails] = useState({ name: "sudhir", value: 20 })

    return (
        <div>
            <userDetailsStore.Provider value={{ data: userDetails, updateUserDetails: setUserDetails }}>
                <p>  main comp  : {userDetails.name}</p>
                <ChildCompEffect></ChildCompEffect>
            </userDetailsStore.Provider>
        </div>
    );
}

function ChildCompEffect(props) {
    var context = react.useContext(userDetailsStore)
    function changeEmploymentType() {
        context.updateUserDetails({ ...context.data, name: 'Permanent' });
    }
    return (
        <>
            <p> this is child comp: {context.data.name} </p>
            {context.data.name === 'Permanent' ? <Permanent></Permanent> : <Contract></Contract>}
            <button onClick={changeEmploymentType}>Make Name</button>
            <SubChildCompEffect></SubChildCompEffect>
            {/* <userDetailsStore.Consumer >
                {res => res.data.name === 'Permanent' ?
                    <Permanent></Permanent> : <Contract></Contract>}

            </userDetailsStore.Consumer> */}
        </>

        // <userDetailsStore.Consumer >
        //     {res => {
        //         return (<div>
        //             <p> this is child comp: {res.data.name} </p>
        //             <button onClick={changeEmploymentType}>Make Name</button>
        //             <SubChildCompEffect></SubChildCompEffect>
        //         </div>)
        //     }}
        // </userDetailsStore.Consumer>
    )
}

function SubChildCompEffect() {

    var context = react.useContext(userDetailsStore)
    function changeEmploymentType() {
        context.updateUserDetails({ ...context.data, name: 'Contract' });
    }
    //    context.name = "A";
    return (
        <div>
            <p> this is SubChildCompEffect comp : {context.data.name}</p>
            <button onClick={changeEmploymentType}>Set Name</button>
        </div>
    );
}
function Permanent() {
    return (
        <div>
            <h2>Permanent Component Contents...</h2>
        </div>
    );
}

function Contract() {
    return (
        <div>
            <h2>Contract Component Contents...</h2>
        </div>
    )
}
