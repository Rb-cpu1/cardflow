import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Register({ loginUser }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || phone.length < 9) {
      toast.error("Preencha todos os campos corretamente");
      return;
    }
    loginUser(name);
    navigate('/dashboard');
    toast.success("Conta criada com sucesso! 🎉");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass p-10 rounded-3xl w-full max-w-md">
        <h2 className="text-4xl font-bold text-center">Criar Conta</h2>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-6 py-4"
          />
          <input
            type="tel"
            placeholder="Número de telefone (+258)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-6 py-4"
          />
          <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 rounded-2xl font-semibold text-lg">
            Criar Conta Grátis
          </button>
        </form>
      </div>
    </div>
  );
}
