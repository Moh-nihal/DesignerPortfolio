<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
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
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            font-size: 20px;
        }
        .glass-panel {
            background: rgba(53, 53, 52, 0.4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .cinematic-input {
            border-bottom: 1px solid rgba(73, 68, 84, 0.2);
            transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cinematic-input:focus {
            border-bottom: 2px solid #d0bcff;
            outline: none;
        }
        .glow-hover:hover {
            box-shadow: 0 0 40px 0px rgba(208, 188, 255, 0.08);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 glass-panel border-b border-outline-variant/10">
<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div class="font-headline text-xl font-bold tracking-tighter text-on-surface">
                DESIGNER.PORTFOLIO
            </div>
<div class="hidden md:flex items-center gap-12">
<a class="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Work</a>
<a class="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">About</a>
<a class="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Services</a>
<a class="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Testimonials</a>
<a class="font-label text-xs tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
</div>
<button class="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-DEFAULT font-label text-xs font-bold tracking-widest hover:brightness-110 transition-all glow-hover">
                Let's Talk
            </button>
</div>
</nav>
<main class="pt-32 pb-20 px-6">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
<!-- Contact Header Section -->
<div class="lg:col-span-5 flex flex-col justify-center">
<span class="font-label text-xs tracking-[0.3em] text-primary mb-6 block">GET IN TOUCH</span>
<h1 class="font-headline text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-on-surface mb-10">
                    START A <br/> PROJECT.
                </h1>
<p class="text-on-surface-variant text-lg max-w-md leading-relaxed mb-12">
                    Whether it's a cinematic production, motion design, or a full digital rebrand, let's create something that moves.
                </p>
<div class="space-y-8">
<div class="flex items-center gap-4 group">
<div class="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
<span class="material-symbols-outlined text-primary">mail</span>
</div>
<div>
<span class="font-label text-[10px] tracking-widest text-outline block">EMAIL US</span>
<span class="text-on-surface text-lg">hello@portfolio.design</span>
</div>
</div>
<div class="flex items-center gap-4 group">
<div class="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
<span class="material-symbols-outlined text-primary">location_on</span>
</div>
<div>
<span class="font-label text-[10px] tracking-widest text-outline block">LOCATION</span>
<span class="text-on-surface text-lg">London, United Kingdom</span>
</div>
</div>
</div>
<!-- Social Links from JSON (Icons mapped to social names) -->
<div class="mt-16 flex gap-6">
<a class="w-10 h-10 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest/20 hover:bg-primary/20 transition-all border border-outline-variant/10" href="#">
<span class="material-symbols-outlined text-on-surface-variant">language</span>
</a>
<a class="w-10 h-10 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest/20 hover:bg-primary/20 transition-all border border-outline-variant/10" href="#">
<span class="material-symbols-outlined text-on-surface-variant">photo_camera</span>
</a>
<a class="w-10 h-10 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest/20 hover:bg-primary/20 transition-all border border-outline-variant/10" href="#">
<span class="material-symbols-outlined text-on-surface-variant">movie</span>
</a>
<a class="w-10 h-10 flex items-center justify-center rounded-DEFAULT bg-surface-container-highest/20 hover:bg-primary/20 transition-all border border-outline-variant/10" href="#">
<span class="material-symbols-outlined text-on-surface-variant">work</span>
</a>
</div>
</div>
<!-- Form Section (Bento Style Layout) -->
<div class="lg:col-span-7">
<div class="glass-panel p-10 md:p-16 rounded-xl border border-outline-variant/10 shadow-2xl relative overflow-hidden">
<!-- Subtle Glow Ornament -->
<div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
<form class="space-y-12 relative z-10">
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
<div class="group">
<label class="font-label text-[10px] tracking-widest text-outline group-focus-within:text-primary transition-colors">FULL NAME</label>
<input class="w-full bg-transparent py-4 cinematic-input text-on-surface placeholder:text-surface-bright border-x-0 border-t-0 ring-0 focus:ring-0 px-0" placeholder="John Doe" type="text"/>
</div>
<div class="group">
<label class="font-label text-[10px] tracking-widest text-outline group-focus-within:text-primary transition-colors">EMAIL ADDRESS</label>
<input class="w-full bg-transparent py-4 cinematic-input text-on-surface placeholder:text-surface-bright border-x-0 border-t-0 ring-0 focus:ring-0 px-0" placeholder="john@example.com" type="email"/>
</div>
</div>
<div class="group">
<label class="font-label text-[10px] tracking-widest text-outline group-focus-within:text-primary transition-colors">YOUR MESSAGE</label>
<textarea class="w-full bg-transparent py-4 cinematic-input text-on-surface placeholder:text-surface-bright border-x-0 border-t-0 ring-0 focus:ring-0 px-0 resize-none" placeholder="Tell us about your project goals..." rows="4"></textarea>
</div>
<div class="pt-6">
<button class="group flex items-center gap-4 bg-on-surface text-background px-10 py-5 rounded-DEFAULT font-label text-xs font-bold tracking-widest hover:bg-primary transition-all" type="submit">
                                SEND MESSAGE
                                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
</button>
</div>
</form>
</div>
<!-- Custom Pulse Status -->
<div class="mt-8 flex items-center justify-end gap-3 px-2">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
</span>
<span class="font-label text-[10px] tracking-widest text-on-surface-variant">AVAILABLE FOR Q4 2024 PROJECTS</span>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="mt-20 py-16 border-t border-outline-variant/10">
<div class="max-w-7xl mx-auto px-6">
<div class="flex flex-col md:flex-row justify-between items-center gap-12">
<div class="font-headline text-lg font-bold tracking-tighter text-on-surface-variant">
                    DESIGNER.PORTFOLIO
                </div>
<div class="flex flex-wrap justify-center gap-10">
<a class="font-label text-[10px] tracking-widest text-outline hover:text-primary transition-colors" href="#">Behance</a>
<a class="font-label text-[10px] tracking-widest text-outline hover:text-primary transition-colors" href="#">Dribbble</a>
<a class="font-label text-[10px] tracking-widest text-outline hover:text-primary transition-colors" href="#">Vimeo</a>
<a class="font-label text-[10px] tracking-widest text-outline hover:text-primary transition-colors" href="#">LinkedIn</a>
</div>
<div class="font-label text-[10px] tracking-widest text-outline opacity-60">
                    © 2024 Graphic &amp; Video Portfolio. All rights reserved.
                </div>
</div>
<div class="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
<div class="mt-12 text-center">
<p class="font-label text-[9px] tracking-[0.5em] text-outline uppercase">Crafted with precision in the studio</p>
</div>
</div>
</footer>
</body></html>
