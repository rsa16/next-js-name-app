import { motion } from "framer-motion";
import { parseCookies } from "../helpers/";
import CustomLink from "../components/CustomLink";
import { useRouter } from "next/router";

export default function NamePage({ name }) {
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

  const router = useRouter();

  function onBackBtnClick() {
    router.push("/");
  }

  const randomNoNames = [
    "You don't have a name.",
    "I believe your nameless.",
    "Trying to be anonymous aren't you?",
    "I think you forgot to enter a name."
  ];

  let text;
  if (name.name !== "") {
    text = (
      <motion.h1 initial="initial" animate="animate" variants={title}>
        Your Name Is: <span className="text-blue-600">{name.name}</span>
      </motion.h1>
    );
  } else {
    text = (
      <motion.h1 initial="initial" animate="animate" variants={title}>
        {randomNoNames[Math.floor(Math.random() * randomNoNames.length)]}
      </motion.h1>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={content}
      className="overflow-hidden h-screen flex flex-col items-center justify-center relative bg-fixed bg-center bg-cover bg-no-repeat"
    >
      {text}
      <motion.button
        variants={fade}
        onClick={onBackBtnClick}
        className="rounded-md sm:w-32 w-16 sm:h-10 h-8 sm:text-base text-sm text-white transition duration-300 bg-blue-600 hover:bg-blue-800 absolute bottom-0 right-0 sm:mr-5 sm:mb-5 mb-3 mr-3"
      >
        Back
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

NamePage.getInitialProps = async ({ req, res }) => {
  const name = parseCookies(req);

  if (res) {
    if (Object.keys(name).length === 0 && name.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    name: name && name
  };
};
