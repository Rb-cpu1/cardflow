import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Cartões Virtuais.<br />
          <span className="text-emerald-500">Rápidos. Seguros.</span>
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Crie cartões Visa e Mastercard virtuais em segundos. Pagamentos online em todo o mundo com EasyCard.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button 
            onClick={() => navigate('/register')}
            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-2xl text-lg font-semibold flex items-center gap-2"
          >
            Começar Agora <ArrowRight />
          </button>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl text-left">
            <Shield className="w-12 h-12 text-emerald-400" />
            <h3 className="text-2xl font-semibold mt-6">Segurança Total</h3>
            <p className="text-gray-400 mt-3">Criptografia avançada e proteção contra fraudes.</p>
          </div>
          <div className="glass p-8 rounded-3xl text-left">
            <Zap className="w-12 h-12 text-emerald-400" />
            <h3 className="text-2xl font-semibold mt-6">Instantâneo</h3>
            <p className="text-gray-400 mt-3">Cartão pronto em menos de 30 segundos.</p>
          </div>
          <div className="glass p-8 rounded-3xl text-left">
            <Globe className="w-12 h-12 text-emerald-400" />
            <h3 className="text-2xl font-semibold mt-6">Uso Global</h3>
            <p className="text-gray-400 mt-3">Aceito em mais de 100 milhões de sites.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
