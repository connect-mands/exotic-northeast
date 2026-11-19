import { buildWhyChooseUs, whyBookOnlineItems } from "@/config/site";
import type { DestinationConfig, TravelPackage } from "@/types/destination";

const darjeelingExclusions = [
  "Personal expenses, tips, laundry, telephone bills, and beverages.",
  "Flights and train tickets, including the Darjeeling toy train.",
  "Nathula Pass permit fee. The visit depends on weather and permit availability.",
  "Entry fees and activities not mentioned in inclusions.",
  "Any cost arising from landslides, road blocks, natural calamities, or force majeure.",
];

const darjeelingInclusions = [
  "Accommodation on double sharing basis.",
  "Daily breakfast at the hotel.",
  "Private vehicle for sightseeing and transfers as per itinerary.",
  "Driver allowance, fuel, tolls, and parking.",
  "Pickup and drop at Bagdogra Airport (IXB) or New Jalpaiguri (NJP).",
];

function darjeelingPackage(
  base: Omit<
    TravelPackage,
    "inclusions" | "exclusions" | "pricingTiers" | "highlights"
  > & {
    highlights: string[];
  }
): TravelPackage {
  return {
    ...base,
    pricingTiers: [
      {
        label: "Package price from",
        pricePerPerson: base.priceFrom,
      },
    ],
    highlights: base.highlights,
    inclusions: darjeelingInclusions,
    exclusions: darjeelingExclusions,
  };
}

