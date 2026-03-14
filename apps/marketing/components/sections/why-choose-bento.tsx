"use client";

import { motion } from "framer-motion";
import { Bot, Zap, ShieldCheck, Plug } from "lucide-react";
import { useEffect, useRef } from "react";

export function WhyChooseBento() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 500;
    };

    const drawWave = (
      offset: number,
      amplitude: number,
      frequency: number,
      color: string
    ) => {
      ctx.beginPath();

      for (let x = 0; x <= canvas.width; x += 5) {
        const y =
          canvas.height / 2 +
          Math.sin(x * frequency + time * 0.02 + offset) * amplitude;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      time += 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawWave(0, 50, 0.01, "rgba(59,130,246,0.4)");
      drawWave(Math.PI / 2, 70, 0.008, "rgba(139,92,246,0.4)");
      drawWave(Math.PI, 40, 0.012, "rgba(99,102,241,0.4)");

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const features = [
    {
      icon: Bot,
      title: "AI Automation",
      desc: "Automate customer conversations and reduce manual support workload.",
    },
    {
      icon: Zap,
      title: "Instant Responses",
      desc: "Respond to customers instantly with AI-powered replies 24/7.",
    },
    {
      icon: Plug,
      title: "Easy Integrations",
      desc: "Connect with CRM, Slack, WhatsApp, and other tools effortlessly.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      desc: "Enterprise-grade security with reliable uptime and performance.",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">

      {/* BLUE RADIAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_50%)]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full opacity-40"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Why Choose Our AI Platform
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful AI tools designed to automate conversations, improve
            customer experience, and scale your business effortlessly.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                y: -6,
            }}
            transition={{
                duration: 0.18,
                ease: "easeOut",
                delay: index * 0.05,
            }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-background/60 backdrop-blur p-6 hover:border-primary/60 transition-all duration-300 cursor-pointer"
            >
                <Icon className="h-8 w-8 text-primary mb-4" />

                <h3 className="font-semibold text-lg mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}