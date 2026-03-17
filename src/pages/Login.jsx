import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Login({ loginUser }) {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone.length < 9) {
      toast.error("Digite um número válido");
      return;
    }
    loginUser("Utilizador EasyCard");
    navigate('/dashboard');
    toast.success("Bem-vindo de volta!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass p-10 rounded-3xl w-full max-w-md">
        <h2 className="text-4xl font-bold text-center">Entrar</h2>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <input
            type="tel"
            placeholder="Número de telefone (+258)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500"
          />
          <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 rounded-2xl font-semibold text-lg">
            Entrar
          </button>
        </form>
        <p className="text-center mt-6 text-gray-400">
          Não tem conta? <span onClick={() => navigate('/register')} className="text-emerald-400 cursor-pointer">Criar conta</span>
        </p>
      </div>
    </div>
  );
}
