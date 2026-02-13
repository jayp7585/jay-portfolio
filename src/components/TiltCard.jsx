import { useRef, useState } from "react";

export default function TiltCard({ children, className = "" }) {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
        setGlowPos({ x, y });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setOpacity(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative py-2 transition-transform duration-200 ease-out preserve-3d group ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
            }}
        >
            {/* Glow Effect */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-3xl"
                style={{
                    background: `radial-gradient(600px circle at ${glowPos.x}px ${glowPos.y}px, rgba(168, 85, 247, 0.4), transparent 40%)`,
                    opacity: opacity,
                }}
            />

            {/* Glossy Reflection */}
            <div
                className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none rounded-3xl mix-blend-overlay"
                style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))`,
                    opacity: opacity ? 0.5 : 0,
                }}
            />

            <div className="relative z-20 h-full">{children}</div>
        </div>
    );
}
