import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import icon from '../assets/icon.png'
import camera from '../assets/camera.png'
import axios from 'axios';
import './postPage.css'
import heart from '../assets/heart.jfif'
import share from '../assets/share.jfif'

// navigation bar component
export function NavBar() {
    return (
        <div className='nav-wrapper'>
            <img className='insta-logo' src={icon} />
            <span className='insta-text'>InstaClone</span>
           <Link to="/campage"><img className='cam' src={camera} /></Link> 
            <hr className='line' />
        </div>
    )
}

// posts component
 function Posts()
 {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data)

    const list = data.map(item=>
        
            <li className='card'>
                <h1 className='name'>{item.name}</h1>
                <h2 className='location'>{item.location}</h2>
                <h1 className='dot'>...</h1>
                <img className='image' src={item.postImage}></img>
                <img className='image-heart' src={heart}></img>
                <img className='image-share' src={share}></img>
                <h3 className="likes">{item.likes} likes</h3>
                <h2 className="description">{item.description}</h2>
                <h2 className="date">{item.date}</h2>
            </li>
        )



    return(
        <div className='posts=container'>
          <ol>
            {list}
          </ol>
        </div>
    )
 }
 










export default  function PostsPage() {
    

    return (
        <>
        <NavBar/>
            <Posts/>
      </>
    )
}