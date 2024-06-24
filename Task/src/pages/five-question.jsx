import { useState, useEffect } from "react";
import "../styles/Question.css";
import ProgressBar from "./components/progress-bar";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FiveQuestion() {
  const [count, setCount] = useState(0);

  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    setAnswer(storedAnswers.fifthQuestion || "");
  }, []);

  const handleAnswer = (answer) => {
    setAnswer(answer);
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    storedAnswers.fifthQuestion = answer;
    localStorage.setItem("answers", JSON.stringify(storedAnswers));
  };

  return (
    <>
      <div className="container">
        <div className="question">
          What is your natural hair color(s) today?
        </div>
        <div className="answers-container">
          <button onClick={() => handleAnswer("Black")} className="answer">
            <span className="answer-text">a. Black</span>
          </button>
          <button onClick={() => handleAnswer("Brown")} className="answer">
            <span className="answer-text">b. Brown</span>
          </button>
          <button onClick={() => handleAnswer("Blonde")} className="answer">
            <span className="answer-text">c. Blonde</span>
          </button>
          <button onClick={() => handleAnswer("Red/Orange")} className="answer">
            <span className="answer-text">d. Red/Orange</span>
          </button>
          <button
            onClick={() => handleAnswer("Silver/Grey")}
            className="answer"
          >
            <span className="answer-text">e. Silver/Grey</span>
          </button>
        </div>
        <div className="next-back">
          <a href="/fourth" className="back-link">
            Back
          </a>
          <button className="button-next">
            <Link to="/results">
              <span className="button-text">Next question</span>
            </Link>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
          </button>
        </div>
      </div>
      <ProgressBar current={5} total={5} />
    </>
  );
}
