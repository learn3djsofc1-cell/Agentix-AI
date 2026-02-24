import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <nav className="w-full px-6 py-5 flex items-center justify-between z-50 relative">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-1">
        <div className="text-[#5eead4] flex items-center">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6C10 4.89543 10.8954 4 12 4H18.5C22.6421 4 26 7.35786 26 11.5C26 15.6421 22.6421 19 18.5 19H14V26C14 27.1046 13.1046 28 12 28C10.8954 28 10 27.1046 10 26V6Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="15.5" cy="11.5" r="2.5" fill="currentColor"/>
          </svg>
          <span className="text-2xl font-semibold tracking-tight ml-2 text-white">riptide</span>
        </div>
      </div>

      {/* Center Links (Desktop) */}
      <div className="hidden md:flex items-center justify-center gap-6 text-sm text-gray-300 flex-1">
        <div className="relative">
          <button 
            onClick={() => toggleDropdown('trade')}
            className={`flex items-center gap-1 transition-colors font-medium ${openDropdown === 'trade' ? 'text-white' : 'hover:text-white'}`}
          >
            Trade <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${openDropdown === 'trade' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openDropdown === 'trade' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#111111] border border-white/10 rounded-xl shadow-xl overflow-hidden"
              >
                <div className="p-2 flex flex-col">
                  <a href="#" className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors text-white">Spot</a>
                  <a href="#" className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors text-white">Perpetuals</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => toggleDropdown('build')}
            className={`flex items-center gap-1 transition-colors font-medium ${openDropdown === 'build' ? 'text-white' : 'hover:text-white'}`}
          >
            Build <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${openDropdown === 'build' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openDropdown === 'build' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#111111] border border-white/10 rounded-xl shadow-xl overflow-hidden"
              >
                <div className="p-2 flex flex-col">
                  <a href="#" className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors text-white">Documentation</a>
                  <a href="#" className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors text-white">API</a>
                  <a href="#" className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors text-white">SDK</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Actions (Desktop) */}
      <div className="hidden md:flex items-center justify-end gap-5 flex-1">
        <div className="flex items-center gap-3 border-r border-white/10 pr-5">
          <button className="w-9 h-9 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
        </div>
        <button className="bg-gradient-to-r from-[#a7f3d0] to-[#34d399] text-black px-6 py-2 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-shadow">
          Open App
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden items-center gap-4">
        <button className="bg-gradient-to-r from-[#a7f3d0] to-[#34d399] text-black px-4 py-1.5 rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(52,211,153,0.2)]">
          Open App
        </button>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-1"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Trade</span>
                <a href="#" className="text-white font-medium py-2">Spot</a>
                <a href="#" className="text-white font-medium py-2">Perpetuals</a>
              </div>
              <div className="h-px w-full bg-white/10"></div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Build</span>
                <a href="#" className="text-white font-medium py-2">Documentation</a>
                <a href="#" className="text-white font-medium py-2">API</a>
                <a href="#" className="text-white font-medium py-2">SDK</a>
              </div>
              <div className="h-px w-full bg-white/10"></div>
              <div className="flex items-center gap-4 pt-2">
                <button className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
