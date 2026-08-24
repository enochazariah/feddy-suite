import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onFinished?: () => void;
}

export default function WelcomeScreen({ onFinished }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onFinished) onFinished();
    }, 700);
  };

  useEffect(() => {
    // Auto-dismiss after 3 seconds, or user can tap anywhere to enter
    const timer = setTimeout(() => {
      handleDismiss();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-950 text-slate-100 transition-opacity duration-700 select-none cursor-pointer ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting effect */}
      <div className="absolute w-[35rem] h-[35rem] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 text-center space-y-5 px-6 max-w-xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-widest uppercase shadow-inner">
          <Sparkles size={14} /> Next-Gen Workspace
        </div>

        {/* Main Title with Cool Gradient Typography */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-400 leading-tight">
          Welcome to Feddy Suite
        </h1>

        {/* Prototype Clarification Subtext */}
        <p className="text-slate-400 text-sm sm:text-base font-medium tracking-wide">
          Prototype Version • Click anywhere to enter...
        </p>
      </div>

      {/* Subtle bottom loading bar indicator */}
      <div className="absolute bottom-12 w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-500 animate-[pulse_1s_infinite]" style={{ width: '100%' }} />
      </div>
    </div>
  );
} 