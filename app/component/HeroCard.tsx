"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const titleRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1600",
          scrub: 1.2,
          pin: true,
        },
      });

      // Unfold animation
      tl.to(card3.current, { y: 250, rotationX: -10 }, 0);

      // Shrink title
      tl.to(
        titleRef.current,
        {
          scale: 0.6,
          opacity: 0,
        },
        0.2,
      );

      // Reveal metrics
      tl.to(
        metricsRef.current.children,
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
        },
        0.6,
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Cards */}
      <div className="relative w-100 h-96 perspective-[1200px]">
        {/* Card 1 */}

        {/* Card 2 (Center Card with Title) */}
        <div
          ref={card2}
          className="absolute w-full h-full bg-white text-black rounded-2xl shadow-2xl flex items-center justify-center"
        >
          <div
            ref={metricsRef}
            className="absolute flex gap-16 opacity-100 text-black"
          >
            <div className="opacity-0 translate-y-10 text-center">
              <h2 className="text-4xl font-bold">120+</h2>
              <p>Projects</p>
            </div>

            <div className="opacity-0 translate-y-10 text-center">
              <h2 className="text-4xl font-bold">98%</h2>
              <p>Satisfaction</p>
            </div>

            <div className="opacity-0 translate-y-10 text-center">
              <h2 className="text-4xl font-bold">5★</h2>
              <p>Rating</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={card3}
          className="absolute w-full h-full bg-white text-black rounded-2xl shadow-2xl flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold tracking-widest text-center">
            WELCOME <br /> ITZFIZZ
          </h1>
        </div>
      </div>

      {/* Metrics (appear later) */}
    </section>
  );
}
