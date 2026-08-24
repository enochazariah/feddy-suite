'use client';
import { useState, FormEvent } from 'react';

export default function BirthdayForm() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#121216] to-[#09090b] border border-gray-800/80 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden group">
      {/* Background ambient lighting */}
      <div className="absolute -right-24 -top-24 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
              Multi-Channel Dispatch
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3 tracking-tight">
              Birthday Reminder Engine 🎂
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recipient Name</label>
              <input 
                required 
                type="text" 
                placeholder="e.g. Sarah Jenkins" 
                className="w-full bg-[#18181b]/80 border border-gray-800 focus:border-pink-500/50 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-pink-500/10 transition-all" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Special Date</label>
              <input 
                required 
                type="date" 
                className="w-full bg-[#18181b]/80 border border-gray-800 focus:border-orange-500/50 rounded-2xl p-4 text-gray-300 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all cursor-pointer" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Relationship Category</label>
              <div className="relative">
                <select 
                  required 
                  defaultValue="" 
                  className="w-full bg-[#18181b]/80 border border-gray-800 focus:border-pink-500/50 rounded-2xl p-4 text-gray-300 focus:outline-none focus:ring-4 focus:ring-pink-500/10 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select relationship...</option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                  <option value="friend">Friend</option>
                  <option value="colleague">Colleague</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Notification Email</label>
              <input 
                required 
                type="email" 
                placeholder="client@domain.com" 
                className="w-full bg-[#18181b]/80 border border-gray-800 focus:border-pink-500/50 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-pink-500/10 transition-all" 
              />
            </div>
          </div>

          {/* NEW: SMS Entry Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">SMS Notification Number</label>
            <input 
              required 
              type="tel" 
              placeholder="+1 (555) 000-0000" 
              className="w-full bg-[#18181b]/80 border border-gray-800 focus:border-orange-500/50 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-orange-500/10 transition-all" 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full mt-4 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-400 hover:to-orange-400 shadow-xl shadow-pink-500/20 transition-all duration-300 active:scale-[0.99] tracking-wide"
          >
            Schedule Reminder
          </button>
        </form>
      </div>

      {/* Prototype Feedback Modal with exact requested text */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-[#18181b] border border-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 to-orange-500"></div>
            
            <div className="w-16 h-16 bg-pink-500/10 rounded-2xl border border-pink-500/20 flex items-center justify-center mx-auto mb-5 text-2xl">
              ⚡
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Notice</h3>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed font-medium">
              These features are unavailable because this is a prototype.
            </p>
            
            <button 
              onClick={() => setShowModal(false)} 
              className="w-full py-3.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700 text-white rounded-xl font-bold transition-all shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 