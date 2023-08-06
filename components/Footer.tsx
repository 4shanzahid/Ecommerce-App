import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5">
    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-3 py-5">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={18}
          className="object-contain"
        />
      </div>

      <div className="footer__copyrights-link pb-4">
        <Link href="/" className="text-gray-500">
          <FaFacebook size={30} />
        </Link>
        <Link href="/" className="text-gray-500">
          <FaInstagram size={30} />
        </Link>
        <Link href="/" className="text-gray-500">
          <FaTwitter size={30} />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
