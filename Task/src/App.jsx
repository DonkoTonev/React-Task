
// Router

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/home'
import FirstQuestion from './pages/first-question'
import ProgressBar from './pages/components/progress-bar'


export default function App() {

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

    // {/* <ProgressBar /> */}
    // {/* </> */}

  );

  // return (

  //   <BrowserRouter>
  //     <Routes>
  //         {/* <Route index element={<Home />} /> */}
  //         <Route index element={<ProgressBar />} />
  //         <Route path='/first' element={<FirstQuestion />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}
