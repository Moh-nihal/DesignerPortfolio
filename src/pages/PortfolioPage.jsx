import { Link } from 'react-router-dom'

export function PortfolioPage() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            className="font-headline text-xl font-bold tracking-tighter text-primary"
            to="/#home"
          >
            DESIGNER.PORTFOLIO
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm tracking-widest"
              to="/#home"
            >
              Home
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm tracking-widest"
              to="/portfolio"
            >
              Work
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm tracking-widest"
              to="/#about"
            >
              About
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm tracking-widest"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm tracking-widest"
              to="/services#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm tracking-widest"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <Link className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2 rounded font-label text-sm font-bold tracking-widest hover:brightness-110 transition-all" to="/contact">
          Let&apos;s Talk
        </Link>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Hero Title Section */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse shadow-[0_0_10px_#14d1ff]"></div>
            <span className="font-label text-xs tracking-[0.2em] text-secondary">
              AVAILABLE FOR FREELANCE
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            SELECTED <br />{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed-dim to-secondary">
              WORKS.
            </span>
          </h1>
          <p className="max-w-xl text-on-surface-variant text-lg leading-relaxed">
            Exploring the intersection of static precision and motion dynamics.
            A collection of visual narratives crafted for digital surfaces.
          </p>
        </header>

        {/* Video Showcase Section */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="font-label text-xs tracking-[0.2em] text-outline">
                REEL 2024
              </span>
              <h2 className="font-headline text-3xl font-bold">Showcase.</h2>
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-surface-container-lowest group cursor-pointer">
            <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-2xl group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined !text-4xl"
                  data-icon="play_arrow"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  play_arrow
                </span>
              </div>
            </div>
            <img
              alt="Video showreel thumbnail"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              data-alt="Cinematic motion graphics showreel thumbnail"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnuXvG4TtNsIyDa8UD7Pe_dYROlsIdK8ZizmAerXY7G87w5DW_iG63MWu7pkcI4E_lTVvLkpIWY67CcZx2uEyuw947et5CLMAkojzRWlp33UFVHlVPsOlJ6Np2tow56yvqdNM01263yd_9yxm4pOdDMW65hBp2EViFtvfLuPmTsbWAV5rUTV_U12pMBznhbCXyZvgsJyS238JnMUQH29kNQGuzS44jJCy_74a-_TB4moYS0tI_dIVQe7pmX2ALX5q39G-91BUY5f3A"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="font-label text-[10px] tracking-[0.3em] text-white/60 mb-1 block">
                PLAYING NOW
              </span>
              <p className="font-headline text-xl text-white">
                Motion Design Sizzle Reel
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Controls */}
        <section className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label text-xs tracking-widest">
              All
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label text-xs tracking-widest">
              Graphic Design
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label text-xs tracking-widest">
              Video
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors font-label text-xs tracking-widest">
              Motion
            </button>
          </div>
          <div className="flex items-center gap-2 text-outline">
            <span className="material-symbols-outlined" data-icon="grid_view">
              grid_view
            </span>
            <span className="font-label text-xs tracking-widest">GRID VIEW</span>
          </div>
        </section>

        {/* Bento Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Item 1: Large (Motion Graphics) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low glow-hover transition-all duration-500">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                alt="Abstract motion piece"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Abstract colorful 3D motion graphics shapes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfJiFzXrzVWLo_VW2_o454pXTyHAJr4h8BfiEdh6ZbD0KNCgZUNX4fLWcQYtX449uUUCxwXpeLdrsNGVydQfDSs4fXp-Uw2KPkCTTH9Hkkgw0xyTADPiHK-GUYdPm6Ydm-5g5JhU9K9x6qV1vC7GVS8_h1eL3yUhO5P_4AET-2J4MbYkna-vjUezEvbbFJq5vJMEQzC9J2780X5d1wvknm81I6tuzGRRPU9pC8QKJL7kYg4JqyWHksVUVEX0-qUbJof1iyZgv6KQmO"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glass-card flex flex-col justify-end p-8">
              <span className="font-label text-xs tracking-[0.3em] text-primary mb-2">
                MOTION GRAPHICS
              </span>
              <h3 className="font-headline text-4xl font-bold tracking-tight">
                Cyber-Surrealism
              </h3>
              <div className="flex gap-4 mt-6">
                <button className="p-3 rounded-full border border-outline/20 hover:bg-primary hover:text-on-primary transition-all">
                  <span
                    className="material-symbols-outlined"
                    data-icon="arrow_outward"
                  >
                    arrow_outward
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Item 2: Small (Graphic Design) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low glow-hover transition-all duration-500">
            <div className="aspect-square w-full overflow-hidden">
              <img
                alt="Brand identity"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Minimalist monochromatic brand identity design layout"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmt6cZEng0u9om-Sb-mG-scyarKFLXHW3RJfr5VcLZeMAHkGTpws6TxC9N-EdO7pDmV1VAtJWUr_50U1e4P1gMK4BFBNBpv6ihkzEkXnm7Vt0ThmlFfxjkWe5gDrGeDWKhITTNDmQiq7ubuO0pZP8iNRgLV1m9psMK3GOOCnd4ITV1EhxMVVsDnuUX_PDL3e91rrPNxxea4ChAegKNgNL6jhtnUmnLYsYzIySkzJB9liWUItIhoECRiykWTMpd5yVUMTF_Kom59vex"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glass-card flex flex-col justify-end p-8">
              <span className="font-label text-xs tracking-[0.3em] text-primary mb-2">
                GRAPHIC DESIGN
              </span>
              <h3 className="font-headline text-2xl font-bold tracking-tight">
                Monolith Studio
              </h3>
            </div>
          </div>

          {/* Item 3: Small (Video Editing) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low glow-hover transition-all duration-500">
            <div className="aspect-square w-full overflow-hidden">
              <img
                alt="Film editing project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Moody cinematic frame of a dark interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeom5EJe4cw95gDWWUe3K6V-towGAwOVRwSCdtyVtD0YXACAjvIlpr8lNI2cAxeaQVlCdfSx-7KN0w73JDN2UNUfp8DnxFqnnze4Z9W8VTEUx2OHB1u65wLuYP8MJoFMELdiUQBe37mxXM0_JiFrNySggCRZQkZGVaiRgpbdDAzFyDk61BRh0cFcMkQt9V3RN0p4ox0DIoHWnmO1M3-EYKhYAXS7-4kSW6rU_yTtulR5aa-QatDft2F8ZhLLSq2Ld-RGm9TXClGxg2"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glass-card flex flex-col justify-end p-8">
              <span className="font-label text-xs tracking-[0.3em] text-primary mb-2">
                VIDEO EDITING
              </span>
              <h3 className="font-headline text-2xl font-bold tracking-tight">
                After Hours
              </h3>
            </div>
          </div>

          {/* Item 4: Large (Motion Graphics) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low glow-hover transition-all duration-500">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                alt="Tech interface design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Retro tech aesthetic hardware with glowing screens"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-5MNKOgrChdP9Qvg49IAS96Boha1FxIeTfrSpuxcWq4dqSe00gHQrwiPQK2J6cWVYFwvlybxCrcU26seWvJP4IIDE4XL3OS9pSyZg7qt2EOYOI7GZ1TkSXqsAwmud1rHHJPjmawVeshtvbrwKJmO13IdP7k6J81KEffZ118Co5_SEUkUKzXO3kYVvDIl0f2ZeAScEzn61ouniqBm7AC8sXoS0QlomDuwG9Uwe85uAasAvBCkN0Fop8U7odABEqLIdxOUklH9avHKv"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glass-card flex flex-col justify-end p-8">
              <span className="font-label text-xs tracking-[0.3em] text-primary mb-2">
                MOTION GRAPHICS
              </span>
              <h3 className="font-headline text-4xl font-bold tracking-tight">
                Retrofuturism UI
              </h3>
            </div>
          </div>

          {/* Item 5: Vertical (Graphic Design) */}
          <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-xl bg-surface-container-low glow-hover transition-all duration-500">
            <div className="aspect-square w-full h-full overflow-hidden">
              <img
                alt="Poster design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Modern typography poster with bold sans-serif text"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBldYMYgywdJnCoYYJtxL1bZVkrLxPOe2G-ridxFNr95bh6awHws0QEQ9uX517DP4xvKaxy21S6hCjjCU9cpf6ODIs7acKFOk2F4VUI0aK_hu5UKVWAgej1Rf4l6ywdWk2YBXZRrCP9ryepLrppTqr3oPfylOb88QZxlKD5OPM20gQY1PpHSh86Ujgk-WI2a7CBJ29qG9OhCFD9NJ3YPuXmTdrz2wLD9HJ7OVbRc4DyGmaaFwll2N6pRgmnqx9Z_APTdO2XoAALvds"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glass-card flex flex-col justify-end p-8">
              <span className="font-label text-xs tracking-[0.3em] text-primary mb-2">
                GRAPHIC DESIGN
              </span>
              <h3 className="font-headline text-2xl font-bold tracking-tight">
                Type Specimen 01
              </h3>
            </div>
          </div>

          {/* Item 6: Medium (Video) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low glow-hover transition-all duration-500">
            <div className="aspect-[16/7] w-full overflow-hidden">
              <img
                alt="Cinematography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Wide shot of a lush green forest landscape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbXf6vdg5tNqHR6cvWM5l4wtrpjgr0Pl27C5xWo1Nw4xoZz-daikEc8bI2wOPAvlx6uvhaRxa_Vyem92eHiydmMQgQuS8WYBCGar2F8mA2J6TNDAxe9ItDoxcxO3KYEZOoZmDrcCOd4DGYwoQXpCxn-7kfSKkVee4SNLDxC5JQprHLKQE-vyHBGW58eKHBaij3GmnHpi27mJCYaN_vbhapB7ma7zYt6xTpnXLAhFphmLDQmXO1Itp7Ajst2ZkRNC2YyPhTYMUMEaEP"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glass-card flex flex-col justify-end p-8">
              <span className="font-label text-xs tracking-[0.3em] text-primary mb-2">
                VIDEO EDITING
              </span>
              <h3 className="font-headline text-4xl font-bold tracking-tight">
                The Great Silence
              </h3>
            </div>
          </div>
        </div>
      </main>

      {/* Project Inquiry CTA */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 border-t border-outline/10">
        <div className="bg-surface-container-lowest rounded-2xl p-12 md:p-24 text-center">
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg">
            I&apos;m currently accepting new commissions for Q3 2024. Let&apos;s
            create something that moves.
          </p>
          <button className="bg-primary text-on-primary px-12 py-4 rounded-full font-label text-sm font-bold tracking-[0.2em] hover:scale-105 transition-transform shadow-lg shadow-primary/20">
            START A PROJECT
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1400px] mx-auto px-6 py-12 border-t border-outline/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-outline font-label text-xs">
          © 2024 Graphic &amp; Video Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            href="#"
          >
            Behance
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            href="#"
          >
            Dribbble
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            href="#"
          >
            Vimeo
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs tracking-widest uppercase"
            href="#"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  )
}

