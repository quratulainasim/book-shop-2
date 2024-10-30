import React from "react";
import Image from "next/image";
import "../../style/category.css";
import Link from "next/link";

function Category() {
  return (
    <main className="cat-container">
      <div className="cat-inner">
        <h1 className="f-heading">Kids Category</h1>
        <div className="card-container">
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/kids.png"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Do you like Tea</h3>
              <p className="card-para">($18.00)</p>
            </div>
          </div>

          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/kids1.png"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading"> Stolen Dreams</h3>
              <p className="card-para">($14.10)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/kids2.webp"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading"> Super Dad</h3>
              <p className="card-para">($10.00)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/kids3.webp"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading"> Cast Away</h3>
              <p className="card-para">($14.30)</p>
            </div>
          </div>
        </div>

        <h1 className="f-heading">Academic Category</h1>
        <div className="card-container">
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/ac.jpg"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Class 5</h3>
              <p className="card-para">($13.50)</p>
            </div>
          </div>

          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/ac1.jpg"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading"> Class 12</h3>
              <p className="card-para">($19.20)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/ac2.jpeg"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading"> Management</h3>
              <p className="card-para">($20.10)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/ac3.jpeg"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading"> English Language</h3>
              <p className="card-para">($20.30)</p>
            </div>
          </div>
        </div>

        <h1 className="f-heading">Novels Category</h1>
        <div className="card-container">
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/novel.jpg"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Harry Potter</h3>
              <p className="card-para">($20.30)</p>
            </div>
          </div>

          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/novel1.webp"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">The Name of the Wind</h3>
              <p className="card-para">($22.50)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/novel2.jpg"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">The Lord of the Rings</h3>
              <p className="card-para">($21.40)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/novel3.webp"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">The Alchemist</h3>
              <p className="card-para">($24.20)</p>
            </div>
          </div>
        </div>

        <h1 className="f-heading">Biographic Category</h1>
        <div className="card-container">
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/bio.webp"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Jan Hadfield</h3>
              <p className="card-para">($21.20)</p>
            </div>
          </div>

          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/bio1.webp"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Or Rosenboim</h3>
              <p className="card-para">($25.30)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/bio2.png"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Abraham Lincoln</h3>
              <p className="card-para">($22.80)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/bio3.png"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Abdul Kalam</h3>
              <p className="card-para">($21.30)</p>
            </div>
          </div>
        </div>

        <h1 className="f-heading">Islamic Category</h1>
        <div className="card-container">
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/islamic.jpg"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Lost Islamic History</h3>
              <p className="card-para">($23.80)</p>
            </div>
          </div>

          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/islamic1.png"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Qasas-ul-Ambia</h3>
              <p className="card-para">($26.90)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/islamic2.png"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Prophet Muhammad</h3>
              <p className="card-para">($28.90)</p>
            </div>
          </div>
          <div className="card-inner">
            <a className="image-link">
              <Image
                src="/islamic3.jpg"
                alt="iamge"
                className="image"
                width={400}
                height={300}
              />
            </a>
            <div className="card-content">
              <h3 className="s-heading">Hadees</h3>
              <p className="card-para">($26.80)</p>
            </div>
          </div>
        </div>
        <div className="cat-btn">
          <Link href="/">
            <button className="btn">Add Cart</button>
          </Link>
          <Link href="/"></Link>
        </div>
      </div>
    </main>
  );
}

export default Category;
