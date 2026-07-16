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
}

const STAR_COUNT = 500;
const BASE_SPEED = 0.4;
const VELOCITY_BOOST = 40;

function spawnStar(width: number, height: number): Star {
  const z = Math.random() * width;
  return { x: (Math.random() - 0.5) * width, y: (Math.random() - 0.5) * height, z, prevZ: z };
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

    let rafId: number;
    const render = () => {
      const boost = prefersReducedMotion ? 0 : Math.abs(speed.get()) * VELOCITY_BOOST;
      const dz = BASE_SPEED + boost;

      ctx.fillStyle = "rgba(5, 5, 10, 0.35)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (const star of stars) {
        star.prevZ = star.z;
        star.z -= dz;
        if (star.z <= 1) {
          const fresh = spawnStar(width, height);
          star.x = fresh.x;
          star.y = fresh.y;
          star.z = width;
          star.prevZ = width;
        }

        const sx = cx + (star.x / star.z) * width;
        const sy = cy + (star.y / star.z) * height;
        const px = cx + (star.x / star.prevZ) * width;
        const py = cy + (star.y / star.prevZ) * height;

        const brightness = Math.min(1, (1 - star.z / width) * 1.2);
        ctx.strokeStyle = `rgba(200, 220, 255, ${brightness})`;
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
