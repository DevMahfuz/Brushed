import Header from "@/components/Header";
import Footer from "@/components/footer/footer";
import "./terms.style.css";

const TermsPage = () => {
  return (
    <>
      <Header />
      <section className="container terms-page">
        <h1> Terms and Conditions</h1>
        <p>
          Welcome to Brushed, your premier at-home salon service provider in
          Dubai. Before using our services, please carefully review the
          following terms and conditions. By accessing or using our services,
          you agree to be bound by these terms. If you do not agree with any
          part of these terms, please refrain from using our services.
        </p>

        <h3>1. Service Availability:</h3>
        <p>
          Brushed offers at-home salon services exclusively within Dubai. Our
          services are subject to availability and may vary based on your
          location within the city.
        </p>

        <h3>2. Booking and Appointments:</h3>
        <p>
          All appointments must be booked in advance through our website, mobile
          app, or by contacting our customer service team. We recommend booking
          appointments at least 24 hours in advance to secure your desired time
          slot.
        </p>

        <h3>3. Cancellation and Rescheduling:</h3>
        <p>
          To cancel or reschedule an appointment, please notify us at least 6
          hours before the scheduled time. Failure to do so may result in a
          cancellation fee. Brushed reserves the right to charge a cancellation
          fee for repeated cancellations or no-show appointments.
        </p>

        <h3>4. Pricing and Payments:</h3>
        <p>
          Prices for our services are listed on our website and may vary based
          on the type of service and additional add-ons. Payment is due at the
          time of service completion and can be made via cash or online payment
          methods.
        </p>

        <h3>5. Health and Safety:</h3>
        <p>
          Your health and safety are our top priorities. Our technicians adhere
          to strict hygiene protocols and use high-quality, sanitized equipment
          for every appointment. Please inform us of any allergies,
          sensitivities, or medical conditions that may affect your service.
        </p>

        <h3>6. Customer Conduct:</h3>
        <p>
          We strive to maintain a professional and respectful environment for
          all our clients and technicians. Any inappropriate behavior or
          harassment towards our staff will not be tolerated and may result in
          the termination of services.
        </p>

        <h3>7. Liability:</h3>
        <p>
          Brushed shall not be liable for any damages, injuries, or losses
          incurred during or as a result of our services, except in cases of
          gross negligence or willful misconduct.
        </p>

        <h3>8. Changes to Terms:</h3>
        <p>
          Brushed reserves the right to update or modify these terms and
          conditions at any time without prior notice. It is your responsibility
          to review these terms periodically for any changes.
        </p>

        <h3>9. Governing Law:</h3>
        <p>
          These terms and conditions shall be governed by and construed in
          accordance with the laws of the United Arab Emirates. Any disputes
          arising out of or related to these terms shall be subject to the
          exclusive jurisdiction of the courts in Dubai.
        </p>

        <p>
          Thank you for choosing Brushed for your at-home salon needs. If you
          have any questions or concerns regarding these terms and conditions,
          please feel free to contact us.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default TermsPage;
