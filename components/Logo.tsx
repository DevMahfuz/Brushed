import Image from "next/image";

export default function Logo() {
  return (
    <div className="logo">
      <Image src="/img/logo-green.png" alt="logo" width="400" height="70" />
    </div>
  );
}