export const darjeelingConfig: DestinationConfig = {
  slug: "darjeeling",
  domain: "booksikkim.in",
  name: "Sikkim & Darjeeling",
  shortName: "Sikkim & Darjeeling",
  pageTitle: "Sikkim & Darjeeling Tour Packages",
  hero: {
    accentTagline: "Queen of the Hills",
    subheading:
      "Tea gardens. Tiger Hill sunrises. Lakes under Kanchenjunga.",
    places: [
      "Darjeeling",
      "Gangtok",
      "Tiger Hill",
      "Tsomgo Lake",
      "Pelling",
      "Nathula",
    ],
    placesSuffix: "& more",
    features: [
      { label: "Best Price Guarantee", icon: "price" },
      { label: "Customizable Packages", icon: "custom" },
      { label: "24/7 Travel Support", icon: "support" },
    ],
    trust: {
      count: "10,000+",
      label: "Trusted by 10,000+ Travelers",
    },
    formSubtitle: "Plan your Darjeeling & Sikkim trip",
    image: {
      src: "/assets/images/darjeeling/hero.jpg",
      alt: "Buddha statue and monastery grounds in the Sikkim hills",
    },
  },
  about: {
    paragraphs: [
      "Sikkim is often called **the jewel of the Himalayas** — clean air, snow peaks, quiet lakes, and green valleys. Travellers usually combine Gangtok (Tsomgo Lake, Baba Mandir, and Nathula Pass) with Pelling, Ravangla, and North Sikkim when the high lakes are open.",
      "Darjeeling, the **Queen of the Hills**, sits next door in West Bengal. Tea estates, a Tiger Hill sunrise, the toy train, and colonial streets make it the natural last stop after Sikkim, with pickup from Bagdogra or NJP.",
    ],
  },
  branding: {
    logoText: "Exotic Yatra - Sikkim & Darjeeling",
    accentClass: "destination-darjeeling",
  },
  seo: {
    title: "Sikkim & Darjeeling Tour Packages | Exotic Yatra",
    description:
      "Book Sikkim and Darjeeling packages — Gangtok, Tsomgo Lake, Pelling, and Tiger Hill. Hotels, private cab, and Bagdogra transfers. Get a free quote.",
    keywords: [
      "darjeeling tour packages",
      "sikkim darjeeling package",
      "gangtok darjeeling tour",
      "tiger hill tour package",
      "pelling gangtok darjeeling",
    ],
    ogImage: "/assets/images/darjeeling/hero.jpg",
  },
  whyChooseUs: buildWhyChooseUs("Sikkim & Darjeeling Tour Packages"),
  whyBookOnline: [...whyBookOnlineItems],
  packages: [
    darjeelingPackage({
      id: "sikkim-darjeeling-4n5d",
      title: "The Jewel of the Himalayas: Sikkim & Darjeeling",
      duration: "04 Nights / 05 Days",
      nightsBreakdown: "02 Nights Gangtok / 02 Nights Darjeeling",
      placesToVisit:
        "Gangtok - Tsomgo Lake - Baba Mandir - Nathula - Darjeeling - Tiger Hill",
      priceFrom: "15,499",
      highlights: [
        "Tsomgo Lake and Baba Harbhajan Singh Mandir",
        "Optional Nathula Pass, subject to permit",
        "Tiger Hill sunrise and a Darjeeling town day",
      ],
      amenities: ["hotels", "sightseeing", "meals", "transfers"],
      accommodations: [
        "Gangtok: 3-star hotel or similar",
        "Darjeeling: 3-star hotel or similar",
      ],
      itinerary: [
        "Day 1: Arrive at Bagdogra Airport (IXB) or NJP. Drive to Gangtok. Overnight in Gangtok.",
        "Day 2: Excursion to Tsomgo Lake and Baba Harbhajan Singh Mandir. Nathula Pass is optional when permits and weather allow. Overnight in Gangtok.",
        "Day 3: Half day in Gangtok — Namgyal Institute of Tibetology, Do Drul Chorten, the handicraft centre, and Bakthang Waterfall. Drive to Darjeeling. Overnight in Darjeeling.",
        "Day 4: Early visit to Tiger Hill for sunrise. After breakfast, Batasia Loop, Ghoom Monastery, the Himalayan Mountaineering Institute, Peace Pagoda, and a tea garden. Overnight in Darjeeling.",
        "Day 5: Transfer to Bagdogra Airport or NJP for departure.",
      ],
      image: {
        src: "/assets/images/darjeeling/gangtok.jpg",
        alt: "High Himalayan lake and snow peaks on the Gangtok excursion",
      },
    }),
    darjeelingPackage({
      id: "sikkim-darjeeling-5n6d",
      title: "The Himalayan Calling: Sikkim & Darjeeling",
      duration: "05 Nights / 06 Days",
      nightsBreakdown: "03 Nights Gangtok / 02 Nights Darjeeling",
      placesToVisit:
        "Tsomgo Lake - Nathula - Hanuman Tok - Banjhakri Falls - Darjeeling - Tiger Hill",
      priceFrom: "18,999",
      highlights: [
        "Extra full day in Gangtok",
        "Hanuman Tok, Ganesh Tok, and Banjhakri Falls",
        "Darjeeling sunrise at Tiger Hill",
      ],
      amenities: ["hotels", "sightseeing", "meals", "transfers"],
      accommodations: [
        "Gangtok: 3-star hotel or similar",
        "Darjeeling: 3-star hotel or similar",
      ],
      itinerary: [
        "Day 1: Arrive at Bagdogra Airport (IXB) or NJP and transfer to Gangtok. Overnight in Gangtok.",
        "Day 2: Tsomgo Lake and Baba Harbhajan Singh Mandir, with optional Nathula Pass. Overnight in Gangtok.",
        "Day 3: Gangtok sightseeing — Hanuman Tok, Ganesh Tok, Banjhakri Waterfalls, and a monastery or viewpoint stop. Overnight in Gangtok.",
        "Day 4: Morning at the Tibetology institute, Do Drul Chorten, and Bakthang Waterfall. Drive to Darjeeling. Overnight in Darjeeling.",
        "Day 5: Tiger Hill at dawn, then Darjeeling local sightseeing and a tea garden visit. Overnight in Darjeeling.",
        "Day 6: Transfer to Bagdogra Airport or NJP for departure.",
      ],
      image: {
        src: "/assets/images/darjeeling/himalaya.jpg",
        alt: "Snow peaks and valley views on the Sikkim and Darjeeling route",
      },
    }),
    darjeelingPackage({
      id: "sikkim-darjeeling-6n7d",
      title: "Flora and Fauna of Sikkim & Darjeeling",
      duration: "06 Nights / 07 Days",
      nightsBreakdown: "02 Nights Gangtok / 02 Nights Pelling / 02 Nights Darjeeling",
      placesToVisit:
        "Gangtok - Tsomgo Lake - Ravangla - Pelling - Darjeeling - Tiger Hill",
      priceFrom: "22,999",
      highlights: [
        "Gangtok high-altitude lakes, then West Sikkim",
        "Pelling waterfalls and Khangchendzonga views",
        "Two nights in Darjeeling to end the trip",
      ],
      amenities: ["hotels", "sightseeing", "meals", "transfers"],
      accommodations: [
        "Gangtok: 3-star hotel or similar",
        "Pelling: 3-star hotel or similar",
        "Darjeeling: 3-star hotel or similar",
      ],
      itinerary: [
        "Day 1: Arrive at Bagdogra Airport (IXB) or NJP. Transfer to Gangtok. Overnight in Gangtok.",
        "Day 2: Tsomgo Lake and Baba Harbhajan Singh Mandir. Optional Nathula Pass. Overnight in Gangtok.",
        "Day 3: Drive to Pelling via Ravangla, with a stop at the Buddha Park if time allows. Overnight in Pelling.",
        "Day 4: Pelling sightseeing — Rimbi Falls, Khangchendzonga Falls, Pemayangtse Monastery, and a Kanchenjunga viewpoint. Overnight in Pelling.",
        "Day 5: Drive to Darjeeling. Evening free in town. Overnight in Darjeeling.",
        "Day 6: Tiger Hill sunrise, then Darjeeling local sightseeing and a tea estate. Overnight in Darjeeling.",
        "Day 7: Transfer to Bagdogra Airport or NJP for departure.",
      ],
      image: {
        src: "/assets/images/darjeeling/pelling.jpg",
        alt: "Buddha Park at Ravangla, on the Gangtok to Pelling road",
      },
    }),
  ],
};
