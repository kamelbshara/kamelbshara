"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
type Wire = { a: Point; b: Point };
type Pulse = { wireIndex: number; t: number; speed: number; reverse: boolean };

const WIRE_RGB = "74, 222, 128";
const PULSE_RGB = "16, 185, 129";

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let wires: Wire[] = [];
    let nodes: Point[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;

    function spawnPulse(): Pulse {
      return {
        wireIndex: Math.floor(Math.random() * Math.max(wires.length, 1)),
        t: Math.random(),
        speed: 0.0015 + Math.random() * 0.0035,
        reverse: Math.random() < 0.5,
      };
    }

    function buildGrid() {
      const spacing = width < 640 ? 100 : 140;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const grid: Point[][] = [];
      for (let r = 0; r < rows; r++) {
        const row: Point[] = [];
        for (let c = 0; c < cols; c++) {
          row.push({
            x: c * spacing + (Math.random() - 0.5) * spacing * 0.3,
            y: r * spacing + (Math.random() - 0.5) * spacing * 0.3,
          });
        }
        grid.push(row);
      }

      const newWires: Wire[] = [];
      const nodeMap = new Map<string, Point>();
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = grid[r][c];
          if (c < cols - 1 && Math.random() < 0.4) {
            newWires.push({ a: p, b: grid[r][c + 1] });
            nodeMap.set(`${r}-${c}`, p);
            nodeMap.set(`${r}-${c + 1}`, grid[r][c + 1]);
          }
          if (r < rows - 1 && Math.random() < 0.4) {
            newWires.push({ a: p, b: grid[r + 1][c] });
            nodeMap.set(`${r}-${c}`, p);
            nodeMap.set(`${r + 1}-${c}`, grid[r + 1][c]);
          }
        }
      }
      wires = newWires;
      nodes = Array.from(nodeMap.values());
      pulses = Array.from({ length: Math.min(30, Math.max(12, Math.floor(wires.length / 5))) }, spawnPulse);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      ctx!.lineWidth = 1;
      ctx!.strokeStyle = `rgba(${WIRE_RGB}, 0.14)`;
      for (const wire of wires) {
        ctx!.beginPath();
        ctx!.moveTo(wire.a.x, wire.a.y);
        ctx!.lineTo(wire.b.x, wire.b.y);
        ctx!.stroke();
      }

      ctx!.fillStyle = `rgba(${WIRE_RGB}, 0.3)`;
      for (const node of nodes) {
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!reduceMotion) {
        for (const pulse of pulses) {
          const wire = wires[pulse.wireIndex];
          if (!wire) continue;
          const t = pulse.reverse ? 1 - pulse.t : pulse.t;
          const x = wire.a.x + (wire.b.x - wire.a.x) * t;
          const y = wire.a.y + (wire.b.y - wire.a.y) * t;

          const glow = ctx!.createRadialGradient(x, y, 0, x, y, 7);
          glow.addColorStop(0, `rgba(${PULSE_RGB}, 0.9)`);
          glow.addColorStop(1, `rgba(${PULSE_RGB}, 0)`);
          ctx!.fillStyle = glow;
          ctx!.beginPath();
          ctx!.arc(x, y, 7, 0, Math.PI * 2);
          ctx!.fill();

          ctx!.fillStyle = `rgba(${PULSE_RGB}, 1)`;
          ctx!.beginPath();
          ctx!.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx!.fill();

          pulse.t += pulse.speed;
          if (pulse.t > 1) Object.assign(pulse, spawnPulse());
        }
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
