import { buildWhyChooseUs, whyBookOnlineItems } from "@/config/site";
import type { DestinationConfig, TravelPackage } from "@/types/destination";

const northeastExclusions = [
  "Personal expenses, tips, laundry, telephone bills, and beverages.",
  "Flights, trains, and airport or railway transfers unless specified.",
  "Entry fees, camera fees, and activities not mentioned in inclusions.",
  "Boating at Dawki when the river is closed for the season.",
  "Any cost arising from landslides, road blocks, natural calamities, or force majeure.",
];

function northeastPackage(
  base: Omit<
    TravelPackage,
    "inclusions" | "exclusions" | "pricingTiers" | "highlights"
  > & {
    highlights: string[];
    inclusions?: string[];
    exclusions?: string[];
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
    inclusions: base.inclusions ?? [
      "Accommodation on double sharing basis.",
      "Daily breakfast at the hotel.",
      "Private vehicle for sightseeing and transfers as per itinerary.",
      "Driver allowance, fuel, tolls, and parking.",
    ],
    exclusions: base.exclusions ?? northeastExclusions,
  };
}

export const northeastConfig: DestinationConfig = {
  slug: "northeast",
  domain: "booknortheast.com",
  name: "North East",
  shortName: "North East",
  pageTitle: "North-East Tour Packages",
  hero: {
    accentTagline: "Abode of Clouds",
    subheading:
      "Living root bridges. Clear rivers. Monasteries above the clouds.",
    places: [
      "Shillong",
      "Cherrapunji",
      "Dawki",
      "Mawlynnong",
      "Tawang",
      "Kaziranga",
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
    formSubtitle: "Plan your North East trip",
    image: {
      src: "/assets/images/northeast/hero.jpg",
      alt: "Sunlit snow peaks above the North East hills",
      position: "72% center",
    },
  },
  about: {
    paragraphs: [
      "A **North East India** tour through Shillong, Meghalaya, and Arunachal Pradesh moves from cloud-covered hills to monastery towns. Typical days cover Shillong and Cherrapunji, the clear water at Dawki, and, on longer trips, Tawang Monastery or a Kaziranga safari before you return to Guwahati.",
      "Our packages include handpicked hotels, a private vehicle, and a driver who knows the hill roads — for families, honeymoons, and small groups. Share your dates and we will shape the route around Shillong, Meghalaya, or Arunachal.",
    ],
  },
  branding: {
    logoText: "Exotic Yatra - North East Package",
    accentClass: "destination-northeast",
  },
  seo: {
    title: "North East Tour Packages | Shillong, Meghalaya & Arunachal",
    description:
      "Book North East tour packages — Shillong, Cherrapunji, Dawki, and Tawang. Hotels, private cab, and sightseeing. Get a free quote.",
    keywords: [
      "north east tour packages",
      "shillong tour package",
      "meghalaya tour package",
      "arunachal tour package",
      "cherrapunji dawki package",
    ],
    ogImage: "/assets/images/northeast/hero.jpg",
  },
  whyChooseUs: buildWhyChooseUs("North East Tour Packages"),
  whyBookOnline: [...whyBookOnlineItems],
  packages: [
    northeastPackage({
      id: "shillong-4n5d",
      title: "Best of Shillong 4 Nights & 5 Days",
      duration: "04 Nights / 05 Days",
      nightsBreakdown: "04 Nights Shillong",
      placesToVisit: "Guwahati - Shillong - Cherrapunji - Dawki",
      priceFrom: "14,999",
      highlights: [
        "Shillong Peak, Elephant Falls & Ward's Lake",
        "Cherrapunji waterfalls and Mawsmai Cave",
        "Dawki's Umngot River and Mawlynnong",
      ],
      amenities: ["hotels", "sightseeing", "meals", "transfers"],
      accommodations: [
        "Shillong: 3-star hotel or similar",
      ],
      itinerary: [
        "Day 1: Arrive at Guwahati airport or railway station. Drive to Shillong (about 3 hours). Evening at Police Bazaar. Overnight in Shillong.",
        "Day 2: Shillong sightseeing — Ward's Lake, Lady Hydari Park, Shillong Peak, Elephant Falls, and Don Bosco Museum. Overnight in Shillong.",
        "Day 3: Full-day excursion to Sohra (Cherrapunji) — Nohkalikai Falls, Mawsmai Cave, Seven Sisters Falls, and Eco Park. Return to Shillong.",
        "Day 4: Drive to Dawki for the Umngot River (boat ride when the river is open) and Mawlynnong village. Overnight in Shillong.",
        "Day 5: Drive back to Guwahati for your flight or train.",
      ],
      image: {
        src: "/assets/images/northeast/shillong.jpg",
        alt: "Waterfall and turquoise pool in the Meghalaya hills",
      },
    }),
    northeastPackage({
      id: "meghalaya-5n6d",
      title: "Meghalaya Tour 5 Nights & 6 Days",
      duration: "05 Nights / 06 Days",
      nightsBreakdown: "02 Nights Shillong / 02 Nights Sohra / 01 Night Dawki",
      placesToVisit: "Shillong - Cherrapunji - Dawki - Mawlynnong",
      priceFrom: "18,499",
      highlights: [
        "Two nights in Sohra for a slower Cherrapunji stay",
        "Living root bridge country around Nongriat",
        "Dawki, Mawlynnong, and a Shillong city day",
      ],
      amenities: ["hotels", "sightseeing", "meals", "transfers"],
      accommodations: [
        "Shillong: 3-star hotel or similar",
        "Sohra: 3-star hotel or similar",
        "Dawki: riverside lodge or similar",
      ],
      itinerary: [
        "Day 1: Arrive Guwahati and drive to Shillong. Overnight in Shillong.",
        "Day 2: Shillong local sightseeing — Ward's Lake, Cathedral, Shillong Peak, and Elephant Falls. Overnight in Shillong.",
        "Day 3: Drive to Sohra. Visit Nohkalikai Falls, Mawsmai Cave, and viewpoint stops. Overnight in Sohra.",
        "Day 4: Sohra surroundings — Wei Sawdong or Dainthlen Falls, and the living root bridge trail at Nongriat if you want the walk. Overnight in Sohra.",
        "Day 5: Drive to Dawki and Mawlynnong. Umngot River boat ride when running. Overnight near Dawki.",
        "Day 6: Drive to Guwahati for departure.",
      ],
      image: {
        src: "/assets/images/northeast/meghalaya.jpg",
        alt: "Boat on the Umngot River at Dawki, Meghalaya",
      },
    }),
    northeastPackage({
      id: "arunachal-7n8d",
      title: "Best of Arunachal 7 Nights & 8 Days",
      duration: "07 Nights / 08 Days",
      nightsBreakdown:
        "01 Night Bhalukpong / 02 Nights Dirang / 02 Nights Tawang / 01 Night Bomdila / 01 Night Tezpur",
      placesToVisit: "Guwahati - Dirang - Sela Pass - Tawang - Bomdila",
      priceFrom: "32,999",
      highlights: [
        "Tawang Monastery and Madhuri Lake",
        "Sela Pass and Jaswant Garh war memorial",
        "Dirang hot spring and Sangti Valley",
      ],
      amenities: ["hotels", "sightseeing", "meals", "transfers"],
      accommodations: [
        "Bhalukpong, Dirang, Tawang, Bomdila, and Tezpur: 3-star hotels or similar",
      ],
      inclusions: [
        "Accommodation on double sharing basis.",
        "Daily breakfast at the hotel.",
        "Private vehicle for the Guwahati–Tawang–Guwahati circuit.",
        "Driver allowance, fuel, tolls, and parking.",
        "Help with the Arunachal Inner Line Permit application.",
      ],
      exclusions: [
        ...northeastExclusions,
        "Inner Line Permit fee for Indian travellers, and Protected Area Permit fee for foreign nationals.",
        "Monastery offerings and extra sightseeing not listed in the itinerary.",
      ],
      itinerary: [
        "Day 1: Arrive Guwahati. Drive to Bhalukpong, the gateway to Arunachal. Overnight in Bhalukpong.",
        "Day 2: Drive to Dirang via Tipi. Overnight in Dirang.",
        "Day 3: Dirang local — hot spring, Sangti Valley, and Dirang Monastery. Overnight in Dirang.",
        "Day 4: Drive to Tawang over Sela Pass, with a stop at Jaswant Garh. Overnight in Tawang.",
        "Day 5: Tawang Monastery, Urgelling Monastery, and Madhuri Lake (Shonga-tser). Overnight in Tawang.",
        "Day 6: Drive down to Bomdila. Overnight in Bomdila.",
        "Day 7: Bomdila to Tezpur. Overnight in Tezpur.",
        "Day 8: Drive to Guwahati airport or railway station for departure.",
      ],
      image: {
        src: "/assets/images/northeast/arunachal.jpg",
        alt: "Mountain landscape on the Arunachal Pradesh circuit",
      },
    }),
    northeastPackage({
      id: "kaziranga-meghalaya-6n7d",
      title: "Kaziranga & Meghalaya 6 Nights & 7 Days",
      duration: "06 Nights / 07 Days",
      nightsBreakdown: "02 Nights Kaziranga / 04 Nights Shillong",
      placesToVisit: "Guwahati - Kaziranga - Shillong - Cherrapunji - Dawki",
      priceFrom: "24,999",
      highlights: [
        "Kaziranga jeep safari for one-horned rhinos",
        "Shillong and Cherrapunji in one circuit",
        "Dawki and Mawlynnong before Guwahati departure",
      ],
      amenities: ["hotels", "sightseeing", "meals", "transfers"],
      accommodations: [
        "Kaziranga: jungle resort or similar",
        "Shillong: 3-star hotel or similar",
      ],
      inclusions: [
        "Accommodation on double sharing basis.",
        "Daily breakfast at the hotel.",
        "One shared jeep safari in Kaziranga (range subject to park timing).",
        "Private vehicle for transfers and sightseeing as per itinerary.",
        "Driver allowance, fuel, tolls, and parking.",
      ],
      exclusions: [
        ...northeastExclusions,
        "Extra Kaziranga safaris, elephant safari, and camera fees.",
      ],
      itinerary: [
        "Day 1: Arrive Guwahati and drive to Kaziranga. Evening at leisure. Overnight in Kaziranga.",
        "Day 2: Morning jeep safari in Kaziranga National Park. Overnight in Kaziranga.",
        "Day 3: Drive to Shillong. Evening at Police Bazaar. Overnight in Shillong.",
        "Day 4: Shillong sightseeing — Ward's Lake, Shillong Peak, and Elephant Falls. Overnight in Shillong.",
        "Day 5: Cherrapunji excursion — Nohkalikai Falls, Mawsmai Cave, and Eco Park. Overnight in Shillong.",
        "Day 6: Dawki and Mawlynnong. Overnight in Shillong.",
        "Day 7: Drive to Guwahati for departure.",
      ],
      image: {
        src: "/assets/images/northeast/hero.jpg",
        alt: "Sunlit snow peaks on the Kaziranga and Meghalaya circuit",
      },
    }),
  ],
};
