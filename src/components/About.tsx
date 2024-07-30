"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { Language } from "@/types/Languages";
import pt from "@/constants/pt.json";
import en from "@/constants/en.json";
import es from "@/constants/es.json";

interface AboutProps {
  LanguageType: string;
}

export default function About({ LanguageType }: AboutProps) {
  const [controlLanguage, setControlLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const handlerLanguageType = (LanguageType: string) => {
      if (LanguageType === "pt") {
        setControlLanguage(pt);
      } else if (LanguageType === "en") {
        setControlLanguage(en);
      } else if (LanguageType === "es") {
        setControlLanguage(es);
      }
    };
    handlerLanguageType(LanguageType);
  }, [LanguageType]);
  return (
    <div className='w-screen h-[80%] bg-fwhite dark:bg-neutral-950'>
      <div className='flex py-[100px] px-20 items-center justify-evenly'>
        <div className='w-[30%]'>
          <Image
            src='/perfilArq.jpg'
            alt='foto de perfil'
            width={400}
            height={400}
            className='rounded-2xl shadow-2xl'
          />
        </div>

        <div className='w-[40%] text-black dark:text-white font-semibold'>
          <div className='text-5xl font-bold mb-4'>
            {"->"} {controlLanguage?.About.title}
          </div>
          <div className='text-3xl'>{controlLanguage?.About["about-me"]}</div>
        </div>
      </div>
    </div>
  );
}
