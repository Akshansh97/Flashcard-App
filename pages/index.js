import FlashcardList from "../components/FlashcardList";
import { flashcards } from "../data/flashcards";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px 20px",
        }}
      >
        <ThemeToggle />
      </header>

      <main style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Flashcard Generator</h1>
        <FlashcardList cards={flashcards} />
      </main>
    </div>
  );
}
