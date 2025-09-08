import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        
        padding: "8px 12px",
        borderRadius: "8px",
        cursor: "pointer",
        background: theme === "dark" ? "#333" : "#948e8eff",
        color: theme === "dark" ? "#ffffffff" : "#000",
        border: "none",
        margin: "10px",
      }}
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
