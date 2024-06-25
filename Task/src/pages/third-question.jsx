import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styles from "../styles/Question.module.css";
import ProgressBar from "./components/progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ThirdQuestion() {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    setAnswer(storedAnswers.thirdQuestion || "");
  }, []);

  const handleAnswer = (answer) => {
    setAnswer(answer);
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    storedAnswers.thirdQuestion = answer;
    localStorage.setItem("answers", JSON.stringify(storedAnswers));
  };

  return (
    <div className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.question}>What benefit do you look for in your hair products?</div>
        <div className={styles.answers_container}>
          <button onClick={() => handleAnswer("Anti-breakage")} className={styles.answer}>
            <span className={styles.answer_text}>a. Anti-breakage</span>
          </button>
          <button onClick={() => handleAnswer("Hydration")} className={styles.answer}>
            <span className={styles.answer_text}>b. Hydration</span>
          </button>
          <button onClick={() => handleAnswer("Soothing dry scalp")} className={styles.answer}>
            <span className={styles.answer_text}>c. Soothing dry scalp</span>
          </button>
          <button onClick={() => handleAnswer("Repairs appearance of damaged hair")} className={styles.answer}>
            <span className={styles.answer_text}>d. Repairs appearance of damaged hair</span>
          </button>
          <button onClick={() => handleAnswer("Volume")} className={styles.answer}>
            <span className={styles.answer_text}>e. Volume</span>
          </button>
          <button onClick={() => handleAnswer("Curl and coil enhancing")} className={styles.answer}>
            <span className={styles.answer_text}>f. Curl and coil enhancing</span>
          </button>
        </div>
        <div className={styles.next_back}>
          <a href="/second" className={styles.back_link}>Back</a>
          <button className={styles.button_next}>
            <Link to="/fourth">
              <span className={styles.button_text}>Next question</span>
            </Link>
            <FontAwesomeIcon className={styles.arrow_icon} icon={faArrowRight} />
          </button>
        </div>
      </div>
      <ProgressBar current={3} total={5} className={styles.progress_bar} />
    </div>
  );
}
