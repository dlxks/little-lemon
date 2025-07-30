"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "flowbite-react";

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const pathName = usePathname();

  return (
    <>
      <nav>
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 md:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute z-40">
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-2xl ml-1 p-2 cursor-pointer hover:p-2 hover:rounded-full hover:bg-olive-500 hover:text-white transition-all duration-300"
                >
                  <Icon icon="bi:list" />
                </button>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                  <Image
                    src="/assets/logo.jpg"
                    width={135}
                    height={75}
                    alt="Little Lemon"
                    priority
                  />
                </Link>
              </div>
              <div className="hidden item md:ml-6 md:block">
                <div className="flex space-x-4">
                  {navLinks.map((link) => {
                    const isActive = pathName === link.href;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={classNames(
                          isActive
                            ? "border-b-2 border-lemon-500"
                            : "text-charcoal-500 hover:border-b-2 hover:border-olive-500 hover:text-charcoal-400 transition-all duration-300 ease-in-out",
                          "rounded-sm px-3 py-2 text-md font-medium"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <button
                type="button"
                className="py-2 px-5 me-2 mb-2 text-sm font-bold uppercase cursor-pointer text-white bg-olive-500 focus:outline-none rounded-full shadow shadow-charcoal-500 hover:bg-lemon-500 hover:text-charcoal-500 transition-all duration-300 ease-in-out"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Offcanvas Sidebar (Mobile Only) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 shadow-sm">
          <Link href="/" onClick={toggleMenu}>
            <Image
              src="/assets/logo.jpg"
              width={135}
              height={75}
              alt="Little Lemon"
              priority
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-xl hover:text-sm cursor-pointer hover:p-2 hover:rounded-full hover:bg-olive-500 hover:text-white hover:translate-x-1 transition-all duration-300"
          >
            <Icon icon="bi:x-lg" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className={classNames(
                  "relative block transition-all duration-300",
                  isActive
                    ? "text-olive-700 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-[50%] after:bg-lemon-500"
                    : "text-olive-500 hover:pl-2 hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-lemon-500 hover:after:w-[70%] after:transition-all after:duration-300"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-tl from-black/70 via-black/20 to-transparent md:hidden z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
