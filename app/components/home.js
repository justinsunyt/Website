import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useNav } from "../context/navProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./header";
import Image from "next/image";
import fuji from "../../images/Fuji.jpg";
import fujiTrans from "../../images/Fuji_transparent.png";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
  });
  const { setCurrentSection } = useNav();

  useEffect(() => {
    if (isInView) {
      setCurrentSection("home");
    }
  }, [isInView]);

  return (
    <motion.div
      id="home"
      className="h-screen w-full overflow-hidden filter blur-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <motion.div
        className="h-screen w-full absolute"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src={fuji} layout={"fill"} objectFit={"cover"} />
      </motion.div>
      <motion.div
        className="mt-[60vh] absolute left-0 right-0 flex justify-center text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.primary-alt),theme(colors.primary),theme(colors.primary-alt))] bg-[length:200%_auto] animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transform: "translateY(-30vh)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Justin Sun
      </motion.div>
      <motion.div
        className="h-screen w-full absolute overflow-hidden"
        initial={{ filter: "drop-shadow(0)" }}
        animate={{ filter: "drop-shadow(0 0 4rem #ffffff" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src={fujiTrans} layout={"fill"} objectFit={"cover"} />
      </motion.div>
      <Header />
    </motion.div>
  );
}
