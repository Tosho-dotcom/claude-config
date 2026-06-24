"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ReserveButton from "@/app/components/ReserveModal";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-moss/90 backdrop-blur-sm border-b border-fern">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-9 h-9 rounded-full border border-gold-dim flex items-center justify-center"
              style={{ borderColor: "var(--color-gold-dim)" }}
            >
              <span
                className="text-[10px] font-bold tracking-wider"
                style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}
              >
                B&C
              </span>
            </div>
            <span
              className="text-sm font-semibold uppercase tracking-[0.14em] text-chalk hidden sm:block"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Brew and Co.
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium transition-colors duration-150 after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-px after:bg-gold after:transition-transform after:duration-[250ms] after:origin-center"
                    style={{
                      color: active
                        ? "var(--color-gold)"
                        : "var(--color-parchment)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <ReserveButton className="btn-primary">Reserve a table</ReserveButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-chalk p-1"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-espresso border-t border-fern">
            <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-6">
              <ul className="flex flex-col gap-5">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xl font-medium transition-colors duration-150"
                        style={{
                          color: active
                            ? "var(--color-gold)"
                            : "var(--color-chalk)",
                          fontFamily: "var(--font-display)",
                        }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ReserveButton className="btn-primary w-full justify-center">
                Reserve a table
              </ReserveButton>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
