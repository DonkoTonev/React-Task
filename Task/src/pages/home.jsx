import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import image from '../assets/image.jpg'; // Adjust the path to your image

export default function Home() {
    const [count, setCount] = useState(0);
    // const history = useHistory();

    // const handleClick = () => {
    //     history.push('/first'); // Navigate to '/first' route
    // };

    return (
        // <BrowserRouter>
          <div className="home-container">
              <div className="image-container">
                  <img src={image} className="top-image" alt="Descriptive Alt Text" />
                  <div className="centered-div">
                      <div className="title-container">
                          Build a self care routine suitable for you
                          <div className="text-container">
                              Take our test to get a personalized self care routine based on your needs.
                          </div>
                      </div>
                      {/* Using Link for navigation */}
                      <button className='start-button'><Link to="/first">
                          <span className='button-text'>Start the quiz</span>
                      </Link></button>
                      
                      {/* Alternatively, you can use a button with handleClick function */}
                      {/* <button className='start-button'>
                          <span className='button-text'>Start the quiz</span>
                      </button> */}
                  </div>
              </div>
          </div>
        // </BrowserRouter>
    );
}
