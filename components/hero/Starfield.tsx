"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "motion/react";

interface StarfieldProps {
  speed: MotionValue<number>;
}

interface Star {
  x: number;
  y: number;
  z: number;
  prevZ: number;
  color: string;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  inner: string;
  outer: string;
  driftX: number;
  driftY: number;
}

const STAR_COUNT = 500;
const BASE_SPEED = 0.4;
const VELOCITY_BOOST = 40;

// Mostly white with a scattering of colored specks so the field reads
// like a real sky, not confetti.
const STAR_COLORS = [
  "255, 255, 255",
  "255, 255, 255",
  "255, 255, 255",
  "255, 255, 255",
  "200, 220, 255",
  "160, 200, 255",
  "190, 170, 255",
  "255, 180, 230",
  "255, 220, 170",
  "160, 255, 235",
];

// Positions/radii are relative to the viewport so they scale with resize.
const NEBULAE: Nebula[] = [
  { x: 0.22, y: 0.3, radius: 0.5, inner: "rgba(168, 85, 247, 0.1)", outer: "rgba(88, 28, 135, 0)", driftX: 0.9, driftY: 0.55 },
  { x: 0.78, y: 0.62, radius: 0.55, inner: "rgba(56, 189, 248, 0.09)", outer: "rgba(8, 47, 73, 0)", driftX: -0.75, driftY: 0.45 },
  { x: 0.55, y: 0.15, radius: 0.4, inner: "rgba(236, 72, 153, 0.08)", outer: "rgba(131, 24, 67, 0)", driftX: 0.6, driftY: -0.7 },
  { x: 0.35, y: 0.85, radius: 0.45, inner: "rgba(45, 212, 191, 0.07)", outer: "rgba(19, 78, 74, 0)", driftX: -0.5, driftY: -0.45 },
];

function spawnStar(width: number, height: number): Star {
  const z = Math.random() * width;
  return {
    x: (Math.random() - 0.5) * width,
    y: (Math.random() - 0.5) * height,
    z,
    prevZ: z,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
  };
}

export function Starfield({ speed }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () =>
      spawnStar(width, height),
    );
    const nebulae = NEBULAE.map((n) => ({ ...n }));

    let rafId: number;
    const render = () => {
      const boost = prefersReducedMotion ? 0 : Math.abs(speed.get()) * VELOCITY_BOOST;
      const dz = BASE_SPEED + boost;

      ctx.fillStyle = "rgba(5, 5, 10, 0.35)";
      ctx.fillRect(0, 0, width, height);

      // Nebulae: soft additive clouds drifting slowly, sweeping faster
      // while the field is at warp so they parallax with the scroll.
      const drift = prefersReducedMotion ? 0 : 0.0004 + dz * 0.00035;
      ctx.globalCompositeOperation = "lighter";
      for (const nebula of nebulae) {
        nebula.x += nebula.driftX * drift;
        nebula.y += nebula.driftY * drift;
        if (nebula.x < -0.3) nebula.x = 1.3;
        if (nebula.x > 1.3) nebula.x = -0.3;
        if (nebula.y < -0.3) nebula.y = 1.3;
        if (nebula.y > 1.3) nebula.y = -0.3;

        const ncx = nebula.x * width;
        const ncy = nebula.y * height;
        const r = nebula.radius * Math.min(width, height);
        const gradient = ctx.createRadialGradient(ncx, ncy, 0, ncx, ncy, r);
        gradient.addColorStop(0, nebula.inner);
        gradient.addColorStop(1, nebula.outer);
        ctx.fillStyle = gradient;
        ctx.fillRect(ncx - r, ncy - r, r * 2, r * 2);
      }
      ctx.globalCompositeOperation = "source-over";

      const cx = width / 2;
      const cy = height / 2;

      for (const star of stars) {
        star.prevZ = star.z;
        star.z -= dz;
        if (star.z <= 1) {
          const fresh = spawnStar(width, height);
          star.x = fresh.x;
          star.y = fresh.y;
          star.color = fresh.color;
          star.z = width;
          star.prevZ = width;
        }

        const sx = cx + (star.x / star.z) * width;
        const sy = cy + (star.y / star.z) * height;
        const px = cx + (star.x / star.prevZ) * width;
        const py = cy + (star.y / star.prevZ) * height;

        const brightness = Math.min(1, (1 - star.z / width) * 1.2);
        ctx.strokeStyle = `rgba(${star.color}, ${brightness})`;
        ctx.lineWidth = Math.max(0.5, (1 - star.z / width) * 2.5);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [speed]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
  );
}
