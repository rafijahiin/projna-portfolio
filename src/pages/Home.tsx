import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ChevronRight, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container-centered py-10 flex flex-col gap-4 min-h-[calc(100vh-140px)]">
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-4 flex-1">
        
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bento-card flex flex-col justify-end relative group overflow-hidden"
        >
          <div className="absolute top-8 right-8 flex gap-2">
            <span className="bg-zinc-800 text-[10px] px-3 py-1 rounded-full border border-zinc-700 uppercase tracking-widest font-bold">Strategy</span>
            <span className="bg-zinc-800 text-[10px] px-3 py-1 rounded-full border border-zinc-700 uppercase tracking-widest font-bold">Skills</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium leading-[0.9] tracking-tighter mb-6">
            Driving the<br/>digital growth<br/>of ecosystems<span className="text-accent">.</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-6">
            Projna Dasgupta is a development professional specializing in skills training, agribusiness, and sustainable trade transitions in Dhaka, Bangladesh.
          </p>
          <Link to="/experience" className="flex items-center gap-4 group/link">
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-black transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Review Experience</span>
          </Link>
        </motion.div>

        {/* Global Impact / Performance Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bento-card flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Efficiency</div>
            <div className="w-8 h-[1px] bg-zinc-700 mt-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="text-5xl font-light mb-1">98<span className="text-lg">%</span></div>
            <div className="text-[10px] text-zinc-500 font-bold uppercase">Average Compliance Rate</div>
          </div>
        </motion.div>

        {/* Status Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bento-card-highlight flex flex-col justify-between bg-accent text-black"
        >
          <div className="flex justify-between items-start">
            <div className="text-[10px] font-black uppercase tracking-[0.2em]">Status</div>
            <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold leading-tight uppercase tracking-tighter">Open for<br/>Collaboration</div>
            <div className="text-[10px] font-bold uppercase mt-2">Q3 2026 Strategic Advisory</div>
          </div>
        </motion.div>

        {/* Stakeholders Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bento-card flex flex-col gap-6"
        >
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-4 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] font-bold">NGO</div>
            <div className="w-12 h-12 rounded-full border-4 border-zinc-900 bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-white">+50</div>
          </div>
          <div>
            <div className="text-lg font-medium">Global Network</div>
            <p className="text-xs text-zinc-500 mt-1">Partnering with international agencies, Gov bodies, and private sector leaders.</p>
          </div>
        </motion.div>

        {/* Reach Out Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bento-card flex items-center justify-center relative group cursor-pointer hover:border-accent transition-colors"
          onClick={() => window.location.href = '/contact'}
        >
          <div className="text-center">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-bold">Reach Out</div>
            <div className="text-xl font-bold border-b border-zinc-800 pb-1 group-hover:text-accent group-hover:border-accent transition-colors tracking-tight">projna.ops@dev.io</div>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bento-card bg-zinc-800/80 flex flex-col justify-center overflow-hidden relative"
        >
          <div className="absolute -right-4 -bottom-4 opacity-10 font-black text-9xl italic tracking-tighter text-white">BD</div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-bold">Headquarters</div>
          <div className="text-2xl font-medium">Dhaka</div>
          <div className="text-xs text-zinc-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Gulshan-2, Dhaka</div>
        </motion.div>

        {/* Long Analytics/Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="col-span-1 md:col-span-2 bento-card flex items-center justify-between group cursor-pointer hover:border-accent transition-colors"
          onClick={() => window.location.href = '/projects'}
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Leaf className="w-8 h-8 text-accent" />
            </div>
            <div>
              <div className="text-xl font-bold">Agribusiness Ecosystems</div>
              <div className="text-xs text-zinc-500 mt-1">Regional trade corridor development initiatives</div>
            </div>
          </div>
          <div className="h-12 w-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
            <ChevronRight className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Recent Partner Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bento-card flex flex-col justify-between"
        >
          <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Core Partner</div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <div className="text-lg font-bold tracking-tight">Swisscontact</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
