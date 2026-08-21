import './header.css'
import { Link } from 'react-router-dom'

interface HeaderProps{
    title?: string;
}

function Header(props: HeaderProps) {
    return (
        <>
            <div className='header'>
                <Link to="/" className='header-logo-text-link'>
                    <div className='header-logo-text'>PIDPIDPID</div>
                </Link>
                <div className ='header-title'>{props.title ?? ""}</div>
                <Link to="/about" className='header-about-text-link'>
                    <div className='header-about-text'>about</div>
                </Link>

            </div>
        </>
    );
}

export default Header