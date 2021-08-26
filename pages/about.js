import { motion } from "framer-motion";
import CustomLink from "../components/CustomLink";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-xl h-screen flex items-center justify-center relative bg-fixed bg-center bg-cover bg-no-repeat"
    >
      Just a simple application experimenting with cookies, nextJS, framer motion, and tailwindcss.&nbsp; <CustomLink href="/" text="Back" />
    </motion.div>
  );
}
