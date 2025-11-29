'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50 shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('#home')}
                        className="text-2xl font-bold bg-gradient-to-r from-brand-indigo-light to-brand-teal-light bg-clip-text text-transparent hover:scale-105 transition-transform"
                        aria-label="Go to home"
                    >
                        MN
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative text-sm font-medium transition-colors ${
                                    activeSection === link.href.substring(1)
                                        ? 'text-brand-teal-light'
                                        : 'text-slate-300 hover:text-brand-teal-light'
                                }`}
                            >
                                {link.name}
                                {activeSection === link.href.substring(1) && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-indigo to-brand-teal rounded-full" />
                                )}
                            </button>
                        ))}
                        <a
                            href="/resume.pdf"
                            download
                            className="px-5 py-2 bg-gradient-to-r from-brand-indigo to-brand-indigo-light rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-brand-indigo/50 transition-all hover:scale-105"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-brand-teal-light transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-800/50 animate-slide-down">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                                    activeSection === link.href.substring(1)
                                        ? 'text-brand-teal-light bg-brand-teal/10'
                                        : 'text-slate-300 hover:text-brand-teal-light hover:bg-slate-800/50'
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <a
                            href="/resume.pdf"
                            download
                            className="block mx-4 mt-3 px-5 py-3 text-center bg-gradient-to-r from-brand-indigo to-brand-indigo-light rounded-lg text-sm font-semibold text-white"
                        >
                            Download Resume
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}