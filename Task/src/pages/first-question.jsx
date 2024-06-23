
import { useState } from 'react';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';

export default function FirstQuestion() {
    const [count, setCount] = useState(0);

    return (
        // <>
        <div className="container">
            <div className='question'>
                What's your hair type or texture?
            </div>

            <div className='answers-container'>
                <button className='answer'><span className='answer-text'>answer</span></button>
                <button className='answer'><span className='answer-text'>answer</span></button>
                <button className='answer'><span className='answer-text'>answer</span></button>
                <button className='answer'><span className='answer-text'>answer</span></button>
            </div>

            <div className='next-back'>
                <a href='#' className='back-link'>Back</a>
                <button className='button'><span className='button-text'>Next question</span></button>
            </div>
        </div>

        // <ProgressBar />
        // </>
    );
}

