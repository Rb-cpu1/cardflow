import VirtualCard from '../components/VirtualCard';

export default function MyCards({ cards }) {
  if (cards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Você ainda não tem cartões</h2>
        <p className="text-gray-400 mt-4">Compre seu primeiro cartão na loja</p>
        <a href="/cards" className="inline-block mt-8 px-10 py-4 bg-emerald-500 rounded-2xl font-semibold">
          Ver Cartões Disponíveis
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Meus Cartões Virtuais</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        {cards.map((card) => (
          <div key={card.id} className="glass rounded-3xl p-8">
            <VirtualCard card={card} showFull={true} />
            
            <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-gray-400">Limite Total</p>
                <p className="font-bold text-xl text-emerald-400">
                  {card.limit.toLocaleString()} MT
                </p>
              </div>
              <div>
                <p className="text-gray-400">Utilizado</p>
                <p className="font-bold text-xl">{card.used.toLocaleString()} MT</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
