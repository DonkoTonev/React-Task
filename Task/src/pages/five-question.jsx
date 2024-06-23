
import { useState } from 'react';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';
import { Link } from 'react-router-dom';

export default function FiveQuestion() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="container">
            <div className='question'>
                What is your natural hair color(s) today?
            </div>

            <div className='answers-container'>
                <button className='answer'><span className='answer-text'>a. Black</span></button>
                <button className='answer'><span className='answer-text'>b. Brown</span></button>
                <button className='answer'><span className='answer-text'>c. Blonde</span></button>
                <button className='answer'><span className='answer-text'>d. Red/Orange</span></button>
                <button className='answer'><span className='answer-text'>e. Silver/Grey</span></button>
            </div>
            <div className='next-back'>
                <a href='/fourth' className='back-link'>Back</a>
                <Link to="/results" className='button'><span className='button-text'>Next question</span></Link>
                {/* <button className='button'><span className='button-text'>Discover your results</span></button> */}
            </div>
        </div>
        <ProgressBar />
        </>
    );
}

