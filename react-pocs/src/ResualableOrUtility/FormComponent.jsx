import react from 'react';

import ButtonComponent from './ButtonComponent';

export default function FormComponent() {

    const clickHander = (e) => {
        alert(e);
    }
    return (<ButtonComponent clickHander={clickHander} buttonName='Submit1' ></ButtonComponent>)
}

