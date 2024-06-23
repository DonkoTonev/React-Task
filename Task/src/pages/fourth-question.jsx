
import { useState } from 'react';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';
import { Link } from 'react-router-dom';

export default function FourthQuestion() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="container">
            <div className='question'>
                Is there anything troubling you about your hair?
            </div>

            <div className='answers-container'>
                <button className='answer'><span className='answer-text'>a. Breakage</span></button>
                <button className='answer'><span className='answer-text'>b. Frizz</span></button>
                <button className='answer'><span className='answer-text'>c. Scalp dryness</span></button>
                <button className='answer'><span className='answer-text'>d. Damage</span></button>
                <button className='answer'><span className='answer-text'>e. Tangling</span></button>
            </div>
            <div className='next-back'>
                <a href='/third' className='back-link'>Back</a>
                <Link to="/fifth" className='button'><span className='button-text'>Next question</span></Link>
                {/* <button className='button'><span className='button-text'>Next question</span></button> */}
            </div>
        </div>
        <ProgressBar />
        </>
    );
}

