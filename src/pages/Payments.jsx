import { useState } from 'react';
import { toast } from 'sonner';
import VirtualCard from '../components/VirtualCard';

export default function Payments({ cards }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [amount, setAmount] = useState('');
  const [merchant, setMerchant] = useState('');

  const handlePayment = () => {
    if (!selectedCard) return toast.error("Selecione um cartão");
    if (!amount || parseInt(amount) < 10) return toast.error("Valor mínimo: 10 MT");
    if (!merchant) return toast.error("Digite o nome do estabelecimento");

    toast.success("Pagamento realizado com sucesso!", {
      description: `${amount} MT pagos para ${merchant} usando seu cartão ${selectedCard.type.toUpperCase()}`,
    });

    setAmount('');
    setMerchant('');
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Fazer Pagamento Online</h1>
      <p className="text-gray-400">Use seus cartões virtuais para pagar em qualquer site</p>

      <div className="grid md:grid-cols-5 gap-8 mt-12">
        {/* Lista de Cartões */}
        <div className="md:col-span-3 space-y-6">
          <h3 className="font-semibold text-lg mb-4">Seus Cartões</h3>
          {cards.length === 0 ? (
            <p className="text-gray-400">Você não tem cartões. Compre um primeiro.</p>
          ) : (
            cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={`p-4 rounded-2xl cursor-pointer transition-all ${
                  selectedCard?.id === card.id ? 'ring-2 ring-emerald-500 bg-gray-900' : 'glass'
                }`}
              >
                <VirtualCard card={card} />
              </div>
            ))
          )}
        </div>

        {/* Formulário de Pagamento */}
        <div className="md:col-span-2">
          <div className="glass rounded-3xl p-8 sticky top-24">
            <h3 className="font-semibold text-xl mb-6">Detalhes do Pagamento</h3>
            
            <input
              type="text"
              placeholder="Nome do site / loja (ex: Amazon, Shein, etc)"
              value={merchant}
              onChange={(e) => setMerchant(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 mb-5"
            />

            <input
              type="number"
              placeholder="Valor do pagamento (MT)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 text-2xl"
            />

            <button
              onClick={handlePayment}
              className="mt-8 w-full py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-bold text-xl hover:brightness-110 transition"
            >
              CONFIRMAR PAGAMENTO
            </button>

            <p className="text-center text-xs text-gray-500 mt-6">
              Esta é uma simulação. Nenhum valor real será cobrado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
