import styles from "../styles/Flashcard.module.css";

export default function Flashcard({ question, answer }) {
  return (
    <div className={styles.card}>
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
