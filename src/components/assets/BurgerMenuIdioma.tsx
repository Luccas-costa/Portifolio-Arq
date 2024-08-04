import Link from "next/link";
import React from "react";

interface BurgerMenuProps {
  texto1: string;
  texto2: string;
  texto3: string;
  hanlderidioma: (number: Number) => void;
}

export default function BurgerMenuIdioma({
  texto1,
  texto2,
  texto3,
  hanlderidioma,
}: BurgerMenuProps) {
  return (
    <div className='w-28 h-30 bg-zinc-500 dark:bg-neutral-700 border border-neutral-700 dark:border-neutral-600 rounded-lg shadow-lg'>
      <div className='flex flex-col justify-center items-center p-1'>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          <div onClick={() => hanlderidioma(0)}>{texto1}</div>
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          <div onClick={() => hanlderidioma(1)}>{texto2}</div>
        </div>
        <div className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-neutral-400 py-2 px-3 text-black dark:text-zinc-200 cursor-pointer'>
          <div onClick={() => hanlderidioma(2)}>{texto3}</div>
        </div>
      </div>
    </div>
  );
}
