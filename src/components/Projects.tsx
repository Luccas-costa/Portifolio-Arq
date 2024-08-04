"use client";
import { useState } from "react";
import ModalProjects from "./assets/ModalProjects";
import Image from "next/image";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleOpenModal = (project: number) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className='w-screen  bg-[#DC9303] dark:bg-[#463485] py-[100px] px-12 relative'>
      <div className='absolute top-0 left-0 dark:hidden' style={{ zIndex: 1 }}>
        <Image src='/assets/transition1.svg' width={1920} height={200} alt='' />
      </div>
      <div
        className='absolute top-0 left-0 hidden dark:block'
        style={{ zIndex: 1 }}
      >
        <Image
          src='/assets/transition1dark.svg'
          width={1920}
          height={200}
          alt=''
        />
      </div>
      <div style={{ zIndex: 2 }}>
        <div className='text-5xl font-bold mb-4 text-center'>Projetos</div>
        <div className='grid grid-rows-4 grid-cols-2 screen3:grid-rows-3 screen3:grid-cols-3 screen02:grid-rows-2 screen02:grid-cols-4 gap-x-4 gap-y-20 mt-20 place-content-center place-items-center'>
          <div
            className='bg-gray-500 rounded w-[420px] h-[400px]'
            onClick={() => handleOpenModal(1)}
          >
            1
          </div>
          <div
            className='bg-red-500 rounded w-[420px] h-[400px]'
            onClick={() => handleOpenModal(2)}
          >
            2
          </div>
          <div
            className='bg-green-500 rounded w-[420px] h-[400px]'
            onClick={() => handleOpenModal(3)}
          >
            3
          </div>
          <div
            className='bg-blue-500 rounded w-[420px] h-[400px]'
            onClick={() => handleOpenModal(4)}
          >
            4
          </div>
          <div
            className='bg-yellow-500 rounded w-[420px] h-[400px]'
            onClick={() => handleOpenModal(5)}
          >
            5
          </div>
          <div
            className='bg-pink-500 rounded w-[420px] h-[400px]'
            onClick={() => handleOpenModal(6)}
          >
            6
          </div>
          <div
            className='bg-purple-500 rounded w-[420px] h-[400px]'
            onClick={() => handleOpenModal(7)}
          >
            7
          </div>
          <div
            className='bg-neutral-900 rounded w-[420px] h-[400px]'
            onClick={() => handleOpenModal(8)}
          >
            8
          </div>
        </div>
      </div>

      <ModalProjects show={showModal} onClose={handleCloseModal}>
        <div className='w-[700px] h-[700px] flex flex-col items-center'>
          <div className='w-[690px] h-[600px] bg-red-500 mb-3 roundeds'></div>
          <div className='text-white font-bold text-3xl'>Nome do Projeto</div>
          <div className='text-zinc-300 font-bold text-xl text-center px-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At beatae
            quae atque harum aliquid.
          </div>
        </div>
      </ModalProjects>
    </div>
  );
}
