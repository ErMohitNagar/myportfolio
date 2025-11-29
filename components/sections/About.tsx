'use client';

import { Code2, Database, Layout, Server, Cloud, Zap } from 'lucide-react';

const skills = {
    'Frontend': {
        icon: Layout,
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Framer Motion'],
        color: 'from-blue-500 to-cyan-500',
    },
    'Backend': {
        icon: Server,
        items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'],
        color: 'from-green-500 to-emerald-500',
    },
    'Database': {
        icon: Database,
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Supabase'],
        color: 'from-purple-500 to-pink-500',
    },
    'DevOps': {
        icon: Cloud,
        items: ['AWS', 'Docker', 'Vercel', 'CI/CD', 'GitHub Actions', 'Nginx'],
        color: 'from-orange-500 to-red-500',
    },
    'Tools': {
        icon: Code2,
        items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Webpack'],
        color: 'from-indigo-500 to-purple-500',
    },
    'Practices': {
        icon: Zap,
        items: ['Agile', 'TDD', 'Clean Code', 'Responsive Design', 'SEO', 'Performance'],
        color: 'from-yellow-500 to-orange-500',
    },
};

const experience = [
    {
        year: '2023 - Present',
        title: 'Senior Fullstack Developer',
        company: 'Tech Innovations Inc.',
        description: 'Leading development of scalable web applications, mentoring junior developers, and architecting cloud infrastructure.',
    },
    {
        year: '2021 - 2023',
        title: 'Fullstack Developer',
        company: 'Digital Solutions Co.',
        description: 'Built and maintained multiple client projects, implemented CI/CD pipelines, and optimized application performance.',
    },
    {
        year: '2019 - 2021',
        title: 'Frontend Developer',
        company: 'StartUp Hub',
        description: 'Developed responsive user interfaces, collaborated with designers, and improved code quality through testing.',
    },
    {
        year: '2018 - 2019',
        title: 'Junior Developer',
        company: 'WebDev Agency',
        description: 'Started my professional journey building websites and learning modern development practices.',
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 px-6 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
                        About <span className="bg-gradient-to-r from-brand-indigo-light to-brand-teal-light bg-clip-text text-transparent">Me</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Passionate developer with 5+ years of experience building web applications that make a difference.
                    </p>
                </div>

                {/* Bio Section */}
                <div className="mb-20 max-w-3xl mx-auto">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 lg:p-12">
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            Hey there! I&apos;m a fullstack developer who loves turning complex problems into elegant, user-friendly solutions.
                            My journey in tech started with curiosity and has evolved into a passion for creating impactful digital experiences.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            I specialize in building modern web applications using React, Next.js, and Node.js. Whether it&apos;s crafting
                            pixel-perfect interfaces or architecting scalable backend systems, I thrive on the entire development lifecycle.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects,
                            or sharing knowledge with the developer community through blog posts and tutorials.
                        </p>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center">Technical Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skills).map(([category, data], index) => {
                            const Icon = data.icon;
                            return (
                                <div
                                    key={category}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-brand-indigo/50 transition-all hover:shadow-lg hover:shadow-brand-indigo/10 animate-fade-in"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 bg-gradient-to-r ${data.color} rounded-lg`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-100">{category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {data.items.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-brand-indigo hover:text-brand-indigo-light transition-all"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Experience Timeline */}
                <div>
                    <h3 className="text-3xl font-bold text-slate-100 mb-12 text-center">Experience</h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-indigo via-brand-purple to-brand-teal" />

                            {/* Timeline Items */}
                            {experience.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ animationDelay: `${index * 150}ms` }}
                                    className={`relative mb-12 animate-fade-in ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-brand-indigo rounded-full -translate-x-1.5 md:-translate-x-2 border-4 border-slate-950 z-10" />

                                    {/* Content Card */}
                                    <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-brand-indigo/50 transition-all">
                                            <span className="inline-block px-3 py-1 bg-brand-indigo/20 border border-brand-indigo/50 rounded-full text-xs font-medium text-brand-indigo-light mb-3">
                                                {item.year}
                                            </span>
                                            <h4 className="text-xl font-bold text-slate-100 mb-1">{item.title}</h4>
                                            <p className="text-brand-teal-light font-medium mb-3">{item.company}</p>
                                            <p className="text-slate-400 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-indigo to-brand-indigo-light rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-brand-indigo/50 transition-all hover:scale-105"
                    >
                        Download Full Resume
                    </a>
                </div>
            </div>
        </section>
    );
}