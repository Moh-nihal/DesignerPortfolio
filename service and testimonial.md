<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "secondary-container": "#14d1ff",
              "primary-fixed-dim": "#d0bcff",
              "tertiary-container": "#fa5c1c",
              "tertiary-fixed-dim": "#ffb59c",
              "primary": "#d0bcff",
              "secondary": "#a6e6ff",
              "on-secondary-container": "#00566b",
              "inverse-on-surface": "#313030",
              "on-tertiary-fixed-variant": "#832700",
              "surface": "#131313",
              "surface-dim": "#131313",
              "on-background": "#e5e2e1",
              "on-error": "#690005",
              "on-tertiary-container": "#511500",
              "on-tertiary-fixed": "#390c00",
              "error-container": "#93000a",
              "outline": "#958ea0",
              "on-surface": "#e5e2e1",
              "surface-bright": "#3a3939",
              "on-primary": "#3c0091",
              "on-primary-container": "#340080",
              "on-primary-fixed-variant": "#5516be",
              "inverse-primary": "#6d3bd7",
              "on-secondary-fixed": "#001f28",
              "surface-tint": "#d0bcff",
              "on-secondary-fixed-variant": "#004e60",
              "tertiary": "#ffb59c",
              "on-secondary": "#003543",
              "surface-container-high": "#2a2a2a",
              "outline-variant": "#494454",
              "on-surface-variant": "#cbc3d7",
              "tertiary-fixed": "#ffdbcf",
              "primary-fixed": "#e9ddff",
              "surface-container": "#201f1f",
              "on-tertiary": "#5c1900",
              "primary-container": "#a078ff",
              "secondary-fixed-dim": "#4cd6ff",
              "on-error-container": "#ffdad6",
              "inverse-surface": "#e5e2e1",
              "secondary-fixed": "#b7eaff",
              "background": "#131313",
              "error": "#ffb4ab",
              "on-primary-fixed": "#23005c",
              "surface-container-highest": "#353534",
              "surface-variant": "#353534",
              "surface-container-lowest": "#0e0e0e",
              "surface-container-low": "#1c1b1b"
            },
            fontFamily: {
              "headline": ["Space Grotesk"],
              "body": ["Manrope"],
              "label": ["Manrope"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-panel {
            background: rgba(53, 53, 52, 0.4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .glow-hover:hover {
            box-shadow: 0 0 40px rgba(208, 188, 255, 0.08);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
<!-- TopNavBar -->
<nav class="sticky top-0 z-50 w-full glass-panel border-b border-outline-variant/10">
<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div class="font-headline font-bold text-xl tracking-tighter text-on-surface">
                DESIGNER.PORTFOLIO
            </div>
<div class="hidden md:flex items-center gap-10">
<a class="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors" href="#">Work</a>
<a class="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors" href="#">About</a>
<a class="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors text-primary" href="#">Services</a>
<a class="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors" href="#">Testimonials</a>
<a class="font-label text-sm tracking-[0.1em] hover:text-primary transition-colors" href="#">Contact</a>
</div>
<button class="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-label font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all shadow-[0_0_20px_rgba(208,188,255,0.2)]">
                Let's Talk
            </button>
</div>
</nav>
<main>
<!-- Services Section -->
<section class="py-24 px-6 max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div class="max-w-2xl">
<span class="font-label text-xs tracking-[0.2em] text-secondary-container uppercase mb-4 block">Capabilities</span>
<h2 class="font-headline text-5xl md:text-7xl font-bold tracking-tight leading-none">
                        Creative <span class="text-primary italic font-light">Solutions.</span>
</h2>
</div>
<div class="md:max-w-sm">
<p class="text-on-surface-variant text-lg leading-relaxed">
                        Pushing the boundaries of digital aesthetics through motion, identity, and narrative-driven design.
                    </p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Service Card 1 -->
<div class="group relative overflow-hidden bg-surface-container-low p-10 rounded-xl transition-all duration-500 hover:bg-surface-container-high glow-hover">
<div class="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-surface-container-highest group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">brush</span>
</div>
<h3 class="font-headline text-2xl font-bold mb-4">Graphic Design</h3>
<p class="text-on-surface-variant leading-relaxed mb-8">
                        Visual identities that demand attention. From editorial layouts to branding systems that speak your truth.
                    </p>
<div class="flex gap-2 flex-wrap">
<span class="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">BRANDING</span>
<span class="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">PRINT</span>
</div>
</div>
<!-- Service Card 2 -->
<div class="group relative overflow-hidden bg-surface-container-low p-10 rounded-xl transition-all duration-500 hover:bg-surface-container-high glow-hover border-t-2 border-secondary-container/20">
<div class="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-surface-container-highest group-hover:bg-secondary-container/20 transition-colors">
<span class="material-symbols-outlined text-secondary-container text-3xl">movie_edit</span>
</div>
<h3 class="font-headline text-2xl font-bold mb-4">Video Editing</h3>
<p class="text-on-surface-variant leading-relaxed mb-8">
                        Precision cutting for high-impact storytelling. Commercials, music videos, and cinematic social content.
                    </p>
<div class="flex gap-2 flex-wrap">
<span class="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">COLOR GRADE</span>
<span class="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">4K</span>
</div>
</div>
<!-- Service Card 3 -->
<div class="group relative overflow-hidden bg-surface-container-low p-10 rounded-xl transition-all duration-500 hover:bg-surface-container-high glow-hover border-t-2 border-tertiary-container/20">
<div class="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-surface-container-highest group-hover:bg-tertiary-container/20 transition-colors">
<span class="material-symbols-outlined text-tertiary-container text-3xl">auto_awesome_motion</span>
</div>
<h3 class="font-headline text-2xl font-bold mb-4">Motion Graphics</h3>
<p class="text-on-surface-variant leading-relaxed mb-8">
                        Bringing static designs to life. 2D/3D animation that elevates the digital experience to cinematic levels.
                    </p>
<div class="flex gap-2 flex-wrap">
<span class="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">LOTTIE</span>
<span class="material-symbols-outlined text-xs text-tertiary-container" data-weight="fill">fiber_manual_record</span>
<span class="font-label text-[10px] tracking-widest border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant">3D</span>
</div>
</div>
</div>
</section>
<!-- Testimonials Section -->
<section class="py-24 bg-surface-container-lowest overflow-hidden">
<div class="max-w-7xl mx-auto px-6">
<div class="mb-20 text-center">
<h2 class="font-headline text-4xl md:text-6xl font-bold tracking-tight">Voices of <span class="text-secondary-container">Trust.</span></h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Testimonial 1 -->
<div class="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border border-outline-variant/5">
<div class="mb-8">
<div class="flex gap-1 mb-6 text-tertiary-container">
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
</div>
<p class="text-on-surface text-lg leading-relaxed italic">
                                "The level of technical precision combined with raw creative energy is something we haven't found elsewhere. A true partner in design."
                            </p>
</div>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
<img class="w-full h-full object-cover" data-alt="Professional headshot of male client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XXkQIoPJdDReF7D7t7UICb-NEYbmWN1ytMuo2Jme6tJ5K9EOOTdMmPSO_Na22AvOr1grQ5nhodH1AWkUynDG7QhQOGK8YnjW0T7EJWGEgQzr3An-ZFPmicdAdx3SqgyA9HWLhzsX0AXY2q8xFsPvGMs57S-Ys7iJsnN7iO-GN4giBlReNznlxio7p5xdGJnYgrw83A3kR5juEkMB07g2hbFCgxQ7HGJjXWb-1e7FmYYONb_ubiyka4jvcmZL9T8Ts_Ty4p2K-I0m"/>
</div>
<div>
<h4 class="font-bold text-on-surface">Marcus Chen</h4>
<p class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Director, Zenith Agency</p>
</div>
</div>
</div>
<!-- Testimonial 2 (Featured) -->
<div class="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border border-primary/20 relative">
<span class="absolute -top-3 -right-3 bg-primary text-on-primary font-label text-[9px] font-bold tracking-[0.2em] px-3 py-1 rounded-full uppercase">Featured</span>
<div class="mb-8">
<div class="flex gap-1 mb-6 text-primary">
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
</div>
<p class="text-on-surface text-xl font-medium leading-relaxed italic">
                                "The motion graphics work transformed our brand perception overnight. It’s not just video; it’s an immersive experience."
                            </p>
</div>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
<img class="w-full h-full object-cover" data-alt="Portrait of smiling female creative director" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCXkjQBB6qpl861np7V7OHULlpwRl8thIj6nyeGPEEqq7SVh8b_TIzAGFWPRTaca9icTwzLsyNwuQ5nBKfHnlL5er3n_j01whNoFIh9dNWJrYhqUsasH70ITEk2G9Jdc0ws71d_b8Y-4NEBMnrqTMKF-wJZeKUraqhhISXJyb_YAQ3Oz8QnfhCNp7azarHH2-CPmOvZKxOB1juehhioMQM2W24X63I6a3Hvc5m2y6JpFXd3n9ULSaPSfgXqu79Sd9HmRRqWIoyUA3H"/>
</div>
<div>
<h4 class="font-bold text-on-surface">Sarah Jenkins</h4>
<p class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Founder, Glow Digital</p>
</div>
</div>
</div>
<!-- Testimonial 3 -->
<div class="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between border border-outline-variant/5">
<div class="mb-8">
<div class="flex gap-1 mb-6 text-tertiary-container">
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
<span class="material-symbols-outlined text-sm" data-weight="fill">star</span>
</div>
<p class="text-on-surface text-lg leading-relaxed italic">
                                "Quick, professional, and incredibly intuitive. They understood our vision before we even finished explaining it."
                            </p>
</div>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
<img class="w-full h-full object-cover" data-alt="Portrait of happy male tech founder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7qqd3E84nyc4roMAfqruoTwuxDLcWS08cVk_7njtJB0Q7UecBktFwn3oijc9-GcMBCiNr8tHcUaO6OrJ1fJRKQ-9756TX0QoCISNsYP4Cu_6qoTwOLJO7jJqjIM4hYHUple9oajYxc2CYV1DlEKF4h_SptY8ADOC_mb_qSx0iNg_bzUvqHVcl3_P4wJWvfiikEkAxBIev6EkTHm67s65i87E1RR9kuLYO8YYGs6GjmydTVsT1BvDGdKK8WP3zudDKADjz7sLJ2yku"/>
</div>
<div>
<h4 class="font-bold text-on-surface">David Vance</h4>
<p class="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">CTO, Vertex Media</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section (The Pulse) -->
<section class="py-32 px-6 text-center bg-background relative overflow-hidden">
<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,209,255,0.05)_0%,_transparent_70%)]"></div>
<div class="relative z-10 flex flex-col items-center">
<div class="flex items-center gap-3 mb-8">
<div class="relative flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
</div>
<span class="font-label text-xs tracking-[0.3em] uppercase text-secondary-container">Available for New Projects</span>
</div>
<h2 class="font-headline text-5xl md:text-8xl font-bold tracking-tight mb-12">Let's create <br/><span class="text-primary">something iconinc.</span></h2>
<button class="bg-surface-bright border border-outline-variant/30 px-10 py-5 rounded-full font-headline font-bold text-xl hover:bg-on-background hover:text-background transition-all">
                    Start a Project
                </button>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant/10 py-12 px-6">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div class="text-on-surface-variant font-label text-[10px] tracking-widest">
                © 2024 Graphic &amp; Video Portfolio. All rights reserved.
            </div>
<div class="flex items-center gap-8">
<a class="font-label text-[10px] tracking-widest text-on-surface hover:text-primary transition-colors uppercase" href="#">Behance</a>
<a class="font-label text-[10px] tracking-widest text-on-surface hover:text-primary transition-colors uppercase" href="#">Dribbble</a>
<a class="font-label text-[10px] tracking-widest text-on-surface hover:text-primary transition-colors uppercase" href="#">Vimeo</a>
<a class="font-label text-[10px] tracking-widest text-on-surface hover:text-primary transition-colors uppercase" href="#">LinkedIn</a>
</div>
</div>
</footer>
</body></html>
