import react from 'react';
import './spinner.css'

const SpinnerComponent = () => {
    return (
        <div >
            <div className="lds-roller" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div className="divLable" >Processing...</div>
        </div>
    )
}

export default SpinnerComponent;