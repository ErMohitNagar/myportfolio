import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Mohit Nagar - Fullstack Developer',
    description: 'Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications that make a difference.',
    keywords: ['Fullstack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Web Development'],
    authors: [{ name: 'Mohit Nagar' }],
    creator: 'Mohit Nagar',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mohitnagar.dev',
        title: 'Mohit Nagar - Fullstack Developer',
        description: 'Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
        siteName: 'Mohit Nagar Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Mohit Nagar - Fullstack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mohit Nagar - Fullstack Developer',
        description: 'Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
        images: ['/og-image.jpg'],
        creator: '@mohitnagar',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}