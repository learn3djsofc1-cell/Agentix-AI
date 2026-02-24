import { ArrowRight } from 'lucide-react';

export function FooterCTA() {
  return (
    <div className="w-full py-32 relative z-10 flex flex-col items-center justify-center text-center px-6">
      <div className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6">
        Permissionless Perpetual Futures
      </div>
      
      <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
        Launch markets fast.<br/>
        Trade smart.<br/>
        Prove everything.
      </h2>
      
      <p className="text-gray-400 text-lg max-w-2xl mb-12">
        Build markets in minutes. Trade with receipts you can prove. Ship experiments in Devnet Lab, then move to Mainnet Terminal when you're ready.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#f0fdfa] to-[#6ee7b7] text-black px-8 py-4 rounded-full text-[15px] font-semibold shadow-[0_0_20px_rgba(110,231,183,0.15)] hover:shadow-[0_0_30px_rgba(110,231,183,0.3)] transition-all w-full sm:w-auto">
          Launch Your First Market
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 rounded-full text-[15px] font-medium text-white border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto">
          Trade on Mainnet
        </button>
      </div>
    </div>
  );
}
