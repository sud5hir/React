import react, { useState } from 'react';
import "./DateUc.css"

export default function UsestateWithDc() {

    const [count, setstate] = useState(new Date().toLocaleTimeString())
    const [timecolor, setColorstate] = useState('white')

    const ctime = () => {

        let loclaDate = new Date();
        let totalSeconds = loclaDate.getHours() * 60 * 60 + loclaDate.getMinutes() * 60 + loclaDate.getSeconds();
        console.log(totalSeconds);
        setstate(loclaDate.toLocaleTimeString());
        setColorstate(totalSeconds % 2 == 0 ? 'blue' : 'green')
    }

    setInterval(ctime, 1000);


    return (
        <div>
            <h1 style={{ backgroundColor: timecolor }}>{count} </h1>
        </div>)
}