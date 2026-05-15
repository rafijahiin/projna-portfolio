import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Sustainable Agribusiness Trade Corridor',
    category: 'Regional Trade',
    description: 'Developed high-level trade routes between South Asia and the EU, focusing on sustainable agricultural practices and certification standards.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Building Youth Employability Transition (BYETS)',
    category: 'Skills Ecosystem',
    description: 'Coordinated large-scale vocational training programs for youth, aligning educational output with private sector labor demands.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  },
  {
    title: 'Uttoron - Skills for Better Life',
    category: 'Workforce Development',
    description: 'Designed communication strategies and branding for a nationwide skills training initiative, reaching over 50,000 beneficiaries.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function Projects() {
  return (
    <div className="container-centered py-20 space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-accent" />
          <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Archive</span>
        </div>
        <h1 className="text-5xl font-bold text-white tracking-tighter">Selected Operations<span className="text-accent">.</span></h1>
        <p className="text-zinc-500 max-w-2xl text-sm leading-relaxed uppercase tracking-widest font-semibold">
          A showcase of cross-functional development initiatives.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-bento overflow-hidden border border-zinc-800/50"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }} />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4">
              <div className="flex justify-between items-start">
                 <span className="text-[10px] font-bold text-accent bg-black/50 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-widest border border-accent/20">
                    {project.category}
                 </span>
                 <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                 </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
