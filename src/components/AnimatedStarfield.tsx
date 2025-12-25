"use client";

import { useEffect, useRef } from "react";

export default function AnimatedStarfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 3; // Extend for scrolling
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Star class with more sophisticated behavior
        class Star {
            x: number;
            y: number;
            baseSize: number;
            size: number;
            baseOpacity: number;
            opacity: number;
            twinkleSpeed: number;
            twinklePhase: number;
            isGold: boolean;
            isBright: boolean;

            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.isBright = Math.random() < 0.05; // 5% bright stars
                this.baseSize = this.isBright ? Math.random() * 2 + 1.5 : Math.random() * 1.2 + 0.3;
                this.size = this.baseSize;
                this.baseOpacity = this.isBright ? Math.random() * 0.4 + 0.6 : Math.random() * 0.3 + 0.1;
                this.opacity = this.baseOpacity;
                this.twinkleSpeed = Math.random() * 0.015 + 0.005;
                this.twinklePhase = Math.random() * Math.PI * 2;
                this.isGold = Math.random() < 0.2; // 20% gold stars
            }

            update(time: number) {
                // Elegant twinkle effect with sine wave
                const twinkle = Math.sin(time * this.twinkleSpeed + this.twinklePhase);
                this.opacity = this.baseOpacity + twinkle * 0.15;
                this.size = this.baseSize + twinkle * 0.2;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, Math.max(0.1, this.size), 0, Math.PI * 2);

                if (this.isGold) {
                    ctx.fillStyle = `rgba(201, 162, 39, ${this.opacity})`;
                    // Add subtle glow for gold stars
                    if (this.isBright) {
                        ctx.shadowColor = 'rgba(201, 162, 39, 0.5)';
                        ctx.shadowBlur = 8;
                    }
                } else {
                    ctx.fillStyle = `rgba(248, 244, 230, ${this.opacity * 0.6})`;
                    if (this.isBright) {
                        ctx.shadowColor = 'rgba(248, 244, 230, 0.3)';
                        ctx.shadowBlur = 4;
                    }
                }
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Shooting star class
        class ShootingStar {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            active: boolean;

            constructor(width: number, height: number) {
                this.reset(width, height);
                this.active = false;
                this.opacity = 0;
                this.length = 0;
                this.speed = 0;
                this.x = 0;
                this.y = 0;
            }

            reset(width: number, height: number) {
                this.x = Math.random() * width * 0.8;
                this.y = Math.random() * height * 0.3;
                this.length = Math.random() * 80 + 40;
                this.speed = Math.random() * 8 + 12;
                this.opacity = 1;
                this.active = true;
            }

            update() {
                if (!this.active) return;
                this.x += this.speed;
                this.y += this.speed * 0.5;
                this.opacity -= 0.02;
                if (this.opacity <= 0) {
                    this.active = false;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                if (!this.active) return;

                const gradient = ctx.createLinearGradient(
                    this.x - this.length, this.y - this.length * 0.5,
                    this.x, this.y
                );
                gradient.addColorStop(0, `rgba(201, 162, 39, 0)`);
                gradient.addColorStop(1, `rgba(201, 162, 39, ${this.opacity})`);

                ctx.beginPath();
                ctx.moveTo(this.x - this.length, this.y - this.length * 0.5);
                ctx.lineTo(this.x, this.y);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        }

        // Create stars
        const stars: Star[] = [];
        const numStars = Math.floor((canvas.width * canvas.height) / 6000);
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star(canvas.width, canvas.height));
        }

        // Shooting star
        const shootingStar = new ShootingStar(canvas.width, canvas.height);
        let lastShootingStarTime = 0;

        // Animation loop
        let animationId: number;
        let startTime = Date.now();

        const animate = () => {
            const time = (Date.now() - startTime) / 1000;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw stars
            stars.forEach((star) => {
                star.update(time);
                star.draw(ctx);
            });

            // Occasional shooting star (every 15-30 seconds)
            if (time - lastShootingStarTime > 15 + Math.random() * 15) {
                shootingStar.reset(canvas.width, canvas.height);
                lastShootingStarTime = time;
            }
            shootingStar.update();
            shootingStar.draw(ctx);

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
}
