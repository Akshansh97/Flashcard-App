import FlashcardList from "../components/FlashcardList";
import { flashcards } from "../data/flashcards";

export default function Home() {
  return (
    <div>
      <h1>Flashcard Generator</h1>
      <FlashcardList cards={flashcards} />
    </div>
  );
}
