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
        <div className={styles.question}>What is your natural hair color(s) today?</div>
        <div className={styles.answers_container}>
          <button onClick={() => handleAnswer("Black")} className={styles.answer}>
            <span className={styles.answer_text}>a. Black</span>
          </button>
          <button onClick={() => handleAnswer("Brown")} className={styles.answer}>
            <span className={styles.answer_text}>b. Brown</span>
          </button>
          <button onClick={() => handleAnswer("Blonde")} className={styles.answer}>
            <span className={styles.answer_text}>c. Blonde</span>
          </button>
          <button onClick={() => handleAnswer("Red/Orange")} className={styles.answer}>
            <span className={styles.answer_text}>d. Red/Orange</span>
          </button>
          <button onClick={() => handleAnswer("Silver/Grey")} className={styles.answer}>
            <span className={styles.answer_text}>e. Silver/Grey</span>
          </button>
        </div>
        <div className={styles.next_back}>
          <a href="/fourth" className={styles.back_link}>Back</a>
          <button className={styles.button_next}>
            <Link to="/results">
              <span className={styles.button_text}>Next question</span>
            </Link>
            <FontAwesomeIcon className={styles.arrow_icon} icon={faArrowRight} />
          </button>
        </div>
      </div>
      <ProgressBar current={5} total={5} className={styles.progress_bar} />
    </div>
  );
}
