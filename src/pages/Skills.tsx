import { motion } from 'framer-motion';
import { Globe, BookOpen, Layout, GraduationCap, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const competencies = [
  {
    title: 'Policy Support',
    description: 'Specializing in the alignment of institutional frameworks with sustainable development goals, ensuring policy instruments are both evidence-based and impact-oriented.',
    tags: ['Policy Research', 'Stakeholder Engagement'],
    active: false,
  },
  {
    title: 'Program Coordination',
    description: 'Meticulous management of multi-stakeholder initiatives, from design phase to evaluation, ensuring seamless operational flow.',
    tags: [],
    active: true,
  },
];

const languages = [
  { name: 'Bengali', level: 'Native', label: 'L1 Speaker' },
  { name: 'English', level: 'Full Professional', label: 'IELTS Academic' },
  { name: 'Spanish', level: 'Limited Working', label: 'A2 / CEFR' },
];

const education = [
  {
    years: '2018 — 2019',
    degree: "Master's of Social Science, Development Studies",
    institution: 'University of Dhaka',
    highlight: 'Specialized in Policy Analysis and International Development Frameworks.',
  },
  {
    years: '2014 — 2018',
    degree: "Bachelor's of Social Science, Development Studies",
    institution: 'University of Dhaka',
    highlight: 'Graduated with Distinction; focused on socio-economic research methodologies.',
  },
  {
    years: '2010 — 2012',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Amrita Lal Dey College',
  },
  {
    years: '2008 — 2010',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Barisal Government Girls High School',
  },
];

export default function Skills() {
  return (
    <div className="container-centered py-20 space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-accent" />
          <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Expertise</span>
        </div>
        <h1 className="text-5xl font-bold text-white tracking-tighter">Core Competencies<span className="text-accent">.</span></h1>
        <p className="text-zinc-500 max-w-2xl text-sm leading-relaxed uppercase tracking-widest font-semibold">
          Scientific precision in development operations.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Policy Support */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bento-card space-y-8"
        >
          <div className="flex justify-between items-start">
             <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                <Layout className="w-5 h-5 text-accent" />
             </div>
             <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Operations</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Policy Support & Systems</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Alignment of institutional frameworks with sustainable development goals, ensuring policy instruments are both evidence-based and impact-oriented.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="bg-zinc-800 text-[9px] px-3 py-1 rounded-full border border-zinc-700 uppercase tracking-widest font-bold">Research</span>
            <span className="bg-zinc-800 text-[9px] px-3 py-1 rounded-full border border-zinc-700 uppercase tracking-widest font-bold">Engagement</span>
          </div>
        </motion.div>

        {/* Coordination Progress Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card-highlight bg-accent text-black flex flex-col justify-between"
        >
          <div className="text-[10px] font-black uppercase tracking-widest">Coordination</div>
          <div className="space-y-4">
            <div className="text-3xl font-bold tracking-tighter">Program<br/>Flow Optimization</div>
            <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
               <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '92%' }}
                className="h-full bg-black"
               />
            </div>
          </div>
        </motion.div>

        {/* Language Proficiency */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card flex flex-col justify-between"
        >
          <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Linguistics</div>
          <div className="space-y-3">
             {languages.map(lang => (
               <div key={lang.name} className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white">{lang.name}</span>
                  <span className="text-zinc-500">{lang.level}</span>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Academic History - Full Width / Bento style */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="bento-card bg-zinc-800/50 flex flex-col justify-center">
              <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Academic Foundation</h4>
              <div className="space-y-6">
                {education.slice(0, 2).map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-white font-bold text-sm">{edu.degree}</div>
                    <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">{edu.institution}</div>
                  </div>
                ))}
              </div>
           </div>

           <div className="md:col-span-2 bento-card flex items-center justify-between group">
              <div className="space-y-2">
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Institutional Oversight</div>
                <h3 className="text-2xl font-bold text-white leading-tight">University of Dhaka<br/>Distinction in Development Studies</h3>
                <p className="text-zinc-400 text-xs italic">Specialized in Policy Analysis and International Frameworks.</p>
              </div>
              <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                 <GraduationCap className="w-8 h-8 text-white" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
