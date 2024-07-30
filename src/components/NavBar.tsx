"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";

import { Language } from "@/types/Languages";
import styles from "@/styles/border.module.css";

import ThemeIcon from "./assets/ThemeIcon";
import CloseMenu from "./assets/CloseMenu";
import MenuIdioma from "./assets/MenuIdioma";
import BurguerMenu from "./assets/BurguerMenu";

import pt from "@/constants/pt.json";
import en from "@/constants/en.json";
import es from "@/constants/es.json";

interface NavBarProps {
  LanguageType: string;
}

export default function NavBar({ LanguageType }: NavBarProps) {
  const [Itmenuopen, setItmenuopen] = useState(false);
  const [OpenIdioma, setOpenIdioma] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
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

  const handlemenu = () => {
    setItmenuopen(!Itmenuopen);
  };

  const closeMenu = () => {
    setItmenuopen(false);
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  useEffect(() => {
    if (!Itmenuopen) {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    }
  }, [Itmenuopen]);

  return (
    <div className='w-full'>
      <div className='w-full h-16 bg-fwhite dark:bg-neutral-950 px-6 menuburger:px-8 py-2 flex items-center justify-between relative'>
        <div>
          {/* ESSA DAQUI MEXE NO TEMA CLARO */}
          <div className='dark:hidden'>
            <Image
              src='/logo-tranparente-dark.png'
              alt='logo'
              width={40}
              height={40}
            />
          </div>
          {/* ESSA DAQUI MEXE NO TEMA ESCURO */}
          <div className='dark:flex hidden'>
            <Image
              src='/logo-tranparente.png'
              alt='logo'
              width={40}
              height={40}
            />
          </div>
        </div>
        <div>
          <ul className='hidden menuburger:flex items-center gap-4'>
            <li
              className={` ${styles.navItem} dark:text-white text-neutral-900`}
            >
              {controlLanguage?.navbar.Projetos}
            </li>
            <li
              className={` ${styles.navItem} dark:text-white text-neutral-900`}
            >
              {controlLanguage?.navbar.Sobre}
            </li>
            <li
              className={` ${styles.navItem} dark:text-white text-neutral-900`}
            >
              {controlLanguage?.navbar.Contato}
            </li>
            <li
              className={`${styles.navItem} dark:text-white text-neutral-900 relative flex gap-1 items-center`}
              onClick={() => setOpenIdioma(!OpenIdioma)}
            >
              {controlLanguage?.navbar.Idioma}{" "}
              <span
                className={`mt-1 transition-all ${OpenIdioma && "rotate-180"}`}
              >
                <CaretDown size={14} weight='bold' />
              </span>
              {OpenIdioma && (
                <div className='absolute top-6 right-0 z-20 mt-2'>
                  <MenuIdioma
                    textos={[
                      {
                        label:
                          controlLanguage?.navbar.MenuIdioma.Portugues ||
                          "Português",
                        href: "/",
                      },
                      {
                        label:
                          controlLanguage?.navbar.MenuIdioma.English ||
                          "English",
                        href: "/en",
                      },
                      {
                        label:
                          controlLanguage?.navbar.MenuIdioma.Español ||
                          "Español",
                        href: "/es",
                      },
                    ]}
                  />
                </div>
              )}
            </li>
            <li>
              <ThemeIcon cor='currentColor' tamanho={24} />
            </li>
            <li className=''>
              <button className='dark:bg-white dark:text-black bg-neutral-900 text-white rounded-lg py-2 px-3 font-semibold'>
                {controlLanguage?.navbar.Login}
              </button>
            </li>
          </ul>
          <div className='flex menuburger:hidden items-center'>
            <div style={{ zIndex: 10 }}>
              <CloseMenu
                handlermenu={handlemenu}
                checkboxRef={checkboxRef}
                cor={Itmenuopen}
              />
            </div>
            {Itmenuopen && (
              <div style={{ zIndex: 1 }}>
                <BurguerMenu
                  handlerclose={closeMenu}
                  textos={[
                    {
                      label: controlLanguage?.navbar.Projetos || "Projetos",
                      href: "/",
                    },
                    {
                      label: controlLanguage?.navbar.Sobre || "Sobre",
                      href: "/",
                    },
                    {
                      label: controlLanguage?.navbar.Contato || "Contato",
                      href: "/",
                    },
                    {
                      label: controlLanguage?.navbar.Idioma || "Idioma",
                      href: "/",
                    },
                    {
                      label:
                        controlLanguage?.navbar.MenuIdioma.Portugues ||
                        "Português",
                      href: "/",
                    },
                    {
                      label:
                        controlLanguage?.navbar.MenuIdioma.English || "English",
                      href: "/en",
                    },
                    {
                      label:
                        controlLanguage?.navbar.MenuIdioma.Español || "Español",
                      href: "/es",
                    },
                  ]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
