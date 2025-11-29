'use client';

import { Canvas } from '@react-three/fiber';
import ParticleField from './ParticleField';

interface AnimatedBackgroundProps {
    particleCount?: number;
    opacity?: number;
    className?: string;
}

/**
 * Reusable 3D animated background component
 * Can be used in any section of the website
 * Wraps ParticleField in a Canvas with positioning
 */
export default function AnimatedBackground({
                                               particleCount = 1000,
                                               opacity = 0.4,
                                               className = ''
                                           }: AnimatedBackgroundProps) {
    return (
        <div
            className={`absolute inset-0 ${className}`}
            style={{ opacity }}
            aria-hidden="true"
        >
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: false, alpha: true }}
                dpr={[1, 1.5]} // Limit pixel ratio for performance
            >
                <ParticleField count={particleCount} />
            </Canvas>
        </div>
    );
}