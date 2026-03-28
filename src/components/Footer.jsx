// Footer is now a Server Component
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-white/10 pt-24 pb-8 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14 sm:mb-16">
          <div className="col-span-1 lg:col-span-2 md:pr-12">
            <Link href="/" className="inline-block mb-8 group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:border-secondary/30 transition-colors">
                  <Image
                    src="/images/logo-dairy-guruji.png"
                    alt="Dairy Guru Ji logo"
                    width={60}
                    height={60}
                    className="h-14 w-auto object-contain"
                    priority
                  />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-secondary transition-colors">
                  DAIRY GURU Ji
                </div>
              </div>
            </Link>
            <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl mb-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-secondary text-lg sm:text-xl font-bold mb-1">
                “व्यापार नहीं, रिश्ते बनाते हैं”
              </p>
              <p className="text-sm text-white/70">
                Not Just Business, Building Relationships.
              </p>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="font-semibold text-white/90 tracking-wide text-sm">
                ISO 9001:2015 Certified Company
              </p>
            </div>{" "}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="font-semibold text-white/90 tracking-wide text-sm">
                Fssai Certified & Lab Tested
              </p>
            </div>
            <div className="flex gap-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/1SHhDkqQiZ/?mibextid=wwXIfr",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/dairy_guruji?igsh=cWZkdng0NHYxM2hl&utm_source=qr",
                  label: "Instagram",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:border-secondary hover:text-bg-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(var(--color-secondary),0.5)]"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm relative inline-block">
              Quick Links
              <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-white/70 text-[15px] font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Pain Points", href: "/pain-points" },
                { name: "Breeds", href: "/breeds" },
                { name: "Why Choose Us", href: "/why-choose-us" },
                {
                  name: "Manufacturing",
                  href: "/manufacturing/third-party-manufacturing",
                },
                { name: "CSR", href: "/csr" },
                { name: "Our Team", href: "/team" },
                { name: "Become a Dealer", href: "/dealer" },
                { name: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm relative inline-block">
              Contact Info
              <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-5 text-white/70 text-[15px]">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div className="pt-1 min-w-0">
                  <p className="font-semibold text-white mb-0.5 text-sm uppercase tracking-wider">
                    Head Office
                  </p>
                  <p className="leading-relaxed">South, WA (Australia)</p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div className="pt-1 min-w-0">
                  <p className="font-semibold text-white mb-0.5 text-sm uppercase tracking-wider">
                    Branch Office
                  </p>
                  <p className="leading-relaxed">Sonipat, Haryana</p>
                </div>
              </li>

              <li className="flex items-center gap-4 group mt-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <a
                  href="tel:+918168048260"
                  className="hover:text-secondary font-medium transition-colors"
                >
                  +91 81680-48260
                </a>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <a
                  href="mailto:dairygurujiindia@gmail.com"
                  className="hover:text-secondary font-medium transition-colors break-all"
                >
                  dairygurujiindia@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                  <Globe className="w-5 h-5 text-secondary" />
                </div>
                <a
                  href="https://www.dairyguruji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary font-medium transition-colors text-secondary"
                >
                  dairyguruji.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-medium">
          <p className="text-center md:text-left">
            &copy; 2024 Dairy Guru Ji. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link
              href="/privacy"
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
