import Flashcard from "./Flashcard";

// FlashcardList Component
// Props:
// - cards: an array of flashcard objects, each with { id, question, answer }
export default function FlashcardList({ cards }) {
  // Play flip sound when a card is hovered
  const handleHover = () => {
    const audioEl = document.getElementById("flip-audio");
    if (audioEl) {
      audioEl.currentTime = 0; // rewind to start
      audioEl
        .play()
        .catch((err) => console.warn("Sound play prevented by browser:", err));
    }
  };

  return (
    <div className="flashcard-list">
      {/* Preload flip audio in the DOM */}
      <audio id="flip-audio" src="/sound/flip.mp3" preload="auto"></audio>

      {/* Render all flashcards */}
      {cards.map((card) => (
        <Flashcard
          key={card.id}           // Unique key required for React lists
          question={card.question}
          answer={card.answer}
          onHover={handleHover}   // Trigger sound on hover
        />
      ))}
    </div>
  );
}

/*
Usage Example:

const sampleCards = [
  { id: 1, question: "What is React?", answer: "A JS library for building UIs" },
  { id: 2, question: "What is JSX?", answer: "A syntax extension for JavaScript" },
];

<FlashcardList cards={sampleCards} />

Notes:
- The hover handler plays an audio file when any card is hovered.
- Make sure your sound file path is correct: `/public/sound/flip.mp3`.
- The `key` prop helps React efficiently update the DOM when cards change.
- You can extend this with a flip animation by modifying the Flashcard component styles.
*/
