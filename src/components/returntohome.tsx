import { Link } from 'react-router-dom'
import "./returntohome.css"
function ReturnToHome() {
    return (
        <>
            <Link to='/' className='about-return-text-link'>
                <div className='about-return-text'>return to home</div>
            </Link>
        </>
    );
}

export default ReturnToHome;