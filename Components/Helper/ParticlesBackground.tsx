"use client";

/**
 * ParticlesBackground — Performance-optimised version
 *
 * Layer breakdown:
 *  1. Aurora blobs  – pure CSS @keyframes (GPU compositor, ZERO JS cost)
 *  2. Canvas mesh   – 35 dots at ~30 fps (half-step trick), 100 px link radius
 *  3. Cursor glow   – 1 Framer Motion div with spring (very lightweight)
 *  4. Tech icons    – 5 Framer Motion divs with a single float animation each
 *
 * Previous version had 6 JS-driven Framer Motion blobs + 16 icon motion divs
 * (8 outer + 8 inner) + 55-dot canvas at 60 fps → heavy CPU load.
 * This version cuts JS animation work by ~70 %.
 */

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Terminal, Cpu, Monitor, GitBranch } from "lucide-react";
import { FaReact } from "react-icons/fa6";

// ── Five icons, simple float only (no nested spin) ────────────────────────────
const ICONS = [
    { Icon: FaReact,   color: "#61DAFB", x:  3, y:  8, size: 36, floatY:  20, dur:  9  },
    { Icon: Code2,     color: "#a78bfa", x: 92, y:  5, size: 30, floatY: -18, dur: 10  },
    { Icon: Terminal,  color: "#4ade80", x:  2, y: 55, size: 32, floatY: -20, dur:  8  },
    { Icon: Cpu,       color: "#e879f9", x: 12, y: 88, size: 28, floatY:  16, dur:  9  },
    { Icon: Monitor,   color: "#60a5fa", x: 88, y: 85, size: 26, floatY: -15, dur: 11  },
] as const;

// Dot type for canvas particles
interface Dot {
    x: number; y: number;
    vx: number; vy: number;
    r: number; op: number; col: string;
}

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef    = useRef<number>(0);

    // ── Cursor glow (spring-follows mouse) ────────────────────────────────────
    const rawX   = useMotionValue(-800);
    const rawY   = useMotionValue(-800);
    const springX = useSpring(rawX, { stiffness: 50, damping: 22 });
    const springY = useSpring(rawY, { stiffness: 50, damping: 22 });
    const glowL  = useTransform(springX, v => v - 175);
    const glowT  = useTransform(springY, v => v - 175);

    useEffect(() => {
        const onMove  = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
        const onLeave = () => { rawX.set(-800); rawY.set(-800); };
        window.addEventListener("mousemove",  onMove,  { passive: true });
        window.addEventListener("mouseleave", onLeave, { passive: true });
        return () => {
            window.removeEventListener("mousemove",  onMove);
            window.removeEventListener("mouseleave", onLeave);
        };
    }, [rawX, rawY]);

    // ── Canvas: dots + mesh ────────────────────────────────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const resize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize, { passive: true });

        /* Config ──────────────────────────────────────────────────────────── */
        const N    = 35;    // total dots (was 55/95)
        const LINK = 100;   // max connection px (was 135)
        const COLORS = ["#ffffff", "#ffffff", "#67e8f9", "#c4b5fd"];

        const dots: Dot[] = Array.from({ length: N }).map(() => {
            const big   = Math.random() < 0.25;
            const angle = Math.random() * Math.PI * 2;
            // Running at ~30 fps so physics step is ×2
            const spd = big
                ? 0.15 + Math.random() * 0.20
                : 0.20 + Math.random() * 0.25;
            return {
                x:   Math.random() * canvas.width,
                y:   Math.random() * canvas.height,
                vx:  Math.cos(angle) * spd,
                vy:  Math.sin(angle) * spd,
                r:   big ? 3.5 + Math.random() * 2 : 1.5 + Math.random() * 1.5,
                op:  big ? 0.55 + Math.random() * 0.25 : 0.45 + Math.random() * 0.3,
                col: COLORS[Math.floor(Math.random() * COLORS.length)],
            };
        });

        let frame = 0;

        const draw = () => {
            rafRef.current = requestAnimationFrame(draw);

            // ── Target ~30 fps: skip every other frame ─────────────────────
            frame++;
            if (frame % 2 !== 0) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Move dots (×2 velocity to compensate for halved frame rate)
            for (const d of dots) {
                d.x += d.vx * 2;
                d.y += d.vy * 2;
                const pad = 12;
                if (d.x < -pad)               d.x = canvas.width  + pad;
                if (d.x > canvas.width  + pad) d.x = -pad;
                if (d.y < -pad)               d.y = canvas.height + pad;
                if (d.y > canvas.height + pad) d.y = -pad;
            }

            // Connection lines – early-exit axis check avoids sqrt for most pairs
            for (let i = 0; i < N; i++) {
                for (let j = i + 1; j < N; j++) {
                    const dx = dots[i].x - dots[j].x;
                    if (Math.abs(dx) > LINK) continue;
                    const dy = dots[i].y - dots[j].y;
                    if (Math.abs(dy) > LINK) continue;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist >= LINK) continue;
                    const alpha = (1 - dist / LINK) * 0.26;
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = `rgba(139,92,246,${alpha.toFixed(2)})`;
                    ctx.lineWidth   = (1 - dist / LINK) * 0.85;
                    ctx.stroke();
                }
            }

            // Draw dots
            for (const d of dots) {
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle   = d.col;
                ctx.globalAlpha = d.op;
                ctx.fill();
            }
            ctx.globalAlpha = 1;
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            {/* ── 1. Aurora blobs (pure CSS — no JS cost) ── */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: 0 }}
                aria-hidden="true"
            >
                <div className="aurora-blob aurora-blob-1" />
                <div className="aurora-blob aurora-blob-2" />
                <div className="aurora-blob aurora-blob-3" />
                <div className="aurora-blob aurora-blob-4" />
            </div>

            {/* ── 2. Canvas: dots + mesh ── */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none"
                style={{ zIndex: 0 }}
                aria-hidden="true"
            />

            {/* ── 3. Cursor glow (1 spring element) ── */}
            <motion.div
                style={{
                    position: "fixed",
                    left: glowL,
                    top:  glowT,
                    width: 350, height: 350,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(139,92,246,0.17) 0%, rgba(6,182,212,0.06) 42%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
                aria-hidden="true"
            />

            {/* ── 4. Tech icons (5 elements, single float animation each) ── */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: 0 }}
                aria-hidden="true"
            >
                {ICONS.map(({ Icon, color, x, y, size, floatY, dur }, i) => (
                    <motion.div
                        key={i}
                        style={{ position: "absolute", left: `${x}%`, top: `${y}%` }}
                        animate={{ y: [0, floatY, 0], opacity: [0.07, 0.15, 0.07] }}
                        transition={{
                            duration: dur,
                            repeat:   Infinity,
                            ease:     "easeInOut",
                            delay:    i * 0.9,
                        }}
                    >
                        <Icon
                            size={size}
                            style={{ color, filter: `drop-shadow(0 0 7px ${color}66)` }}
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
}