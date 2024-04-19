import Header from "@/components/Header";
import Footer from "@/components/footer/footer";
import MembershipPlan from "@/components/Products/MembershipPlan";
import "./membership.style.css";

const MembershipPage = () => {
  return (
    <>
      <Header />
      <section className="membership-hero">
        <h1>Brushed Membership</h1>
        <h2>
          Join our membership program today and discover the perfect package to
          suit your beauty needs!
        </h2>
      </section>
      <section className="container">
        <MembershipPlan />
      </section>

      <Footer />
    </>
  );
};

export default MembershipPage;
