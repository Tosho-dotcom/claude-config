const BASE = "https://images.pexels.com/photos";

export function pexelsSrc(id: number, w = 1260, h = 750): string {
  return `${BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&dpr=1`;
}

export const photos = {
  // ── Scenes ──────────────────────────────────────────────────────────────
  heroBackground: 35134952,   // Cozy Coffee Shop with Modern Interior Design
  aboutHero:      34094297,   // Cozy Artisan Coffee Shop Interior with Warm Light
  menuHero:        4913361,   // Cozy coffee house with creative menu board

  // ── Founders ────────────────────────────────────────────────────────────
  founderMarcus:   9050572,   // Man at coffee shop
  founderLayla:     302896,   // Woman pouring cappuccino

  // ── Events ──────────────────────────────────────────────────────────────
  eventOpenMic:   16727451,   // Microphone on stage, colourful bokeh
  eventCoffeeTasting: 33094639, // Barista preparing matcha latte
  eventLatteArt:  31967785,   // Barista smiling behind counter

  // ── Hot Drinks ──────────────────────────────────────────────────────────
  espresso:           6900,
  americano:        374885,   // Person filling glass mug with coffee
  flatWhite:        291630,   // Flat lay coffee mug
  cortado:        14704662,   // Cortado in green ceramic cup
  cappuccino:       414605,   // Ceramic cup with latte art
  latte:          29238127,   // Cozy coffee setup with latte art
  pourOver:        942805,    // Selective focus coffee beans
  filterCoffee:   1029649,    // Coffee beans HD
  matchaLatte:    28730007,   // Artistic matcha latte with leaf design
  hotChocolate:   13481838,   // Milky coffee in crystal glass (dark, creamy)

  // ── Cold Drinks ─────────────────────────────────────────────────────────
  coldBrew:        6781594,   // Jar of coffee on table
  nitroColdBrew:  10738363,   // Glass of coffee with milk
  icedLatte:      18281881,   // Coffee with ice
  icedAmericano:   4823590,   // Person holding iced drink
  icedFlatWhite:   2611811,   // Close-up glass of cold drink
  coldBrewTonic:   8879611,   // Soft drink with ice cubes, dark and bubbly
  icedMatchaLatte: 2227126,   // Top view matcha drinks
  stillWater:       357577,   // Lime slices in drinking glass
  sparklingWater:     6216,   // Water with lemon in glass

  // ── Food ────────────────────────────────────────────────────────────────
  butterCroissant: 29156078,  // Elegant breakfast with croissant and coffee
  almondCroissant:  7966375,  // Pastry chef making croissants
  bananaBread:      9008499,  // Slice bread with nuts and fruits
  avocadoToast:    31126255,  // Avocado toast with lemon slices
  granolaBowl:      8230033,  // Healthy food in a bowl
  almondTart:       1448721,  // Variety of baked and dessert foods
  scone:            5018373,  // Cup of coffee and croissant in cafe
  darkChocolateCookie: 15803796, // Pouring chocolate sauce to cookies
} as const;

export type PhotoKey = keyof typeof photos;
