'use client';

import { Heart, ArrowUp } from 'lucide-react';

const footerLinks = [
    {
        title: 'Navigation',
        links: [
            { name: 'Home', href: '#home' },
            { name: 'Projects', href: '#projects' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' },
        ],
    },
    {
        title: 'Social',
        links: [
            { name: 'GitHub', href: 'https://github.com/mohitnagar' },
            { name: 'LinkedIn', href: 'https://linkedin.com/in/mohitnagar' },
            { name: 'Twitter', href: 'https://twitter.com/mohitnagar' },
            { name: 'Email', href: 'mailto:mohit@example.com' },
        ],
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (href: string) => {
        if (href.startsWith('#')) {
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <footer className="relative bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-indigo-light to-brand-teal-light bg-clip-text text-transparent mb-4">
                            Mohit Nagar
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Fullstack Developer crafting beautiful digital experiences with modern technologies.
                        </p>
                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                            <span>using Next.js & Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-slate-100 font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-slate-400 hover:text-brand-teal-light transition-colors text-sm"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Mohit Nagar. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="p-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:text-brand-teal-light hover:border-brand-teal transition-all hover:scale-110"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}