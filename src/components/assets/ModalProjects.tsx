import { X } from "@phosphor-icons/react/dist/ssr";
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
          className='absolute -top-8 -right-8 mt-4 mr-4 bg-white/20 p-2 rounded-xl text-black dark:text-white'
        >
          <X size={30} weight='bold' />
        </button>
        {children}
      </div>
    </div>
  );
}
