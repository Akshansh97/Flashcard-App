import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * ThemeToggle Component
 * 
 * Allows users to switch between light and dark themes using Next.js `next-themes`.
 * The component waits until it is mounted to avoid hydration mismatch issues.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme(); // Access current theme and setter
  const [mounted, setMounted] = useState(false); // Track if component is mounted

  // Set mounted to true after first render to prevent SSR mismatch
  useEffect(() => setMounted(true), []);

  // Prevent rendering on server side to avoid mismatches
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // Toggle theme
      style={{
        padding: "12px",
        borderRadius: "8px",
        cursor: "pointer",
        background: theme === "dark" ? "#333" : "#948e8eff",
        color: theme === "dark" ? "#fff" : "#000",
        border: "none",
        height: "3rem",
        marginTop: "5px",
        transition: "all 0.3s ease", // Smooth transition when theme changes
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

/*
Usage:
- Place <ThemeToggle /> anywhere in your app layout or navbar.
- Requires Next.js with the `next-themes` provider configured in _app.js:
  
  import { ThemeProvider } from "next-themes";

  export default function App({ Component, pageProps }) {
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }

Notes:
- The `mounted` check prevents issues with server-side rendering where the theme is not yet known.
- The button uses inline styles for simplicity but can be moved to a CSS module for better organization.
- A smooth transition makes the theme change look visually appealing.
*/
