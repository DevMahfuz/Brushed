import Header from "@/components/Header";
import Footer from "@/components/footer/footer";
import FAQList from "@/components/FAQList/FACList";
import "./faq.style.css";

const FAQPage = () => {
  const faqs = [
    {
      question: "1. What services does Brushed offer?",
      answer:
        "At Brushed, we offer a wide range of at-home salon services, including haircuts, hair coloring, styling, manicures, pedicures, facials, waxing, and more. Our experienced technicians bring the salon experience to the comfort of your home in Dubai.",
    },
    {
      question: "How do I book an appointment with Brushed?",
      answer:
        "Booking an appointment with Brushed is easy! You can book directly through our website or mobile app by selecting your desired service, date, and time slot. You can also contact our customer service team to assist you with booking.",
    },
    {
      question: "How far in advance should I book my appointment?",
      answer:
        "We recommend booking your appointment at least 24 hours in advance to secure your preferred time slot. However, we understand that last-minute bookings may be necessary, so we will do our best to accommodate your request whenever possible.",
    },
    {
      question: "What areas in Dubai does Brushed serve?",
      answer:
        "Brushed serves all areas within Dubai. Whether you're located in Downtown Dubai, Dubai Marina, Jumeirah, or any other neighborhood in the city, our technicians will come to your doorstep to provide our services.",
    },
    {
      question: "What safety measures does Brushed have in place?",
      answer:
        "Your health and safety are our top priorities. Our technicians adhere to strict hygiene protocols and use sanitized equipment for every appointment. We also conduct regular health screenings for our staff to ensure a safe environment for our clients.",
    },
    {
      question: "What forms of payment does Brushed accept?",
      answer:
        "We accept cash and online payments for our services. You can pay conveniently at the end of your appointment using your preferred payment method.",
    },
    ,
    // Add more FAQs as needed
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule your appointment by contacting us at least 6 hours before the scheduled time. Please note that repeated cancellations or no-show appointments may be subject to a cancellation fee.",
    },
    ,
    {
      question:
        "Do I need to provide any equipment or products for my appointment?",
      answer:
        "No, you don't need to provide any equipment or products for your appointment. Our technicians will bring everything they need to provide the service you booked.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule your appointment by contacting us at least 6 hours before the scheduled time. Please note that repeated cancellations or no-show appointments may be subject to a cancellation fee.",
    },
    ,
    {
      question: " Can I request a specific technician for my appointment?",
      answer:
        "While we cannot guarantee the availability of a specific technician, you can certainly request one when booking your appointment. We will do our best to accommodate your request based on availability.",
    },
    {
      question: "How can I provide feedback about my experience with Brushed?",
      answer:
        "We welcome your feedback! You can leave a review on our website or social media pages, or you can contact our customer service team directly with your feedback or suggestions.",
    },
  ];

  return (
    <>
      <Header />
      <section className="faq-page">
        <div className="container">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <FAQList faqs={faqs} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQPage;
