import { darjeelingConfig } from "@/config/destinations/darjeeling";
import { northeastConfig } from "@/config/destinations/northeast";
import type { DestinationConfig, DestinationSlug } from "@/types/destination";

export { getPackageById } from "@/config/destinations/helpers";

export const destinations: Record<DestinationSlug, DestinationConfig> = {
  northeast: northeastConfig,
  darjeeling: darjeelingConfig,
};

export const destinationList = Object.values(destinations);

export const domainToSlug: Record<string, DestinationSlug> = {
  "booknortheast.com": "northeast",
  "www.booknortheast.com": "northeast",
  "booksikkim.in": "darjeeling",
  "www.booksikkim.in": "darjeeling",
  localhost: "northeast",
  "127.0.0.1": "northeast",
};

export const destinationOptions = destinationList.map((d) => ({
  value: d.slug,
  label: d.name,
}));

export function getDestinationBySlug(
  slug: string | undefined
): DestinationConfig {
  if (slug && slug in destinations) {
    return destinations[slug as DestinationSlug];
  }
  return northeastConfig;
}
