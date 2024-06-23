
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../styles/Question.css';
import ProgressBar from './components/progress-bar';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function FirstQuestion() {
    const [count, setCount] = useState(0);

  fontawesome.library.add(faArrowRight);

  return (
    // <BrowserRouter>
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
          <button className='button-next'>
            <Link to="/second">
              <span className='button-text'>Next question</span>
              
            </Link>
            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
          </button>
          {/* <button to="/first" className='button'><span className='button-text'>Next question</span></button> */}
        </div>
      </div>
      {/* {/* <ProgressBar /> */}
    </>
    // {/* </BrowserRouter> */}
  );
}
