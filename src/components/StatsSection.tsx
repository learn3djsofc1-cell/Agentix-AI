export function StatsSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-24 py-12 md:py-20 relative z-10">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8 md:gap-0">
        <div className="flex flex-col gap-2 w-[45%] md:w-auto">
          <span className="text-3xl md:text-[2.5rem] font-bold text-white tracking-tight">~350ms</span>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Settlement Finality</span>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/10"></div>
        <div className="flex flex-col gap-2 w-[45%] md:w-auto">
          <span className="text-3xl md:text-[2.5rem] font-bold text-white tracking-tight">~60s</span>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Market Creation</span>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/10"></div>
        <div className="flex flex-col gap-2 w-[45%] md:w-auto">
          <span className="text-3xl md:text-[2.5rem] font-bold text-white tracking-tight">50x</span>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] text-gray-500 uppercase">Max Leverage</span>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/10"></div>
        <div className="flex flex-col gap-2 w-[45%] md:w-auto">
          <span className="text-3xl md:text-[2.5rem] font-bold text-white tracking-tight">Every tx</span>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] text-gray-500 uppercase">On-chain Receipts</span>
        </div>
      </div>
    </div>
  );
}
