"use client";
import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className='bg-white dark:bg-neutral-950  text-white/30 text-sm'>
      <hr className='w-full bg-white/10 border border-white/10' />
      <div className='flex justify-between items-center p-8'>
        <div>© 2024 Anne Matarazzo. All rights reserved.</div>
        <div className='flex space-x-2'>
          <a href='#' target='_blank'>
            <Envelope
              size={30}
              weight={hoveredIcon === "Envelope" ? "fill" : "light"}
              onMouseEnter={() => setHoveredIcon("Envelope")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
          <a href='#' target='_blank'>
            <WhatsappLogo
              size={28}
              weight={hoveredIcon === "WhatsappLogo" ? "fill" : "light"}
              onMouseEnter={() => setHoveredIcon("WhatsappLogo")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
          <a href='#' target='_blank'>
            <LinkedinLogo
              size={28}
              weight={hoveredIcon === "LinkedinLogo" ? "fill" : "light"}
              onMouseEnter={() => setHoveredIcon("LinkedinLogo")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
          <a href='#' target='_blank'>
            <GithubLogo
              size={28}
              weight={hoveredIcon === "GithubLogo" ? "fill" : "light"}
              onMouseEnter={() => setHoveredIcon("GithubLogo")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
          <a href='#' target='_blank'>
            <XLogo
              size={28}
              weight={hoveredIcon === "XLogo" ? "fill" : "light"}
              onMouseEnter={() => setHoveredIcon("XLogo")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
          <a href='#' target='_blank'>
            <InstagramLogo
              size={28}
              weight={hoveredIcon === "InstagramLogo" ? "fill" : "light"}
              onMouseEnter={() => setHoveredIcon("InstagramLogo")}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
