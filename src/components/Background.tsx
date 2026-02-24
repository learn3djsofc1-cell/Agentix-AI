import { motion } from 'motion/react';

export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-0" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Top Left Glow */}
      <motion.div 
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] opacity-[0.15] rounded-full"
        style={{ backgroundColor: '#34d399' }}
        animate={{
          filter: ['blur(100px) hue-rotate(0deg)', 'blur(100px) hue-rotate(360deg)'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Main Swoosh (Simulating the ribbon) */}
      <motion.div 
        className="absolute top-[5%] -left-[10%] w-[120%] h-[70%] opacity-[0.35] transform -rotate-[15deg]"
        style={{
          background: 'linear-gradient(90deg, rgba(52,211,153,0) 0%, rgba(52,211,153,1) 25%, rgba(59,130,246,1) 50%, rgba(139,92,246,1) 75%, rgba(52,211,153,0) 100%)',
          borderRadius: '100% 50% 100% 50%'
        }}
        animate={{
          filter: ['blur(80px) hue-rotate(0deg)', 'blur(80px) hue-rotate(360deg)']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Bottom Right Swoosh */}
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[60%] opacity-[0.25] transform rotate-[10deg]"
        style={{
          background: 'linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,1) 30%, rgba(52,211,153,1) 70%, rgba(59,130,246,0) 100%)',
          borderRadius: '50% 100% 50% 100%'
        }}
        animate={{
          filter: ['blur(100px) hue-rotate(0deg)', 'blur(100px) hue-rotate(360deg)']
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
      />
      
      {/* Center highlight for text readability contrast */}
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-[#050505] opacity-[0.7] blur-[80px] rounded-full"></div>
    </div>
  );
}
