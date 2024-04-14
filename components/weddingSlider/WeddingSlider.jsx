"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WeddingSlider() {
  var settings = {
    accessibility: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image
          src="/img/wedding-slider/wedding-grid-1.webp"
          width={500}
          height={550}
          alt="img 1"
        />
      </div>
      <div>
        <Image
          src="/img/wedding-slider/wedding-grid-2.webp"
          width={500}
          height={550}
          alt="img 1"
        />
      </div>
      <div>
        <Image
          src="/img/wedding-slider/wedding-grid-3.webp"
          width={500}
          height={550}
          alt="img 1"
        />
      </div>
      <div>
        <Image
          src="/img/wedding-slider/wedding-grid-4.webp"
          width={500}
          height={550}
          alt="img 1"
        />
      </div>
      <div>
        <Image
          src="/img/wedding-slider/wedding-grid-5.webp"
          width={500}
          height={550}
          alt="img 1"
        />
      </div>
      <div>
        <Image
          src="/img/wedding-slider/wedding-grid-6.webp"
          width={500}
          height={550}
          alt="img 1"
        />
      </div>
    </Slider>
  );
}
