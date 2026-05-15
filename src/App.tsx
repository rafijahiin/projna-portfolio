/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import { Briefcase, Code, User, Mail, ChevronRight, ExternalLink, Shield, Award, BookOpen } from 'lucide-react';

// --- COMPONENTS ---

const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-700 tracking-tight">Projna<span className="text-gray-800">Dasgupta</span></Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 mt-12 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Projna Dasgupta. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <Link to="/privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</Link>
        <a href="https://linkedin.com/in/projna-dasgupta" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const Layout = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
    <Navigation />
    <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      <Outlet />
    </main>
    <Footer />
  </div>
);

// --- PAGES ---

const Home = () => (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mt-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Development Professional & <br className="hidden md:block"/>
          <span className="text-blue-600">Digital Transformation Specialist</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
          Targeting: UNDP Digital/AI Skilling Project Manager
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          A dedicated development professional with a Bachelor’s in IT and 4+ years of experience since 2021 with organizations like Swisscontact, UNFPA, GAIN, FES, ActionAid, and Radda. I specialize in digital transformation, project management, and capacity-building. I have a proven track record of handling end-to-end project management, digital upskilling, and cross-sector partnership management across government, NGOs, and the private sector in the Global South.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/experience" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all">
            View My Experience
          </Link>
          <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all">
            See Digital Projects
          </Link>
        </div>
      </div>
    </section>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4"><Code size={24} /></div>
        <h3 className="font-bold text-gray-900 mb-2">Digital Upskilling & AI</h3>
        <p className="text-gray-600 text-sm">Specialized in integrating AI workflows (NotebookLM, Power BI) and digital tools into government and NGO operations, reducing data processing time by 40%.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4"><Briefcase size={24} /></div>
        <h3 className="font-bold text-gray-900 mb-2">Programme Coordination</h3>
        <p className="text-gray-600 text-sm">Extensive experience managing multi-sector programmes, policy support, and public-private partnerships to strengthen skills ecosystems and agribusiness.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4"><Award size={24} /></div>
        <h3 className="font-bold text-gray-900 mb-2">Impact at Scale</h3>
        <p className="text-gray-600 text-sm">Scaled a digital health platform to reach 185,000+ individuals and built Bangladesh’s first open-source LMS ecosystem for paramedics.</p>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const jobs = [
    {
      title: "Senior Officer - Skills & Training Implementation",
      company: "Swisscontact",
      date: "Jan 2024 - Present",
      bullets: [
        "Coordinate multi-sector programme activities across 70+ manufacturing and agro-processing enterprises, supporting the delivery of large-scale skills and technical assistance.",
        "Facilitate engagement between government agencies, private sector actors, and development partners to strengthen workforce systems.",
        "Built and managed learning ecosystems, including spearheading Bangladesh’s first open-source LMS for paramedics.",
        "Prepare analytical briefs and manage high-level stakeholder workshops, business expos, and policy dialogues."
      ]
    },
    {
      title: "Officer - Skills Training & Implementation (BYETS project)",
      company: "Swisscontact",
      date: "Jan 2023 - Dec 2023",
      bullets: [
        "Supported operational planning and implementation of skills initiatives in export-oriented sectors.",
        "Conducted sector-informed needs assessments and managed coordination with national and international service providers.",
        "Contributed to the delivery of 4,000+ structured training opportunities aligned with decent work and productivity improvement goals."
      ]
    },
    {
      title: "Consultant / Project Specialist",
      company: "UNFPA, GAIN, FES, Radda",
      date: "2021 - Present (Various)",
      bullets: [
        "Led digital upskilling, curriculum co-design, and national-level evaluation initiatives.",
        "Integrated AI and digital tools into government and NGO workflows to streamline project management and training delivery.",
        "Scaled a digital health platform to reach over 185,000 individuals in resource-constrained environments."
      ]
    },
    {
      title: "Communication Officer (Uttoron - Skills for better life)",
      company: "Swisscontact",
      date: "Sep 2021 - Dec 2022",
      bullets: [
        "Produced briefing materials and knowledge products for donors, government stakeholders, and industry partners.",
        "Supported the establishment of public-private vocational centres contributing to local economic development."
      ]
    },
    {
      title: "Fellow - MMWW Project, MEAL Unit",
      company: "ActionAid Bangladesh",
      date: "Nov 2020 - Jul 2021",
      bullets: [
        "Developed donor reports and analyzed data utilizing web-based systems and evidence.",
        "Led concept note development, event management, and maintained the MIS systems for project tracking."
      ]
    }
  ];

  return (
    <div className="max-w-4xl animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center"><Briefcase className="mr-3 text-blue-600" /> Professional Experience</h2>
        <p className="text-gray-600">A timeline of my professional journey in the development and tech sectors.</p>
      </div>
      
      <div className="space-y-8">
        {jobs.map((job, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                <p className="text-lg text-blue-600 font-medium">{job.company}</p>
              </div>
              <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                {job.date}
              </span>
            </div>
            <ul className="space-y-3 mt-4">
              {job.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start text-gray-700">
                  <ChevronRight size={18} className="mr-2 text-blue-400 flex-shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Digital Transformation & IT",
      skills: ["AI Workflows", "NotebookLM", "Power BI", "LMS Architecture", "Digital Upskilling", "Web-based MIS Systems"]
    },
    {
      title: "Project Management",
      skills: ["End-to-End Delivery", "Policy Support", "Program Coordination", "MEAL (Monitoring & Evaluation)", "Education Management"]
    },
    {
      title: "Sector Expertise",
      skills: ["Development Sector", "Public-Private Partnerships", "Curriculum Co-design", "Agribusiness", "Skills Ecosystems"]
    },
    {
      title: "Languages",
      skills: ["English (Full Professional)", "Bengali (Native/Bilingual)", "Spanish (Limited Working)"]
    }
  ];

  return (
    <div className="max-w-4xl animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center"><User className="mr-3 text-blue-600" /> Core Competencies</h2>
        <p className="text-gray-600">Technical and strategic skills developed across the Global South context.</p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><BookOpen className="mr-3 text-blue-600" /> Education</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800">Master's of Social Science, Development Studies</h4>
            <p className="text-gray-600">University of Dhaka (2018 - 2019)</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Bachelor's of IT & Social Science, Development Studies</h4>
            <p className="text-gray-600">University of Dhaka (2014 - 2018)</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Higher Secondary Certificate (HSC), Humanities</h4>
            <p className="text-gray-600">Amrita Lal Dey College (2010 - 2012)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Digital Health Platform Scaling",
      org: "UNFPA / Partner Orgs",
      description: "Scaled a digital health platform to reach over 185,000 individuals, ensuring accessibility and robust data tracking in a resource-constrained development context.",
      tags: ["Digital Health", "Scale-up", "Data Tracking"]
    },
    {
      title: "Open-Source Paramedic LMS",
      org: "Swisscontact",
      description: "Spearheaded the development and launch of Bangladesh's first open-source Learning Management System specifically designed to upskill paramedics.",
      tags: ["LMS Architecture", "EdTech", "Capacity Building"]
    },
    {
      title: "AI-Powered Workflow Integration",
      org: "Development Sector Implementation",
      description: "Integrated AI tools (NotebookLM, Power BI) and automated digital workflows into data processing systems, successfully reducing processing and reporting time by 40%.",
      tags: ["AI Integration", "Process Automation", "Power BI"]
    }
  ];

  return (
    <div className="max-w-4xl animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center"><Code className="mr-3 text-blue-600" /> Digital Projects & Impact</h2>
        <p className="text-gray-600">Highlighting key tech-enabled implementations and capacity-building initiatives.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex-grow">
              <span className="text-sm font-bold text-blue-600 mb-2 block">{proj.org}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{proj.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{proj.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="max-w-2xl mx-auto animate-in fade-in duration-500 text-center pt-10">
    <div className="inline-flex items-center justify-center p-4 bg-blue-50 text-blue-600 rounded-full mb-6">
      <Mail size={32} />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
    <p className="text-lg text-gray-600 mb-8">
      I am highly motivated to leverage my background in IT and 4+ years of development sector experience for the UNDP Digital/AI Skilling Project Manager role.
    </p>
    
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
      <p className="text-gray-800 font-medium mb-4">Reach out via professional networks:</p>
      <a 
        href="https://www.linkedin.com/in/projna-dasgupta" 
        target="_blank" 
        rel="noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
      >
        <ExternalLink size={18} className="mr-2" />
        Connect on LinkedIn
      </a>
    </div>
  </div>
);

const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto animate-in fade-in duration-500 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mt-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Shield className="mr-3 text-blue-600" /> Privacy Policy</h2>
    <div className="prose text-gray-600 space-y-4">
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>This portfolio is a static site intended for professional demonstration and recruitment purposes. It does not actively track, collect, or sell personal user data.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6">Analytics</h3>
      <p>Standard web hosting analytics (via Vercel) may log anonymous usage data such as page views and geography to ensure server health and performance.</p>
      <h3 className="text-xl font-bold text-gray-900 mt-6">Contact</h3>
      <p>If you have any questions about this professional portfolio, please reach out via LinkedIn.</p>
    </div>
  </div>
);

// --- MAIN ROUTER APP ---

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}
