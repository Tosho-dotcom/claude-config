import fs from "fs";
import path from "path";

export type MenuItem = {
  category: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  houseFavorite: boolean;
};

export function getMenuItems(): MenuItem[] {
  const filePath = path.join(process.cwd(), "docs", "menu.csv");
  const raw = fs.readFileSync(filePath, "utf-8");
  const lines = raw.trim().split("\n");

  return lines.slice(1).map((line) => {
    const parts = line.split(",");
    // Schema: category(0), name(1), price(2), currency(3), description(4..n-2), house_favorite(n-1)
    const category = parts[0].trim();
    const name = parts[1].trim();
    const price = parseFloat(parts[2].trim());
    const currency = parts[3].trim();
    const houseFavorite = parts[parts.length - 1].trim() === "true";
    const description = parts.slice(4, parts.length - 1).join(",").trim();
    return { category, name, price, currency, description, houseFavorite };
  });
}

export function getMenuByCategory(): Record<string, MenuItem[]> {
  const items = getMenuItems();
  return items.reduce<Record<string, MenuItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}
