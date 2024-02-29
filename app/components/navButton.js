import { AnimatePresence, motion } from "framer-motion";
import { useNav } from "../context/navProvider";

export default function NavButton({ title }) {
  const { currentSection, setCurrentSection } = useNav();

  const isSelected = currentSection === title.toLowerCase();

  return (
    <div
      className={`rounded-4xl relative flex justify-center py-1 px-4 cursor-pointer transition duration-150 ${
        isSelected ? "text-black" : "text-white hover:text-secondary"
      }`}
      onClick={() => {
        setCurrentSection(title.toLowerCase());
        const section = document.getElementById(title.toLowerCase());
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
          });
        }
      }}
    >
      <span className="z-20">{title}</span>
      <motion.div
        className="absolute bottom-0 top-0 z-0 w-full rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <AnimatePresence>
        {isSelected && (
          <motion.div
            className="absolute bottom-0 top-0 z-10 w-full rounded-full bg-white"
            layoutId="nav-select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeIn" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
