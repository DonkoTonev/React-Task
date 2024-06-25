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
        <div className={styles.question}>Is there anything troubling you about your hair?</div>
        <div className={styles.answers_container}>
          <button onClick={() => handleAnswer("Breakage")} className={styles.answer}>
            <span className={styles.answer_text}>a. Breakage</span>
          </button>
          <button onClick={() => handleAnswer("Frizz")} className={styles.answer}>
            <span className={styles.answer_text}>b. Frizz</span>
          </button>
          <button onClick={() => handleAnswer("Scalp dryness")} className={styles.answer}>
            <span className={styles.answer_text}>c. Scalp dryness</span>
          </button>
          <button onClick={() => handleAnswer("Damage")} className={styles.answer}>
            <span className={styles.answer_text}>d. Damage</span>
          </button>
          <button onClick={() => handleAnswer("Tangling")} className={styles.answer}>
            <span className={styles.answer_text}>e. Tangling</span>
          </button>
        </div>
        <div className={styles.next_back}>
          <a href="/third" className={styles.back_link}>Back</a>
          <button className={styles.button_next}>
            <Link to="/fifth">
              <span className={styles.button_text}>Next question</span>
            </Link>
            <FontAwesomeIcon className={styles.arrow_icon} icon={faArrowRight} />
          </button>
        </div>
      </div>
      <ProgressBar current={4} total={5} className={styles.progress_bar} />
    </div>
  );
}
