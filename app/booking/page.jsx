import Header from "@/components/Header";

import Footer from "@/components/footer/footer";
import MultiStepForm from "../../components/booking/BookingForm";

export default async function Index() {
  return (
    <>
      <Header />
      <MultiStepForm />
      <Footer />
    </>
  );
}
