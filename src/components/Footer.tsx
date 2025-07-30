import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-charcoal-500 bg-mist-500 ">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="grid grid-cols-2">
            <div>
              <Image
                src="/assets/Asset 20@4x.png"
                alt="Little Lemon Logo"
                width={200}
                height={80}
                priority
                className="w-auto h-35"
              />
            </div>
            <div>
              <ul>
                {navLinks.map((item) => (
                  <li
                    key={item.name}
                    className="text-md text-olive-500 hover:text-olive-700 mb-2"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h5 className="font-black text-xl mb-4">Contact Us!</h5>
            <ul className="text-olive-400 text-md">
              <li className="flex items-center space-x-2">
                <Icon icon="bi:telephone-fill" />
                &nbsp;<span>(+1) 123-456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon icon="bi:envelope-at-fill" />
                &nbsp;<span>littlelemon@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon icon="bi:link-45deg" />
                &nbsp;<span>littlelemon.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xl mb-4">
              Find Us On Social Media!
            </h5>
            <ul className="flex text-xl md:text-2xl text-olive-400 gap-4 transition-all duration-150 ease-in-and-out">
              <li>
                <Icon icon="bi:facebook" />
              </li>
              <li>
                <Icon icon="bi:instagram" />
              </li>
              <li>
                <Icon icon="bi:twitter-x" />
              </li>
              <li>
                <Icon icon="bi:youtube" />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full text-md text-center text-charcoal-500 mt-4">
          <div className="border border-charcoal-100"></div>
          <p className="mt-4 text-olive-700 font-bold">
            Little Lemon &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
