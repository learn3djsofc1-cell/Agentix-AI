import { motion } from 'motion/react';

const text = "CASCADER-BASED • PROOF DECKS • PROPAmm PRICING • ON-CHAIN RECEIPTS • DEVNET LAB • MAINNET TERMINAL • RIPTIDE • PERMISSIONLESS PERPS • ";

export function TopBanner() {
  return (
    <div className="w-full bg-[#0a0a0a] border-b border-white/5 overflow-hidden py-2 flex whitespace-nowrap">
      <motion.div
        className="flex text-[10px] font-medium tracking-widest text-gray-400 uppercase"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        <span className="px-2">{text}</span>
        <span className="px-2">{text}</span>
        <span className="px-2">{text}</span>
        <span className="px-2">{text}</span>
      </motion.div>
    </div>
  );
}
