import { PlusCircle, CreditCard, Home, ShoppingCart, Mic } from 'lucide-react';

const Bubble = ({ children, color }) => (
  <button className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white ${color} shadow hover:shadow-md active:scale-95 transition-all`}>{children}</button>
);

export default function ActionBubbles() {
  return (
    <div className="no-scrollbar overflow-x-auto">
      <div className="flex items-center gap-3 min-w-max">
        <Bubble color="bg-rose-600"><PlusCircle className="h-4 w-4" /> Adicionar gasto</Bubble>
        <Bubble color="bg-emerald-600"><PlusCircle className="h-4 w-4" /> Adicionar receita</Bubble>
        <Bubble color="bg-sky-600"><RepeatIcon /> Nova assinatura</Bubble>
        <Bubble color="bg-amber-600"><Home className="h-4 w-4" /> Despesas casa</Bubble>
        <Bubble color="bg-teal-600"><ShoppingCart className="h-4 w-4" /> Gastos pessoais</Bubble>
        <button className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-800 dark:text-gray-100 shadow hover:shadow-md active:scale-95 transition-all">
          <Mic className="h-4 w-4" /> Falar
        </button>
      </div>
    </div>
  );
}

function RepeatIcon() {
  // simple custom repeat icon to avoid uncertain imports
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 1l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 5h18M7 23l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 19H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
