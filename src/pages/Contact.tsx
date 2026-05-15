import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  return (
    <div className="container-centered py-20 space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-accent" />
          <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Communication</span>
        </div>
        <h1 className="text-5xl font-bold text-white tracking-tighter">Strategic Inquiry<span className="text-accent">.</span></h1>
        <p className="text-zinc-500 max-w-2xl text-sm leading-relaxed uppercase tracking-widest font-semibold">
          Initiate a professional dialogue.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Contact Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-1 bento-card flex flex-col justify-between gap-12"
        >
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Connect</p>
              <p className="font-bold text-white text-lg tracking-tight">projna.ops@dev.io</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Base</p>
              <p className="font-bold text-white text-lg tracking-tight">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent transition-colors">
                <Mail className="w-4 h-4" />
             </div>
             <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent transition-colors">
                <MessageSquare className="w-4 h-4" />
             </div>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-3 bento-card p-12"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Identity</label>
              <input 
                type="text" 
                placeholder="Ex. Adrian Smith" 
                className="w-full bg-zinc-800/50 border border-zinc-700/50 p-4 rounded-xl outline-none focus:border-accent/50 transition-colors text-white text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Organization</label>
              <input 
                type="text" 
                placeholder="Ex. Global Trade Hub" 
                className="w-full bg-zinc-800/50 border border-zinc-700/50 p-4 rounded-xl outline-none focus:border-accent/50 transition-colors text-white text-sm"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Transmission Subject</label>
              <input 
                type="text" 
                placeholder="Ex. Strategic Advisory Collaboration" 
                className="w-full bg-zinc-800/50 border border-zinc-700/50 p-4 rounded-xl outline-none focus:border-accent/50 transition-colors text-white text-sm"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Message Archive</label>
              <textarea 
                rows={5}
                placeholder="Describe your initiative..." 
                className="w-full bg-zinc-800/50 border border-zinc-700/50 p-4 rounded-xl outline-none focus:border-accent/50 transition-colors text-white text-sm resize-none"
              />
            </div>

            <div className="md:col-span-2 pt-4">
              <button 
                type="submit"
                className="w-full bg-accent text-black p-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-accent/10"
              >
                Dispatch Signal <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
