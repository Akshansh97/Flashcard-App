# Flashcard Generator

An interactive flashcard app built with Next.js and React. Hover over cards to reveal answers with a smooth 3D flip animation. The project demonstrates modern React component design, CSS module styling, and clean state/prop management for an engaging user experience. Easily extendable for learning, revision, or portfolio demos.

## Features
- Interactive flashcards with hover flip animation
- Centered question and answer content for clear readability
- Smooth transitions and back-flip delay
- Easily add, edit, or remove flashcards in `data/flashcards.js`
- Responsive and visually appealing card layout

## Folder Structure
```
flashcard-app/
├── pages/
│   └── index.js           # Main page
├── components/
│   ├── Flashcard.js       # Single flashcard component
│   └── FlashcardList.js   # Displays all flashcards
├── data/
│   └── flashcards.js      # Array of question-answer objects
├── styles/
│   └── Flashcard.module.css  # Card flip and layout styles
├── package.json
└── README.md
```

## Getting Started
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flashcard-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Add Flashcards
Edit `data/flashcards.js`:
```js
export const flashcards = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building UIs" },
  { id: 2, question: "What is JSX?", answer: "A syntax extension for JavaScript that looks like HTML" },
  // Add more flashcards here
];
```

## Tech Stack
- **Next.js 15** – React framework for server-side rendering and routing
- **React** – Component-based UI
- **CSS Modules** – Scoped styling for each component

## Customizing Styles
- Modify `styles/Flashcard.module.css` for card size, colors, and flip animation
- Adjust `.card`, `.front`, `.back`, and `.inner` classes for different effects

## Future Enhancements
- Add dark/light mode toggle
- Add category filters or search for flashcards
- Save user progress using localStorage

## License
This project is open-source.