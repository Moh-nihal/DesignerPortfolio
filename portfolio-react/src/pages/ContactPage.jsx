import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            className="font-headline text-xl font-bold tracking-tighter text-on-surface"
            to="/#home"
          >
            DESIGNER.PORTFOLIO
          </Link>
          <div className="hidden md:flex items-center gap-12">
            <Link
              className="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
              to="/#home"
            >
              Home
            </Link>
            <Link
              className="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
              to="/portfolio"
            >
              Work
            </Link>
            <Link
              className="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
              to="/#about"
            >
              About
            </Link>
            <Link
              className="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
              to="/services#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <Link className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-DEFAULT font-label text-xs font-bold tracking-widest hover:brightness-110 transition-all glow-hover" to="/contact">
            Let&apos;s Talk
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Header Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-label text-xs tracking-[0.3em] text-primary mb-6 block">
              GET IN TOUCH
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-on-surface mb-10">
              START A <br /> PROJECT.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-12">
              Whether it&apos;s a cinematic production, motion design, or a full
              digital rebrand, let&apos;s create something that moves.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-widest text-outline block">
                    EMAIL US
                  </span>
                  <span className="text-on-surface text-lg">
                    hello@portfolio.design
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <span className="font-label text-[10px] tracking-widest text-outline block">
                    LOCATION
                  </span>
                  <span className="text-on-surface text-lg">
                    London, United Kingdom
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links from JSON (Icons mapped to social names) */}
            <div className="mt-16 flex gap-6">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest/20 hover:bg-primary/20 transition-all border border-outline-variant/10"
                href="#"
              >
                <span className="material-symbols-outlined text-on-surface-variant">
                  language
                </span>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest/20 hover:bg-primary/20 transition-all border border-outline-variant/10"
                href="#"
              >
                <span className="material-symbols-outlined text-on-surface-variant">
                  photo_camera
                </span>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest/20 hover:bg-primary/20 transition-all border border-outline-variant/10"
                href="#"
              >
                <span className="material-symbols-outlined text-on-surface-variant">
                  movie
                </span>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest/20 hover:bg-primary/20 transition-all border border-outline-variant/10"
                href="#"
              >
                <span className="material-symbols-outlined text-on-surface-variant">
                  work
                </span>
              </a>
            </div>
          </div>

          {/* Form Section (Bento Style Layout) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-10 md:p-16 rounded-xl border border-outline-variant/10 shadow-2xl relative overflow-hidden">
              {/* Subtle Glow Ornament */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
              <form className="space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group">
                    <label className="font-label text-[10px] tracking-widest text-outline group-focus-within:text-primary transition-colors">
                      FULL NAME
                    </label>
                    <input
                      className="w-full bg-transparent py-4 cinematic-input text-on-surface placeholder:text-surface-bright border-x-0 border-t-0 ring-0 focus:ring-0 px-0"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="group">
                    <label className="font-label text-[10px] tracking-widest text-outline group-focus-within:text-primary transition-colors">
                      EMAIL ADDRESS
                    </label>
                    <input
                      className="w-full bg-transparent py-4 cinematic-input text-on-surface placeholder:text-surface-bright border-x-0 border-t-0 ring-0 focus:ring-0 px-0"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="font-label text-[10px] tracking-widest text-outline group-focus-within:text-primary transition-colors">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    className="w-full bg-transparent py-4 cinematic-input text-on-surface placeholder:text-surface-bright border-x-0 border-t-0 ring-0 focus:ring-0 px-0 resize-none"
                    placeholder="Tell us about your project goals..."
                    rows={4}
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button
                    className="group flex items-center gap-4 bg-on-surface text-background px-10 py-5 rounded-DEFAULT font-label text-xs font-bold tracking-widest hover:bg-primary transition-all"
                    type="submit"
                  >
                    SEND MESSAGE
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_right_alt
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Custom Pulse Status */}
            <div className="mt-8 flex items-center justify-end gap-3 px-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
              </span>
              <span className="font-label text-[10px] tracking-widest text-on-surface-variant">
                AVAILABLE FOR Q4 2024 PROJECTS
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-16 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="font-headline text-lg font-bold tracking-tighter text-on-surface-variant">
              DESIGNER.PORTFOLIO
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              <a
                className="font-label text-[10px] tracking-widest text-outline hover:text-primary transition-colors"
                href="#"
              >
                Behance
              </a>
              <a
                className="font-label text-[10px] tracking-widest text-outline hover:text-primary transition-colors"
                href="#"
              >
                Dribbble
              </a>
              <a
                className="font-label text-[10px] tracking-widest text-outline hover:text-primary transition-colors"
                href="#"
              >
                Vimeo
              </a>
              <a
                className="font-label text-[10px] tracking-widest text-outline hover:text-primary transition-colors"
                href="#"
              >
                LinkedIn
              </a>
            </div>
            <div className="font-label text-[10px] tracking-widest text-outline opacity-60">
              © 2024 Graphic &amp; Video Portfolio. All rights reserved.
            </div>
          </div>
          <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
          <div className="mt-12 text-center">
            <p className="font-label text-[9px] tracking-[0.5em] text-outline uppercase">
              Crafted with precision in the studio
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

