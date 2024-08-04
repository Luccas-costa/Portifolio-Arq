"use client";
import { useState } from "react";

import About from "@/components/About";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  const [idioma, setidioma] = useState<string>("pt");

  const handlerIdioma = (number: Number) => {
    console.log("ativei o idioma", number);
    if (number == 0) {
      setidioma("pt");
    } else if (number == 1) {
      setidioma("en");
    } else if (number == 2) {
      setidioma("es");
    }
  };

  return (
    <main className='h-screen w-screen bg-neutral-950'>
      <div style={{ zIndex: 2, position: "relative" }}>
        <NavBar LanguageType={idioma} hanlderidioma={handlerIdioma} />
      </div>
      <div style={{ zIndex: 1, position: "relative" }}>
        <Hero />
      </div>
      <About LanguageType={idioma} />
      <Projects />
      <Contato LanguageType={idioma} />
      <Footer />
    </main>
  );
}
