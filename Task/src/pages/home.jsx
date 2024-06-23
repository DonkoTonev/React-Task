import { useState } from 'react';
import '../App.css';
import image from '../assets/image.jpg'

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="image-container">
        <img src={image} className="top-image" alt="Descriptive Alt Text" />
        <div className="centered-div">
          
          <div className="title-container">
            Build a self care routine suitable for you
            <div className="text-container">
              Take out test to get a personalised self care routine based on your needs.
            </div>
          </div>
          <button className='start-button'><span className='button-text'>Start the quiz</span></button>
        </div>
      </div>
    </div>
  );
}

// export default Home;
