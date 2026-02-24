import { ArrowRight } from 'lucide-react';

export function FeatureCards() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-24 pb-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Pricing */}
        <div className="rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" 
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat'
            }}
          ></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-pink-500/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Pricing</span>
            </div>
            
            <h3 className="text-2xl md:text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white mb-4">
              PropAMM matcher with guardrails.
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-12">
              Thin-market protections: inventory-aware skew, volatility-scaled spreads, utilization-based widening, oracle divergence guards, and rate limits. Can't get taken to the cleaners.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">Skew</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Aware</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">Vol</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Scaled</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">Safe</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Mode</span>
              </div>
            </div>

            <button className="group/btn flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-5 py-2 hover:bg-white/5 transition-colors w-max">
              View Pricing <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Card 2: Build */}
        <div className="rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" 
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat'
            }}
          ></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Build</span>
            </div>
            
            <h3 className="text-2xl md:text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white mb-4">
              Launch a market in 60 seconds.
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Deploy Cascader-style perpetual markets permissionlessly. Configure oracle mode, leverage, fees, and matcher parameters — then launch with an atomic on-chain transaction.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-12">
              Atomic core deploy → no partial failures, no stranded SOL.<br/>
              Optional: burn the admin key to make the market adminless.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">~60s</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Deploy</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">0</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Gatekeepers</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">Any</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Pair</span>
              </div>
            </div>

            <button className="group/btn flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-5 py-2 hover:bg-white/5 transition-colors w-max">
              Create Market <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Card 3: Verify */}
        <div className="rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-0 pointer-events-none" 
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat'
            }}
          ></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Verify</span>
            </div>
            
            <h3 className="text-2xl md:text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white mb-4">
              On-chain receipts for every action.
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-12">
              Every action generates a portable receipt: tx signatures, invoked programs (including inner CPI), and program truth (upgradeable vs immutable + upgrade authority). Exportable as JSON.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">Every</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Action</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">CPI</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Traced</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">JSON</span>
                <span className="text-[9px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Export</span>
              </div>
            </div>

            <button className="group/btn flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-5 py-2 hover:bg-white/5 transition-colors w-max">
              View Explorer <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
