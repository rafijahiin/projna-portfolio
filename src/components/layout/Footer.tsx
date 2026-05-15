import { Link } from 'react-router-dom';
import { Mail, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-12 px-2">
      <div className="container-centered flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600 gap-8">
        <div className="flex gap-8">
          <span>©{currentYear} Projna Dasgupta</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <button className="hover:text-white transition-colors uppercase">Terms</button>
        </div>

        <div className="flex gap-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">X.com</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
}
