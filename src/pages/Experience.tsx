import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { Leaf, MessageSquare, Globe, Users, Briefcase } from 'lucide-react';

const experiences = [
  {
    period: 'Jan 2024 - Present',
    title: 'Senior Officer-Skills & Training Implementation',
    organization: 'Swisscontact',
    description: [
      'Leading the strategic implementation of large-scale vocational training programs across key industrial sectors.',
      'Managing multi-stakeholder partnerships to ensure high-quality training delivery and certification standards.',
      'Overseeing monitoring and evaluation frameworks to measure training impact on workforce productivity.',
    ],
    side: 'left',
  },
  {
    period: 'Jan 2023 - Dec 2023',
    title: 'Officer - Skills Training & Implementation - BYETS project',
    organization: 'Swisscontact',
    description: [
      'Coordinated training cycles for the Building Youth Employability Through Skills (BYETS) project.',
      'Facilitated industry-linkage workshops to align curriculum with private sector labor demands.',
      'Conducted field-level quality assurance assessments of training service providers.',
    ],
    side: 'right',
  },
  {
    period: 'Sep 2021 - Dec 2022',
    title: 'Communication Officer, Uttoron-Skills for better life',
    organization: 'Swisscontact',
    description: [
      'Developed comprehensive branding and communication strategies for the Uttoron project to enhance public visibility.',
      'Produced high-impact success stories, case studies, and digital content showcasing trainee achievements.',
      'Managed media relations and organized major promotional events and project launching ceremonies.',
    ],
    side: 'left',
  },
  {
    period: 'Nov 2020 - July 2021',
    title: 'Fellow-MMWW Project',
    organization: 'ActionAid Bangladesh',
    description: [
      'Supported the Making Market Work for Women (MMWW) project through community engagement and research.',
      'Assisted in organizing advocacy campaigns focusing on women\'s economic empowerment and labor rights.',
    ],
    side: 'right',
  },
  {
    period: 'Mar 2020 - June 2020',
    title: 'Intern, Dialogue & Communication',
    organization: 'Centre for Policy Dialogue (CPD)',
    description: [
      'Assisted in the organization of high-level policy dialogues and seminars on macroeconomic issues.',
      'Monitored news media for relevant economic updates and supported the social media outreach team.',
    ],
    side: 'left',
  },
  {
    period: 'Feb 2019 - Feb 2020',
    title: 'Assistant Director',
    organization: 'Filmy Features',
    description: [
      'Coordinated production logistics and on-set management for various commercial and documentary projects.',
      'Managed script breakdown and talent scheduling to ensure efficient filming timelines.',
    ],
    side: 'right',
  },
];

export default function Experience() {
  return (
    <div className="container-centered py-20 space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-accent" />
          <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Career Timeline</span>
        </div>
        <h1 className="text-5xl font-bold text-white tracking-tighter">Strategic Impact<span className="text-accent">.</span></h1>
        <p className="text-zinc-500 max-w-2xl text-sm leading-relaxed uppercase tracking-widest font-semibold">
          Bridging policy and implementation across international development.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className={cn(
              "bento-card group flex flex-col justify-between",
              idx === 0 ? "md:col-span-2 md:row-span-2" : ""
            )}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-widest">
                  {exp.period}
                </span>
                <Briefcase className="w-4 h-4 text-zinc-700" />
              </div>
              
              <div className="space-y-2">
                <h3 className={cn(
                  "font-bold text-white tracking-tight leading-tight",
                  idx === 0 ? "text-3xl" : "text-xl"
                )}>
                  {exp.title}
                </h3>
                <p className="text-accent font-bold text-[10px] uppercase tracking-widest">{exp.organization}</p>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs text-zinc-400 leading-relaxed">
                    <div className="mt-1.5 w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {idx === 0 && (
              <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                <Globe className="w-3 h-3" /> Regional Programme Management
              </div>
            )}
          </motion.div>
        ))}
        
        {/* Fillers / Stats Cards */}
        <div className="bento-card bg-accent text-black flex items-center justify-center text-center">
            <div>
              <div className="text-4xl font-bold">+7</div>
              <div className="text-[10px] font-black uppercase tracking-widest">Years of Operations</div>
            </div>
        </div>
      </div>
    </div>
  );
}
