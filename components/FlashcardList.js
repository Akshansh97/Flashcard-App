import { useState } from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleFlip = (id) => {
    // If clicking the same card, unflip it; otherwise flip new card
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <div className="flashcard-list">
      {cards.map((card) => (
        <Flashcard
          key={card.id}
          id={card.id}
          question={card.question}
          answer={card.answer}
          flipped={flippedCardId === card.id}
          onFlip={handleFlip}
        />
      ))}
    </div>
  );
}
