import { CreditCard, Crown } from 'lucide-react';
import { toast } from 'sonner';
import VirtualCard from '../components/VirtualCard';

export default function CardShop({ balance, updateBalance, addCard }) {
  const buyCard = (type, price) => {
    if (balance < price) {
      toast.error("Saldo insuficiente. Recarregue sua carteira.");
      return;
    }

    updateBalance(-price);
    addCard(type);
    
    toast.success(`✅ Cartão ${type === 'black' ? 'Black Premium' : 'Simples'} adquirido com sucesso!`, {
      description: `Limite de ${type === 'black' ? '500.000' : '50.000'} MT ativado.`,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Escolha seu Cartão Virtual</h1>
      <p className="text-center text-gray-400 mb-12">Pagamentos online seguros e instantâneos</p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Cartão Simples */}
        <div className="glass rounded-3xl p-10 border border-emerald-500/20 hover:border-emerald-500 transition-all">
          <div className="flex justify-center">
            <VirtualCard card={{ type: 'simple', number: '4111 2222 3333 4444', expiry: '12/29', cvv: '424' }} />
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold">Cartão Simples</h3>
            <p className="text-emerald-400 text-4xl font-bold mt-2">250 MT</p>
            <p className="text-sm text-gray-400 mt-1">Taxa única • Limite: 50.000 MT</p>
            <button onClick={() => buyCard('simple', 250)} className="mt-8 w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-semibold text-lg">
              Adquirir Cartão Simples
            </button>
          </div>
        </div>

        {/* Cartão Black Premium */}
        <div className="glass rounded-3xl p-10 border border-amber-500/30 hover:border-amber-400 transition-all relative">
          <div className="absolute -top-4 right-6 bg-amber-500 text-black text-xs font-bold px-6 py-1 rounded-full">MAIS POPULAR</div>
          <div className="flex justify-center">
            <VirtualCard card={{ type: 'black', number: '5555 6666 7777 8888', expiry: '12/29', cvv: '888' }} />
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Crown className="text-amber-400" /> Cartão Black Premium
            </h3>
            <p className="text-amber-400 text-4xl font-bold mt-2">500 MT</p>
            <p className="text-sm text-gray-400 mt-1">Taxa única • Limite: 500.000 MT</p>
            <button onClick={() => buyCard('black', 500)} className="mt-8 w-full bg-amber-500 hover:bg-amber-400 text-black py-4 rounded-2xl font-semibold text-lg">
              Adquirir Black Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
