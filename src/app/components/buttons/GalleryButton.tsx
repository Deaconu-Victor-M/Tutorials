"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TextButton({
  children,
  text,
  href,
  circleLeft = true,
  circleRight = true,
  textSize = 12,
}: {
  children?: React.ReactNode;
  href?: string;
  text?: string;
  circleLeft?: boolean;
  circleRight?: boolean;
  textSize?: number;
}) {
  const className =
    "relative flex flex-row items-center justify-center group transition-all duration-150 h-full";
  return (
    <>
      {href ? (
        <Link href={href} className={className}>
          {contentButton(children, textSize, text, circleLeft, circleRight)}
        </Link>
      ) : (
        <button className={className}>
          {contentButton(children, textSize, text, circleLeft, circleRight)}
        </button>
      )}
    </>
  );
}

const contentButton = (
  children: React.ReactNode,
  textSize: number,
  text?: string,
  circleLeft?: boolean,
  circleRight?: boolean
) => {
  const characters = text?.split("") || [];

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className={`relative flex flex-col items-start justify-center text-white font-normal leading-[100%] font-days-one px-5 py-4 h-full border border-white/20 rounded-xl w-full hover:bg-white/10 transition-all duration-150`}
    >
      <div className="relative">
        <motion.div
          className="relative overflow-hidden flex leading-none"
          variants={{
            initial: { x: 0 },
            hover: { x: 14 },
          }}
        >
          <span className="text-transparent leading-[100%]">{text}</span>
          <div className="absolute top-0 left-0 flex">
            {characters.map((char, index) => (
              <motion.span
                key={`white-${index}`}
                className={`text-white ${char === ' ' ? 'w-2' : ''}`}
                variants={{
                  initial: { y: 0 },
                  hover: { y: -textSize },
                }}
                transition={{
                  duration: 0.2,
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
                className={`text-primary ${char === ' ' ? 'w-2' : ''}`}
                variants={{
                  initial: { y: textSize },
                  hover: { y: 0 },
                }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.01,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
        {circleLeft && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -left-[12px] w-[4px] h-[4px] bg-primary rounded-full pointer-events-none"
            variants={{
              initial: { opacity: 0, x: -8 },
              hover: {
                opacity: 1,
                x: 8,
                scaleX: [4, 1],
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                },
              },
            }}
            transition={{ duration: 0.2 }}
          />
        )}
        {circleRight && (
          <motion.div
            variants={{
              initial: { opacity: 0, x: 8 },
              hover: {
                opacity: 1,
                x: -8,
                scaleX: [4, 1],
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                },
              },
            }}
            className="absolute top-1/2 -translate-y-1/2 -right-[12px] w-[4px] h-[4px] bg-primary rounded-full pointer-events-none"
          />
        )}
      </div>
    </motion.div>
  );
};
