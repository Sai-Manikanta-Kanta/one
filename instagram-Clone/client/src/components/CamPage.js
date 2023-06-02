import {NavBar} from './postsPage'
import {useState} from 'react'
import './form.css'
//import {Link} from 'react-router-dom'


export default function CamPage()
{
    return (
        <>
        <div>
            <NavBar/>
            </div>
            <div><Form /></div>
        </>
    )
}
function Form() {
    // ...
    
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        likes: 0,
        description: '',
        postImage:''

      });
      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      }
      function handleSubmit(event) {
        event.preventDefault();
      
        fetch('http://localhost:5000/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(response => {
            // Handle the response
            // e.g., show success message or handle errors
          })
          .catch(error => {
            // Handle any errors during the request
          });
          
      }
      
    return (
      <form onSubmit={handleSubmit} className="formm">
        <div>
         
          <input type="text" name="name" value={formData.name} onChange={handleInputChange}  placeholder='Specify Name' className='namee'/>
        </div>
        <div>
          <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder='Specify Location'  
          className='locationn'/>
        </div>
        <div>
          <input type="text" name="postImage" value={formData.postImage} onChange={handleInputChange}  
           className='imagee' placeholder='Image url'/>
        </div>
        <div>
          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder='Specify Description' 
          className='descriptionn'/>
        </div>
        
        <button type="submit">Post</button>
      </form>
    );
  }
  