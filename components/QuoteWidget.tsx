'use client';
import { useState } from 'react';

const quotes = [
  { 
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
    author: "Nelson Mandela",
    gradient: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/20"
  },
  { 
    text: "The way to get started is to quit talking and begin doing.", 
    author: "Walt Disney",
    gradient: "from-rose-400 to-orange-500",
    shadow: "shadow-orange-500/20"
  },
  { 
    text: "Your time is limited, so don't waste it living someone else's life.", 
    author: "Steve Jobs",
    gradient: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/20"
  },
  { 
    text: "In the middle of every difficulty lies opportunity.", 
    author: "Albert Einstein",
    gradient: "from-amber-400 to-yellow-600",
    shadow: "shadow-amber-500/20"
  },
  { 
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", 
    author: "Ralph Waldo Emerson",
    gradient: "from-fuchsia-400 to-purple-600",
    shadow: "shadow-fuchsia-500/20"
  }
];

export default function QuoteWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentIndex && quotes.length > 1);
    setCurrentIndex(newIndex);
  };

  const active = quotes[currentIndex];

  return (
    <div 
      onClick={handleNextQuote}
      className={`relative overflow-hidden cursor-pointer rounded-3xl p-8 transition-all duration-700 ease-in-out bg-[#121216] border border-gray-800 shadow-2xl ${active.shadow} hover:scale-[1.02] group`}
    >
      {/* Dynamic Colored Glow Background */}
      <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${active.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>
      
      {/* Decorative colored line */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${active.gradient} transition-colors duration-700`}></div>

      <div className="flex justify-between items-center mb-6 relative z-10">
        <span className={`text-xs uppercase tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r ${active.gradient}`}>
          ✦ Daily Wisdom
        </span>
        <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
          <span>Tap to shuffle</span>
          <svg className="w-4 h-4 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
      </div>

      <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6 relative z-10 transition-all duration-500">
        &ldquo;{active.text}&rdquo;
      </blockquote>

      <p className="text-sm font-bold text-gray-400 text-right relative z-10">
        — {active.author}
      </p>
    </div>
  );
}