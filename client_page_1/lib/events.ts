export type Event = {
  id: string;
  title: string;
  day: string;
  time: string;
  description: string;
  imageId: number;
  tag: string;
};

export const events: Event[] = [
  {
    id: "open-mic",
    title: "Open Mic Night",
    day: "Every Friday",
    time: "7:00 – 10:00 pm",
    description:
      "Our stage is yours. Bring a song, a poem, a story, or just show up and listen. The coffee is on until close.",
    imageId: 16727451,
    tag: "Weekly",
  },
  {
    id: "coffee-tasting",
    title: "Coffee Tasting Session",
    day: "Every Saturday",
    time: "10:00 am – 12:00 pm",
    description:
      "Sit down with our head barista and taste three single-origin coffees side by side. Free to attend, no experience needed.",
    imageId: 33094639,
    tag: "Weekly",
  },
  {
    id: "latte-art",
    title: "Latte Art Workshop",
    day: "Sat 12 Jul 2026",
    time: "2:00 – 4:00 pm",
    description:
      "Learn to pour a rosette, a tulip, and a heart. Small group, hands-on practice, and all the milk you can froth.",
    imageId: 31967785,
    tag: "Special event",
  },
];
