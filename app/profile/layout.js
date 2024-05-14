import AuthButton from "@/components/AuthButton";
import "./profile.style.css";
import Header from "@/components/Header";

export default function ProfileLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Header />
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

        {children}
      </section>
    </>
  );
}
