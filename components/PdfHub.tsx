import React, { useState } from 'react';
import { BookOpen, Download, FileText, AlertCircle, Search, Sparkles } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  filename: string;
  category: string;
}

const books: Book[] = [
  {
    id: '1',
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    description: 'Timeless principles of wealth creation, personal achievement, and mindset mastery.',
    filename: 'think-and-grow-rich-by-napolean-hill.pdf',
    category: 'Wealth & Mindset',
  },
  {
    id: '2',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'Exploration of the two systems that drive the way we think, judge, and make choices.',
    filename: 'thinking-fast-and-slow-by-daniel-kahneman.pdf',
    category: 'Psychology',
  },
  {
    id: '3',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    description: 'Powerful lessons in personal change, character ethics, and principled effectiveness.',
    filename: 'seven-habits-of-highly-effective-people-by-stephen-covey.pdf',
    category: 'Leadership',
  },
  {
    id: '4',
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    description: 'Classic guide on interpersonal communication, persuasion, and building lasting relationships.',
    filename: 'how-to-win-friends-and-influence-people-by-dale-carnegie.pdf',
    category: 'Communication',
  },
  {
    id: '5',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy and proven way to build good habits, break bad ones, and get 1% better every day.',
    filename: 'atomic-habits-by-james-clear.pdf',
    category: 'Productivity',
  },
];

export default function PdfHub() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={14} /> Curated Library
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
              PDF Book Hub
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Immerse yourself in world-class literature on psychology, leadership, and personal transformation.
            </p>
          </div>

          <div className="flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg">
            <AlertCircle size={18} className="shrink-0 text-amber-400" />
            <span>PDF books are limited to just five in prototype version.</span>
          </div>
        </div>

        {/* Live Search Input */}
        <div className="mt-8 relative max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search by title, author, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold px-3 py-1 rounded-full">
                  {book.category}
                </span>
                <div className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                  <FileText size={20} />
                </div>
              </div>
              <h3 className="font-bold text-white text-xl mb-1 group-hover:text-indigo-300 transition-colors">
                {book.title}
              </h3>
              <p className="text-xs text-indigo-400/80 mb-3 font-semibold tracking-wide">
                By {book.author}
              </p>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {book.description}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <a
                href={`/pdfs/${book.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
              >
                <BookOpen size={16} /> Read Online
              </a>
              <a
                href={`/pdfs/${book.filename}`}
                download
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2.5 rounded-xl transition-all border border-slate-700/50"
                title="Download PDF"
              >
                <Download size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-16 text-slate-500">
          <p className="text-lg">No matching books found.</p>
        </div>
      )}
    </div>
  );
} 