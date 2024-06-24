import { useState, useEffect } from "react";
import "../styles/Question.css";
import ProgressBar from "./components/progress-bar";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SecondQuestion() {
  const [count, setCount] = useState(0);

  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    setAnswer(storedAnswers.secondQuestion || "");
  }, []);

  const handleAnswer = (answer) => {
    setAnswer(answer);
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    storedAnswers.secondQuestion = answer;
    localStorage.setItem("answers", JSON.stringify(storedAnswers));
  };

  return (
    <>
      <div className="container">
        <div className="question">How often do you wash your hair?</div>
        <div className="answers-container">
          <button onClick={() => handleAnswer("Daily")} className="answer">
            <span className="answer-text">a. Daily</span>
          </button>
          <button
            onClick={() => handleAnswer("Every other day")}
            className="answer"
          >
            <span className="answer-text">b. Every other day</span>
          </button>
          <button
            onClick={() => handleAnswer("Twice a week")}
            className="answer"
          >
            <span className="answer-text">c. Twice a week</span>
          </button>
          <button
            onClick={() => handleAnswer("Once a week")}
            className="answer"
          >
            <span className="answer-text">d. Once a week</span>
          </button>
          <button
            onClick={() => handleAnswer("Every two weeks")}
            className="answer"
          >
            <span className="answer-text">e. Every two weeks</span>
          </button>
        </div>

        <div className="next-back">
          <a href="/first" className="back-link">
            Back
          </a>
          <button className="button-next">
            <Link to="/third">
              <span className="button-text">Next question</span>
            </Link>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
          </button>
        </div>
      </div>

      <ProgressBar current={2} total={5} />
    </>
  );
}
