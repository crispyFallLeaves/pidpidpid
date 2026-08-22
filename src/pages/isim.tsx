import Header from "../components/header"

import integralpic from '../images/integralpic.png'
import './isim.css'

type isimProps = {
    page: number;
    setPage: (value: number) => void;
}
function isim({page, setPage}: isimProps) {

    let returndiv = null;

    if (page === 1) {
        returndiv =
            <div>
                <textarea className='integral-text-explaination1' value="The integral term is going to give us some versatility when it comes to other disturbances. You’ll also find with the proportional component that once the error becomes small you have very little power, and might see some significant remaining error that just isn’t eliminated – the integral will get rid of this for you by slowly increasing the speed. The integral is going to be concerned with looking back in time over all the errors your system has calculated. By definition, an integral is an area under a curve in calculus. For our purposes, calculating the integral using standard calculus isn’t really feasible, so we do it the easy way. We’re going to work out the total area by summing the area of many thin slices." />
                <img className='integral-pic' src={integralpic}></img>
            </div>
    } else if (page === 2) {
        returndiv =
            <div>
                <textarea className='integral-text-explaination2' value="The “area under the curve” for each cycle of our loop is going to be the current error, multiplied by the time it takes for that cycle of the loop. It’s a rough approximation, but it works fine for us with such slim slices of time." />
                <textarea className='integral-text-explaination3' value="area = error * dT" />
                <textarea className='integral-text-explaination4' value="The integral is equal to the sum of all of these areas. At any instant, it is the sum of the areas of all the previous cycles, so we create a variable (“integral”), and add on the new slice of area in each cycle of our loop:" />
                <textarea className='integral-text-explaination5' value="integral = integral + error*dT" />
                <textarea className='integral-text-explaination6' value="Since dT is normally a constant delay that we ourselves set (e.g. wait 15 milliseconds per cycle of the loop), we can factor it out later and hence tend to ignore its existence. Hence, we’ll use this to calculate our integral: integral = integral + error " />
            </div>
    } else if (page === 3) {
        returndiv =
            <div>
                <textarea className='integral-text-explaination7' value="A higher value of the integral indicates that there is some external influence slowing down our system. Hence, to combat this we add some extra power to give a bit more of a “boost”, and to accomplish this we add the integral to the existing output. To account for the scaling issues just like we saw for the proportional term, we introduce another constant – kI. Our integral is likely going to be a huge number, so we often expect kI to be quite small compared to kP." />
                <textarea className='integral-text-explaination8' value="speed = error*kP + integral*kI" />
                <textarea className='integral-text-explaination9' value="Our code so far would now look something like this pseudocode:" />
                <textarea className='integral-text-explaination10' value="void myPID(int setpoint) {
    while ( some condition ) {
        error = setpoint – sensor value;
        integral = integral + error;
        speed = error*kP + integral*kI;
        wait 15 mSec;
}" />
            </div>
    } else if (page === 4) {
        returndiv =
            <div>
                <textarea className='integral-text-explaination13' value="possible issues:" />
                <textarea className='integral-text-explaination11' value="When the error reaches zero, that is you’ve made it to the setpoint, the integral is most likely going to be significant enough to keep the output power high enough to continue. This can be a nuisance in situations where you don’t need any additional power to hold the position, such as a drivetrain on a flat tile." />
                <textarea className='integral-text-explainationshort' value="if (error = 0 or passes setpoint) { integral = 0; }" />
                <textarea className='integral-text-explaination12' value="Integral windup is an issue where a large change in setpoint occurs (e.g. 0 to 1000), causing the integral to start calculating for huge error values. This then results in an unusably high value for the integral when you really want it (i.e. near the setpoint). There’s a few ways to combat this problem:" />
                <textarea className='integral-text-explainationshort' value="if (integral is huge) { integral = maximum value; }" />
                <textarea className='integral-text-explainationshort' value="if ( error is big ) { integral = 0; }" />
            </div>
    } else if (page === 5) {
        returndiv =
            <div>
                <textarea className='integral-text-explaination13' value="The PI controller we’ve created so far would be something like this:" />
                <textarea className='integral-text-explaination14' value="void myPID(int setpoint) {
    while ( some condition ) {
        error = setpoint – sensor value;
        integral = integral + error;
        if (error = 0 or passes setpoint)
            integral = 0;
        if (error is outside useful range)
            integral = 0;
        speed = error*kP + integral*kI;
        wait 15 mSec;
    }
}"/>

            </div>
    }

    let returnpagediv = null;
    if (page == 1) {
        returnpagediv =
            <div className='isim-bottom'>
                <div className='isim-info-source'>Credit: George Gillard's Introduction to PID Controllers</div>
                <div className='isim-page-numbers'>
                    <p className='isim-page-purple' onClick={() => { setPage(1) }}>1</p>
                    <p className='isim-page' onClick={() => { setPage(2) }}>2</p>
                    <p className='isim-page' onClick={() => { setPage(3) }}>3</p>
                    <p className='isim-page' onClick={() => { setPage(4) }}>4</p>
                    <p className='isim-page' onClick={() => { setPage(5) }}>5</p>
                </div>
            </div>
    }
    if (page == 2) {
        returnpagediv =
            <div className='isim-bottom'>
                <div className='isim-info-source'>Credit: George Gillard's Introduction to PID Controllers</div>
                <div className='isim-page-numbers'>
                    <p className='isim-page' onClick={() => { setPage(1) }}>1</p>
                    <p className='isim-page-purple' onClick={() => { setPage(2) }}>2</p>
                    <p className='isim-page' onClick={() => { setPage(3) }}>3</p>
                    <p className='isim-page' onClick={() => { setPage(4) }}>4</p>
                    <p className='isim-page' onClick={() => { setPage(5) }}>5</p>
                </div>
            </div>
    }
    if (page == 3) {
        returnpagediv =
            <div className='isim-bottom'>
                <div className='isim-info-source'>Credit: George Gillard's Introduction to PID Controllers</div>
                <div className='isim-page-numbers'>
                    <p className='isim-page' onClick={() => { setPage(1) }}>1</p>
                    <p className='isim-page' onClick={() => { setPage(2) }}>2</p>
                    <p className='isim-page-purple' onClick={() => { setPage(3) }}>3</p>
                    <p className='isim-page' onClick={() => { setPage(4) }}>4</p>
                    <p className='isim-page' onClick={() => { setPage(5) }}>5</p>
                </div>
            </div>
    }
    if (page == 4) {
        returnpagediv =
            <div className='isim-bottom'>
                <div className='isim-info-source'>Credit: George Gillard's Introduction to PID Controllers</div>
                <div className='isim-page-numbers'>
                    <p className='isim-page' onClick={() => { setPage(1) }}>1</p>
                    <p className='isim-page' onClick={() => { setPage(2) }}>2</p>
                    <p className='isim-page' onClick={() => { setPage(3) }}>3</p>
                    <p className='isim-page-purple' onClick={() => { setPage(4) }}>4</p>
                    <p className='isim-page' onClick={() => { setPage(5) }}>5</p>
                </div>
            </div>
    }
    if (page == 5) {
        returnpagediv =
            <div className='isim-bottom'>
                <div className='isim-info-source'>Credit: George Gillard's Introduction to PID Controllers</div>
                <div className='isim-page-numbers'>
                    <p className='isim-page' onClick={() => { setPage(1) }}>1</p>
                    <p className='isim-page' onClick={() => { setPage(2) }}>2</p>
                    <p className='isim-page' onClick={() => { setPage(3) }}>3</p>
                    <p className='isim-page' onClick={() => { setPage(4) }}>4</p>
                    <p className='isim-page-purple' onClick={() => { setPage(5) }}>5</p>
                </div>
            </div>
    }
    return (
        <>
            <Header title="integral" />
            {returndiv}
            {returnpagediv}

        </>
    );

}

export default isim;