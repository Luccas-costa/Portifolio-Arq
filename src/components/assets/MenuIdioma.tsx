// MenuIdioma.tsx

import Link from "next/link";
import React from "react";

interface MenuIdiomaProps {
  textos: { label: string }[];
  hanlderidioma: (number: Number) => void;
}

export default function MenuIdioma({ textos, hanlderidioma }: MenuIdiomaProps) {
  return (
    <div className='w-28 h-30 bg-fwhite dark:bg-neutral-950 border border-zinc-400 dark:border-neutral-700 rounded-lg shadow-lg'>
      <div className='flex flex-col justify-center items-center p-1'>
        {textos.map((texto, index) => (
          <div
            key={index}
            onClick={() => hanlderidioma(index)}
            className='w-full min-h-1/3 flex items-center font-semibold text-sm rounded-lg hover:bg-zinc-100 dark:hover:bg-neutral-800 py-2 px-3 cursor-pointer'
          >
            <div>{texto.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
