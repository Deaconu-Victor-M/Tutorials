"use client";

import Image from "next/image";
import TextButton from "./components/buttons/TextButton";
import { motion } from "framer-motion";

export default function Home() {
  const textSize = 16;
  const text = "ANIMATED";
  const characters = text.split("") || [];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#151518]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">

        <TextButton text="ANIMATED" textSize={16} />

        {/* <button className="relative flex flex-row items-center justify-center group transition-all duration-150">
          <motion.div
            whileHover="hover"
            initial="initial"
            className={`relative py-2`}
          >
            <div className="relative">
              <motion.div
                className="relative overflow-hidden flex"
                style={{ fontSize: `${textSize}px`, lineHeight: `${textSize}px` }}
              >
                <span className="text-transparent" style={{ fontSize: `${textSize}px` }}>{text}</span>
                <div className="absolute top-0 left-0 flex">
                  {characters.map((char, index) => (
                    <motion.span
                      key={`white-${index}`}
                      className="text-white"
                      variants={{
                        initial: { y: 0 },
                        hover: { y: -textSize },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        delay: index * 0.01,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <div className="absolute top-0 left-0 flex">
                  {characters.map((char, index) => (
                    <motion.span
                      key={`black-${index}`}
                      className="text-primary"
                      variants={{
                        initial: { y: textSize },
                        hover: { y: 0 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        delay: index * 0.01,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-[12px] w-[4px] h-[4px] bg-primary rounded-full pointer-events-none"
                variants={{
                  initial: { opacity: 0, x: -8, filter: "blur(1px)" },
                  hover: {
                    opacity: 1,
                    x: 0,
                    scaleX: [4, 1],
                    filter: "blur(0px)",
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                variants={{
                  initial: { opacity: 0, x: 8, filter: "blur(1px)" },
                  hover: {
                    opacity: 1,
                    x: 0,
                    scaleX: [4, 1],
                    filter: "blur(0px)",
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    },
                  },
                }}
                className="absolute top-1/2 -translate-y-1/2 -right-[12px] w-[4px] h-[4px] bg-primary rounded-full pointer-events-none"
              />
            </div>
          </motion.div>
        </button> */}


        
      </main>

    </div>
  );
}
