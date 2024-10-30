import React from "react";
import "../../style/about.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="page-container">
      <section className="about-container">
        <div className="about-first">
          <h1 className="first-heading">Why We Curate </h1>
          <div className="about-second">
            <h2 className="second-heading">
              A Gateway to Curating Stories Creating Connections
            </h2>
            <p className="about-para">
              A book shop is more than just a place to sell books it is a
              gateway to worlds of imagination knowledge and discovery.In today
              is digital age our online presence should replicate the charm of a
              physical bookstore inviting easy to navigate and filled with
              personalized recommendations to ensure each visitor leaves with
              the perfect book in hand.
            </p>
            <div className="about-btn">
              <Link href="/">
                <button className="btn">Read more</button>
              </Link>
              <Link href="/"></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
