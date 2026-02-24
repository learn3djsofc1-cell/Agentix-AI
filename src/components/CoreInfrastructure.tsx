import { ArrowRight } from 'lucide-react';

export function CoreInfrastructure() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-24 py-16 md:py-24 relative z-10">
      {/* Header */}
      <div className="mb-16 md:mb-20">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]"></div>
          <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Core Infrastructure</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white max-w-2xl">
          Everything you need to trade, build, and verify.
        </h2>
      </div>

      {/* Trade Card */}
      <div className="w-full rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col lg:flex-row relative">
        {/* Noise overlay for card */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat'
          }}
        ></div>

        {/* Left Content */}
        <div className="p-8 md:p-12 lg:w-[45%] flex flex-col justify-between relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399]"></div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Trade</span>
            </div>
            
            <h3 className="text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white mb-6">
              Perpetual futures,<br />fully on-chain.
            </h3>
            
            <p className="text-gray-400 text-[15px] leading-relaxed mb-4">
              Long or short any asset with up to 50x leverage. Real collateral, real settlement, and every position fully verifiable on Solana.
            </p>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-12">
              Every order, position update, and close produces a receipt with tx signature + invoked programs (including CPI).
            </p>
          </div>

          <div>
            <div className="flex items-start gap-8 md:gap-12 mb-10">
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold text-white">50x</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-500 uppercase leading-tight">Max<br/>Leverage</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold text-white">~350ms</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-500 uppercase leading-tight">Settlement</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold text-white">No signup</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-500 uppercase leading-tight">No KYC</span>
              </div>
            </div>

            <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#f0fdfa] to-[#6ee7b7] text-black px-6 py-3 rounded-full text-[14px] font-semibold shadow-[0_0_20px_rgba(110,231,183,0.15)] hover:shadow-[0_0_30px_rgba(110,231,183,0.3)] transition-all w-max">
              Start Trading
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Content (Mock UI) */}
        <div className="lg:w-[55%] bg-[#050505] border-l border-white/5 relative overflow-hidden min-h-[300px] lg:min-h-auto flex flex-col">
          {/* Mock Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <div className="ml-4 flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md">
                <div className="w-3 h-3 text-[#34d399]">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <span className="text-xs font-semibold text-white">SOL-PERP</span>
                <span className="text-xs font-medium text-[#34d399]">$142.87</span>
                <span className="text-[10px] font-medium text-[#34d399]">+4.28%</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-medium text-gray-500">
              <span>1H</span>
              <span>4H</span>
              <span className="bg-white/10 text-white px-1.5 py-0.5 rounded">1D</span>
              <span>1W</span>
            </div>
          </div>

          {/* Mock Chart Area */}
          <div className="flex-grow relative p-4 min-h-[200px]">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-8 px-4 pointer-events-none">
              <div className="w-full h-px bg-white/5 border-dashed border-t border-white/5"></div>
              <div className="w-full h-px bg-white/5 border-dashed border-t border-white/5"></div>
              <div className="w-full h-px bg-white/5 border-dashed border-t border-white/5"></div>
            </div>
            <div className="absolute inset-0 flex justify-between px-12 py-4 pointer-events-none">
              <div className="h-full w-px bg-white/5 border-dashed border-l border-white/5"></div>
              <div className="h-full w-px bg-white/5 border-dashed border-l border-white/5"></div>
            </div>

            {/* Chart Line */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path 
                d="M0,80 Q10,75 20,60 T40,50 T60,30 T80,20 T100,10" 
                fill="none" 
                stroke="#34d399" 
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              {/* Gradient fill under line */}
              <path 
                d="M0,80 Q10,75 20,60 T40,50 T60,30 T80,20 T100,10 L100,100 L0,100 Z" 
                fill="url(#chart-gradient)" 
                opacity="0.2"
              />
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Current Price Marker */}
            <div className="absolute right-0 top-[10%] flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]"></div>
            </div>
            
            {/* Tooltip Mock */}
            <div className="absolute left-[60%] top-[30%] bg-[#111] border border-white/10 rounded px-2 py-1 text-[10px] text-white font-mono">
              $148.32
            </div>
          </div>

          {/* Mock Order Entry */}
          <div className="p-4 border-t border-white/5 flex flex-wrap items-center justify-between bg-[#0a0a0a] gap-4">
            <div className="flex gap-2">
              <button className="bg-[#052e16] text-[#34d399] border border-[#34d399]/30 px-4 py-1.5 rounded text-xs font-medium">Long</button>
              <button className="bg-transparent text-gray-400 border border-white/10 hover:bg-white/5 px-4 py-1.5 rounded text-xs font-medium">Short</button>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[9px] text-gray-500 uppercase font-semibold">Size</span>
                <span className="text-xs font-mono text-white">1,000 <span className="text-gray-500">USDC</span></span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[9px] text-gray-500 uppercase font-semibold">Leverage</span>
                <span className="text-xs font-mono text-white">10x</span>
              </div>
              <button className="bg-[#052e16] text-[#34d399] px-4 py-2 rounded text-xs font-medium hover:bg-[#064e3b] transition-colors">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
