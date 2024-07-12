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

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setAnimationProperties();
      setStart(true);
    }
  }

  const setAnimationProperties = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "reverse" : "forwards"
      );

      let duration;
      switch (speed) {
        case "fast":
          duration = "260s";
          break;
        case "normal":
          duration = "290s";
          break;
        default:
          duration = "520s"; // Slow speed
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "mt-2 md:mt-0 scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {brands.map((item, idx) => (
          <div
            className="w-28 h-[72px] sm:w-full sm:h-32 md:w-40 md:h-24 lg:w-52 lg:h-28 flex items-center justify-center cursor-pointer"
            key={idx}
          >
            <Image
              alt={`${item.name}`}
              src={item.src}
              width={128}
              height={128}
              className="w-full h-full object-cover md:object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
