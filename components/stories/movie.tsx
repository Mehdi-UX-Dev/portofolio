"use client";

import React, { useRef, useState } from "react";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import movieCover from "@/public/images/movieDB/movieCover.png";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FaX } from "react-icons/fa6";

function MovieTime() {
  const [info, showInfo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{
        x: -200,
        opacity: 0,
      }}
      animate={
        isInView && {
          x: 0,
          opacity: 1,
        }
      }
      transition={{ delay: 0.5, easeInOut: 0.5, duration: 1 }}
      className="mb-4 flex flex-col items-center lg:grid lg:grid-cols-6    "
    >
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
              Movie Time
            </h1>
            <h2 className="mt-4">Tech Stack :</h2>
            <p className="text-[1.5rem]">
              Figma, Typescript, NextJS, Tailwind CSS, Redux
            </p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="relative order-2  col-span-2 flex h-full w-full flex-col justify-center bg-[#B275F0]  px-4 lg:order-none lg:px-10"
        >
          <FaInfoCircle
            size="24"
            className="absolute left-4 top-4 cursor-pointer hover:scale-110"
            onClick={() => showInfo(true)}
          />

          <h1 className="pb-4 text-[2.5rem] font-bold text-gray-950">
            Movie Time
          </h1>
          <p className="pb-8 text-[1.125rem] text-gray-950">
            Movie Time lets you explore movies and Tv shows
          </p>
          <div className="space-y-4">
            <div>
              <Link
                target="_blank"
                href={"https://github.com/Mehdi-UX-Dev/Movie-Databse"}
                className="flex w-fit gap-4   transition-all  duration-200 ease-in-out hover:rounded-full hover:bg-gray-800 hover:px-8 hover:py-4 hover:text-white"
              >
                <LuGithub size="40" />
                <p className="text-[1.5rem]">Source Code</p>
              </Link>
            </div>
            <div>
              <Link
                href={"https://movie-timeapp.vercel.app/"}
                target="_blank"
                className="flex w-fit items-center gap-4 transition-all  duration-200 ease-in-out  hover:rounded-full hover:bg-gray-800 hover:px-8 hover:py-4 hover:text-white"
              >
                <FaExternalLinkAlt size="32" />
                <p className="text-[1.5rem]">Website</p>
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      <div className="col-span-4 ">
        <Image
          src={movieCover}
          alt=""
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </motion.div>
  );
}

export default MovieTime;
