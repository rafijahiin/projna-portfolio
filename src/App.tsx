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
    { path: '/projects', label: 'Initiatives' },
    { path: '/skills', label: 'Skills & Education' },
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
          <span className="text-blue-600">Programme Coordinator</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
          Skills Ecosystems, Agribusiness & Trade Public-Private Partnerships
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          A dedicated development professional based in Dhaka, Bangladesh, with a Master's in Development Studies from the University of Dhaka. Extensive experience in program coordination, policy support, and education management. Proven track record of facilitating engagement between government agencies, private sector actors, and development partners to strengthen workforce systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/experience" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all">
            View Experience
          </Link>
          <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all">
            See Initiatives
          </Link>
        </div>
      </div>
    </section>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4"><Briefcase size={24} /></div>
        <h3 className="font-bold text-gray-900 mb-2">Program Coordination</h3>
        <p className="text-gray-600 text-sm">Extensive experience managing multi-sector programmes, coordinating with 70+ enterprises, and overseeing large-scale skills and technical assistance interventions.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4"><User size={24} /></div>
        <h3 className="font-bold text-gray-900 mb-2">Public-Private Partnerships</h3>
        <p className="text-gray-600 text-sm">Facilitated engagement between government policymakers, private sector actors, and service providers to strengthen sector competitiveness.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4"><Award size={24} /></div>
        <h3 className="font-bold text-gray-900 mb-2">Policy Support & MEAL</h3>
        <p className="text-gray-600 text-sm">Skilled in developing analytical briefs, monitoring performance indicators, preparing donor reports, and organizing high-level policy dialogue events.</p>
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
        "Coordinate multi-sector programme activities across 70+ manufacturing and agro-processing enterprises, supporting delivery of large-scale skills and technical assistance interventions.",
        "Facilitate engagement between government agencies, private sector actors, development partners, and service providers to strengthen workforce systems and sector competitiveness.",
        "Prepare analytical briefs, structured reports, and presentation materials to inform senior management and stakeholder decision-making.",
        "Support organisation of high-level workshops, stakeholder consultations, business expos, and policy dialogue events involving public and private institutions.",
        "Contribute to implementation of interventions aligned with export readiness, responsible business practices, and green-growth priorities.",
        "Maintain structured documentation and monitoring systems to track progress, performance indicators, and stakeholder coordination outputs."
      ]
    },
    {
      title: "Officer - Skills Training & Implementation (BYETS project)",
      company: "Swisscontact",
      date: "Jan 2023 - Dec 2023",
      bullets: [
        "Supported operational planning and implementation of skills initiatives in export-oriented sectors through coordination with industry experts and policy counterparts.",
        "Conducted sector-informed needs assessments to ensure market relevance and workforce alignment.",
        "Managed coordination with national and international service providers, ensuring compliance, reporting, and quality assurance.",
        "Contributed to delivery of 4,000+ structured training opportunities aligned with decent work and productivity improvement goals."
      ]
    },
    {
      title: "Communication Officer (Uttoron - Skills for better life)",
      company: "Swisscontact",
      date: "Sep 2021 - Dec 2022",
      bullets: [
        "Produced briefing materials, communication outputs, and knowledge products for donors, government stakeholders, and industry partners.",
        "Coordinated multi-stakeholder events and institutional engagements to strengthen visibility and cross-sector collaboration.",
        "Supported establishment of public-private vocational centres contributing to local economic development."
      ]
    },
    {
      title: "Fellow - MMWW Project, MEAL Unit",
      company: "ActionAid Bangladesh",
      date: "Nov 2020 - Jul 2021",
      bullets: [
        "Developed donor reports and analyzed data utilizing web-based systems and evidence.",
        "Handled concept note development, event management, and proposal development.",
        "Regularly updated project information in AAB's MIS system."
      ]
    },
    {
      title: "Intern, Dialogue & Communication",
      company: "Centre for Policy Dialogue (CPD)",
      date: "Mar 2020 - Jun 2020",
      bullets: [
        "Communicated with related stakeholders, including government policymakers and media for CPD press briefings.",
        "Organised \"VNR 2020 of Bangladesh: Positioning Non-State Actors\" as The Citizen's Platform for SDGS.",
        "Communicated with electronic and print media persons regularly about updated program schedules."
      ]
    },
    {
      title: "Assistant Director",
      company: "Filmy Features",
      date: "Feb 2019 - Feb 2020",
      bullets: [
        "Oversaw pre-production processes and procedures such as film scripting and choosing filming locations.",
        "Worked with a highly qualified team on popular Television and online commercials.",
        "Achieved expertise in documentary film making and cinematography."
      ]
    }
  ];

  return (
    <div className="max-w-4xl animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center"><Briefcase className="mr-3 text-blue-600" /> Professional Experience</h2>
        <p className="text-gray-600">A timeline of professional roles in program coordination, MEAL, and communications.</p>
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
              <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium text-right md:text-left">
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
      title: "Core Competencies",
      skills: ["Policy Support", "Program Coordination", "Education Management", "Public-Private Partnerships", "Agribusiness & Trade", "Skills Ecosystems"]
    },
    {
      title: "Project Management & MEAL",
      skills: ["Monitoring & Evaluation", "Donor Reporting", "Needs Assessments", "Stakeholder Consultations", "Event Management", "MIS Systems"]
    },
    {
      title: "Communications & Media",
      skills: ["Knowledge Products", "Analytical Briefs", "Press Briefings", "Documentary Filmmaking", "Scripting", "Pre-production"]
    },
    {
      title: "Languages",
      skills: ["Bengali (Native or Bilingual)", "English (Full Professional)", "Spanish (Limited Working)"]
    }
  ];

  return (
    <div className="max-w-4xl animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center"><User className="mr-3 text-blue-600" /> Skills & Education</h2>
        <p className="text-gray-600">Top skills and academic background.</p>
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
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center"><BookOpen className="mr-3 text-blue-600" /> Academic Qualifications</h3>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="text-lg font-bold text-gray-900">Master's of Social Science, Development Studies</h4>
            <p className="text-gray-600">University of Dhaka (2018 - 2019)</p>
          </div>
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="text-lg font-bold text-gray-900">Bachelor's of Social Science, Development Studies</h4>
            <p className="text-gray-600">University of Dhaka (2014 - 2018)</p>
          </div>
          <div className="border-l-4 border-gray-300 pl-4">
            <h4 className="text-lg font-bold text-gray-900">Higher Secondary Certificate (HSC), Humanities</h4>
            <p className="text-gray-600">Amrita Lal Dey College (2010 - 2012)</p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <h4 className="text-lg font-bold text-gray-900">Secondary School Certificate (SSC), Science</h4>
            <p className="text-gray-600">Barisal Government Girls High School (2008 - 2010)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "BYETS Project Interventions",
      org: "Swisscontact",
      description: "Supported operational planning and delivered 4,000+ structured training opportunities in export-oriented sectors, ensuring compliance and quality assurance with national service providers.",
      tags: ["Skills Training", "Export Readiness", "Needs Assessment"]
    },
    {
      title: "Uttoron - Skills for Better Life",
      org: "Swisscontact",
      description: "Coordinated institutional engagements and supported the establishment of public-private vocational centres to contribute to local economic development.",
      tags: ["Vocational Centres", "Public-Private Partnership", "Communications"]
    },
    {
      title: "VNR 2020 of Bangladesh: Positioning Non-State Actors",
      org: "Centre for Policy Dialogue (CPD)",
      description: "Organised the Citizen's Platform for SDGS event, facilitating communication with government policymakers and media for press briefings.",
      tags: ["Event Management", "Policy Dialogue", "SDGs"]
    },
    {
      title: "MMWW Project Implementation",
      org: "ActionAid Bangladesh",
      description: "Maintained the MIS system, updated project information, and analyzed data utilizing web-based systems to develop comprehensive donor reports.",
      tags: ["MEAL", "Data Analysis", "Donor Reporting"]
    }
  ];

  return (
    <div className="max-w-4xl animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center"><Code className="mr-3 text-blue-600" /> Key Initiatives & Interventions</h2>
        <p className="text-gray-600">Major projects and programmatic interventions supported throughout my career.</p>
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
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
    <p className="text-lg text-gray-600 mb-8">
      Interested in connecting for opportunities in program coordination, policy support, or education management? Feel free to reach out.
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
