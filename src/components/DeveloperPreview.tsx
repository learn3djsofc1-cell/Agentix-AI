import { ArrowRight, Copy } from 'lucide-react';

export function DeveloperPreview() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-24 py-24 relative z-10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]"></div>
        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#34d399] uppercase">Developer Preview</span>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ship in minutes, <span className="text-gray-600">not months.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Three lines to verify. One click to open the Proof Page. Six lines to launch.<br/>
            Full SDK for everything in between.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Proof Decks show oracle health, crank freshness, risk params, CPI trace, and program upgrade authority.
          </p>
        </div>
        
        <button className="group flex items-center gap-2 text-sm font-medium text-white border border-white/10 rounded-full px-6 py-3 hover:bg-white/5 transition-colors">
          Open Devnet Lab <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Code Editor Mock */}
      <div className="w-full rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden flex flex-col lg:flex-row">
        {/* Left: Code */}
        <div className="lg:w-[60%] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
          <div className="flex items-center border-b border-white/10 px-4 overflow-x-auto hide-scrollbar">
            <button className="px-4 py-4 text-sm font-medium text-white border-b-2 border-[#34d399] whitespace-nowrap">Verify Receipt</button>
            <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-gray-300 whitespace-nowrap">Launch Market</button>
            <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-gray-300 whitespace-nowrap">Execute Trade</button>
            <div className="ml-auto flex items-center gap-3 text-gray-500 pl-4">
              <span className="text-xs font-mono whitespace-nowrap">verify-receipt.ts</span>
              <button className="hover:text-white"><Copy className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="p-6 font-mono text-sm overflow-x-auto">
            <div className="flex text-gray-500 mb-1"><span className="w-6 text-right mr-4 select-none">1</span><span className="whitespace-nowrap">// Fetch and verify a trade receipt</span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">2</span><span className="whitespace-nowrap"><span className="text-pink-400">import</span> <span className="text-white">{'{'} Riptide {'}'}</span> <span className="text-pink-400">from</span> <span className="text-green-400">'@riptide/sdk'</span><span className="text-white">;</span></span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">3</span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">4</span><span className="whitespace-nowrap"><span className="text-blue-400">const</span> <span className="text-white">riptide =</span> <span className="text-pink-400">new</span> <span className="text-yellow-200">Riptide</span><span className="text-white">({'{'}</span> <span className="text-blue-200">network</span><span className="text-white">:</span> <span className="text-green-400">'mainnet'</span> <span className="text-white">{'}'});</span></span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">5</span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">6</span><span className="whitespace-nowrap"><span className="text-blue-400">const</span> <span className="text-white">receipt =</span> <span className="text-pink-400">await</span> <span className="text-white">riptide.proof.</span><span className="text-yellow-200">verify</span><span className="text-white">({'{'}</span></span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">7</span><span className="whitespace-nowrap"><span className="text-blue-200 ml-4">market</span><span className="text-white">:</span> <span className="text-green-400">'7xKq...9mPd'</span><span className="text-white">,</span></span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">8</span><span className="whitespace-nowrap"><span className="text-blue-200 ml-4">tx</span><span className="text-white">:</span> <span className="text-green-400">'5Kx2...mNqT'</span></span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">9</span><span className="whitespace-nowrap"><span className="text-white">{'}'});</span></span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">10</span></div>
            <div className="flex text-gray-500 mb-1"><span className="w-6 text-right mr-4 select-none">11</span><span className="whitespace-nowrap">// Returns: cryptographic receipt</span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">12</span><span className="whitespace-nowrap"><span className="text-white">console.</span><span className="text-yellow-200">log</span><span className="text-white">(receipt.programs);</span></span></div>
            <div className="flex mb-1"><span className="w-6 text-right mr-4 text-gray-600 select-none">13</span><span className="whitespace-nowrap"><span className="text-white">console.</span><span className="text-yellow-200">log</span><span className="text-white">(receipt.liveness);</span></span></div>
          </div>
        </div>

        {/* Right: Response */}
        <div className="lg:w-[40%] bg-[#111111] p-6 flex flex-col font-mono text-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399]"></div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">Response</span>
            </div>
            <div className="border border-[#34d399]/30 bg-[#052e16] text-[#34d399] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">
              VERIFIED
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-grow">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-500">Market</span>
              <span className="text-white">7xKq...9mPd</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-500">Collateral</span>
              <span className="text-white">wSOL</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-500">Oracle</span>
              <span className="text-white">AUTHORITY</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-500">Cascader</span>
              <span className="text-white">Upgradeable</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-500">Crank</span>
              <span className="text-white">Fresh (12 slots)</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-500">Vault</span>
              <span className="text-white">4.2910 tokens</span>
            </div>
          </div>

          <div className="mt-8 text-gray-500 text-xs flex items-center gap-2">
            <span className="text-[#34d399]">{'>'}</span> 2 programs inspected • ~350ms
          </div>
        </div>
      </div>
    </div>
  );
}
