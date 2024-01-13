// MyCarousel.js

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import image_1 from "@/images/image_1.jpg";
import image_2 from "@/images/image_2.jpg";
import image_3 from "@/images/image_1.jpg";
import image_4 from "@/images/image_2.jpg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./style.module.css";
import { motion } from "framer-motion";

const images = [image_1, image_2, image_3, image_4];

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Component unmount olduğunda interval'i temizle
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div className={styles.carouselContainer}>
      <motion.div
        key={activeIndex}
        className={styles.carouselItem}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
      >
        <Image
          className={styles.carouselImage}
          alt=""
          src={images[activeIndex]}
        />
      </motion.div>

      <div className={styles.navigationButtons}>
        <button
          className={styles.button}
          onClick={handlePrev}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.background = "#f5f5f5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <MdArrowBackIos style={{ marginLeft: "5px" }} />
        </button>
        <button
          className={styles.button}
          onClick={handleNext}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.background = "#f5f5f5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
