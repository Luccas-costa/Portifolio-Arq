"use client";
import { useState } from "react";
import ModalProjects from "@/components/assets/ModalProjects";

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
    <div className='w-screen h-[140%] bg-[#DC9303] dark:bg-[#463485] py-[100px] px-12'>
      <div className='text-5xl font-bold mb-4 text-center'>Projetos</div>
      <div className='grid grid-rows-3 grid-cols-4 gap-x-4 gap-y-20 mt-20 place-content-center place-items-center'>
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={`bg-${
              [
                "gray",
                "red",
                "green",
                "blue",
                "yellow",
                "pink",
                "purple",
                "neutral-900",
              ][index]
            }-500 rounded w-[420px] h-[400px]`}
            onClick={() => handleOpenModal(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <ModalProjects show={showModal} onClose={handleCloseModal}>
        <div className='text-black dark:text-white'>
          <h2 className='text-2xl mb-4'>Projeto {selectedProject}</h2>
          <p>Detalhes do projeto {selectedProject}...</p>
        </div>
      </ModalProjects>
    </div>
  );
}
