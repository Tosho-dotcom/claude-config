import Image from "next/image";
import { pexelsSrc } from "@/lib/pexels";
import type { MenuItem } from "@/lib/menu";

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
  }).format(price);
}

export default function MenuItemCard({
  item,
  photoId,
}: {
  item: MenuItem;
  photoId: number;
}) {
  return (
    <article
      className="group flex flex-col rounded-lg overflow-hidden border transition-all duration-[250ms] hover:-translate-y-1"
      style={{
        background: "var(--color-moss)",
        borderColor: "var(--color-fern)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={pexelsSrc(photoId, 600, 600)}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-forest)", opacity: 0.15 }}
        />
        {item.houseFavorite && (
          <span
            className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-sm tracking-wide uppercase"
            style={{
              background: "var(--color-gold)",
              color: "var(--color-espresso)",
              fontFamily: "var(--font-body)",
            }}
          >
            House fave
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3
          className="text-xl font-semibold leading-snug tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-chalk)",
          }}
        >
          {item.name}
        </h3>
        <p
          className="text-sm leading-normal flex-1"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-parchment)",
            fontWeight: 300,
          }}
        >
          {item.description}
        </p>
        <p
          className="text-lg font-medium mt-2 tabular-nums"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-chalk)",
          }}
        >
          {formatPrice(item.price, item.currency)}
        </p>
      </div>
    </article>
  );
}
