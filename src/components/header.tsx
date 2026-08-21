import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='header'>
                <Link to="/" className='header-logo-text-link'>
                    <div className='header-logo-text'>PIDPIDPID</div>
                </Link>
                <Link to="/about" className='header-about-text-link'>
                    <div className='header-about-text'>about</div>
                </Link>

            </div>
        </>
    );
}

export default Header