import Header from "../components/header"

import { useState } from 'react'
import './psim.css'
function Psim() {
    const [page, setPage] = useState(1);

    let returndiv = null;

    if (page === 1) {
        returndiv =
            <div>
                <textarea className='proportional-text-explaination1' value="The Proportional component provides the bulk of the power for controlling your system. The key objective is to give a large amount of power when there is a long way to go, but only a small amount of power when you’re nearly at your setpoint. This results in a smooth deceleration through the movement as you approach the setpoint." />
                <textarea className='proportional-text-explaination2' value="Firstly, a variable is created, called the error. The error is really simple – just the difference between the current sensor value, and what you want that sensor value to reach (the setpoint). For example, the error could be the distance remaining to be travelled, the height remaining to be lifted to, etc. If your phone battery was at 30% and you were charging it to reach 100%, the error would be 70% - it’s just the difference between where you’re at, and where you want to be." />
                <textarea className='proportional-text-explaination3' value="error = setpoint – sensor value" />
            </div>
    } else if (page === 2) {
        returndiv =
            <div>
                <textarea className='proportional-text-explaination4' value="To achieve the nice smooth deceleration that the Proportional Controller provides, we could simply set the power of our motors to be equal to the error, like so:" />
                <textarea className='proportional-text-explaination5' value="error = setpoint – sensor value      speed = error" />
                <textarea className='proportional-text-explaination6' value="However, you may find that the speed values don’t seem to be scaled right. The robot may be a bit too gentle approaching the target, and may in fact not have enough power at all to reach the setpoint when the error becomes small. Or alternatively, the robot might be a bit aggressive, and it might significantly overshoot, and then overcorrect, in a never-ending cycle. To combat this issue, we introduce another value, the proportional constant (kP). Simply put, we multiply the error by kP when we assign the error to the output power. Later we’ll tun" />
                <textarea className='proportional-text-explaination7' value="error = setpoint – sensor value      speed = error*kP" />
            </div>
    } else if (page === 3) {
        returndiv =
            <div>
                <textarea className='proportional-text-explaination8' value="Up until now, we’ve skipped over a fairly critical part of the PID (or P, so far) controller. Currently, we could run the code and it would perform the calculations once. However, we’d obviously need to keep recalculating these values as our robot moves, otherwise our error and speeds will never update. To fix this, we put everything in a loop." />
                <textarea className='proportional-text-explaination9' value="Here’s some slightly more realistic pseudocode, which with some completion would work absolutely fine for many situations:" />
                <textarea className='proportional-text-explaination10' value="void myPID(int setpoint) {
    while ( some condition )
    {
        error = setpoint – sensor value;
        speed = error*kP;
    }
}" />
            </div>
    }

    let returnpagediv = null;
    if (page == 1) {
        returnpagediv =
            <div className='psim-page-numbers'>
                <p className='psim-page-purple' onClick={() => { setPage(1) }}>1</p>
                <p className='psim-page' onClick={() => { setPage(2) }}>2</p>
                <p className='psim-page' onClick={() => { setPage(3) }}>3</p>
            </div>
    } if (page == 2) {
        returnpagediv =
            <div className='psim-page-numbers'>
                <p className='psim-page' onClick={() => { setPage(1) }}>1</p>
                <p className='psim-page-purple' onClick={() => { setPage(2) }}>2</p>
                <p className='psim-page' onClick={() => { setPage(3) }}>3</p>
            </div>
    }
    if (page == 3) {
        returnpagediv =
            <div className='psim-page-numbers'>
                <p className='psim-page' onClick={() => { setPage(1) }}>1</p>
                <p className='psim-page' onClick={() => { setPage(2) }}>2</p>
                <p className='psim-page-purple' onClick={() => { setPage(3) }}>3</p>
            </div>
    }
    return (
        <>
            <Header title="proportional" />
            {returndiv}
            {returnpagediv}

        </>
    );

}

export default Psim;