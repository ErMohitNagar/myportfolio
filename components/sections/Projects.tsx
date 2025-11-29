'use client';

import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

// Types
interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

// Sample projects data - replace with your real projects
const projects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration, real-time inventory, and admin dashboard.',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
        image: '/projects/ecommerce.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/mohit/ecommerce',
        featured: true,
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'Collaborative task management with real-time updates, drag-and-drop, and team workspaces.',
        tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        image: '/projects/taskapp.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/mohit/taskapp',
        featured: true,
    },
    {
        id: '3',
        title: 'AI Content Generator',
        description: 'AI-powered content creation tool using GPT-4 API with custom templates and export options.',
        tags: ['Next.js', 'OpenAI', 'Tailwind', 'Vercel'],
        image: '/projects/ai-tool.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/mohit/ai-tool',
        featured: false,
    },
    {
        id: '4',
        title: 'Real Estate Platform',
        description: 'Property listing platform with advanced filters, map integration, and virtual tours.',
        tags: ['React', 'Express', 'MySQL', 'AWS'],
        image: '/projects/realestate.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/mohit/realestate',
        featured: false,
    },
    {
        id: '5',
        title: 'Weather Dashboard',
        description: 'Beautiful weather dashboard with forecasts, historical data, and interactive maps.',
        tags: ['Vue.js', 'TypeScript', 'D3.js', 'REST API'],
        image: '/projects/weather.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/mohit/weather',
        featured: false,
    },
    {
        id: '6',
        title: 'Social Media Analytics',
        description: 'Analytics dashboard for tracking social media metrics with customizable reports.',
        tags: ['React', 'Python', 'FastAPI', 'Redis'],
        image: '/projects/analytics.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/mohit/analytics',
        featured: true,
    },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

export default function Projects() {
    const [selectedFilter, setSelectedFilter] = useState<string>('All');
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const filteredProjects =
        selectedFilter === 'All'
            ? projects
            : projects.filter(project => project.tags.includes(selectedFilter));

    return (
        <section id="projects" className="relative py-24 px-6 lg:px-12 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
                        Featured <span className="bg-gradient-to-r from-brand-indigo-light to-brand-teal-light bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A collection of projects that showcase my skills and passion for building innovative solutions.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex items-center gap-3 mb-12 overflow-x-auto pb-4">
                    <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    <button
                        onClick={() => setSelectedFilter('All')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                            selectedFilter === 'All'
                                ? 'bg-brand-indigo text-white'
                                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        All Projects
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedFilter(tag)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                                selectedFilter === tag
                                    ? 'bg-brand-indigo text-white'
                                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{ animationDelay: `${index * 100}ms` }}
                            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-brand-indigo/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-indigo/10 animate-fade-in"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-brand-indigo/20 to-brand-teal/20 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center">
                                    <span className="text-4xl">🚀</span>
                                </div>
                                {hoveredProject === project.id && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex items-center justify-center gap-4 animate-fade-in">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-brand-indigo rounded-full text-white hover:bg-brand-indigo-light transition-colors"
                                                aria-label="View demo"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors"
                                                aria-label="View source code"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-brand-teal-light transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs text-slate-300"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-brand-teal/20 border border-brand-teal/50 backdrop-blur-sm rounded-full text-xs font-medium text-brand-teal-light">
                    Featured
                  </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold text-slate-300 hover:bg-slate-800 hover:border-brand-indigo hover:text-brand-indigo-light transition-all">
                        View All Projects on GitHub
                    </button>
                </div>
            </div>
        </section>
    );
}