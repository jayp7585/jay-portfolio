import { useEffect, useRef, useState, useMemo } from 'react';

const TagCloud = ({ skills, radius = 300 }) => {
    const containerRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

    // Distribute points on a sphere using Fibonacci Spiral
    const tags = useMemo(() => {
        const phi = Math.PI * (3 - Math.sqrt(5));
        return skills.map((skill, i) => {
            const y = 1 - (i / (skills.length - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;

            return { skill, x, y, z };
        });
    }, [skills]);

    useEffect(() => {
        const container = containerRef.current;
        let frameId;
        let baseRotationX = 0;
        let baseRotationY = 0;

        const handleMouseMove = (e) => {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Target rotation based on mouse
            baseRotationY = x * 0.0001;
            baseRotationX = -y * 0.0001;
        };

        const animate = () => {
            setRotation(prev => ({
                x: prev.x + baseRotationX + 0.001, // Always rotate slightly
                y: prev.y + baseRotationY + 0.001,
                z: prev.z
            }));
            frameId = requestAnimationFrame(animate);
        };

        container.addEventListener('mousemove', handleMouseMove);
        frameId = requestAnimationFrame(animate);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center preserve-3d"
            style={{ width: radius * 2, height: radius * 2 }}
        >
            {tags.map((tag, i) => {
                // Apply rotation matrix
                const cosX = Math.cos(rotation.x);
                const sinX = Math.sin(rotation.x);
                const cosY = Math.cos(rotation.y);
                const sinY = Math.sin(rotation.y);

                // Rotate around Y
                let x1 = tag.x * cosY - tag.z * sinY;
                let z1 = tag.z * cosY + tag.x * sinY;

                // Rotate around X
                let y1 = tag.y * cosX - z1 * sinX;
                let z2 = z1 * cosX + tag.y * sinX;

                // Perspective projection
                const scale = (radius + z2) / (radius * 2); // Simple depth scaling
                const opacity = (z2 + 1) / 2; // Fade out back items
                const fontSize = 14 + scale * 10; // Dynamic size

                return (
                    <div
                        key={i}
                        className="absolute left-1/2 top-1/2 transition-transform duration-75 ease-linear pointer-events-none"
                        style={{
                            transform: `translate(-50%, -50%) translate3d(${x1 * radius}px, ${y1 * radius}px, ${z2}px)`,
                            opacity: Math.max(0.1, opacity),
                            zIndex: Math.floor(z2 * 100),
                        }}
                    >
                        <span
                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium shadow-[0_0_15px_rgba(168,85,247,0.3)] whitespace-nowrap"
                            style={{ fontSize: `${fontSize}px` }}
                        >
                            {tag.skill}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default TagCloud;
