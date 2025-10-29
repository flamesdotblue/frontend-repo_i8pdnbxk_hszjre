import { ArrowDownCircle, ArrowUpCircle, Wallet } from 'lucide-react';
import { useEffect, useState } from 'react';

function Shimmer() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 w-32 bg-white/40 dark:bg-white/10 rounded" />
      <div className="h-12 w-48 bg-white/50 dark:bg-white/10 rounded" />
      <div className="h-3 w-full bg-white/40 dark:bg-white/10 rounded" />
      <div className="grid grid-cols-2 gap-3">
        <div className="h-10 bg-white/40 dark:bg-white/10 rounded" />
        <div className="h-10 bg-white/40 dark:bg-white/10 rounded" />
      </div>
    </div>
  );
}

export default function BalanceCard() {
  const [loading, setLoading] = useState(true);
  const [income, setIncome] = useState(4200);
  const [expenses, setExpenses] = useState(2970);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const balance = income - expenses;
  const total = Math.max(income + expenses, 1);
  const incomePct = Math.round((income / total) * 100);
  const expensePct = 100 - incomePct;

  return (
    <section className="relative overflow-hidden rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur border border-black/5 dark:border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)]">
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(1200px 400px at -10% -20%, rgba(16,185,129,0.15), transparent 60%)'}} />
      <div className="relative">
        {loading ? (
          <Shimmer />
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/90 text-white flex items-center justify-center shadow">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300/80">Saldo do mês</p>
                <p className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  R$ {balance.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1"><ArrowUpCircle className="h-4 w-4" /> Entradas</span>
                <span className="text-gray-700 dark:text-gray-200">R$ {income.toLocaleString('pt-BR')}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: `${incomePct}%` }} />
              </div>
              <div className="flex items-center justify-between text-sm pt-2">
                <span className="text-rose-600 dark:text-rose-400 font-medium flex items-center gap-1"><ArrowDownCircle className="h-4 w-4" /> Saídas</span>
                <span className="text-gray-700 dark:text-gray-200">R$ {expenses.toLocaleString('pt-BR')}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-rose-500 to-red-500" style={{ width: `${expensePct}%` }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="group rounded-xl px-4 py-3 bg-emerald-600 text-white font-medium shadow hover:shadow-md transition-shadow">
                Adicionar receita
              </button>
              <button className="group rounded-xl px-4 py-3 bg-rose-600 text-white font-medium shadow hover:shadow-md transition-shadow">
                Adicionar gasto
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
