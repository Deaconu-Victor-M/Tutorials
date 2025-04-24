"use client";

import GalleryButton from "./components/buttons/GalleryButton";
import TextButton from "./components/buttons/TextButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#151518]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">

        <section className="flex flex-col items-center justify-center w-full h-screen">
          <TextButton text="ANIMATED" textSize={16} />
        </section>

        <section className="flex flex-col items-center justify-center w-full h-screen">
          <div
            className="h-[320px] w-[350px] flex flex-col p-1 gap-1 bg-white/10 rounded-xl"
          >
            <h3 className="text-white text-base leading-[100%] font-days-one px-5 py-4 h-1/2 flex items-center justify-start">
              GALLERY
            </h3>
            <GalleryButton
              text="CONCEPT ARTS"
              href="/"
              circleLeft={true}
              circleRight={false}
              textSize={16}
            />
            <GalleryButton
              text="CHARACTER DESIGNS"
              href="/"
              circleLeft={true}
              circleRight={false}
              textSize={16}
            />
            <GalleryButton
              text="ANIMATIONS"
              href="/"
              circleLeft={true}
              circleRight={false}
              textSize={16}
            />
          </div>
        </section>



      </main>

    </div>
  );
}
