import { Link } from 'react-router-dom'
import pPlaceholder from '../images/pPlaceholder.png'
import iPlaceholder from '../images/iPlaceholder.png'
import dPlaceholder from '../images/dPlaceholder.png'
// import pidPlaceholder from '../images/pidPlaceholder.png'
import plus from '../images/plus.png'
import Header from '../components/header'
import './homepage.css'

function HomePage() {
    return (
        <>
            <Header />
            <div className='homepage-images'>
                <div className='thumbnail-images-container'>
                    <div className='combined-sim-img-container'>
                        <Link to="/pidsim" >
                            {/* <img className='pid-thumbnail' src={pidPlaceholder} /> */}
                            <button className='home-pidsim-button'>SIMULATOR</button>
                        </Link>
                    </div>
                    <div className='seperate-sim-img-container'>
                        <Link to="/proportional" >
                            <img className='p-sim-thumbnail' src={pPlaceholder} />
                        </Link>
                        <img src={plus} className='homepage-plus'></img>
                        <Link to="/integral" >
                            <img className='i-sim-thumbnail' src={iPlaceholder} />
                        </Link>
                        <img src={plus} className='homepage-plus'></img>
                        <Link to="/derivative" >
                            <img className='d-sim-thumbnail' src={dPlaceholder} />
                        </Link>
                    </div>
                </div >
            </div>
        </>);
}

export default HomePage