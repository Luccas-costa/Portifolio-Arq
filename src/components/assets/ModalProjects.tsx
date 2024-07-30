import React from "react";

interface ModalProjectsProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalProjects({
  show,
  onClose,
  children,
}: ModalProjectsProps) {
  if (!show) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
      <div className='relative bg-white dark:bg-gray-800 p-4 rounded'>
        <button
          onClick={onClose}
          className='absolute top-0 right-0 mt-4 mr-4 text-black dark:text-white'
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
