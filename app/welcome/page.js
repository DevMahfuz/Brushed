import Header from "@/components/Header";
import Link from "next/link";
import "./welcome.style.css";
const Welcome = () => {
  return (
    <>
      <Header />
      <siction className="welcome-page">
        <h1>Welcome To BRUSHED</h1>
        <Link class="btn" href="/booking">
          Coninue
        </Link>
      </siction>
    </>
  );
};

export default Welcome;
