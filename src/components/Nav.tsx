import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-sm p-2 text-gray-400 hover:bg-olive-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset transition-all duration-300 ease-in-out cursor-pointer">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[headlessui-state=open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[headlessui-state=open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <a href="/">
                <Image
                  src="/assets/logo.jpg"
                  width={135}
                  height={75}
                  alt="Little Lemon Logo"
                  priority
                  // className="h-auto w-35"
                />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-olive-500 text-white"
                        : "text-charcoal-500 hover:bg-olive-700 hover:text-white transition-all duration-300 ease-in-out",
                      "rounded-sm px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="py-2 px-5 me-2 mb-2 text-sm font-medium cursor-pointer text-lemon-50 bg-olive-500 focus:outline-none rounded-sm hover:bg-olive-700 hover:text-lemon-100 transition-all duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-mist-200 text shadow-xs shadow-charcoal-100 transition-all duration-300 ease-in-out overflow-hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navLinks.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-olive-700 text-white"
                  : "text-charcoal-500 hover:bg-olive-500 hover:text-white transition-all duration-150 ease-in-out",
                "block rounded-sm px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
