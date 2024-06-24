
import { useState, useEffect } from 'react';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ThirdQuestion() {
    const [count, setCount] = useState(0);

    const [answer, setAnswer] = useState('');

    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem('answers')) || {};
        setAnswer(storedAnswers.thirdQuestion || '');
    }, []);

    const handleAnswer = (answer) => {
        setAnswer(answer);
        const storedAnswers = JSON.parse(localStorage.getItem('answers')) || {};
        storedAnswers.thirdQuestion = answer;
        localStorage.setItem('answers', JSON.stringify(storedAnswers));
    };


    return (
        <>
        <div className="container">
            <div className='question'>
                What benefit do you look for in your hair products?
            </div>

            {/* <div className='answers-container'>
                <button className='answer'><span className='answer-text'>a. Anti-breakage</span></button>
                <button className='answer'><span className='answer-text'>b. Hydration</span></button>
                <button className='answer'><span className='answer-text'>c. Soothing dry scalp</span></button>
                <button className='answer'><span className='answer-text'>d. Repairs appearance of damaged hair</span></button>
                <button className='answer'><span className='answer-text'>e. Volume</span></button>
                <button className='answer'><span className='answer-text'>f. Curl and coil enhancing</span></button>
            </div> */}

            <div className='answers-container'>
                <button onClick={() => handleAnswer('Anti-breakage')} className='answer'>
                    <span className='answer-text'>a. Anti-breakage</span>
                </button>
                <button onClick={() => handleAnswer('Hydration')} className='answer'>
                    <span className='answer-text'>b. Hydration</span>
                </button>
                <button onClick={() => handleAnswer('Soothing dry scalp')} className='answer'>
                    <span className='answer-text'>c. Soothing dry scalp</span>
                </button>
                <button onClick={() => handleAnswer('Repairs appearance of damaged hair')} className='answer'>
                    <span className='answer-text'>d. Repairs appearance of damaged hair</span>
                </button>
                <button onClick={() => handleAnswer('Volume')} className='answer'>
                    <span className='answer-text'>e. Volume</span>
                </button>
                <button onClick={() => handleAnswer('Curl and coil enhancing')} className='answer'>
                    <span className='answer-text'>f. Curl and coil enhancing</span>
                </button>
            </div>

            <div className='next-back'>
                <a href='/second' className='back-link'>Back</a>
                <button className='button-next'>
                    <Link to="/fourth">
                    <span className='button-text'>Next question</span>
                    
                    </Link>
                    <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
                </button>
                {/* <button to="/first" className='button'><span className='button-text'>Next question</span></button> */}
            </div>
        </div>
        <ProgressBar current={3} total={5} />
        </>
    );
}

