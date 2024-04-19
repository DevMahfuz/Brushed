import AuthButton from "@/components/AuthButton";
import "./profile.style.css";

export default function ProfileLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <AuthButton />

      {children}
    </section>
  );
}
