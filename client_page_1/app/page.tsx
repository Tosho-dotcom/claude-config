import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMenuItems } from "@/lib/menu";
import { events } from "@/lib/events";
import { photos, pexelsSrc } from "@/lib/pexels";
import ReserveButton from "@/app/components/ReserveModal";
import EventCard from "@/app/components/EventCard";
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

export default function HomePage() {
  const allItems = getMenuItems();
  const favorites = allItems.filter((item) => item.houseFavorite);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src={pexelsSrc(photos.heroBackground, 1920, 1080)}
          alt="Brew and Co. coffee shop interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-forest)", opacity: 0.72 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full py-32">
          <div className="max-w-2xl hero-text">
            <p className="eyebrow mb-5">Brooklyn, NY</p>
            <h1
              className="font-semibold leading-[1.05] tracking-[-0.025em] text-chalk mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 8vw, 7.5rem)",
              }}
            >
              Good coffee,
              <br />
              good people.
            </h1>
            <p className="body-lead mb-8 max-w-md">
              Brew and Co. is your neighbourhood coffee shop on Court Street.
              Specialty coffee, fresh pastries, and a place to stay a while.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/menu" className="btn-primary">
                Explore the menu
                <ArrowRight className="w-4 h-4" />
              </Link>
              <ReserveButton className="btn-ghost">
                Reserve a table
              </ReserveButton>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div
            className="w-px h-10 animate-pulse"
            style={{ background: "var(--color-chalk)" }}
          />
        </div>
      </section>

      {/* ── House Favourites ─────────────────────────────────────────────── */}
      <section
        className="py-24 px-5 lg:px-8"
        style={{ background: "var(--color-forest)" }}
      >
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col gap-4 mb-14 max-w-2xl">
            <p className="eyebrow">House Favourites</p>
            <h2 className="section-heading">
              The ones regulars order without looking
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <MenuItemCard
                key={item.name}
                item={item}
                photoId={menuItemPhotoIds[item.name] ?? photos.espresso}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/menu"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-150"
              style={{
                color: "var(--color-parchment)",
                fontFamily: "var(--font-body)",
              }}
            >
              See the full menu
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Events ───────────────────────────────────────────────────────── */}
      <section
        id="events"
        className="py-24 px-5 lg:px-8"
        style={{ background: "var(--color-espresso)" }}
      >
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col gap-4 mb-14 max-w-2xl">
            <p className="eyebrow">Events</p>
            <h2 className="section-heading">What&rsquo;s on this week</h2>
            <p className="body-lead text-base">
              The shop is at its best when it&rsquo;s full of people doing
              something together.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Reserve CTA strip ────────────────────────────────────────────── */}
      <section
        id="reserve"
        className="py-20 px-5 lg:px-8"
        style={{ background: "var(--color-moss)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow mb-3">Reservations</p>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-chalk)",
              }}
            >
              Book your spot
            </h2>
            <p
              className="mt-3 text-base font-light"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-parchment)",
              }}
            >
              We hold tables for up to 10 people.
              <br className="hidden md:block" /> Walk-ins always welcome too.
            </p>
          </div>
          <ReserveButton className="btn-primary shrink-0" >
            Reserve a table
            <ArrowRight className="w-4 h-4" />
          </ReserveButton>
        </div>
      </section>
    </>
  );
}
