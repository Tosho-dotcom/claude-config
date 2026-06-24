import Image from "next/image";
import { pexelsSrc } from "@/lib/pexels";
import type { Event } from "@/lib/events";
import { Calendar, Clock } from "lucide-react";

export default function EventCard({ event }: { event: Event }) {
  return (
    <article
      className="flex flex-col rounded-lg overflow-hidden border transition-all duration-[250ms]"
      style={{
        background: "var(--color-moss)",
        borderColor: "var(--color-fern)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={pexelsSrc(event.imageId, 800, 450)}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-forest)", opacity: 0.3 }}
        />
        {/* Tag */}
        <span
          className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-sm tracking-wide uppercase"
          style={{
            background: "var(--color-espresso)",
            color: "var(--color-parchment)",
            border: "1px solid var(--color-fern)",
            fontFamily: "var(--font-body)",
          }}
        >
          {event.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3
          className="text-2xl font-semibold leading-snug tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-chalk)",
          }}
        >
          {event.title}
        </h3>

        <div
          className="flex flex-col gap-1.5 text-sm"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-parchment)" }}
        >
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 shrink-0" style={{ color: "var(--color-gold)" }} />
            {event.day}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0" style={{ color: "var(--color-gold)" }} />
            {event.time}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed mt-1"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-parchment)",
            fontWeight: 300,
          }}
        >
          {event.description}
        </p>
      </div>
    </article>
  );
}
