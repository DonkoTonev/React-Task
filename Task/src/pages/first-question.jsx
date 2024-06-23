
import { useState } from 'react';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';
import { Link } from 'react-router-dom';

export default function FirstQuestion() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="container">
            <div className='question'>
                What's your hair type or texture?
            </div>

            <div className='answers-container'>
                <button className='answer'><span className='answer-text'>a. Straight</span></button>
                <button className='answer'><span className='answer-text'>b. Curly</span></button>
                <button className='answer'><span className='answer-text'>c. Wavy</span></button>
                <button className='answer'><span className='answer-text'>d. Fine</span></button>
            </div>

            <div className='next-back'>
                <a href='/' className='back-link'>Back</a>
                <Link to="/second" className='button'><span className='button-text'>Next question</span></Link>
                {/* <button to="/first" className='button'><span className='button-text'>Next question</span></button> */}
            </div>
        </div>

        <ProgressBar />
        </>
    );
}

