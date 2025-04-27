import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ i, expanded, setExpanded, title, description, paperimg1, paperlink1,paper1title, paperimg2, paperlink2,paper2title, reflection }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#f3f4f6" : "#1e2939",
          color: isOpen ? "black" : "white",
        }}
        onClick={() => setExpanded(isOpen ? false : i)}
        transition={{ duration: 0.2 }}
        className="hover:!bg-gray-700 bg-gray-800 first:rounded-t-4xl last:rounded-b-4xl py-8 pl-2 font-bold text-lg cursor-pointer flex justify-between items-center"
      >
        <span>{title}</span>
        {/* Arrow Icon */}
        <motion.div
          initial={{ rotate: -90 }}
          animate={{ rotate: isOpen ? 90 : 0 }} // Rotate 180 degrees when open
          transition={{ duration: 0.2 }}
          className="pr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={isOpen ? "black" : "white"} // Change color based on isOpen
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="first:rounded-t-4xl last:rounded-b-4xl"
            style={{
              backgroundColor: "#f3f4f6",
              padding: "0 2rem",
            }}
          >
            {description}
            <div className="flex flex-col gap-4 mt-4 pb-4">
              <div className="flex flex-row w-full justify-evenly">
                <a
                  href={paperlink1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <motion.div
                    className="w-[200px] h-[350px] relative flex flex-col items-center justify-center text-white font-bold overflow-hidden"
                    style={{
                      backgroundImage: "url('/blurry-gradient-haikei.svg')",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gray-800"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={paperimg1}
                        alt="Paper 1 Cover"
                        className="w-full h-[70%] object-cover pointer-events-none z-20"
                      />
                      <p className="relative z-30 text-center mt-2 pointer-events-none justify-baseline">
                        {paper1title}
                      </p>
                    </motion.div>
                  </motion.div>
                </a>
                <a
                  href={paperlink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <motion.div
                    className="w-[200px] h-[350px] relative flex flex-col items-center justify-center text-white font-bold overflow-hidden"
                    style={{
                      backgroundImage: "url('/blurry-gradient-haikei.svg')",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gray-800"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={paperimg2}
                        alt="Paper 2 Cover"
                        className="w-full h-[70%] object-cover pointer-events-none z-20"
                      />
                      <p className="relative z-30 text-center mt-2 pointer-events-none justify-baseline">
                        {paper2title}
                      </p>
                    </motion.div>
                  </motion.div>
                </a>
              </div>
              {reflection}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;