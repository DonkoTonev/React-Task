
import { useState } from 'react';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';
import { Link } from 'react-router-dom';

export default function ThirdQuestion() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="container">
            <div className='question'>
                What benefit do you look for in your hair products?
            </div>

            <div className='answers-container'>
                <button className='answer'><span className='answer-text'>a. Anti-breakage</span></button>
                <button className='answer'><span className='answer-text'>b. Hydration</span></button>
                <button className='answer'><span className='answer-text'>c. Soothing dry scalp</span></button>
                <button className='answer'><span className='answer-text'>d. Repairs appearance of damaged hair</span></button>
                <button className='answer'><span className='answer-text'>e. Volume</span></button>
                <button className='answer'><span className='answer-text'>f. Curl and coil enhancing</span></button>
            </div>
            <div className='next-back'>
                <a href='/second' className='back-link'>Back</a>
                <Link to="/fourth" className='button'><span className='button-text'>Next question</span></Link>
                {/* <button className='button'><span className='button-text'>Next question</span></button> */}
            </div>
        </div>
        <ProgressBar />
        </>
    );
}

