import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Libraries for <br /> Readers
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Discover the finest libraries that cater to book lovers and avid readers. 
  Explore a vast collection of books, <br /> journals, and digital resources, 
  and enjoy a serene environment perfect for reading and research. Our libraries <br /> 
  offer a welcoming space for all ages, providing access to knowledge, 
  inspiration, and community programs. Visit us <br /> today to immerse yourself 
  in the world of literature and learning.
        </p>
        <Link to="/books" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Read Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
