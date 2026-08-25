'use client';
import { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import QuoteWidget from '../components/QuoteWidget';
import BirthdayForm from '../components/BirthdayForm';
import PdfHub from '../components/PdfHub';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState('quotes');

  return (
    <main className="min-h-screen bg-black text-white font-sans pb-36 selection:bg-pink-500/35 relative">
      
      {/* Cinematic Welcome Splash Screen */}
      {showWelcome && (
        <WelcomeScreen onFinished={() => setShowWelcome(false)} />
      )}

      {/* Sleek App Branding Header */}
      <header className="pt-16 pb-6 px-6 text-center">
        <div className="inline-block mb-3">
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 shadow-inner">
            Feddy Suite v2.5 Pro
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tight">
          Client Showcase
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base font-medium">
          {activeTab === 'quotes' && 'Global Wisdom & Interactive Quotes Engine'}
          {activeTab === 'reminders' && 'Automated Milestone & Email Dispatch Hub'}
          {activeTab === 'library' && 'High-Performance Local PDF Knowledge Base'}
        </p>

        {/* Direct APK Download Button */}
        <div className="mt-8 flex justify-center">
          <a 
            href="/feddy-suite.apk" 
            download="FeddySuite.apk"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Android App
          </a>
        </div>
      </header>

      {/* Main Viewport Container */}
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {activeTab === 'quotes' && <QuoteWidget />}
        {activeTab === 'reminders' && <BirthdayForm />}
        {activeTab === 'library' && <PdfHub />}
      </div>

      {/* World-Class Floating Mobile App Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
        <div className="flex items-center justify-between bg-[#18181b]/90 backdrop-blur-2xl border border-gray-800/80 p-2 rounded-2xl shadow-2xl">
          
          <button
            onClick={() => setActiveTab('quotes')}
            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'quotes'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            💡 Quotes
          </button>
          
          <button
            onClick={() => setActiveTab('reminders')}
            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'reminders'
                ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg shadow-pink-500/25'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            🎂 Reminders
          </button>
          
          <button
            onClick={() => setActiveTab('library')}
            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'library'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            📚 Library
          </button>
          
        </div>
      </div>

    </main>
  );
}