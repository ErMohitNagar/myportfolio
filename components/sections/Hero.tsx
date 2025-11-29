'use client';

import { useState, useEffect } from 'react';
import AnimatedBackground from '../3d/AnimatedBackground';
import { ChevronDown, Sparkles } from 'lucide-react';

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Tailwind'];

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setTimeout(() => setReducedMotion(mediaQuery.matches), 0);
        return () => clearTimeout(timer);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
        >
            {/* 3D Background - Now a separate, reusable component */}
            {!reducedMotion && (
                <AnimatedBackground particleCount={1000} opacity={0.4} />
            )}

            {/* Static gradient fallback for reduced motion */}
            {reducedMotion && (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/20 via-brand-purple/10 to-brand-teal/20" />
            )}

            {/* Content */}
            <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto w-full py-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting Badge */}
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-indigo/10 border border-brand-indigo/30 rounded-full mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <Sparkles className="w-4 h-4 text-brand-teal-light" />
                        <span className="text-brand-teal-light text-sm font-medium">Available for new projects</span>
                    </div>

                    {/* Name */}
                    <h1
                        className={`text-6xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <span className="block text-slate-300 text-lg lg:text-xl font-normal mb-2">Hi, I&apos;m</span>
                        <span className="bg-gradient-to-r from-brand-indigo-light via-brand-purple to-brand-teal-light bg-clip-text text-transparent">
                            Mohit Nagar
                        </span>
                    </h1>

                    {/* Title */}
                    <h2
                        className={`text-3xl lg:text-5xl font-bold text-slate-200 mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Fullstack Developer
                    </h2>

                    {/* Description */}
                    <p
                        className={`text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        I craft beautiful, scalable web applications with modern technologies. Specialized in building
                        end-to-end solutions that solve real-world problems.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="group relative px-8 py-4 bg-gradient-to-r from-brand-indigo to-brand-indigo-light rounded-lg font-semibold text-white overflow-hidden transition-all hover:shadow-lg hover:shadow-brand-indigo/50 hover:scale-105"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo-light to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group px-8 py-4 border-2 border-brand-teal/50 rounded-lg font-semibold text-brand-teal-light hover:bg-brand-teal/10 transition-all hover:border-brand-teal hover:scale-105"
                        >
                            Get In Touch
                        </button>
                    </div>

                    {/* Tech Stack Pills */}
                    <div
                        className={`flex flex-wrap gap-3 justify-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        {techStack.map((tech, index) => (
                            <span
                                key={tech}
                                style={{ animationDelay: `${700 + index * 50}ms` }}
                                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-sm text-slate-300 hover:border-brand-indigo hover:text-brand-indigo-light transition-all cursor-default animate-fade-in"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={() => scrollToSection('projects')}
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-800 hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                aria-label="Scroll to projects"
            >
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-slate-500 text-sm">Scroll to explore</span>
                    <ChevronDown className="w-6 h-6 text-slate-500" />
                </div>
            </button>

            {/* Motion Control Toggle */}
            <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className="fixed bottom-6 right-6 z-20 p-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-400 hover:text-brand-teal-light hover:border-brand-teal transition-all"
                title={reducedMotion ? 'Enable animations' : 'Reduce motion'}
                aria-label={reducedMotion ? 'Enable animations' : 'Reduce motion'}
            >
                <Sparkles className="w-5 h-5" />
            </button>
        </section>
    );
}