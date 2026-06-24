import Link from "next/link";

const footerNav = [
  {
    heading: "Menu",
    links: [
      { href: "/menu#hot-drinks", label: "Hot Drinks" },
      { href: "/menu#cold-drinks", label: "Cold Drinks" },
      { href: "/menu#food", label: "Food" },
    ],
  },
  {
    heading: "Visit",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/#events", label: "Events" },
      { href: "/#reserve", label: "Reserve a Table" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { href: "#", label: "Instagram" },
      { href: "#", label: "Newsletter" },
      { href: "#", label: "Press enquiries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--color-espresso)",
        borderColor: "var(--color-fern)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        {/* Top: brand + nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0"
                style={{ borderColor: "var(--color-gold-dim)" }}
              >
                <span
                  className="text-[10px] font-bold tracking-wider"
                  style={{ color: "var(--color-gold)" }}
                >
                  B&C
                </span>
              </div>
              <span
                className="text-sm font-semibold uppercase tracking-[0.14em]"
                style={{ color: "var(--color-chalk)" }}
              >
                Brew and Co.
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-[220px]"
              style={{ color: "var(--color-latte)", fontWeight: 300 }}
            >
              Brooklyn&rsquo;s neighbourhood coffee shop. Court Street,
              Carroll Gardens.
            </p>
            <p className="text-xs" style={{ color: "var(--color-fern)" }}>
              Mon–Fri 7am–7pm
              <br />
              Sat–Sun 8am–6pm
            </p>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p
                className="text-xs font-semibold uppercase tracking-[0.14em]"
                style={{ color: "var(--color-gold)" }}
              >
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150 hover:text-chalk"
                      style={{ color: "var(--color-parchment)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--color-fern)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-latte)" }}>
            &copy; 2026 Brew and Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs transition-colors duration-150 hover:text-parchment"
                style={{ color: "var(--color-latte)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
