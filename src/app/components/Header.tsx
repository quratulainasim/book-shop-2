import React from "react";
import "../../style/header.css";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="header-inner">
      <div className="header-content">
        <div className="header-logo">
          <Image src="/infologo.png" alt="logo" width={37} height={37} />
          <span className="header-span">
            <h1> Bk.Shop</h1>
          </span>
        </div>
        <div className="header-input">
          <input className="input" placeholder="search for item" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <nav className="header-link">
        <Link href="/" className="link">
          Home
        </Link>

        <Link href="/about" className="link">
          About
        </Link>

        <Link href="/category" className="link">
          Category
        </Link>

        <Link href="/contact" className="link">
          Contact
        </Link>
        <button className="cart-btn">Add Cart</button>
      </nav>
    </div>
  );
}

export default Header;
