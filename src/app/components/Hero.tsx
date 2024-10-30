import React from "react";
import "../../style/hero.css";
import Image from "next/image";

function Hero() {
  return (
    <main className="hero-inner">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Unlock the World of Knowledge</h1>
          <p>Books for every passion and interest</p>

          <button className="hero-btn">Start Reading Now</button>
        </div>

        <div className="hero-right">
          <Image src="/bookw.webp" alt="image" width={700} height={700} priority />
        </div>
      </div>
    </main>
  );
}

export default Hero;
