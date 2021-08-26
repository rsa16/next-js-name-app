import { motion } from "framer-motion";
import CustomLink from "../components/CustomLink";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen text-xl flex flex-col items-center justify-center relative bg-fixed bg-center bg-cover bg-no-repeat"
    >
      <h1 className="text-center break-normal md:break-words w-1/3">Just a simple application experimenting with cookies, nextJS, framer motion, and tailwindcss. Made by Rehan.&nbsp;</h1>
      <CustomLink href="/" text="Back" />
    </motion.div>
  );
}
