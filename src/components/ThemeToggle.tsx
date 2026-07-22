import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div className="relative w-5 h-5">
        <Sun
          className="absolute inset-0 w-5 h-5 text-amber-600 dark:text-amber-400 transition-all duration-300"
          style={{
            opacity: theme === 'dark' ? 0 : 1,
            transform: theme === 'dark' ? 'scale(0.5) rotate(90deg)' : 'scale(1) rotate(0deg)',
          }}
        />
        <Moon
          className="absolute inset-0 w-5 h-5 text-slate-700 dark:text-sky-300 transition-all duration-300"
          style={{
            opacity: theme === 'dark' ? 1 : 0,
            transform: theme === 'dark' ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-90deg)',
          }}
        />
      </div>
    </button>
  );
}
