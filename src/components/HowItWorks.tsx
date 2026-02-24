import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-24 py-24 relative z-10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]"></div>
        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#34d399] uppercase">How it works</span>
      </div>
      
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Wallet to trade in six steps
        </h2>
        <div className="hidden md:flex gap-2">
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
        {/* Card 1 */}
        <div className="min-w-[300px] md:min-w-[340px] h-[420px] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden snap-start shrink-0"
             style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #db2777 100%)' }}>
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold">1</span>
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Connect Wallet</h3>
            <p className="text-white/80 text-sm leading-relaxed">Phantom, Solflare, or any Solana wallet. No signup, no KYC. One click and you are in.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[300px] md:min-w-[340px] h-[420px] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden snap-start shrink-0"
             style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' }}>
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold">2</span>
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Launch or Pick a Market</h3>
            <p className="text-white/80 text-sm leading-relaxed">Deploy a new perpetual market in ~60s or open an existing one.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[300px] md:min-w-[340px] h-[420px] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden snap-start shrink-0"
             style={{ background: 'linear-gradient(135deg, #059669 0%, #0284c7 100%)' }}>
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold">3</span>
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Deposit Collateral</h3>
            <p className="text-white/80 text-sm leading-relaxed">Transfer collateral into the market vault. Fully on-chain, non-custodial, verifiable.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="min-w-[300px] md:min-w-[340px] h-[420px] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden snap-start shrink-0"
             style={{ background: 'linear-gradient(135deg, #9333ea 0%, #ca8a04 100%)' }}>
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold">4</span>
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Trade Perps</h3>
            <p className="text-white/80 text-sm leading-relaxed">Long/short, up to max leverage. Fresh crank required for risk-increasing trades.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="min-w-[300px] md:min-w-[340px] h-[420px] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden snap-start shrink-0"
             style={{ background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)' }}>
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold">5</span>
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Verify</h3>
            <p className="text-white/80 text-sm leading-relaxed">Export receipt JSON with CPI chain and program upgrade authority.</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="min-w-[300px] md:min-w-[340px] h-[420px] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden snap-start shrink-0"
             style={{ background: 'linear-gradient(135deg, #0f766e 0%, #4338ca 100%)' }}>
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold">6</span>
          </div>
          <div className="mt-auto relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Withdraw</h3>
            <p className="text-white/80 text-sm leading-relaxed">Withdraw your funds anytime. Your keys, your coins.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
