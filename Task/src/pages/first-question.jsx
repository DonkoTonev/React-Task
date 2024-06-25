import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <div className={styles.question}>What's your hair type or texture?</div>
        <div className={styles.answers_container}>
          <button onClick={() => handleAnswer("Straight")} className={styles.answer}>
            <span className={styles.answer_text}>a. Straight</span>
          </button>
          <button onClick={() => handleAnswer("Curly")} className={styles.answer}>
            <span className={styles.answer_text}>b. Curly</span>
          </button>
          <button onClick={() => handleAnswer("Wavy")} className={styles.answer}>
            <span className={styles.answer_text}>c. Wavy</span>
          </button>
          <button onClick={() => handleAnswer("Fine")} className={styles.answer}>
            <span className={styles.answer_text}>d. Fine</span>
          </button>
        </div>
        <div className={styles.next_back}>
          <a href="/" className={styles.back_link}>Back</a>
          <button className={styles.button_next}>
            <Link to="/second">
              <span className={styles.button_text}>Next question</span>
            </Link>
            <FontAwesomeIcon className={styles.arrow_icon} icon={faArrowRight} />
          </button>
        </div>
      </div>
      <ProgressBar current={1} total={5} className={styles.progress_bar} />
    </div>
  );
}
