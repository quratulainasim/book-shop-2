import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../../style/footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <Link href="/" className="logo-link">
          <Image
            src="/infologo.png"
            alt="logo"
            className="logo"
            width={37}
            height={37}
          />
          <span className="logo-text">Bk.Shop</span>
        </Link>
        <p className="para-text">© 2022 Bk.Shop</p>
        <ul className="links">
          <li>
            <Link className="icon" href="https://www.facebook.com/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link className="icon" href="https://www.x.com/">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link className="icon" href="https://www.linkedin.com/">
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link className="icon" href="https://www.instagram.com/">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
