import { useState } from 'react';
import { Eye, EyeOff, Copy } from 'lucide-react';
import { toast } from 'sonner';

export default function VirtualCard({ card, showFull = false }) {
  const [flipped, setFlipped] = useState(false);
  const [showCvv, setShowCvv] = useState(false);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiado!`);
  };

  const isBlack = card.type === 'black';

  return (
    <div className={`relative w-full max-w-md mx-auto ${isBlack ? 'card-black' : 'card-simple'} rounded-3xl p-8 text-white h-64 cursor-pointer transition-all duration-700`}
         style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
         onClick={() => setFlipped(!flipped)}>

      {/* Frente */}
      <div className="absolute inset-0 p-8" style={{ backfaceVisibility: 'hidden' }}>
        <div className="flex justify-between">
          <div className="text-2xl font-bold">{isBlack ? 'BLACK' : 'SIMPLE'}</div>
          {isBlack && <span className="text-amber-400 text-2xl">★</span>}
        </div>

        <div className="mt-12 font-mono text-2xl tracking-widest">
          {showFull ? card.number : card.number.replace(/\d{4}(?!$)/g, '•••• ')}
        </div>

        <div className="flex justify-between mt-10">
          <div>
            <p className="text-xs opacity-70">TITULAR</p>
            <p className="font-medium">UTILIZADOR EASY</p>
          </div>
          <div>
            <p className="text-xs opacity-70">VALIDADE</p>
            <p className="font-medium">{card.expiry}</p>
          </div>
        </div>
      </div>

      {/* Verso */}
      <div className="absolute inset-0 bg-black/90 rounded-3xl p-8 flex flex-col justify-center" 
           style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
        <div className="bg-white/20 h-10 w-full rounded"></div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="text-xs opacity-70">CVV</p>
            <div className="flex items-center gap-3">
              <p className="font-mono text-3xl">{showCvv ? card.cvv : '•••'}</p>
              <button onClick={(e) => { e.stopPropagation(); setShowCvv(!showCvv); }}>
                {showCvv ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); copyToClipboard(card.cvv, "CVV"); }} className="text-xs flex items-center gap-1">
            <Copy size={16} /> Copiar
          </button>
        </div>
      </div>
    </div>
  );
}
