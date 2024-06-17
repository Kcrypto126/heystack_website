"use client";

import brands from "@/constants/brands";
import { cn } from "@/utils/libs";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Slider({
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}) {
  const containerRef = useRef();
  const scrollerRef = useRef();
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate content to create a seamless scrolling effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Set custom properties for animation
      setAnimationProperties();
      setStart(true);
    }
  }

  const setAnimationProperties = () => {
    if (containerRef.current) {
      // Set direction
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "reverse" : "forwards"
      );

      // Set speed
      let duration;
      switch (speed) {
        case "fast":
          duration = "120s"; // Faster speed, shorter duration
          break;
        case "normal":
          duration = "240s"; // Normal speed
          break;
        default:
          duration = "280s"; // Slow speed, longer duration
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {brands.map((item, idx) => (
          <div className="w-44 h-full cursor-pointer" key={idx}>
            <Image
              alt={item.name}
              src={item.src}
              width={64}
              height={64}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
