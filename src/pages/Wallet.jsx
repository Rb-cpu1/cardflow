import { useState } from 'react';
import { toast } from 'sonner';
import { Wallet as WalletIcon, ArrowRight } from 'lucide-react';

export default function Wallet({ balance, updateBalance, setBonus }) {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDeposit = (method) => {
    const value = parseInt(amount);
    if (!value || value < 100) {
      toast.error("O valor mínimo de recarga é 100 MT");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      updateBalance(value);
      
      if (value >= 1600) {
        setBonus(prev => prev + 500);
        toast.success(`🎉 Recarga de ${value.toLocaleString()} MT realizada via ${method}!`, {
          description: "Bónus de 500 MT foi adicionado à sua conta!",
        });
      } else {
        toast.success(`Recarga de ${value.toLocaleString()} MT realizada com sucesso via ${method}`);
      }
      
      setAmount('');
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <WalletIcon className="w-9 h-9 text-emerald-400" />
        <h1 className="text-4xl font-bold">Minha Carteira</h1>
      </div>

      <div className="glass rounded-3xl p-8">
        <p className="text-gray-400">Saldo Atual</p>
        <p className="text-5xl font-bold text-emerald-400 mt-3">
          {balance.toLocaleString()} <span className="text-2xl">MT</span>
        </p>

        <div className="mt-10">
          <label className="block text-sm text-gray-400 mb-3">Valor a Recarregar (MT)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex: 2000"
            className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-6 py-5 text-3xl focus:outline-none focus:border-emerald-500"
          />
        </div>

        <p className="text-xs text-amber-400 mt-4">* Depósito acima de 1.600 MT ganha +500 MT de bónus</p>

        <div className="grid grid-cols-2 gap-4 mt-10">
          <button
            onClick={() => handleDeposit('eMola')}
            disabled={loading}
            className="py-6 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70"
          >
            Pagar com eMola
          </button>

          <button
            onClick={() => handleDeposit('M-Pesa')}
            disabled={loading}
            className="py-6 bg-green-600 hover:bg-green-500 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70"
          >
            Pagar com M-Pesa
          </button>
        </div>
      </div>
    </div>
  );
}
