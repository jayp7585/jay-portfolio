import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A"
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-exclusion transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
                }}
            >
                <div className="w-full h-full bg-white rounded-full opacity-50 blur-[2px]" />
            </div>

            <div
                className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-[9998] transition-transform duration-500 ease-out"
                style={{
                    transform: `translate(${position.x - 48}px, ${position.y - 48}px)`,
                }}
            >
                <div className="w-full h-full border border-purple-500/30 rounded-full opacity-50 blur-[1px]" />
            </div>
        </>
    );
}
