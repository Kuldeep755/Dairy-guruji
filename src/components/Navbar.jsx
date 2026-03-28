"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/csr", label: "CSR" },

  {
    label: "Production",
    children: [
      { href: "/manufacturing", label: "Manufacturing" },
      {
        href: "/manufacturing/third-party-manufacturing",
        label: "Third Party Manufacturing",
      },
    ],
  },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Our Team" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpenItem, setMobileOpenItem] = useState(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          const progress = (window.scrollY / totalHeight) * 100;
          setScrollProgress(progress);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNavItemActive = (item) => {
    if (item.children) {
      return item.children.some((child) => pathname.startsWith(child.href));
    }

    return pathname === item.href || pathname.startsWith(item.href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-gradient-to-b from-black/80 to-transparent py-4"
      }`}
    >
      {/* Scroll Progress */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-secondary"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo-dairy-guruji.png"
            alt="Dairy Guru Ji logo"
            width={60}
            height={60}
            className="h-14 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => {
                // Dropdown item
                if (item.children) {
                  return (
                    <NavigationMenuItem
                      key={item.label}
                      className="relative group"
                    >
                      <div
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm cursor-pointer transitio`}
                      >
                        <h className="text-white font-bold uppercase">
                          {item.label}
                        </h>
                        <ChevronDown className="h-4 w-4 transition group-hover:rotate-180 text-white" />
                      </div>

                      {/* Dropdown */}
                      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                        <div className="min-w-60 bg-black/95 border border-white/10 rounded-2xl p-2 backdrop-blur-xl shadow-xl">
                          {item.children.map((child) => {
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block px-4 py-3 rounded-xl text-sm transition text-white `}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </NavigationMenuItem>
                  );
                }

                // Normal item
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`px-4 py-2 rounded-full text-sm transition `}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <Link href="/dealer">
            <Button className="bg-secondary text-black px-5 font-semibold hover:scale-105 transition">
              Become Dealer
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent className="bg-black/95 border-l border-white/10">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-white">
                <Image
                  src="/images/logo-dairy-guruji.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                Dairy Guru Ji
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item);
                const isOpen = mobileOpenItem === item.label;

                if (item.children) {
                  return (
                    <div key={item.label} className="bg-white/5 rounded-lg">
                      <button
                        onClick={() =>
                          setMobileOpenItem(isOpen ? null : item.label)
                        }
                        className="flex justify-between w-full px-4 py-3 text-sm text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`transition ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isOpen &&
                        item.children.map((child) => (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-6 py-2 text-sm text-white/70 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))}
                    </div>
                  );
                }

                return (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-4 py-3 rounded-lg ${
                        isActive
                          ? "bg-secondary/20 text-secondary"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}

              {/* Mobile CTA */}
              <SheetClose asChild>
                <Link href="/dealer">
                  <Button className="mt-4 w-full bg-secondary text-black font-semibold">
                    Become Dealer
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
