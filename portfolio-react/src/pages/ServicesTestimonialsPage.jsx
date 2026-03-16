import { Link } from 'react-router-dom'

export function ServicesTestimonialsPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 w-full glass-panel border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            className="font-headline font-bold text-xl tracking-tighter text-on-surface"
            to="/#home"
          >
            DESIGNER.PORTFOLIO
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link
              className="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors"
              to="/#home"
            >
              Home
            </Link>
            <Link
              className="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors"
              to="/portfolio"
            >
              Work
            </Link>
            <Link
              className="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors"
              to="/#about"
            >
              About
            </Link>
            <Link
              className="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors text-primary"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors"
              to="/services#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <Link className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-label font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all shadow-[0_0_20px_rgba(208,188,255,0.2)]" to="/contact">
            Let&apos;s Talk
          </Link>
        </div>
      </nav>

      <main>
        {/* Services Section */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="font-label text-xs tracking-[0.2em] text-secondary-container uppercase mb-4 block">
                Capabilities
              </span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight leading-none">
                Creative{' '}
                <span className="text-primary italic font-light">
                  Solutions.
                </span>
              </h2>
            </div>
            <div className="md:max-w-sm">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Pushing the boundaries of digital aesthetics through motion,
                identity, and narrative-driven design.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden bg-surface-container-low p-10 rounded-xl transition-all duration-500 hover:bg-surface-container-high glow-hover">
              <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-surface-container-highest group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">
                  brush
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Graphic Design
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Visual identities that demand attention. From editorial layouts
                to branding systems that speak your truth.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">
                  BRANDING
                </span>
                <span className="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">
                  PRINT
                </span>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="group relative overflow-hidden bg-surface-container-low p-10 rounded-xl transition-all duration-500 hover:bg-surface-container-high glow-hover border-t-2 border-secondary-container/20">
              <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-surface-container-highest group-hover:bg-secondary-container/20 transition-colors">
                <span className="material-symbols-outlined text-secondary-container text-3xl">
                  movie_edit
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Video Editing
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Precision cutting for high-impact storytelling. Commercials,
                music videos, and cinematic social content.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">
                  COLOR GRADE
                </span>
                <span className="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">
                  4K
                </span>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="group relative overflow-hidden bg-surface-container-low p-10 rounded-xl transition-all duration-500 hover:bg-surface-container-high glow-hover border-t-2 border-tertiary-container/20">
              <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-surface-container-highest group-hover:bg-tertiary-container/20 transition-colors">
                <span className="material-symbols-outlined text-tertiary-container text-3xl">
                  auto_awesome_motion
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Motion Graphics
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Bringing static designs to life. 2D/3D animation that elevates
                the digital experience to cinematic levels.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">
                  LOTTIE
                </span>
                <span
                  className="material-symbols-outlined text-xs text-tertiary-container"
                  data-weight="fill"
                >
                  fiber_manual_record
                </span>
                <span className="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">
                  3D
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-24 bg-surface-container-lowest overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
                Voices of{' '}
                <span className="text-secondary-container">Trust.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border border-outline-variant/5">
                <div className="mb-8">
                  <div className="flex gap-1 mb-6 text-tertiary-container">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                  </div>
                  <p className="text-on-surface text-lg leading-relaxed italic">
                    &quot;The level of technical precision combined with raw
                    creative energy is something we haven&apos;t found
                    elsewhere. A true partner in design.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Professional headshot of male client"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XXkQIoPJdDReF7D7t7UICb-NEYbmWN1ytMuo2Jme6tJ5K9EOOTdMmPSO_Na22AvOr1grQ5nhodH1AWkUynDG7QhQOGK8YnjW0T7EJWGEgQzr3An-ZFPmicdAdx3SqgyA9HWLhzsX0AXY2q8xFsPvGMs57S-Ys7iJsnN7iO-GN4giBlReNznlxio7p5xdGJnYgrw83A3kR5juEkMB07g2hbFCgxQ7HGJjXWb-1e7FmYYONb_ubiyka4jvcmZL9T8Ts_Ty4p2K-I0m"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Marcus Chen</h4>
                    <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
                      Director, Zenith Agency
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 (Featured) */}
              <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border border-primary/20 relative">
                <span className="absolute -top-3 -right-3 bg-primary text-on-primary font-label text-[9px] font-bold tracking-[0.2em] px-3 py-1 rounded-full uppercase">
                  Featured
                </span>
                <div className="mb-8">
                  <div className="flex gap-1 mb-6 text-primary">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                  </div>
                  <p className="text-on-surface text-xl font-medium leading-relaxed italic">
                    &quot;The motion graphics work transformed our brand
                    perception overnight. It’s not just video; it’s an immersive
                    experience.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Portrait of smiling female creative director"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCXkjQBB6qpl861np7V7OHULlpwRl8thIj6nyeGPEEqq7SVh8b_TIzAGFWPRTaca9icTwzLsyNwuQ5nBKfHnlL5er3n_j01whNoFIh9dNWJrYhqUsasH70ITEk2G9Jdc0ws71d_b8Y-4NEBMnrqTMKF-wJZeKUraqhhISXJyb_YAQ3Oz8QnfhCNp7azarHH2-CPmOvZKxOB1juehhioMQM2W24X63I6a3Hvc5m2y6JpFXd3n9ULSaPSfgXqu79Sd9HmRRqWIoyUA3H"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Sarah Jenkins</h4>
                    <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
                      Founder, Glow Digital
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border border-outline-variant/5">
                <div className="mb-8">
                  <div className="flex gap-1 mb-6 text-tertiary-container">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      data-weight="fill"
                    >
                      star
                    </span>
                  </div>
                  <p className="text-on-surface text-lg leading-relaxed italic">
                    &quot;Quick, professional, and incredibly intuitive. They
                    understood our vision before we even finished explaining it.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Portrait of happy male tech founder"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7qqd3E84nyc4roMAfqruoTwuxDLcWS08cVk_7njtJB0Q7UecBktFwn3oijc9-GcMBCiNr8tHcUaO6OrJ1fJRKQ-9756TX0QoCISNsYP4Cu_6qoTwOLJO7jJqjIM4hYHUple9oajYxc2CYV1DlEKF4h_SptY8ADOC_mb_qSx0iNg_bzUvqHVcl3_P4wJWvfiikEkAxBIev6EkTHm67s65i87E1RR9kuLYO8YYGs6GjmydTVsT1BvDGdKK8WP3zudDKADjz7sLJ2yku"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">David Vance</h4>
                    <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
                      CTO, Vertex Media
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section (The Pulse) */}
        <section className="py-32 px-6 text-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,209,255,0.05)_0%,_transparent_70%)]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </div>
              <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary-container">
                Available for New Projects
              </span>
            </div>
            <h2 className="font-headline text-5xl md:text-8xl font-bold tracking-tight mb-12">
              Let&apos;s create <br />
              <span className="text-primary">something iconinc.</span>
            </h2>
            <button className="bg-surface-bright border border-outline-variant/30 px-10 py-5 rounded-full font-headline font-bold text-xl hover:bg-on-background hover:text-background transition-all">
              Start a Project
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-on-surface-variant font-label text-[10px] tracking-widest">
            © 2024 Graphic &amp; Video Portfolio. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <a
              className="font-label text-[10px] tracking-widest text-on-surface hover:text-primary transition-colors uppercase"
              href="#"
            >
              Behance
            </a>
            <a
              className="font-label text-[10px] tracking-widest text-on-surface hover:text-primary transition-colors uppercase"
              href="#"
            >
              Dribbble
            </a>
            <a
              className="font-label text-[10px] tracking-widest text-on-surface hover:text-primary transition-colors uppercase"
              href="#"
            >
              Vimeo
            </a>
            <a
              className="font-label text-[10px] tracking-widest text-on-surface hover:text-primary transition-colors uppercase"
              href="#"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

