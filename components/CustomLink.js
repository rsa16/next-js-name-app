import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomLink(props) {
  const { href, text, variants, extraClasses } = props;
  let classes = "transition-all duration-300 text-blue-500 hover:text-blue-800".concat(
    " ",
    extraClasses
  );
  return (
    <Link href={href}>
      <motion.a variants={variants} className={classes}>
        {text}
      </motion.a>
    </Link>
  );
}
