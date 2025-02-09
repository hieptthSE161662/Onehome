import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Banner = ({ projects }) => {
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, [projects]);

  return (
    <div className="relative w-full p-2 overflow-hidden  bg-gradient-to-l from-gray-200 to-gray-300">
      <motion.div
        ref={scrollRef}
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{ x: -scrollWidth }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-1/2 h-1/2 flex-shrink-0 overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">{project.title}</h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
