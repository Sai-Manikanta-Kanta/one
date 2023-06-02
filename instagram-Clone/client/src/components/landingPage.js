
import homePhoto from '../assets/homephoto.png';
import {Link} from 'react-router-dom'
import './landingPage.css'
export default function LandingPage()
{
    return (
        <>
        <img className="landing-page-photo" src={homePhoto}/>
        <span className="text">10x Team 04</span>
        <Link to="/postspage"><button className="enter-button"> Enter</button></Link>
        
        </>
    )
}