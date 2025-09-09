// Import the CSS module for styling the flashcard
import styles from "../styles/Flashcard.module.css";

// Flashcard component
// Props:
// - question: the text to show on the front of the card
// - answer: the text to show on the back of the card
// - onHover: function to handle hover events (e.g., flipping the card)
export default function Flashcard({ question, answer, onHover }) {
  return (
    <div
      className={styles.card}   // Main container for the flashcard
      onMouseEnter={onHover}     // Trigger onHover when user hovers over the card
    >
      <div className={styles.inner}>
        {/* Front of the card */}
        <div className={styles.front}>
          <h3>{question}</h3>
        </div>

        {/* Back of the card */}
        <div className={styles.back}>
          <h5>{answer}</h5>
        </div>
      </div>
    </div>
  );
}

/*
Usage Example:

import Flashcard from "./Flashcard";

function FlashcardList() {
  const handleHover = () => console.log("Card hovered!");

  return (
    <Flashcard
      question="What is React?"
      answer="A JavaScript library for building user interfaces."
      onHover={handleHover}
    />
  );
}

Explanation:
- This component uses a CSS module for scoped styles.
- It has a "flip" structure where front and back content can be styled for animations.
- The `onHover` prop allows parent components to control behavior like flipping the card.
*/
