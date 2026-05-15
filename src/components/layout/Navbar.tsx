import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-black-pure/80 backdrop-blur-md px-2 py-4">
      <div className="container-centered flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">Projna<span className="text-accent">.</span>Ops</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors relative py-1',
                  isActive ? 'text-accent' : 'text-zinc-500 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block text-right">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Local Time</div>
            <div className="text-xs font-mono text-zinc-400">Dhaka, GMT+6</div>
          </div>
          <div className="hidden lg:block h-10 w-[1px] bg-zinc-800 mx-2"></div>
          <button className="border border-zinc-700 px-6 py-2 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-colors whitespace-nowrap">
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
}
