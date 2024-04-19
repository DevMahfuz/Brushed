import Header from "@/components/Header";
import Footer from "@/components/footer/footer";

import "./contact.style.css";

export default function ContactLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}
