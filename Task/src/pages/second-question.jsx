
import { useState } from 'react';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';
import { Link } from 'react-router-dom';


export default function SecondQuestion() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="container">
            <div className='question'>
                How often do you wash your hair?
            </div>

            <div className='answers-container'>
                <button className='answer'><span className='answer-text'>a. Daily</span></button>
                <button className='answer'><span className='answer-text'>b. Every other day</span></button>
                <button className='answer'><span className='answer-text'>c. Twice a week</span></button>
                <button className='answer'><span className='answer-text'>d. Once a week</span></button>
                <button className='answer'><span className='answer-text'>e. Every two weeks</span></button>
            </div>

            <div className='next-back'>
                <a href='/first' className='back-link'>Back</a>
                {/* <button className='button'><span className='button-text'>Next question</span></button> */}
                <Link to="/third" className='button'><span className='button-text'>Next question</span></Link>
            </div>
        </div>

        <ProgressBar />
        </>
    );
}

