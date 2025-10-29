import { Sun, Moon, Settings } from 'lucide-react';

export default function HeaderBar({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 bg-white/70 dark:bg-black/50 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md" />
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Finoria</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </button>
          <button
            aria-label="Settings"
            className="inline-flex items-center justify-center h-10 px-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 text-sm font-medium text-gray-800 dark:text-gray-100 transition-colors gap-2"
          >
            <Settings className="h-4 w-4" />
            Configurações
          </button>
        </div>
      </div>
    </header>
  );
}
