import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import image from '../assets/image.jpg';

export default function Home() {
    const [count, setCount] = useState(0);
    return (
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
                    <button className='start-button'><Link to="/first">
                        <span className='button-text'>Start the quiz</span>
                    </Link></button>
                </div>
            </div>
        </div>
    );
}
