export function Environments() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-24 py-24 relative z-10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]"></div>
        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#34d399] uppercase">Environments</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
        Two modes. <span className="text-[#34d399]">One standard.</span>
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-24">
        Production-ready trading and a builder sandbox. Same protocol, same proof system.
      </p>

      {/* Flowchart Mock */}
      <div className="relative w-full h-[400px] flex flex-col items-center justify-center font-mono text-xs overflow-x-auto">
        <div className="min-w-[800px] w-full relative h-full">
          {/* Mainnet Line */}
          <div className="absolute top-[30%] left-0 w-full flex items-center">
            <div className="border border-[#34d399]/30 rounded-full px-4 py-1.5 flex items-center gap-2 bg-[#052e16]/50 mr-4 z-10 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399]"></div>
              <span className="text-[#34d399]">mainnet</span>
            </div>
            <div className="h-px bg-[#34d399]/50 flex-grow relative">
              <div className="absolute left-[10%] -top-1.5 w-3 h-3 rounded-full bg-[#34d399] border-2 border-[#050505]"></div>
              <div className="absolute left-[10%] top-4 text-gray-500 whitespace-nowrap -translate-x-1/2">market deployed</div>
              
              <div className="absolute left-[40%] -top-1.5 w-3 h-3 rounded-full bg-[#34d399] border-2 border-[#050505]"></div>
              <div className="absolute left-[40%] -top-6 text-gray-600 whitespace-nowrap -translate-x-1/2">14:02:38</div>
              <div className="absolute left-[40%] top-4 text-gray-500 whitespace-nowrap -translate-x-1/2">liquidity added</div>

              <div className="absolute left-[70%] -top-1.5 w-3 h-3 rounded-full bg-[#34d399] border-2 border-[#050505]"></div>
              <div className="absolute left-[70%] -top-6 text-gray-600 whitespace-nowrap -translate-x-1/2">14:03:01</div>
              <div className="absolute left-[70%] top-4 text-gray-500 whitespace-nowrap -translate-x-1/2">trade executed</div>

              <div className="absolute left-[90%] -top-1.5 w-3 h-3 rounded-full border border-[#34d399] bg-[#050505] flex items-center justify-center">
                <div className="w-1 h-1 bg-[#34d399] rounded-full"></div>
              </div>
              <div className="absolute left-[90%] top-4 text-gray-500 whitespace-nowrap -translate-x-1/2">receipt issued</div>
            </div>
          </div>

          {/* Devnet Line */}
          <div className="absolute top-[60%] left-[20%] w-[80%] flex items-center">
            <div className="border border-[#0ea5e9]/30 rounded-full px-4 py-1.5 flex items-center gap-2 bg-[#0c4a6e]/50 mr-4 z-10 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div>
              <span className="text-[#0ea5e9]">devnet-market</span>
            </div>
            <div className="h-px bg-[#0ea5e9]/30 border-dashed border-t border-[#0ea5e9]/50 flex-grow relative">
              <div className="absolute left-[20%] -top-1.5 w-3 h-3 rounded-full bg-[#0ea5e9] border-2 border-[#050505]"></div>
              <div className="absolute left-[20%] top-4 text-gray-500 whitespace-nowrap -translate-x-1/2">tokens minted</div>

              <div className="absolute left-[50%] -top-1.5 w-3 h-3 rounded-full bg-[#0ea5e9] border-2 border-[#050505]"></div>
              <div className="absolute left-[50%] top-4 text-gray-500 whitespace-nowrap -translate-x-1/2">test trade</div>

              <div className="absolute left-[80%] -top-1.5 w-3 h-3 rounded-full border border-[#0ea5e9] bg-[#050505] flex items-center justify-center">
                <div className="w-1 h-1 bg-[#0ea5e9] rounded-full"></div>
              </div>
              <div className="absolute left-[80%] top-4 text-gray-500 whitespace-nowrap -translate-x-1/2">verified</div>
            </div>
          </div>
          
          {/* Vertical connection */}
          <div className="absolute top-[30%] left-[25%] w-px h-[30%] border-l border-dashed border-white/20"></div>
        </div>
      </div>
    </div>
  );
}
