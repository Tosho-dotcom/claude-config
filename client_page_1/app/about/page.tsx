import Image from "next/image";
import { ArrowRight, Heart, Leaf, Users } from "lucide-react";
import { photos, pexelsSrc } from "@/lib/pexels";
import Link from "next/link";

const values = [
  {
    icon: Leaf,
    title: "Direct relationships",
    description:
      "We buy from importers who work directly with farms. Every bag we use is traceable to a specific producer, harvest, and process.",
  },
  {
    icon: Heart,
    title: "Seasonal menu",
    description:
      "The menu changes when better ingredients become available. The granola switches with the fruit. The filter changes with the harvest.",
  },
  {
    icon: Users,
    title: "Community first",
    description:
      "The open mics, the tasting sessions, the latte art workshops — these aren't marketing. They're the reason we opened the shop.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src={pexelsSrc(photos.aboutHero, 1920, 1080)}
          alt="Brew and Co. coffee shop morning light"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-espresso) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pb-14 w-full">
          <p className="eyebrow mb-4">Our story</p>
          <h1
            className="font-semibold leading-tight tracking-[-0.025em] text-chalk"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            }}
          >
            We&rsquo;re your neighbours.
          </h1>
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────────────────────── */}
      <section
        className="py-24 px-5 lg:px-8"
        style={{ background: "var(--color-espresso)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Pull quote */}
          <div className="lg:sticky lg:top-28">
            <blockquote
              className="font-light leading-tight tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--color-chalk)",
                fontStyle: "italic",
              }}
            >
              &ldquo;We didn&rsquo;t want to open a coffee shop. We wanted to
              open a place people come back to.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm uppercase tracking-[0.12em] font-medium"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}>
              — Marcus &amp; Layla, 2019
            </p>
          </div>

          {/* Body copy */}
          <div
            className="flex flex-col gap-6 text-base leading-relaxed font-light"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-parchment)" }}
          >
            <p>
              Marcus Webb grew up three blocks from where Brew and Co. now
              stands. He spent twelve years as a sous chef in Manhattan — long
              hours, great food, and a quiet suspicion that restaurant life
              wasn&rsquo;t the whole picture. In 2017 he moved back to
              Carroll Gardens, looking for something slower.
            </p>
            <p>
              Layla Chen had spent two years in Melbourne learning to roast
              before taking a job with a specialty importer in Williamsburg.
              She&rsquo;d been in Brooklyn long enough to have opinions about
              every coffee shop in the borough but not long enough to have a
              regular one.
            </p>
            <p>
              They met at the Borough Hall farmers market in the spring of
              2018. Layla was selling sample bags for the importer. Marcus was
              buying vegetables and ended up asking too many questions about
              processing methods. They swapped numbers and spent the next six
              months talking about what a neighbourhood coffee shop should
              actually be.
            </p>
            <p>
              Brew and Co. opened in March 2019 with a used La Marzocca
              Linea that Marcus had found in the back of a restaurant that was
              closing in Long Island City, a small chalkboard menu, and six
              tables. The machine has been rebuilt twice. The menu has grown.
              The six tables are still there.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-5 lg:px-8"
        style={{ background: "var(--color-forest)" }}
      >
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col gap-4 mb-14 max-w-2xl">
            <p className="eyebrow">What we care about</p>
            <h2 className="section-heading">The choices behind every cup</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="flex flex-col gap-5 p-8 rounded-lg border"
                  style={{
                    background: "var(--color-moss)",
                    borderColor: "var(--color-fern)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--color-forest)",
                      borderColor: "var(--color-gold-dim)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--color-gold)" }} />
                  </div>
                  <h3
                    className="text-2xl font-semibold leading-snug tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-chalk)",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed font-light"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-parchment)",
                    }}
                  >
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Founders ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-5 lg:px-8"
        style={{ background: "var(--color-espresso)" }}
      >
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col gap-4 mb-14 max-w-2xl">
            <p className="eyebrow">The team</p>
            <h2 className="section-heading">The people behind the bar</h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
            {[
              {
                name: "Marcus Webb",
                role: "Co-founder & Head of Food",
                photoId: photos.founderMarcus,
                bio: "Runs the kitchen and sourcing. Former sous chef. Grew up on this block.",
              },
              {
                name: "Layla Chen",
                role: "Co-founder & Head Barista",
                photoId: photos.founderLayla,
                bio: "Trained in Melbourne. Knows more about Ethiopian naturals than is strictly necessary.",
              },
            ].map((person) => (
              <div key={person.name} className="flex flex-col gap-4">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src={pexelsSrc(person.photoId, 600, 750)}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "var(--color-forest)", opacity: 0.15 }}
                  />
                </div>
                <div>
                  <h3
                    className="text-2xl font-semibold tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-chalk)",
                    }}
                  >
                    {person.name}
                  </h3>
                  <p
                    className="text-sm uppercase tracking-[0.1em] font-medium mt-1 mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-gold)",
                    }}
                  >
                    {person.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed font-light"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-parchment)",
                    }}
                  >
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-5 lg:px-8"
        style={{ background: "var(--color-moss)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow mb-3">Come say hello</p>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-chalk)",
              }}
            >
              The coffee&rsquo;s always on.
            </h2>
          </div>
          <Link href="/menu" className="btn-primary shrink-0">
            See what&rsquo;s on the menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
