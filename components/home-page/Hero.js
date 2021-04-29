import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/nabil.jpg"
          alt="An image showing nabil"
          width={300}
          height={300}
        />
      </div>

      <h1> Hi, I'm Nabil</h1>
      <p>
        I blog about web development - esp Front and Back End like React and
        NextJS
      </p>
    </section>
  );
};

// into HomePage
export default Hero;
