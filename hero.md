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
        }
        .glass-panel {
            background: rgba(53, 53, 52, 0.4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .hero-gradient {
            background: radial-gradient(circle at 50% 50%, #340080 0%, #131313 70%);
        }
        .text-glow {
            text-shadow: 0 0 30px rgba(208, 188, 255, 0.3);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 glass-panel border-b border-outline-variant border-opacity-10">
<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div class="font-headline font-bold text-xl tracking-tighter text-on-surface">
                DESIGNER.PORTFOLIO
            </div>
<div class="hidden md:flex items-center gap-12">
<a class="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors" href="#">Work</a>
<a class="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors" href="#">About</a>
<a class="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors" href="#">Services</a>
<a class="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors" href="#">Testimonials</a>
<a class="font-label text-sm uppercase tracking-widest hover:text-primary transition-colors" href="#">Contact</a>
</div>
<button class="bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-sm uppercase tracking-widest px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(208,188,255,0.4)] transition-all">
                Let's Talk
            </button>
</div>
</nav>
<!-- Cinematic Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 hero-gradient">
<!-- Background Accents -->
<div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full"></div>
<div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-container opacity-5 blur-[120px] rounded-full"></div>
<div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div class="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant border-opacity-20">
<div class="w-2 h-2 rounded-full bg-secondary-container animate-pulse shadow-[0_0_10px_#14d1ff]"></div>
<span class="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Available for new projects</span>
</div>
<h1 class="font-headline font-bold text-6xl md:text-9xl mb-6 tracking-tighter leading-none text-glow">
                ALEXANDER <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">VAUGHN</span>
</h1>
<p class="font-headline text-xl md:text-3xl text-on-surface-variant mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Architecting digital narratives through <span class="text-on-surface italic">Graphic Design</span> &amp; <span class="text-on-surface italic">Video Editing</span>.
            </p>
<div class="flex flex-col sm:flex-row items-center justify-center gap-6">
<button class="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-sm uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 group transition-all">
                    View Work
                    <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
<button class="w-full sm:w-auto px-10 py-5 bg-surface-variant bg-opacity-40 border border-outline-variant border-opacity-30 text-on-surface font-label text-sm uppercase tracking-widest rounded-lg hover:bg-opacity-60 transition-all">
                    Contact Me
                </button>
</div>
</div>
<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span class="font-label text-[10px] uppercase tracking-widest">Scroll to explore</span>
<div class="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
</div>
</section>
<!-- About Section -->
<section class="py-32 bg-surface relative overflow-hidden">
<div class="max-w-7xl mx-auto px-6">
<div class="grid lg:grid-cols-12 gap-16 items-center">
<!-- Profile Image & Creative Frame -->
<div class="lg:col-span-5 relative">
<div class="aspect-square rounded-2xl overflow-hidden relative z-10 border border-outline-variant border-opacity-20">
<img alt="Professional Profile" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Close up portrait of a creative professional designer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT-Gt0Vupix_75nAgQKcMx7syWb6O22e87MJzq16sW6GMnFTJLaojQKB-wjTIUXLPXsbxH7Fz_wheq52l5FmLEc3panogFnGEVrJkZRU23P3-8MjRI4iDWnTCUAjLu7mCdm4qbwTvwh77AULugWOv5SbSiWh5QiGSL7ISkFZwT3eS5Ak2Hsl3zhxfKKl2xX80ptD0mcUrNccz7ghuR1BGU1E4QjzO1bn3Vw08DXn3hmx_6ahUGdcwwIHgRboLn1R36Nrl_j5iaXcZh"/>
</div>
<!-- Decorative elements -->
<div class="absolute -top-6 -right-6 w-32 h-32 bg-primary-container opacity-20 blur-3xl rounded-full"></div>
<div class="absolute -bottom-10 -left-10 w-full h-full border border-primary border-opacity-10 rounded-2xl -z-0"></div>
<div class="absolute bottom-6 -right-8 glass-panel p-6 rounded-xl border border-outline-variant border-opacity-20 max-w-[200px]">
<p class="font-headline text-3xl font-bold text-primary">08+</p>
<p class="font-label text-[10px] uppercase tracking-wider text-on-surface-variant leading-tight">Years of Creative Direction</p>
</div>
</div>
<!-- Bio & Skills -->
<div class="lg:col-span-7">
<div class="mb-12">
<span class="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">The Creative Core</span>
<h2 class="font-headline text-4xl md:text-5xl font-bold mb-8 tracking-tight">Blending motion with static precision.</h2>
<div class="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
<p>
                                I specialize in crafting visual identities that breathe. My process sits at the intersection of technical video production and minimalist graphic design, ensuring every frame tells a cohesive story.
                            </p>
<p>
                                Based in London, working globally. I help brands bridge the gap between their vision and their audience through cinematic storytelling and high-fidelity design systems.
                            </p>
</div>
</div>
<!-- Skills/Tools Bento-ish Badge Cloud -->
<div>
<h3 class="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-6">Expertise Stack</h3>
<div class="flex flex-wrap gap-3">
<!-- Photoshop -->
<div class="flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-[#001E36] hover:bg-[#001E36] transition-colors group cursor-default">
<div class="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
<span class="font-label text-xs font-bold text-[#31A8FF]">Ps</span>
<span class="text-sm font-medium">Photoshop</span>
</div>
<!-- After Effects -->
<div class="flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-[#00005B] hover:bg-[#00005B] transition-colors group cursor-default">
<div class="w-2 h-2 rounded-full bg-[#9999FF]"></div>
<span class="font-label text-xs font-bold text-[#9999FF]">Ae</span>
<span class="text-sm font-medium">After Effects</span>
</div>
<!-- Premiere -->
<div class="flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-[#2D002E] hover:bg-[#2D002E] transition-colors group cursor-default">
<div class="w-2 h-2 rounded-full bg-[#EA77FF]"></div>
<span class="font-label text-xs font-bold text-[#EA77FF]">Pr</span>
<span class="text-sm font-medium">Premiere Pro</span>
</div>
<!-- Illustrator -->
<div class="flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-[#330000] hover:bg-[#330000] transition-colors group cursor-default">
<div class="w-2 h-2 rounded-full bg-[#FF9A00]"></div>
<span class="font-label text-xs font-bold text-[#FF9A00]">Ai</span>
<span class="text-sm font-medium">Illustrator</span>
</div>
<!-- Cinema 4D -->
<div class="flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-outline-variant border-opacity-20 hover:bg-surface-bright transition-colors group cursor-default">
<div class="w-2 h-2 rounded-full bg-primary"></div>
<span class="text-sm font-medium">Cinema 4D</span>
</div>
<!-- Figma -->
<div class="flex items-center gap-2 px-4 py-2 rounded bg-surface-container-low border border-outline-variant border-opacity-20 hover:bg-surface-bright transition-colors group cursor-default">
<div class="w-2 h-2 rounded-full bg-secondary-container"></div>
<span class="text-sm font-medium">Figma</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-surface-container-lowest py-20 border-t border-outline-variant border-opacity-10">
<div class="max-w-7xl mx-auto px-6">
<div class="flex flex-col md:flex-row items-center justify-between gap-12">
<div class="text-center md:text-left">
<p class="font-label text-sm text-on-surface-variant">© 2024 Graphic &amp; Video Portfolio. All rights reserved.</p>
</div>
<div class="flex items-center gap-8">
<a class="font-label text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Behance</a>
<a class="font-label text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Dribbble</a>
<a class="font-label text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Vimeo</a>
<a class="font-label text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>
</body></html>
