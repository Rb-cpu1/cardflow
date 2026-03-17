import { LogOut, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ user, isDark, setIsDark }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Deseja sair da conta?")) {
      window.location.reload();
    }
  };

  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-3xl font-bold">E</div>
          <h1 className="text-3xl font-bold tracking-tighter">EasyCard</h1>
        </div>

        {user && (
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('/dashboard')} className="hover:text-emerald-400 transition">Início</button>
            <button onClick={() => navigate('/cards')} className="hover:text-emerald-400 transition">Cartões</button>
            <button onClick={() => navigate('/mycards')} className="hover:text-emerald-400 transition">Meus Cartões</button>
            <button onClick={() => navigate('/wallet')} className="hover:text-emerald-400 transition">Carteira</button>
            <button onClick={() => navigate('/payments')} className="hover:text-emerald-400 transition">Pagar</button>

            <div className="flex items-center gap-4">
              <button onClick={() => setIsDark(!isDark)} className="p-2 hover:bg-gray-800 rounded-xl">
                {isDark ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <div className="flex items-center gap-3 bg-gray-900 px-4 py-2 rounded-2xl">
                <span className="text-sm font-medium">{user.name}</span>
                <button onClick={handleLogout} className="text-red-400 hover:text-red-500">
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
