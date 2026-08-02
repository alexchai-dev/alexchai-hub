import React, { useState } from 'react';
import { 
  Heart, 
  Copy, 
  Check, 
  X, 
  Coins, 
  ShieldCheck,
  Coffee,
  Sparkles
} from 'lucide-react';

export default function DonateModal({ isOpen, onClose, lang }) {
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen) return null;

  const isEn = lang === 'en';

  // AlexChai Real Verified Crypto Wallets
  const WALLETS = [
    {
      id: 'usdt_trc20',
      name: 'USDT (TRC-20)',
      network: 'TRON NETWORK',
      address: 'TXcBmG9cZDLnQgx51sv7KA5oJs4MyTZB6x',
      color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
    },
    {
      id: 'solana',
      name: 'SOL (Solana)',
      network: 'SOLANA NETWORK',
      address: '8XMNhF6VsFo5mehwz7rfG4efe2CwCDmYcyYvUfteiGcK',
      color: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
    },
    {
      id: 'evm_multi',
      name: 'USDT / USDC / ETH',
      network: 'EVM (Arbitrum, Base, BSC, ETH)',
      address: '0x467b11F086F650D88cF323353881b2470B3A4F34',
      color: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
    },
    {
      id: 'btc',
      name: 'BTC (Bitcoin)',
      network: 'BITCOIN NETWORK',
      address: 'bc1qzc9zk5rm9pm4s80h20tpfnewf63pupx9r34r43',
      color: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
    }
  ];

  const handleCopy = (id, address) => {
    try {
      navigator.clipboard.writeText(address);
    } catch (e) {}
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 card-gradient animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
                <span>{isEn ? 'Support Project & Author' : 'Поддержать Развитие Проекта'}</span>
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {isEn ? 'Direct Web3 Crypto Support' : 'Прямая подпитка хостинга и новых сервисов'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Author Note */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans space-y-2">
          <p className="font-semibold text-amber-300 flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-amber-400 fill-amber-400/20 inline" />
            {isEn ? '100% Free & Open to Ideas' : '100% Бесплатно & Открыто к Вашим Идеям'}
          </p>
          <p className="text-slate-300 text-xs leading-relaxed">
            {isEn 
              ? 'All apps are created without ads or paid subscriptions. Your suggestions, feedback, and ideas for project improvement are warmly welcome directly in Telegram:'
              : 'Приложения создаются без рекламы и платных подписок. Любые ваши пожелания, мысли и идеи по улучшению проекта всегда с радостью принимаются в Telegram:'
            }
          </p>
          <div className="pt-1">
            <a
              href="https://t.me/alexchai_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-slate-950 font-bold text-xs border border-sky-500/40 transition-all active:scale-95"
            >
              <span>💬 {isEn ? 'Send Suggestion / Contact Author' : 'Написать пожелание / Связь с автором'} ➔</span>
            </a>
          </div>
        </div>

        {/* Crypto Wallets List */}
        <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
          {WALLETS.map((w) => {
            const isCopied = copiedKey === w.id;
            return (
              <div 
                key={w.id}
                className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border ${w.color}`}>
                      {w.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{w.network}</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                  <span className="truncate flex-1 select-all text-slate-200 font-mono text-[11px]">
                    {w.address}
                  </span>
                  <button
                    onClick={() => handleCopy(w.id, w.address)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                      isCopied 
                        ? 'bg-emerald-500 text-slate-950 shadow-md' 
                        : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-slate-950 border border-amber-500/40'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Copied!' : 'Скопировано!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Copy' : 'Копировать'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            {isEn 
              ? 'Direct crypto transfers. Thank you for empowering independent software!'
              : 'Прямой перевод в криптовалюте. Спасибо за поддержку инди-разработки!'
            }
          </span>
        </div>

      </div>
    </div>
  );
}
