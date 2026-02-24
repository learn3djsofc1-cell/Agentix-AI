import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-24 max-w-6xl mt-12 md:mt-24 py-12 md:py-0 w-full">
      
      {/* Status */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]"></div>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Solana Mainnet</span>
        </div>
        <div className="w-[1px] h-4 bg-gray-700 hidden sm:block"></div>
        <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Cascader-Based</span>
      </div>

      {/* Heading */}
      <h1 className="text-[11.5vw] sm:text-6xl md:text-[6.5rem] font-bold leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8 w-full">
        <span className="text-white block">Permissionless</span>
        <span className="bg-gradient-to-r from-white via-[#a7f3d0] to-[#34d399] text-transparent bg-clip-text block pb-2">perpetuals.</span>
      </h1>

      {/* Subheadings */}
      <p className="text-lg sm:text-xl md:text-[1.35rem] text-gray-400 max-w-[42rem] leading-relaxed mb-6 font-light">
        Launch permissionless perpetual markets in ~60s, trade with a pro terminal, and verify every action with portable on-chain receipts. Built for low-latency settlement, hostile-market safety, and full program truth.
      </p>
      
      <p className="text-sm md:text-[0.95rem] text-gray-500 max-w-[42rem] leading-relaxed mb-10 md:mb-12">
        Permissionless perpetuals reimagined. Deploy markets instantly, trade with real collateral, and inspect every move with <span className="text-gray-300 font-medium">Proof Decks</span> that reveal oracle health, crank freshness, matcher params, and upgrade authority — all verifiable on-chain.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
        <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#f0fdfa] to-[#6ee7b7] text-black px-7 py-3.5 rounded-full text-[15px] font-semibold shadow-[0_0_20px_rgba(110,231,183,0.15)] hover:shadow-[0_0_30px_rgba(110,231,183,0.3)] transition-all">
          Launch App
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-7 py-3.5 rounded-full text-[15px] font-medium text-white border border-white/10 hover:bg-white/5 transition-colors text-center">
          Documentation
        </button>
      </div>
    </div>
  );
}
