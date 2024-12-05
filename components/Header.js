import Image from "next/image";

const Header = () => {
  return (
    <nav className="border-b">
      <div className="py-4 px-8">
        <Image src="/logo.svg" alt="logo" width={120} height={38} priority />
      </div>
    </nav>
  );
};

export default Header;
