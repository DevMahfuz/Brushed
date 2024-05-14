import Image from "next/image";
import Link from "next/link";
import ReviewSlider from "./slider";
const HomePage = () => {
  return (
    <>
      <section className="home-hero">
        <video src="/video/Glamsquad.mp4" autoPlay muted loop></video>

        <div className="content">
          <Image
            src="/img/logo-white.png"
            alt="Brushed"
            width="800"
            height="300"
          />
          <h1>BEAUTY ON CALL</h1>
          <Link href="/booking">Book Now</Link>
        </div>
      </section>
      <section className="home-mission">
        <div className="container">
          <p>
            We're on a mission to eliminate bad hair days, chipped nails, and
            smokey-eye fails by bringing certified and talented hair stylists,
            makeup artists, and nail pros right to your door.
          </p>
        </div>
      </section>
      <section className="home-beauty">
        <div className="container">
          <h2 className="heading">Five-star beauty services</h2>
          <div className="beauty-card-container">
            <div className="beauty-card">
              <h3>Blowouts, buns, and braids</h3>
              <p>Starting at $60</p>
              <p>For hair that bounces from thing to thing, just like you.</p>
              <Image
                src="/img/GS_home_service_1.webp"
                width="380"
                height="500"
                alt=""
              />
              <Link href="/booking"> Book Now</Link>
            </div>

            <div className="beauty-card">
              <h3>Nail maintenance</h3>
              <p>Starting at $40</p>
              <p>Get fresh nails right in your home, hotel, or office.</p>
              <Image
                src="/img/GS_home_service_2.webp"
                width="380"
                height="500"
                alt=""
              />
              <Link href="/booking"> Book Now</Link>
            </div>

            <div className="beauty-card">
              <h3>Makeup for every moment</h3>
              <p>Starting at $90</p>
              <p>Face events with confidence—and flawless makeup.</p>
              <Image
                src="/img/GS_home_service_3.webp"
                width="380"
                height="500"
                alt=""
              />
              <Link href="/booking"> Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-how-to-book">
        <h2>How to book glam?</h2>
        <div className="items">
          <div className="item">
            <span>01</span>Input your address
          </div>
          <div className="item">
            <span>02</span>Choose your services
          </div>
          <div className="item">
            <span>03</span>Select a date and time
          </div>
          <div className="item">
            <span>04</span>Create your account
          </div>
          <div className="item">
            <span>05</span>Get glam
          </div>
        </div>
        <Link href="/booking">Get Start</Link>
      </section>

      <section className="home-get-to-know">
        <div className="left">
          <img src="/img/GS_home_our_bp.webp" alt="" layout="fill" />
        </div>

        <div className="right">
          <h3>Get to know</h3>
          <h4>Our beauty pros</h4>
          <p>7 years experience on average</p>

          <p>Fully licensed hair and nail artists</p>
          <p>Hundreds of hours of experience required</p>

          <p>Background checked</p>

          <div className="link">
            <Link href="/booking">Book Now</Link>
          </div>
        </div>
      </section>

      <section className="home-review-slider">
        <div className="container">
          <ReviewSlider />
        </div>
      </section>
    </>
  );
};

export default HomePage;
