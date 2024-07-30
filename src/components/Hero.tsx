"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

const images = [
  "/Fotos/ideia13.jpg",
  "/Fotos/ideia4.jpg",
  // Adicione mais URLs de imagens aqui
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 4000); // Avança o slide a cada 4 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDrag = (event: any, info: any) => {
    if (info.offset.x < -100) {
      // Se arrastar para a esquerda
      nextSlide();
    } else if (info.offset.x > 100) {
      // Se arrastar para a direita
      prevSlide();
    }
  };

  return (
    <div className='relative w-full h-[90%] overflow-hidden'>
      <motion.div
        className='relative flex'
        animate={{ x: -currentIndex * 100 + "%" }}
        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }} // Ajuste a transição aqui
        drag='x'
        dragConstraints={{ left: -images.length * 100, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(event, info) => {
          handleDrag(event, info);
          setIsDragging(false);
        }}
      >
        {images.map((src, index) => (
          <div key={index} className='flex-shrink-0 w-full h-full'>
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={1920}
              height={500}
              layout='responsive'
            />
          </div>
        ))}
      </motion.div>
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 p-4 bg-white/20 rounded-full shadow-md'
        onClick={prevSlide}
      >
        <CaretLeft size={30} />
      </button>
      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2 p-4 bg-white/20 rounded-full shadow-md'
        onClick={nextSlide}
      >
        <CaretRight size={30} />
      </button>
    </div>
  );
}
