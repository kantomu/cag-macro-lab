"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n";

export default function Hero() {
    const { t, isJapanese } = useI18n();
    const canvasBackRef = useRef<HTMLCanvasElement>(null);
    const canvasFrontRef = useRef<HTMLCanvasElement>(null);

    const serifClass = isJapanese ? "font-[var(--font-noto-serif-jp)]" : "text-serif";

    // Elegant orbital particles - front and back layers
    useEffect(() => {
        const canvasBack = canvasBackRef.current;
        const canvasFront = canvasFrontRef.current;
        if (!canvasBack || !canvasFront) return;

        const ctxBack = canvasBack.getContext("2d");
        const ctxFront = canvasFront.getContext("2d");
        if (!ctxBack || !ctxFront) return;

        const size = 280;
        canvasBack.width = size;
        canvasBack.height = size;
        canvasFront.width = size;
        canvasFront.height = size;
        const centerX = size / 2;
        const centerY = size / 2;

        // Particles on elliptical 3D orbits
        const particles = [
            { radius: 90, angle: 0, speed: 0.005, size: 2, opacity: 0.85 },
            { radius: 90, angle: Math.PI, speed: 0.005, size: 1.8, opacity: 0.7 },
            { radius: 115, angle: Math.PI / 2, speed: 0.003, size: 2.2, opacity: 0.8 },
        ];

        let animationId: number;

        const animate = () => {
            ctxBack.clearRect(0, 0, size, size);
            ctxFront.clearRect(0, 0, size, size);

            // Draw subtle orbit rings on back layer
            ctxBack.strokeStyle = "rgba(201, 162, 39, 0.06)";
            ctxBack.lineWidth = 1;
            ctxBack.beginPath();
            ctxBack.ellipse(centerX, centerY, 90, 33, 0, 0, Math.PI * 2);
            ctxBack.stroke();
            ctxBack.beginPath();
            ctxBack.ellipse(centerX, centerY, 115, 42, 0, 0, Math.PI * 2);
            ctxBack.stroke();

            particles.forEach((p) => {
                p.angle += p.speed;

                const x = centerX + Math.cos(p.angle) * p.radius;
                const y = centerY + Math.sin(p.angle) * 0.37 * p.radius;

                // Determine if particle is in front or behind
                // Bottom of ellipse (y > centerY, sin > 0) = FRONT
                // Top of ellipse (y < centerY, sin < 0) = BACK
                const sinValue = Math.sin(p.angle);
                const isInFront = sinValue > 0;

                const ctx = isInFront ? ctxFront : ctxBack;

                // Subtle trail (2 dots)
                for (let i = 2; i > 0; i--) {
                    const trailAngle = p.angle - (i * 0.12);
                    const tx = centerX + Math.cos(trailAngle) * p.radius;
                    const ty = centerY + Math.sin(trailAngle) * 0.37 * p.radius;

                    ctx.beginPath();
                    ctx.arc(tx, ty, p.size * 0.6, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(201, 162, 39, ${p.opacity * 0.12 / i})`;
                    ctx.fill();
                }

                // Glow
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 3);
                gradient.addColorStop(0, `rgba(201, 162, 39, ${p.opacity * 0.4})`);
                gradient.addColorStop(1, "transparent");
                ctx.beginPath();
                ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Particle
                ctx.beginPath();
                ctx.arc(x, y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(201, 162, 39, ${p.opacity})`;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Decorative corner ornaments */}
            <div className="absolute inset-8 pointer-events-none hidden lg:block">
                <div className="corner-ornament corner-tl" />
                <div className="corner-ornament corner-tr" />
                <div className="corner-ornament corner-bl" />
                <div className="corner-ornament corner-br" />
            </div>

            {/* Central content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Logo with 3D orbit */}
                <div className="mb-12 fade-up" style={{ animationDelay: '0.2s' }}>
                    <div className="relative w-[280px] h-[280px] mx-auto flex items-center justify-center">
                        {/* Back layer canvas */}
                        <canvas
                            ref={canvasBackRef}
                            className="absolute inset-0 pointer-events-none"
                            style={{ zIndex: 1 }}
                        />

                        {/* Spherical logo */}
                        <div className="logo-sphere" style={{ zIndex: 5 }}>
                            <Image
                                src="/cag-logo.jpg"
                                alt="CAG Macro Lab"
                                fill
                                className="object-contain rounded-full"
                                priority
                            />
                            {/* Sphere overlay for 3D effect */}
                            <div className="sphere-highlight" />
                            <div className="sphere-shadow" />
                        </div>

                        {/* Front layer canvas */}
                        <canvas
                            ref={canvasFrontRef}
                            className="absolute inset-0 pointer-events-none"
                            style={{ zIndex: 10 }}
                        />
                    </div>
                </div>

                {/* Brand name */}
                <div className="fade-up" style={{ animationDelay: '0.4s' }}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-gold-gradient mb-6">
                        CAG Macro Lab
                    </h1>
                </div>

                {/* Divider with ornament */}
                <div className="divider max-w-md mx-auto mb-8 fade-up" style={{ animationDelay: '0.6s' }}>
                    <span className="ornament-star">✦</span>
                </div>

                {/* Tagline */}
                <div className="fade-up" style={{ animationDelay: '0.8s' }}>
                    <p className={`text-serif-italic text-2xl md:text-3xl text-[var(--foreground-muted)] mb-4 ${serifClass}`}>
                        {t.hero.tagline}
                    </p>
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold-400)] mb-12">
                        {t.common.since}
                    </p>
                </div>

                {/* Description */}
                <div className="fade-up max-w-2xl mx-auto mb-16" style={{ animationDelay: '1s' }}>
                    <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                </div>

                {/* CTA */}
                <div className="fade-up" style={{ animationDelay: '1.2s' }}>
                    <a href="#products" className="btn-elegant">
                        {t.hero.cta}
                    </a>
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 line-horizontal" />

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 fade-up" style={{ animationDelay: '1.5s' }}>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)]">{t.hero.scroll}</span>
                    <div className="w-px h-8 bg-gradient-to-b from-[var(--gold-600)] to-transparent" />
                </div>
            </div>
        </section>
    );
}
