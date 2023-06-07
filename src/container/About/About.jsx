// import React from "react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { images } from "../../constants";
// import { dev} from "../../constants";
// import { saveAs } from "file-saver";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  // const cv =
  //   "https://drive.google.com/file/d/10FgWc5xdCtiMyLqBwU5qoWR0cx4ymd1t/view";
  // const downloadImg = (url) => {
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", "dev");
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design </span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1imyQEWMuhZBeMNIsKDaphEnlc2Mwg_5M/view?usp=sharing"
          target="blank"
        >
          <button type="button" className="p-textx">
            Download cv
          </button>
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
