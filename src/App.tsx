/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lottie from 'lottie-react';
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Layout,
  Smartphone,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
  Database,
  Globe,
  Cpu,
  ArrowUp
} from 'lucide-react';
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiFramer,
  SiBootstrap,
  SiGit,
  SiPostman,
  SiJavascript
} from 'react-icons/si';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Static Assets ---
const LOTTIE_URL = "https://assets10.lottiefiles.com/packages/lf20_xRmNN8.json";
const PROJECT_IMAGES: Record<string, string> = {
  "WayTrip - Travel Agency": "/src/assets/waytrip mockup.png",
  "CosmoNest - House Rent App": "/src/assets/cosmonest mockup.png"
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const RESUME_DATA = {
  name: "Shreedatt",
  fullName: "Shreedatt Chetan Pandya",
  role: "Frontend Developer & Automation Specialist",
  email: "shreepandyaa12@gmail.com",
  phone: "+91 91577 33002",
  location: "Vadodara, Gujarat",
  experience_years: "4+", // Based on his projects and internships
  summary: "I build smooth, easy-to-use website interfaces and lead generation automation workflows.",
  skills: [
    { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express", icon: SiExpress, color: "text-white" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF]" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "REST APIs", icon: SiPostman, color: "text-[#FF6C37]" }
  ],
  experience: [
    {
      company: "Keshav Encon",
      role: "Marketing Executive",
      period: "Aug 2025 - Present",
      description: "Led B2B outreach and LinkedIn campaigns for an AI-driven recruiting platform, created high-converting job advertisements, and supported React frontend improvements to enhance product performance and user experience.",
      color: "bg-brand-teal"
    },
    {
      company: "Career Naksha",
      role: "Full Stack Developer Intern",
      period: "July 2025 - Aug 2025",
      description: "Assisted in developing a MERN-stack location-based attendance system with geofencing and real-time tracking.",
      color: "bg-brand-orange"
    },
    {
      company: "MaMo TechnoLabs LLP",
      role: "Frontend Developer Intern",
      period: "Dec 2024 - March 2025",
      description: "Gained experience in teamwork, UI development, and API integration for a seamless UX.",
      color: "bg-brand-yellow"
    }
  ],
  projects: [
    {
      title: "WayTrip - Travel Agency",
      category: "Website Design",
      image: "https://picsum.photos/seed/travel/800/600",
      description: "Responsive Travel Agency built with Bootstrap, featuring smooth hover animations and a clean, modern design.",
      link: "https://way-trip.vercel.app/"
    },
    {
      title: "CosmoNest - House Rent App",
      category: "Full Stack Web App",
      image: "https://picsum.photos/seed/house/800/600",
      description: "Implemented user authentication, real-time booking management, and an intuitive UI using MERN Stack.",
      link: "https://cosmo-nest-house-rent-app.vercel.app/"
    }
  ],
  social: {
    linkedin: "https://linkedin.com/in/shreedattpandya",
    github: "https://github.com/ShreedattPandya"
  },
  services: [
    {
      title: "Frontend Development",
      count: "12+ Projects",
      icon: Layout,
      color: "bg-brand-teal"
    },
    {
      title: "Full Stack Applications",
      count: "8+ Projects",
      icon: Code,
      color: "bg-brand-yellow"
    },
    {
      title: "B2B Outreach | Lead Systems",
      count: "5+ Workflows",
      icon: Smartphone,
      color: "bg-brand-orange"
    }
  ]
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lottieData, setLottieData] = useState<object | null>(null);

  useEffect(() => {
    fetch(LOTTIE_URL)
      .then(res => res.json())
      .then(data => setLottieData(data))
      .catch(() => { });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-brand-orange">S</span>
            <span>{RESUME_DATA.name}</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Works', 'Experience', 'Notes'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-widest hover:text-brand-orange transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${RESUME_DATA.phone}`} className="text-sm font-semibold flex items-center gap-2">
              <Phone size={16} className="text-brand-orange" />
              {RESUME_DATA.phone}
            </a>
            <button className="p-2 rounded-full border border-brand-navy/10 hover:bg-brand-navy hover:text-white transition-all">
              <Phone size={18} />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-cream pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {['Services', 'Works', 'Experience', 'Notes'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold"
                >
                  {item}
                </a>
              ))}
              <div className="pt-8 border-t border-brand-navy/10">
                <p className="text-sm uppercase tracking-widest opacity-50 mb-4">Contact</p>
                <p className="text-xl font-bold">{RESUME_DATA.phone}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* --- Hero Section --- */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 pb-20 pt-10">
          {/* Dynamic Background Orbs */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[10%] -right-[10%] w-[60vw] max-w-[800px] aspect-square rounded-full bg-brand-teal/10 blur-[100px]"
            />
            <motion.div
              animate={{
                y: [0, 40, 0],
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-[20%] -left-[10%] w-[50vw] max-w-[600px] aspect-square rounded-full bg-brand-orange/10 blur-[120px]"
            />
          </div>

          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center z-10 pt-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                }
              }}
              className="flex flex-col gap-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } } }}>
                <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/60 border border-white/80 shadow-sm backdrop-blur-md mb-8">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-teal"></span>
                  </span>
                  <span className="text-brand-teal font-bold tracking-widest text-[10px] uppercase">
                    Available for new projects
                  </span>
                </div>

                <h1 className="text-[4rem] sm:text-7xl md:text-8xl lg:text-[6rem] font-black leading-[0.95] tracking-tight text-brand-navy">
                  Hey There,<br />
                  I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-[#4A9D9D] to-brand-orange drop-shadow-sm">{RESUME_DATA.name}</span>.
                </h1>
              </motion.div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } } }}
                className="text-xl md:text-2xl text-brand-navy/70 leading-relaxed font-medium max-w-xl"
              >
                {RESUME_DATA.summary}
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25 } } }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mt-6"
              >
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-brand-navy text-white rounded-full font-bold overflow-hidden shadow-xl shadow-brand-navy/20 hover:shadow-2xl hover:shadow-brand-navy/30 transition-all active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Talk <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-[#FF8C73] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </a>

                <div className="flex items-center justify-center sm:justify-start gap-4 px-6 py-4 bg-white/70 backdrop-blur-xl border border-white/60 rounded-full shadow-lg shadow-brand-navy/5">
                  <div className="text-4xl font-black text-brand-orange tracking-tighter">7<span className="text-2xl text-brand-teal">+</span></div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold leading-tight text-brand-navy/60">
                    Months<br />Experience
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.4, type: "spring", bounce: 0.3, delay: 0.3 }}
              className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none mt-8 lg:mt-0"
            >
              {/* Lottie Animation Container */}
              <div className="relative w-full aspect-square flex items-center justify-center">

                {/* Layered concentric circle bg */}
                <div className="absolute inset-[5%] rounded-full bg-brand-navy/[0.04] z-0" />
                <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-brand-teal/[0.12] to-brand-navy/[0.06] z-0" />
                <div className="absolute inset-[20%] rounded-full bg-gradient-to-tr from-brand-orange/[0.08] via-transparent to-brand-teal/[0.06] z-0" />

                {/* Animated spinning thin rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[8%] rounded-full border border-brand-navy/[0.07] z-0"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[16%] rounded-full border border-dashed border-brand-teal/[0.1] z-0"
                />

                {/* Small dot accents on the rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[5%] z-[1]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-teal/40" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-orange/30" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-navy/20" />
                </motion.div>

                {/* Orbiting tech icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-2%] z-[2]"
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-xl shadow-lg shadow-brand-navy/8 flex items-center justify-center text-[#61DAFB]">
                    <SiReact size={20} />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-xl shadow-lg shadow-brand-navy/8 flex items-center justify-center text-[#3178C6]">
                    <SiTypescript size={20} />
                  </div>
                  <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-11 h-11 bg-white rounded-xl shadow-lg shadow-brand-navy/8 flex items-center justify-center text-[#06B6D4]">
                    <SiTailwindcss size={20} />
                  </div>
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-11 h-11 bg-white rounded-xl shadow-lg shadow-brand-navy/8 flex items-center justify-center text-[#339933]">
                    <SiNodedotjs size={20} />
                  </div>
                </motion.div>

                {/* Lottie Player */}
                <div className="relative z-10 w-[75%] aspect-square">
                  {lottieData ? (
                    <Lottie
                      animationData={lottieData}
                      loop
                      className="w-full h-full drop-shadow-xl"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-brand-navy/5 animate-pulse" />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="grid gap-6">
              {RESUME_DATA.services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-3xl bg-brand-cream border border-brand-navy/5 hover:shadow-xl transition-all cursor-default"
                >
                  <div className="flex items-center gap-6">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white", service.color)}>
                      <service.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                      <p className="text-brand-navy/50 font-medium">{service.count}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h2 className="text-6xl font-bold mb-8">What do I help?</h2>
              <p className="text-xl text-brand-navy/60 leading-relaxed mb-12">
                I help companies not only build digital products but also position them in the market.
                With experience in frontend development, CRM optimization, LinkedIn outreach campaigns,
                and B2B cold calling, I understand both how to build systems and how to generate users for them.
              </p>
            </div>
          </div>
        </section>

        {/* --- Skills Marquee --- */}
        <section className="py-10 bg-brand-navy overflow-hidden border-y border-white/5 relative">
          {/* Subtle Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-navy to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-navy to-transparent z-10" />

          <div className="flex whitespace-nowrap animate-marquee">
            {[...RESUME_DATA.skills, ...RESUME_DATA.skills].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 px-10 group">
                <div className={cn(
                  "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20",
                  skill.color
                )}>
                  <skill.icon size={20} />
                </div>
                <span className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                  {skill.name}
                </span>
                <div className="w-1 h-1 bg-brand-orange/20 rounded-full mx-2" />
              </div>
            ))}
          </div>
        </section>

        {/* --- Floating Scroll to Top Button --- */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brand-orange text-brand-navy flex items-center justify-center shadow-2xl shadow-brand-orange/20 hover:scale-110 transition-transform active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* --- Works Section --- */}
        <section id="works" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-5xl font-bold mb-4">My Latest Works</h2>
                <p className="text-brand-navy/50 font-medium">Perfect solution for digital experience</p>
              </div>
              <a href="#" className="text-brand-orange font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Explore More Works <ChevronRight size={20} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {RESUME_DATA.projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-[32px] overflow-hidden mb-8 bg-brand-navy/5">
                    <img
                      src={PROJECT_IMAGES[project.title]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback for local development if image is missing
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.title}/800/600`;
                      }}
                    />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-navy">
                        <ArrowUpRight size={32} />
                      </div>
                    </a>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">{project.category}</p>
                      <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-brand-navy/60 max-w-md">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-4">My Work Experience</h2>
              <p className="text-brand-navy/50 font-medium">Professional journey and contributions</p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-brand-navy/10 border-dashed border-l" />

              <div className="space-y-24">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={cn(
                      "relative flex items-center justify-between gap-12",
                      idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    )}
                  >
                    <div className="w-1/2 text-right">
                      {idx % 2 === 0 ? (
                        <>
                          <h4 className="text-2xl font-bold">{exp.company}</h4>
                          <p className="text-brand-navy/50 font-medium mt-1">{exp.period}</p>
                        </>
                      ) : (
                        <div className="text-left">
                          <h4 className="text-2xl font-bold">{exp.role}</h4>
                          <p className="text-brand-navy/60 mt-4 leading-relaxed">{exp.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Dot */}
                    <div className={cn("relative z-10 w-12 h-12 rounded-full border-4 border-brand-cream flex items-center justify-center text-white shadow-lg", exp.color)}>
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>

                    <div className="w-1/2">
                      {idx % 2 === 0 ? (
                        <div className="text-left">
                          <h4 className="text-2xl font-bold">{exp.role}</h4>
                          <p className="text-brand-navy/60 mt-4 leading-relaxed">{exp.description}</p>
                        </div>
                      ) : (
                        <div className="text-right">
                          <h4 className="text-2xl font-bold">{exp.company}</h4>
                          <p className="text-brand-navy/50 font-medium mt-1">{exp.period}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Notes Section --- */}
        <section id="notes" className="py-32 px-6 bg-brand-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-4">Notes & Insights</h2>
              <p className="text-brand-navy/50 font-medium">Thoughts on development, marketing, and growth</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Building Scalable Lead Systems", date: "Oct 2025", category: "Automation" },
                { title: "The Intersection of Marketing & Dev", date: "Sept 2025", category: "Strategy" },
                { title: "Optimizing React for Performance", date: "Aug 2025", category: "Tech" }
              ].map((note, idx) => (
                <motion.div
                  key={note.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-brand-navy/5 hover:shadow-lg transition-all"
                >
                  <p className="text-brand-orange font-bold uppercase tracking-widest text-[10px] mb-4">{note.category} • {note.date}</p>
                  <h3 className="text-2xl font-bold mb-6">{note.title}</h3>
                  <a href="#" className="text-sm font-bold flex items-center gap-2 hover:text-brand-orange transition-colors">
                    Read Note <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-32 px-6 bg-brand-navy text-white overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-6xl md:text-7xl font-bold mb-12 leading-tight">
              Let's make something amazing together.
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="px-10 py-5 bg-brand-orange rounded-full font-bold text-lg hover:bg-white hover:text-brand-orange transition-all"
              >
                Start by saying hi
              </a>
              <div className="flex items-center gap-4">
                <a href={RESUME_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all">
                  <Linkedin size={24} />
                </a>
                <a href={RESUME_DATA.social.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-12 px-6 border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="text-xl font-bold tracking-tighter">
            <span className="text-brand-orange">S</span>
            <span>{RESUME_DATA.name}</span>
          </div>

          <p className="text-brand-navy/40 text-sm font-medium">
            © {new Date().getFullYear()} {RESUME_DATA.fullName}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">
            <a href="#" className="text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
