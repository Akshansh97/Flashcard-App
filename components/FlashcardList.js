import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
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
      {/* preload audio into DOM */}
      <audio
        id="flip-audio"
        src="/sound/flip.mp3"
        preload="auto"
      ></audio>

      {cards.map((card) => ( // add key prop here
        <Flashcard
          key={card.id}
          id={card.id}
          question={card.question}
          answer={card.answer}
          onHover={handleHover} // pass hover handler as prop
        />
      ))}
    </div>
  );
}
