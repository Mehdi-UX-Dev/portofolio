"use client";

import Image from "next/image";
import morasilatCover from "../../public/images/morasilat/morasilatCover.png";
import { LuAsterisk } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import { FaX } from "react-icons/fa6";
import { AnimatePresence, easeInOut, motion, useInView } from "framer-motion";

function Morasilat() {
  const [info, showInfo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{
        x: 200,
        opacity: 0,
      }}
      animate={
        isInView && {
          x: 0,
          opacity: 1,
        }
      }
      transition={{ delay: 1, easeInOut: 0.5, duration: 1 }}
      className="mb-4 flex flex-col items-center lg:grid lg:grid-cols-6   "
    >
      <div className="order-1 col-span-4 lg:order-none ">
        <Image
          src={morasilatCover}
          alt=""
          className="object-cover"
          placeholder="blur"
        />
      </div>

      {info ? (
        <AnimatePresence>
          <motion.div
            key="info"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="relative order-2 col-span-2 h-full w-full border bg-white shadow-md lg:order-none lg:px-4 lg:py-10"
          >
            <FaX
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => showInfo(false)}
            />
            <h1 className="mt-4 text-center text-[1.5rem] font-bold">
              Morasilat
            </h1>
            <h2 className="mt-4">Tech Stack :</h2>
            <p className="text-[1.5rem]">
              Figma, Adobe Illustrator, NextJS, Tailwind CSS, Redux, CVA,
              Storybook
            </p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          className="relative order-2 col-span-2 flex h-full w-full flex-col justify-center  bg-[#8DB2C3]
      px-4 lg:order-none lg:px-10"
          key="main"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <FaInfoCircle
            size="24"
            className="absolute right-4 top-4 hidden cursor-pointer hover:scale-110 md:block"
            onClick={() => showInfo(true)}
          />
          <h1 className="pb-4 text-[2.5rem] font-bold">Morasilat</h1>
          <p className="pb-8 text-[1.125rem]  md:w-[55ch] lg:w-full">
            Official application for transmission of documents throughout the{" "}
            <span className="font-bold">Kabul University</span> revolutionizing
            workflow efficiency by 45%.
          </p>
          <div className="flex">
            <LuAsterisk />
            <p>Protected by NDA(Non Disclosure Agreement).</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Morasilat;
