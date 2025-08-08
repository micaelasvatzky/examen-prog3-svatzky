"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const [showImage, setShowImage] = useState(false);

  const hobbies = [
    {
      hobbie: "Voley",
      num: 80,
    },
    {
      hobbie: "Brooklyn 99",
      num: 70,
    },
    {
      hobbie: "Wos",
      num: 40,
    },
  ];

  return (
    <div className="flex justify-center items-center max-w-[350px] md:max-w-[800px] lg:max-w-[1400px]">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center md:justify-around lg:justify-around mt-10 p-4 w-[350px] md:w-[800px] lg:w-[1200px]">
        <div className=" w-[350px] lg:w-[400px] flex flex-col justify-center items-center mb-5">
          {showImage && (
            <Image
              src="/perfil.jpg"
              width={200}
              height={200}
              alt="perrito con anteojos"
              className="w-[350px] h-[350px]"
            />
          )}
          {!showImage && (
            <button
              className="bg-orange-400 text-black rounded-lg p-8 "
              onClick={() => {
                setShowImage(!showImage);
              }}
            >
              Ver Imagen
            </button>
          )}
        </div>
        <div class=" w-[350px] lg:w-[500px] flex flex-col justify-center items-center">
          <h1 className="mb-5 font-bold text-2xl">Micaela Svatzky</h1>
          <p className="mb-10 text-center lg:text-start">
            Hola! Soy Mica, estudiante de 3er Año de la Lic. en Tecnología
            Multimedial. Me interesan mucho la programación y el diseño UX/UI.
            También me encanta jugar al voley
          </p>

          <div className="flex flex-col justify-center items-center w-[350px] lg:w-[600px]">
            <h4 className="text-lg mb-3 font-semibold">Hobbies</h4>
            <ul className="flex flex-col lg:flex-row justify-between lg:w-[600px] mb-10">
              {hobbies.map((hobbie) => (
                <li className="w-[180px] mb-10 bg-slate-800 rounded-lg p-3">
                  {`${hobbie.hobbie} - ${hobbie.num}%`}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://www.linkedin.com/in/micaela-svatzky-402082279/"
            target="_blank"
            className="bg-orange-700 rounded-lg p-3 flex justify-center items-center w-[120px]"
          >
            Mi Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
