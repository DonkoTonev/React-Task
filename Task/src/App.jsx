
// Router

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import FirstQuestion from './pages/first-question'
import ProgressBar from './pages/components/progress-bar'
import SecondQuestion from './pages/second-question';
import ThirdQuestion from './pages/third-question';
import FourthQuestion from './pages/fourth-question';
import FiveQuestion from './pages/five-question';

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import image from './assets/image.jpg';





export default function App() {
  const [count, setCount] = useState(0);

  fontawesome.library.add(faArrowRight);

  return (
    <BrowserRouter>
      {/* <> */}
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
      {/* <ProgressBar />
        </> */}
    </BrowserRouter>
  );
}















// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route index element={<Home />} />
//           {/* <Route index element={<ProgressBar />} /> */}
//           <Route path='/first' element={<FirstQuestion />} />
//           <Route path='/second' element={<SecondQuestion />} />
//           <Route path='/third' element={<ThirdQuestion />} />
//           <Route path='/fourth' element={<FourthQuestion />} />
//           <Route path='/fifth' element={<FiveQuestion />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
