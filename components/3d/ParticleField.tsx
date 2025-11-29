'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
    count?: number;
}

/**
 * Pure 3D particle system component
 * Only handles Three.js logic, no Canvas wrapper
 */
export default function ParticleField({ count = 1000 }: ParticleFieldProps) {
    const pointsRef = useRef<THREE.Points>(null);

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Random positions in a sphere
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

            // Indigo to Teal gradient colors
            const t = Math.random();
            // Indigo: #4F46E5 (rgb: 79, 70, 229)
            // Teal: #14B8A6 (rgb: 20, 184, 166)
            colors[i * 3] = (79 + t * (20 - 79)) / 255; // R
            colors[i * 3 + 1] = (70 + t * (184 - 70)) / 255; // G
            colors[i * 3 + 2] = (229 + t * (166 - 229)) / 255; // B
        }

        return [positions, colors];
    }, [count]);

    useFrame((state) => {
        if (pointsRef.current) {
            const time = state.clock.getElapsedTime();
            pointsRef.current.rotation.y = time * 0.05;
            pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}