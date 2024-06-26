"use client";
import {
  DisclosureButton,
  DisclosurePanel,
  Disclosure,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ali from "./../../../public/imges/icon.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "@/app/themeswitch";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact us", href: "/contact" },
];

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const pathName = usePathname();

  
  

  return (
    <header>
      <Disclosure
        as="nav"
        className="  backdrop-blur-2xl text-black fixed right-0 left-0 z-[9999999999]  border-b border-gray-200 dark:border-blue-400 shadow-sm shadow-slate-300  "
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <div
                      id="ali"
                      className="overflow-hidden border border-blue-400 shadow-md shadow-blue-400"
                    >
                      <Image className="h-10 w-auto " src={ali} alt="ali" />
                    </div>
                    <p className="text-gray-900 ml-5 mb-0 font-bold text-xl dark:text-white">
                      ALi Hassan
                    </p>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            pathName == item.href
                              ? "bg-blue-400 text-white dark:bg-blue-900"
                              : "text-gray-900 hover:bg-blue-200 hover:text-gray-600 dark:hover:text-white dark:hover:bg-blue-500 dark:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium no-underline"
                          )}
                          aria-current={
                            pathName == item.href ? "page" : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 sm:-right-2 md:right-1/2 md:translate-x-1/2 ">
                  <ThemeSwitch />
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathName == item.href
                        ? "bg-blue-400 text-white"
                        : "text-gray-900 hover:bg-blue-200 hover:text-gray-600",
                      "block rounded-md px-3 py-2 text-base  no-underline dark:text-blue-700 font-bold "
                    )}
                    aria-current={pathName == item.href ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
