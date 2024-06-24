
import { useState, useEffect } from 'react';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FourthQuestion() {
    const [count, setCount] = useState(0);
    
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem('answers')) || {};
        setAnswer(storedAnswers.fourthQuestion || '');
    }, []);

    const handleAnswer = (answer) => {
        setAnswer(answer);
        const storedAnswers = JSON.parse(localStorage.getItem('answers')) || {};
        storedAnswers.fourthQuestion = answer;
        localStorage.setItem('answers', JSON.stringify(storedAnswers));
    };

    return (
        <>
        <div className="container">
            <div className='question'>
                Is there anything troubling you about your hair?
            </div>

            {/* <div className='answers-container'>
                <button className='answer'><span className='answer-text'>a. Breakage</span></button>
                <button className='answer'><span className='answer-text'>b. Frizz</span></button>
                <button className='answer'><span className='answer-text'>c. Scalp dryness</span></button>
                <button className='answer'><span className='answer-text'>d. Damage</span></button>
                <button className='answer'><span className='answer-text'>e. Tangling</span></button>
            </div> */}




            <div className='answers-container'>
                <button onClick={() => handleAnswer('Breakage')} className='answer'>
                    <span className='answer-text'>a. Breakage</span>
                </button>
                <button onClick={() => handleAnswer('Frizz')} className='answer'>
                    <span className='answer-text'>b. Frizz</span>
                </button>
                <button onClick={() => handleAnswer('Scalp dryness')} className='answer'>
                    <span className='answer-text'>c. Scalp dryness</span>
                </button>
                <button onClick={() => handleAnswer('Damage')} className='answer'>
                    <span className='answer-text'>d. Damage</span>
                </button>
                <button onClick={() => handleAnswer('Tangling')} className='answer'>
                    <span className='answer-text'>e. Tangling</span>
                </button>
            </div>
            <div className='next-back'>
                <a href='/third' className='back-link'>Back</a>
                <button className='button-next'>
                    <Link to="/fifth">
                    <span className='button-text'>Next question</span>
                    
                    </Link>
                    <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
                </button>
                {/* <button to="/first" className='button'><span className='button-text'>Next question</span></button> */}
            </div>
        </div>
        <ProgressBar current={4} total={5} />
        </>
    );
}

