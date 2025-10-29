import { useEffect, useState } from 'react';
import HeaderBar from './components/HeaderBar.jsx';
import BalanceCard from './components/BalanceCard.jsx';
import StatsGrid from './components/StatsGrid.jsx';
import ActionBubbles from './components/ActionBubbles.jsx';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved || 'dark';
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-black dark:via-neutral-950 dark:to-black text-gray-900 dark:text-white">
      <HeaderBar theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <BalanceCard />
            <StatsGrid />
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 shadow-sm">
              <h3 className="text-base font-semibold mb-3">Ações rápidas</h3>
              <ActionBubbles />
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300/80">Use atalhos para registrar rapidamente receitas, gastos e assinaturas.</p>
            </div>
            <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 shadow-sm">
              <h3 className="text-base font-semibold mb-2">Dica</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200">Mantenha suas assinaturas sob controle. Reveja mensalmente serviços pouco usados.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
