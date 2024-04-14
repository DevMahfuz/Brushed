import Logo from "./Logo";
import AuthButton from "./AuthButton";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="header ">
      <div className="container">
        <NavMenu />
        <a href="/">
          <Logo />
        </a>
        <AuthButton />
      </div>
    </header>
  );
}
