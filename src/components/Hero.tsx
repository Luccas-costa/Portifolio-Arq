"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Image1 from "../../public/Fotos/ideia13.jpg";
import Image2 from "../../public/Fotos/ideia4.jpg";

const images = [Image1, Image2];
const images2 = ["/Fotos/ideia1A1400.jpg", "/Fotos/ideia4A1400.jpg"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [imageList, setImageList] = useState(images);

  // useEffect(() => {
  //   const updateImageList = () => {
  //     if (window.innerWidth < 1400) {
  //       setImageList(images2);
  //     } else {
  //       setImageList(images);
  //     }
  //   };

  //   updateImageList(); // Verifique o tamanho da janela na montagem
  //   window.addEventListener("resize", updateImageList);

  //   return () => {
  //     window.removeEventListener("resize", updateImageList);
  //   };
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 4000); // Avança o slide a cada 4 segundos

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
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
        dragConstraints={{ left: -imageList.length * 100, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(event, info) => {
          handleDrag(event, info);
          setIsDragging(false);
        }}
      >
        {imageList.map((src, index) => (
          <div key={index} className='flex-shrink-0 w-full h-full'>
            <div
              className={`2xl:w-[100vw] 2xl:h-[90vh] xl:h-[90vh] lg:h-[90vh] md:h-[85vh] sm:h-[85vh] h-[85vh] relative overflow-hidden shadow-2xl`}
            >
              <Image
                src={src}
                alt='Imagem de fundo principal'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        ))}
      </motion.div>
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 p-4 bg-fwhite/20 dark:bg-black/20 rounded-full shadow-md'
        onClick={prevSlide}
      >
        <CaretLeft size={30} className='text-white dark:text-black' />
      </button>
      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2 p-4 bg-fwhite/20 dark:bg-black/20 rounded-full shadow-md'
        onClick={nextSlide}
      >
        <CaretRight size={30} className='text-white dark:text-black' />
      </button>
    </div>
  );
}
