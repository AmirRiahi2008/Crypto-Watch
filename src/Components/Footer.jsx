import React from "react";

export default function Footer() {
  return (
    <section className="about" id="about">
      <div className="header-section-arz">
        <div className="line line2"></div>
        <p className="title title2">اَرزچَندِ؟</p>
      </div>
      <div className="main-arz-chande">
        <div className="arz-chande-image">
          <a
            href="https://github.com/RealMamrez/Arz-Chand-Website"
            target="_blank"
          >
            <img src="./assets/image/image1.png" alt="Abour Us" />
          </a>
        </div>
        <p className="about-us">
          سلام 👋 چطورید؟! ماهم مثل شما سالها با هزار بدبختی و به نحو های مختلف
          قیمت دلار و ارز های مختلفو چک میکردیم. خودم که از تهِ تهِ چنل های
          تلگرام میرفتم قیمت دلارو میدیدم ماشالله ریال ما هم که روز به روز داره
          میره بالاتر و حسابی بازار هارو بهم میریزه{" "}
          <span className="auther">:دی</span>
          <br />
          سرتون رو درد نیارم <span className="auther">اَرز چَندِ </span>یک
          پلتفرمه خیلی ساده و کامله که هروقت خواستی ببینی چقدر وضع اقتصادیمون
          بده سه سوته ببینی چقدر بده :))
          <br />
          جیبتون پر پول
          <br />
          <br />
          <span className="auther">- امیررضا ریاحی</span>
        </p>
      </div>

      <div className="social">
        <div className="github">
          <a href="https://github.com/RealMamrez/Arz-Chand-Website">
            <img id="C" src="./assets/image/github.png" alt="Coffe" />
          </a>
        </div>
      </div>
    </section>
  );
}
