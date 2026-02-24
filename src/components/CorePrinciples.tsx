export function CorePrinciples() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-24 py-24 relative z-10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]"></div>
        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#34d399] uppercase">Core Principles</span>
      </div>
      
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-32">
        Built different.
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-32">
          {/* Block 1 */}
          <div>
            <div className="inline-block border border-white/10 rounded-full px-3 py-1 mb-6">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase">Permissionless</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Launch markets<br/>
              <span className="text-[#34d399]">permissionlessly</span><br/>
              in under a minute
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Riptide lets anyone deploy Cascader-style perp markets with real collateral, on-chain settlement, and full program truth — no KYC, no approvals.
            </p>
          </div>

          {/* Block 2 */}
          <div>
            <div className="inline-block border border-white/10 rounded-full px-3 py-1 mb-6">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase">Verifiable</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              On-chain receipts<br/>
              <span className="text-[#34d399]">for every action.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Each receipt includes the tx signature, invoked programs...
            </p>
          </div>
          
          {/* Block 3 */}
          <div>
            <div className="inline-block border border-white/10 rounded-full px-3 py-1 mb-6">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase">Composable</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Flexible oracle modes:<br/>
              <span className="text-[#34d399]">Pyth, Chainlink,<br/>or Authority</span> (for<br/>devnet testing)
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Oracle health and staleness are surfaced on Proof Decks.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center sticky top-1/4">
          {/* Glowing Ring Mock */}
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-[spin_20s_linear_infinite]">
            <div className="absolute inset-0 rounded-full border-[20px] border-transparent"
                 style={{
                   background: 'linear-gradient(#050505, #050505) padding-box, linear-gradient(45deg, #34d399, #3b82f6, #8b5cf6, #f59e0b) border-box',
                   filter: 'drop-shadow(0 0 40px rgba(52,211,153,0.3)) drop-shadow(0 0 80px rgba(59,130,246,0.2))'
                 }}>
            </div>
            {/* Inner glow */}
            <div className="absolute inset-8 rounded-full border-[10px] border-transparent opacity-50"
                 style={{
                   background: 'linear-gradient(#050505, #050505) padding-box, linear-gradient(-45deg, #34d399, #3b82f6, #8b5cf6) border-box',
                   filter: 'blur(10px)'
                 }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
