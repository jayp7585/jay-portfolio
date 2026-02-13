import { useState, useEffect, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";

export default function HackerText({ text, className = "" }) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const scramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        scramble(); // Run once on mount
        return () => clearInterval(intervalRef.current);
    }, [text]);

    return (
        <span
            className={`font-mono cursor-pointer ${className}`}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
}
