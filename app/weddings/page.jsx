import Header from "@/components/Header";
import Footer from "@/components/footer/footer";
import "./wedding.style.css";
import WeddingsProducts from "@/components/Products/WeddingsProducts";
import WeddingSlider from "../../components/weddingSlider/WeddingSlider";

const WeddingsPage = () => {
  return (
    <>
      <Header />
      <section className="wedding-hero">
        <div className="left">
          <h1>
            WE HEAR <br /> WEDDING BELLS
          </h1>
          <p>
            Your big day is a big deal. With Glamsquad, you can feel confident
            knowing our team of bridal-certified beauty pros will bring your
            dream look to life.
          </p>
        </div>
        <div className="right">
          <img src="/img/GS_wedding_hero.webp" fill={"true"} />
        </div>
      </section>
      <section className="wedding-why">
        <div className="container">
          <h2>Why Glamsquad?</h2>
          <div className="reasons">
            <div className="card">
              <h3>Experts in bridal</h3>
              <p>
                Our premier team of bridal-certified beauty pros have completed
                12,000+ bridal beauty services.
              </p>
            </div>
            <div className="card">
              <h3>Here for it all</h3>
              <p>
                From your engagement photos to the big day, we're here for you
                every step of the way.
              </p>
            </div>
            <div className="card">
              <h3>We make it easy</h3>
              <p>
                Book your trial appointment and our Wedding Concierge will be in
                touch to plan for your big day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ marginTop: "100px" }}>
        <WeddingsProducts />
      </section>
      <section className="wedding-slider-wraper">
        <h2>As seen in</h2>
        <WeddingSlider />
      </section>

      <div className="container send-request">
        <h2>
          Ready to book your <br /> wedding look?
        </h2>
        <a href="#"> Send a Request </a>
      </div>

      <Footer />
    </>
  );
};

export default WeddingsPage;
