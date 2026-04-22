import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [trail, setTrail] = useState<{ x: number; y: number; timestamp: number }[]>([]);
    const [showTrail, setShowTrail] = useState(true);
    const [isMobile, setIsMobile] = useState(false); // Track mobile screen detection
    const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Check for mobile screen size
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Typical mobile breakpoint (can be adjusted)
        };

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Add resize listener to handle screen size changes

        return () => {
            window.removeEventListener('resize', checkMobile); // Clean up listener
        };
    }, []);

    useEffect(() => {
        if (isMobile) return; // Disable custom cursor for mobile devices

        const cursor = cursorRef.current!;
        const follower = followerRef.current!;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let posX = mouseX;
        let posY = mouseY;

        const cursorSize = 12;
        const followerSize = 32;

        const resetTrailTimer = () => {
            setShowTrail(true);
            if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
            inactivityTimerRef.current = setTimeout(() => {
                setShowTrail(false);
            }, 4000); // 3 seconds of inactivity
        };

        const updateCursor = (e: MouseEvent) => {
            mouseX = e.clientX + window.scrollX;
            mouseY = e.clientY + window.scrollY;

            cursor.style.left = `${mouseX - cursorSize / 2}px`;
            cursor.style.top = `${mouseY - cursorSize / 2}px`;

            const newTrailPoint = {
                x: mouseX,
                y: mouseY,
                timestamp: Date.now(),
            };

            setTrail((prevTrail) => [newTrailPoint, ...prevTrail]);

            resetTrailTimer();
        };

        const animateFollower = () => {
            posX += (mouseX - posX) / 8;
            posY += (mouseY - posY) / 8;

            follower.style.left = `${posX - followerSize / 2}px`;
            follower.style.top = `${posY - followerSize / 2}px`;

            requestAnimationFrame(animateFollower);
        };

        const handleClick = () => {
            cursor.classList.add('click-scale');
            follower.classList.add('click-scale');
            setTimeout(() => {
                cursor.classList.remove('click-scale');
                follower.classList.remove('click-scale');
            }, 300);
        };

        document.addEventListener('mousemove', updateCursor);
        document.addEventListener('mousedown', handleClick);
        animateFollower();
        resetTrailTimer();

        return () => {
            document.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('mousedown', handleClick);
            if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
        };
    }, [isMobile]); // Trigger effect when mobile state changes

    // Remove old trail points after 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            setTrail((prevTrail) => prevTrail.filter((point) => now - point.timestamp < 4000));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    if (isMobile) return null; // Don't render anything on mobile devices

    return (
        <>
            {/* Neon trail effect */}
            {showTrail &&
                trail.map((point, index) => {
                    const age = Date.now() - point.timestamp;
                    const opacity = 1 - age / 4000; // fade out over 3 seconds
                    const scale = 1 - age / 4000;

                    return (
                        <div
                            key={index}
                            style={{
                                position: 'absolute',
                                left: `${point.x - 4}px`,
                                top: `${point.y - 4}px`,
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#00BFFF', // Neon Blue
                                boxShadow: '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #8A2BE2', // Neon Blue glow effect
                                pointerEvents: 'none',
                                zIndex: 10000,
                                opacity,
                                transform: `scale(${scale})`,
                                transition: 'opacity 0.3s, transform 0.3s',
                            }}
                        />
                    );
                })}

            {/* Custom cursor and follower */}
            <div
                ref={cursorRef}
                className="custom-cursor fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none transition-transform duration-300 ease-out"
                style={{
                    zIndex: 100000,
                    position: 'absolute',
                    backgroundColor: '#fff',
                }}
            />

            <div
                ref={followerRef}
                className="custom-follower fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none backdrop-blur-md"
                style={{
                    zIndex: 10000,
                    position: 'absolute',
                    backgroundColor: 'rgba(0, 191, 255, 0.2)',
                    border: '2px solid #00BFFF',
                    boxShadow: '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #8A2BE2',
                }}
            />
        </>
    );
};

export default CustomCursor;
