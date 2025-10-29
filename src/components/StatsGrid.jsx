import { TrendingUp, TrendingDown, Repeat, Clock } from 'lucide-react';

const Item = ({ icon: Icon, label, value, accent }) => (
  <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3">
      <div className={`h-9 w-9 rounded-xl flex items-center justify-center text-white ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300/80">{label}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  </div>
);

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Item icon={TrendingUp} label="Total de entradas" value="R$ 4.200" accent="bg-emerald-500" />
      <Item icon={TrendingDown} label="Total de saídas" value="R$ 2.970" accent="bg-rose-500" />
      <Item icon={Repeat} label="Assinaturas" value="R$ 389" accent="bg-sky-500" />
      <Item icon={Clock} label="Pendentes" value="R$ 210" accent="bg-amber-500" />
    </section>
  );
}
