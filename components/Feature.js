import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/foto8.jpeg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={314}
              width={508}

            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          {/*<h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            We Provide Many Features You Can Use
          </h3>*/}
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-relaxed text-black-600">
            Scrivere un titolo QUI
          </h3>
          <p className="my-2 text-black-500">
            Scivere del testo qui ----
            <br></br>Scivere del testo qui
            Scivere del testo qui
            Scivere del testo qui ----
            Scivere del testo qui
            Scivere del testo qui.
            Scivere del testo qui ---- Scivere del testo qui
            Scivere del testo qui ---- Scivere del testo qui
            Scivere del testo qui.
          </p>
          {/*<ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              Powerfull online protection.
            </li>
            <li className="relative circle-check custom-list">
              Internet without borders.
            </li>
            <li className="relative circle-check custom-list">
              Supercharged VPN
            </li>
            <li className="relative circle-check custom-list">
              No specific time limits.
            </li>
          </ul>*/}
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex flex-col items-end justify-center  w-full lg:w-9/12">
          {/*<h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Many Features You Can Use
          </h3>*/}
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-relaxed text-black-600">
          Scrivere un Bellissimo titolo QUI
          </h3>
          <p className="my-2 text-black-500">
            Scivere del testo qui ----
            <br></br>Scivere del testo qui
            Scivere del testo qui
            Scivere del testo qui ----
            Scivere del testo qui
            Scivere del testo qui.
            Scivere del testo qui ---- Scivere del testo qui
            Scivere del testo qui ---- Scivere del testo qui
            Scivere del testo qui.
          </p>
        </div>
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/foto8.jpeg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={314}
              width={508}
            />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Feature;
