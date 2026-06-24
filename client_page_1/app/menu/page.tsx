import Image from "next/image";
import { getMenuByCategory } from "@/lib/menu";
import { photos, pexelsSrc } from "@/lib/pexels";
import MenuItemCard from "@/app/components/MenuItemCard";

const menuItemPhotoIds: Record<string, number> = {
  Espresso: photos.espresso,
  Americano: photos.americano,
  "Flat White": photos.flatWhite,
  Cortado: photos.cortado,
  Cappuccino: photos.cappuccino,
  Latte: photos.latte,
  "Single Origin Pour Over": photos.pourOver,
  "Filter Coffee": photos.filterCoffee,
  "Matcha Latte": photos.matchaLatte,
  "Hot Chocolate": photos.hotChocolate,
  "Cold Brew": photos.coldBrew,
  "Nitro Cold Brew": photos.nitroColdBrew,
  "Iced Latte": photos.icedLatte,
  "Iced Americano": photos.icedAmericano,
  "Iced Flat White": photos.icedFlatWhite,
  "Cold Brew Tonic": photos.coldBrewTonic,
  "Iced Matcha Latte": photos.icedMatchaLatte,
  "Still Water": photos.stillWater,
  "Sparkling Water": photos.sparklingWater,
  "Butter Croissant": photos.butterCroissant,
  "Almond Croissant": photos.almondCroissant,
  "Banana Bread": photos.bananaBread,
  "Avocado Toast": photos.avocadoToast,
  "Granola Bowl": photos.granolaBowl,
  "Almond & Cardamom Tart": photos.almondTart,
  "Seasonal Fruit Scone": photos.scone,
  "Dark Chocolate Cookie": photos.darkChocolateCookie,
};

const categoryMeta: Record<
  string,
  { id: string; heading: string; description: string }
> = {
  "Hot Drinks": {
    id: "hot-drinks",
    heading: "Hot drinks",
    description:
      "Espresso-based drinks made to order. Single origin pour overs and filter coffee on rotation.",
  },
  "Cold Drinks": {
    id: "cold-drinks",
    heading: "Cold drinks",
    description:
      "Cold brew steeped for 18 hours. Iced variants of our espresso menu. A nitro tap behind the bar.",
  },
  Food: {
    id: "food",
    heading: "Food",
    description:
      "Pastries made fresh each morning. A small selection of light plates through the day.",
  },
};

export default function MenuPage() {
  const byCategory = getMenuByCategory();
  const categories = Object.keys(categoryMeta);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <Image
          src={pexelsSrc(photos.menuHero, 1920, 900)}
          alt="Coffee and pastries at Brew and Co."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-espresso) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pb-10 w-full">
          <p className="eyebrow mb-3">Brew and Co.</p>
          <h1
            className="font-semibold leading-tight tracking-[-0.025em] text-chalk"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            The Menu
          </h1>
        </div>
      </section>

      {/* ── Sticky category nav ──────────────────────────────────────────── */}
      <div
        className="sticky top-16 z-[50] border-b"
        style={{
          background: "var(--color-espresso)",
          borderColor: "var(--color-fern)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <nav className="flex items-center gap-1 overflow-x-auto" aria-label="Menu categories">
            {categories.map((cat, i) => {
              const meta = categoryMeta[cat];
              return (
                <a
                  key={cat}
                  href={`#${meta.id}`}
                  className="shrink-0 px-4 py-4 text-sm font-medium transition-colors duration-150 scroll-smooth"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-parchment)",
                    borderBottom: "2px solid transparent",
                  }}
                >
                  {meta.heading}
                  {i < categories.length - 1 && (
                    <span
                      className="ml-4 text-xs"
                      style={{ color: "var(--color-fern)" }}
                    >
                      ·
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ── Menu sections ─────────────────────────────────────────────────── */}
      {categories.map((cat, i) => {
        const meta = categoryMeta[cat];
        const items = byCategory[cat] ?? [];
        const isEven = i % 2 === 0;

        return (
          <section
            key={cat}
            id={meta.id}
            className="py-20 px-5 lg:px-8 scroll-mt-[8rem]"
            style={{
              background: isEven
                ? "var(--color-forest)"
                : "var(--color-espresso)",
            }}
          >
            <div className="max-w-7xl mx-auto">
              <header className="flex flex-col gap-3 mb-12 max-w-2xl">
                <p className="eyebrow">{cat}</p>
                <h2 className="section-heading">{meta.heading}</h2>
                <p
                  className="text-base font-light"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-parchment)",
                  }}
                >
                  {meta.description}
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <MenuItemCard
                    key={item.name}
                    item={item}
                    photoId={menuItemPhotoIds[item.name] ?? photos.espresso}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Bottom note ──────────────────────────────────────────────────── */}
      <div
        className="py-10 px-5 lg:px-8 text-center"
        style={{ background: "var(--color-moss)" }}
      >
        <p
          className="text-sm font-light"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-latte)",
          }}
        >
          Prices include VAT. All coffee available to take away.
          Oat milk available on all espresso drinks at no extra charge.
        </p>
      </div>
    </>
  );
}
