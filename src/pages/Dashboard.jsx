import { CreditCard, Wallet, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ user, balance, bonus, cardsCount }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold">Olá, {user.name.split(' ')[0]} 👋</h1>
      <p className="text-gray-400 mt-2">Aqui está o resumo da sua conta</p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="glass rounded-3xl p-8">
          <p className="text-gray-400">Saldo Disponível</p>
          <p className="text-5xl font-bold text-emerald-400 mt-4">{balance.toLocaleString()} MT</p>
        </div>

        <div className="glass rounded-3xl p-8">
          <p className="text-gray-400">Bónus</p>
          <p className="text-5xl font-bold text-amber-400 mt-4">{bonus} MT</p>
        </div>

        <div className="glass rounded-3xl p-8 cursor-pointer" onClick={() => navigate('/mycards')}>
          <p className="text-gray-400">Cartões Ativos</p>
          <p className="text-5xl font-bold mt-4">{cardsCount}</p>
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        <button onClick={() => navigate('/wallet')} className="flex-1 py-6 bg-emerald-600 rounded-3xl text-xl font-semibold">
          Recarregar Carteira
        </button>
        <button onClick={() => navigate('/cards')} className="flex-1 py-6 bg-white text-black rounded-3xl text-xl font-semibold">
          Comprar Cartão
        </button>
      </div>
    </div>
  );
}
