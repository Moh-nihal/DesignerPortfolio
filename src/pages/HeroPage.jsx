import { Link } from 'react-router-dom'
import aboutProfileImg from '../assets/WhatsApp Image 2026-03-16 at 5.23.18 PM.jpeg'

export function HeroPage() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-outline-variant border-opacity-10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            className="font-headline font-bold text-xl tracking-tighter text-on-surface"
            to="/#home"
          >
            DEEPAK ROSHAN
          </Link>
          <div className="hidden md:flex items-center gap-12">
            <Link
              className="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors"
              to="/#home"
            >
              Home
            </Link>
            <Link
              className="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors"
              to="/portfolio"
            >
              Work
            </Link>
            <Link
              className="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors"
              to="/#about"
            >
              About
            </Link>
            <Link
              className="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors"
              to="/services#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <Link
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-sm uppercase tracking-widest px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(208,188,255,0.4)] transition-all"
            to="/contact"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 hero-gradient"
      >
        {/* Background Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-container opacity-5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center hero-animate">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant border-opacity-20">
            <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse shadow-[0_0_10px_#14d1ff]"></div>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
              Available for new projects
            </span>
          </div>
          <div className="hero-name-wrap relative inline-block">
            <div className="hero-name-glow" aria-hidden="true"></div>
            <h1 className="font-headline font-bold text-6xl md:text-9xl mb-6 tracking-tighter leading-none text-glow">
              <span className="hero-name-line1 inline-block">DEEPAK</span>{' '}
              <br />{' '}
              <span className="hero-name-line2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                ROSHAN
              </span>
            </h1>
          </div>
          <p className="font-headline text-xl md:text-3xl text-on-surface-variant mb-12 max-w-3xl mx-auto font-light leading-relaxed hero-subtitle">
            Architecting digital narratives through{' '}
            <span className="text-on-surface italic">Graphic Design</span> &amp;{' '}
            <span className="text-on-surface italic">Video Editing</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 hero-buttons">
            <Link className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-sm uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 group transition-all hero-btn hero-btn-1" to="/portfolio">
              View Work
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <Link className="w-full sm:w-auto px-10 py-5 bg-surface-variant bg-opacity-40 border border-outline-variant border-opacity-30 text-on-surface font-label text-sm uppercase tracking-widest rounded-lg hover:bg-opacity-60 transition-all hero-btn hero-btn-2" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hero-scroll-indicator">
          <span className="font-label text-[10px] uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent hero-scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 bg-surface relative overflow-hidden about-float-stage"
      >
        <div className="about-float-layer" aria-hidden="true">
          {/* Photoshop */}
          <div className="skill-badge drift-1 expertise-badge expertise-ps flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-[#001E36] hover:bg-[#001E36] transition-colors group cursor-default">
            <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
            <span className="font-label text-xs font-bold text-[#31A8FF]">Ps</span>
            <span className="text-sm font-medium">Photoshop</span>
          </div>
          {/* After Effects */}
          <div className="skill-badge drift-2 expertise-badge expertise-ae flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-[#00005B] hover:bg-[#00005B] transition-colors group cursor-default">
            <div className="w-2 h-2 rounded-full bg-[#9999FF]"></div>
            <span className="font-label text-xs font-bold text-[#9999FF]">Ae</span>
            <span className="text-sm font-medium">After Effects</span>
          </div>
          {/* Premiere */}
          <div className="skill-badge drift-3 expertise-badge expertise-pr flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-[#2D002E] hover:bg-[#2D002E] transition-colors group cursor-default">
            <div className="w-2 h-2 rounded-full bg-[#EA77FF]"></div>
            <span className="font-label text-xs font-bold text-[#EA77FF]">Pr</span>
            <span className="text-sm font-medium">Premiere Pro</span>
          </div>
          {/* Illustrator */}
          <div className="skill-badge drift-4 expertise-badge expertise-ai flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-[#330000] hover:bg-[#330000] transition-colors group cursor-default">
            <div className="w-2 h-2 rounded-full bg-[#FF9A00]"></div>
            <span className="font-label text-xs font-bold text-[#FF9A00]">Ai</span>
            <span className="text-sm font-medium">Illustrator</span>
          </div>
          {/* Cinema 4D */}
          <div className="skill-badge drift-5 expertise-badge expertise-c4d flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-outline-variant border-opacity-20 hover:bg-surface-bright transition-colors group cursor-default">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-medium">Cinema 4D</span>
          </div>
          {/* Figma */}
          <div className="skill-badge drift-6 expertise-badge expertise-figma flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-outline-variant border-opacity-20 hover:bg-surface-bright transition-colors group cursor-default">
            <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
            <span className="text-sm font-medium">Figma</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Profile Image & Creative Frame */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative z-10 border border-outline-variant border-opacity-20">
                <img
                  alt="Professional Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-alt="Close up portrait of a creative professional designer"
                  src={aboutProfileImg}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container opacity-20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-full h-full border border-primary border-opacity-10 rounded-2xl -z-0"></div>
              <div className="absolute bottom-6 -right-8 glass-panel p-6 rounded-xl border border-outline-variant border-opacity-20 max-w-[200px]">
                <p className="font-headline text-3xl font-bold text-primary">
                  08+
                </p>
                <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant leading-tight">
                  Years of Creative Direction
                </p>
              </div>
            </div>

            {/* Bio & Skills */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                  The Creative Core
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Blending motion with static precision.
                </h2>
                <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
                  <p>
                    I specialize in crafting visual identities that breathe. My
                    process sits at the intersection of technical video
                    production and minimalist graphic design, ensuring every
                    frame tells a cohesive story.
                  </p>
                  <p>
                    Based in London, working globally. I help brands bridge the
                    gap between their vision and their audience through
                    cinematic storytelling and high-fidelity design systems.
                  </p>
                </div>
              </div>

              {/* Skills/Tools Bento-ish Badge Cloud */}
              <div>
                <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-6">
                  Expertise Stack
                </h3>
                <div className="font-body text-on-surface-variant text-lg leading-relaxed max-w-xl">
                  Floating constellation of tools I use daily across identity,
                  motion, and cinematic storytelling.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-20 border-t border-outline-variant border-opacity-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <p className="font-label text-sm text-on-surface-variant">
                © 2024 Graphic &amp; Video Portfolio. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <a
                className="font-label text-xs uppercase tracking-widest hover:text-primary transition-colors"
                href="#"
              >
                Behance
              </a>
              <a
                className="font-label text-xs uppercase tracking-widest hover:text-primary transition-colors"
                href="#"
              >
                Dribbble
              </a>
              <a
                className="font-label text-xs uppercase tracking-widest hover:text-primary transition-colors"
                href="#"
              >
                Vimeo
              </a>
              <a
                className="font-label text-xs uppercase tracking-widest hover:text-primary transition-colors"
                href="#"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

