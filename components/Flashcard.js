import styles from "../styles/Flashcard.module.css";

export default function Flashcard({ question, answer, onHover }) {
  return (
    <div className={styles.card} onMouseEnter={onHover}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <h3>{question}</h3>
        </div>
        <div className={styles.back}>
          <h5>{answer}</h5>
        </div>
      </div>
    </div>
  );
}
