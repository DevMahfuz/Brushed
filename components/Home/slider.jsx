"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReviewSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="rating">
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          “They matched my skin tone, placed extensions expertly, and I have
          never looked better! They were so fun to hang out with too!”
        </h3>
        <p
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          - Shailly P.
        </p>
      </div>
      <div>
        <div className="rating">
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          “Incredible service — both the blowout and the makeup application were
          perfection. Highly recommend!”
        </h3>
        <p
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          - Jen B.
        </p>
      </div>
      <div>
        <div className="rating">
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          “I use Glamsquad for every event! They are in and out in an hour,
          friendly, professional, and always make me feel wonderful.”
        </h3>
        <p
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          - Sara F.
        </p>
      </div>
      <div>
        <div className="rating">
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          “LOVED my hair and makeup! The best it's ever looked! Got so many
          compliments!!”
        </h3>
        <p
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          - Maddy M.
        </p>
      </div>
      <div>
        <div className="rating">
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          “My hairstylist was on time, professional, and did an excellent job. I
          had two events back to back (different days) and the style lasted for
          BOTH!”
        </h3>
        <p
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          - Summer L.
        </p>
      </div>
      <div>
        <div className="rating">
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
          <img src="/img/star.svg" slt="" />
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          “Hair and makeup looked gorgeous! Loved how they came right to my
          apartment — made the getting ready process enjoyable.”
        </h3>
        <p
          style={{
            color: "#fff",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          - Kate B.
        </p>
      </div>
    </Slider>
  );
}
