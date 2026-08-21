import Header from "../components/header";
import ReturnToHome from "../components/returntohome";
import { Link } from 'react-router-dom'
import "./about.css"

function About() {
    return (
        <>
            <Header title="about"/>

            <div className='about-text'>
                <div className='about-info'>a website about PID</div>
                <div className='about-dev-name'>made by Daniel 10w (vrc) </div>
                <Link to='https://github.com/crispyFallLeaves'>
                    <div>github: crispyFallLeaves</div>
                </Link>
            </div>
            <ReturnToHome />
        </>
    );
}
export default About;