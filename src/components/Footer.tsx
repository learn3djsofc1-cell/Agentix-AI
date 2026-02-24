export function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 md:px-24 py-12 border-t border-white/10 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-gray-500 text-sm mb-2">Connect</span>
          <a href="#" className="text-white text-sm hover:text-[#34d399] transition-colors flex items-center gap-1">X / Twitter ↗</a>
          <a href="#" className="text-white text-sm hover:text-[#34d399] transition-colors flex items-center gap-1">GitHub ↗</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-gray-500 text-sm mb-2">Product</span>
          <a href="#" className="text-white text-sm hover:text-[#34d399] transition-colors">Trading Terminal</a>
          <a href="#" className="text-white text-sm hover:text-[#34d399] transition-colors">Devnet Lab</a>
          <a href="#" className="text-white text-sm hover:text-[#34d399] transition-colors">Launch Market</a>
          <a href="#" className="text-white text-sm hover:text-[#34d399] transition-colors">Token Factory</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-gray-500 text-sm mb-2">Developers</span>
          <a href="#" className="text-white text-sm hover:text-[#34d399] transition-colors flex items-center gap-1">Source Code ↗</a>
        </div>
      </div>
    </footer>
  );
}
