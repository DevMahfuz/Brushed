import Header from "@/components/Header";
import Footer from "@/components/footer/footer";
import "./service.style.css";
import Link from "next/link";
import ProductSectionComponent from "./ProductSection";

const Services = () => {
  return (
    <>
      <Header />
      <section className="service-hero">
        <h1>HAIR, MAKEUP + MORE</h1>
        <p>
          You're made for more than hours in front of the mirror. <br />
          Take your time back with glam on call.
        </p>
      </section>
      <ProductSectionComponent />

      <Footer />
    </>
  );
};

export default Services;
