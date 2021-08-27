import { motion } from "framer-motion";
import React, { useState } from "react";
import CustomLink from "../components/CustomLink";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function IndexPage() {
  const content = {
    initial: {
      opacity: 1
    },
    animate: {
      transition: { staggerChildren: 0.3 }
    },
    exit: {
      opacity: 0
    }
  };

  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const fade = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const [cookies, setCookie] = useCookies(["name"]);
  const [name, setName] = useState(cookies.name ? cookies.name : "");

  const router = useRouter();

  function onNextBtnClick() {
    setCookie("name", name, {
      path: "/",
      maxAge: 3600,
      sameSite: true
    });
    router.push("/name");
  }


  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={content}
      className="overflow-hidden h-screen flex flex-col items-center justify-center relative bg-fixed bg-center bg-cover bg-no-repeat"
    >
      <motion.label variants={title} htmlFor="label" className="block text-xl">
        What's your name?
      </motion.label>
      <motion.input
        type="text"
        name="label"
        id="label"
        variants={title}
        className="focus:ring-indigo-500 mt-1 text-center focus:border-indigo-500 block border-gray-300 rounded-md w-72 sm:w-96"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></motion.input>
      <motion.button
        variants={fade}
        onClick={onNextBtnClick}
        className="rounded-md sm:w-32 w-16 sm:h-10 h-8 sm:text-base text-sm text-white transition duration-300 bg-blue-600 hover:bg-blue-800 absolute bottom-0 right-0 sm:mr-5 sm:mb-5 mb-3 mr-3"
      >
        Next
      </motion.button>
      <CustomLink
        href="/about"
        text="About This Project"
        variants={fade}
        extraClasses="absolute bottom-0 left-0 sm:mb-5 sm:ml-5 sm:text-base mb-3 ml-3 text-sm"
      />
    </motion.div>
  );
}
