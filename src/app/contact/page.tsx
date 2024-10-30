import React from "react";
import "../../style/contact.css";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";

function Contact() {
  return (
    <section className="container">
      <div className="contact-inner">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p>
            Get in touch with us to learn more about our BiKey.Shop and how we
            organize and delived books.Whether you have questions about our new
            offer and sale personalized recommendations we are here to help you
            on your wellness journey. Fill out the form below and we will
            respond as soon as possible.
          </p>
        </div>
        <div className="form-content">
          <div className="form-input">
            <div className="input1">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="input1">
              <label htmlFor="name">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-textarea">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>

            <div className="form-btn">
              <Link href="/">
                <button className="btn">Submit</button>
              </Link>
              <Link href="/"></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
