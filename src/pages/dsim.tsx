import Header from "../components/header"

import derivativepic from '../images/derivativepic.png'
import './dsim.css'

type dsimProps = {
    page: number;
    setPage: (value: number) => void;
}

function dsim({page, setPage}: dsimProps) {

    let returndiv = null;

    if (page === 1) {
        returndiv =
            <div>
                <textarea className='derivative-text-explaination1' value="The idea of the derivative is to look at the rate of change of our error – how fast are we approaching the setpoint? Do we need to slow down a bit? The contribution from the derivative will be in the direction opposite to your current direction of travel, with a larger magnitude for a greater speed. It typically will be outweighed by the proportional and integral components, but if there’s some deviation from “normal” and the robot is going faster for some reason, the derivative component will become larger and your output power will be reduced. Similarly, if your robot is going slower than normal, the derivative component will be smaller in magnitude and hence the output power will become greater." />
                <img className='derivative-pic' src={derivativepic}></img>

            </div>
    } else if (page === 2) {
        returndiv =
            <div>
                <textarea className='derivative-text-explaination4' value="In general, to find the gradient of a curve, you’d do something like this:" />
                <textarea className='derivative-text-explainationshort' value="Gradient = Change in Y/Change in X" />
                <textarea className='derivative-text-explaination5' value="For us, our Y axis is our error, and our change in X is dT, so our derivative is:" />
                <textarea className='derivative-text-explainationshort' value="derivative = (current error - previous error)/dT" />
                <textarea className='derivative-text-explaination8' value="Just like with the integral, if we treat dT as a constant, we can ignore its effect in our calculations and merge it in with our constants later on." />
                <textarea className='derivative-text-explaination9' value="We can use the existing error we have for our “current error”, but for our “previous error” we need to add in a new variable. All we’ll make this variable do is keep track of that our error was in the previous cycle." />
                <textarea className='derivative-text-explainationshort' value="derivative = error – prevError;" />
                <textarea className='derivative-text-explainationshort' value="prevError = error;" />
            </div>
    } else if (page === 3) {
        returndiv =
            <div>
                <textarea className='derivative-text-explaination10' value="We add constant (“kD”) to account for scaling issues. A value too high will cause instability. A value too small will cause a derivative component that wont affect the feedback loop." />
                <textarea className='derivative-text-explainationshort' value="speed = error*kP + integral*kI + derivative*kD" />
                <textarea className='derivative-text-explaination11' value="void myPID(int setpoint) {
    while ( some condition ) {
        error = setpoint – sensor value;
        integral = integral + error;
        if (error = 0 or passes setpoint)
        integral = 0;
        if (error is outside useful range)
            integral = 0;
            derivative = error – prevError;
            prevError = error;
            speed = error*kP + integral*kI + derivative*kD;
            wait 15 mSec;
    }
}" />
            </div>
    }

    let returnpagediv = null;
    if (page == 1) {
        returnpagediv =
            <div className='dsim-bottom'>
                <div className='dsim-info-source'>Credit: George Gillard's Introduction to PID Controllers</div>
                <div className='dsim-page-numbers'>
                    <p className='dsim-page' onClick={() => { setPage(1) }}>1</p>
                    <p className='dsim-page-purple' onClick={() => { setPage(2) }}>2</p>
                    <p className='dsim-page' onClick={() => { setPage(3) }}>3</p>
                </div>
            </div>
    } if (page == 2) {
        returnpagediv =
            <div className='dsim-bottom'>
                <div className='dsim-info-source'>Credit: George Gillard's Introduction to PID Controllers</div>
                <div className='dsim-page-numbers'>
                    <p className='dsim-page' onClick={() => { setPage(1) }}>1</p>
                    <p className='dsim-page-purple' onClick={() => { setPage(2) }}>2</p>
                    <p className='dsim-page' onClick={() => { setPage(3) }}>3</p>
                </div>
            </div>
    }
    if (page == 3) {
        returnpagediv =
            <div className='dsim-bottom'>
                <div className='dsim-info-source'>Credit: George Gillard's Introduction to PID Controllers</div>
                <div className='dsim-page-numbers'>
                    <p className='dsim-page' onClick={() => { setPage(1) }}>1</p>
                    <p className='dsim-page-purple' onClick={() => { setPage(2) }}>2</p>
                    <p className='dsim-page' onClick={() => { setPage(3) }}>3</p>
                </div>
            </div>
    }
    return (
        <>
            <Header title="derivative" />
            {returndiv}
            {returnpagediv}

        </>
    );

}

export default dsim;