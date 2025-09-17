import FlashcardList from "../components/FlashcardList";
import { flashcards } from "../data/flashcards";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Home Page
 * Displays the flashcard generator along with a theme toggle.
 */
export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-color)", // Optional: support for theme-based background
        color: "var(--text-color)", // Optional: support for theme-based text color
        transition: "all 0.3s ease",
      }}
    >
      {/* Header with Theme Toggle */}
      <header></header>

      {/* Main Content */}
      <main style={{ textAlign: "center", marginTop: "20px", flex: 1 }}>
        <h1
         
        >
          Flashcard Generator
         
        </h1>{" "}
        <p  style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 20px",
          }}> <ThemeToggle /></p>
        <p>Toggle to change the theme to light or dark!</p>
        <FlashcardList cards={flashcards} />
      </main>
    </div>
  );
}

/*
Enhancements & Notes:
1. Added optional `backgroundColor` and `color` for light/dark theme support if you add CSS variables in your global styles.
2. Added a small description below the heading to guide users.
3. The layout uses flexbox to keep header at top and main content centered.
4. You can extend this page with:
   - Filtering by categories
   - Search for questions
   - Flip animation synced with hover sound
*/
