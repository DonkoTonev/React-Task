import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styles from "../styles/Question.module.css";
import ProgressBar from "./components/progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FirstQuestion() {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    setAnswer(storedAnswers.firstQuestion || "");
  }, []);

  const handleAnswer = (answer) => {
    setAnswer(answer);
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    storedAnswers.firstQuestion = answer;
    localStorage.setItem("answers", JSON.stringify(storedAnswers));
  };

  return (
    <div className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.question}>How often do you wash your hair?</div>
        <div className={styles.answers_container}>
          <button onClick={() => handleAnswer("Daily")} className={styles.answer}>
            <span className={styles.answer_text}>a. Daily</span>
          </button>
          <button onClick={() => handleAnswer("Every other day")} className={styles.answer}>
            <span className={styles.answer_text}>b. Every other day</span>
          </button>
          <button onClick={() => handleAnswer("Twice a week")} className={styles.answer}>
            <span className={styles.answer_text}>c. Twice a week</span>
          </button>
          <button onClick={() => handleAnswer("Once a week")} className={styles.answer}>
            <span className={styles.answer_text}>d. Once a week</span>
          </button>
          <button onClick={() => handleAnswer("Every two weeks")} className={styles.answer}>
            <span className={styles.answer_text}>e. Every two weeks</span>
          </button>
        </div>
        <div className={styles.next_back}>
          <a href="/first" className={styles.back_link}>Back</a>
          <button className={styles.button_next}>
            <Link to="/third">
              <span className={styles.button_text}>Next question</span>
            </Link>
            <FontAwesomeIcon className={styles.arrow_icon} icon={faArrowRight} />
          </button>
        </div>
      </div>
      <ProgressBar current={2} total={5} className={styles.progress_bar} />
    </div>
  );
}
