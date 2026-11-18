export type Area = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
};
export type Category = {
  slug: string;
  area: string;
  name: string;
  description: string;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
};
export type Product = {
  slug: string;
  area: string;
  category: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
};
export const areas: Area[] = [
  {
    slug: 'air',
    name: 'Air',
    description:
      'Explore uncrewed aircraft and supporting airborne systems through ECI’s distribution network.',
    image: '/images/air.jpg',
  },
  {
    slug: 'naval',
    name: 'Naval',
    description:
      'Explore maritime equipment and platforms for operations on and below the water.',
    image: '/images/naval.jpg',
  },
  {
    slug: 'land',
    name: 'Land',
    description:
      'Explore ground platforms and equipment for land-based operations.',
    image: '/images/land.jpg',
  },
  {
    slug: 'software',
    name: 'Software',
    description:
      'Software for radar monitoring, suspicious activity detection and threat awareness.',
    image: '/images/threat-monitoring.jpg',
    imageAlt:
      'Operators viewing a wall of monitoring and situational-awareness displays',
    imageCaption:
      'Representative monitoring centre. Photo: Josef Cole / U.S. Cyber Command. Not a screenshot of an ECI product.',
  },
  {
    slug: 'search-and-rescue',
    name: 'Search and Rescue',
    description:
      'Find and reach people at sea, in the mountains and across difficult terrain.',
    image: '/images/mountain-rescue.jpg',
    imageAlt:
      'A helicopter crew member preparing a rescue hoist above mountainous terrain',
    imageCaption:
      'Representative mountain-rescue training. Photo: Adeline Witherspoon / U.S. National Guard. Not a confirmed ECI product.',
  },
];
export const categories: Category[] = [
  {
    slug: 'uncrewed-aircraft',
    area: 'air',
    name: 'Uncrewed aircraft',
    description:
      'A sample category for UAV platforms and related equipment. Contact ECI to discuss the aircraft and support options suited to your requirements.',
    image: '/images/product-1.jpg',
  },
  {
    slug: 'maritime-systems',
    area: 'naval',
    name: 'Maritime systems',
    description:
      'A sample category for uncrewed surface vessels and other maritime equipment. ECI can help you discuss the appropriate equipment for your operating environment.',
    image: '/images/product-2.jpg',
  },
  {
    slug: 'ground-platforms',
    area: 'land',
    name: 'Ground platforms',
    description:
      'A sample category for uncrewed ground vehicles and supporting equipment. Speak with ECI about your platform and support requirements.',
    image: '/images/product-3.jpg',
  },
  {
    slug: 'software-applications',
    area: 'software',
    name: 'Radar & threat monitoring',
    description:
      'Programs for monitoring radar data, reviewing suspicious or potentially unlawful activity, and helping operators assess threats. Discuss your data sources, monitoring requirements and response workflows with ECI.',
    image: '/images/radar-monitoring.jpg',
    imageAlt: 'Operators monitoring air and surface contacts on radar consoles',
    imageCaption:
      'Representative radar-monitoring operation. Photo: Edward Guttierrez III / U.S. Navy. Not a confirmed ECI product.',
  },
  {
    slug: 'rescue-equipment',
    area: 'search-and-rescue',
    name: 'Search, rescue & terrain access',
    description:
      'Equipment and platforms for locating people, reaching remote areas and supporting rescue operations at sea, in mountains and across extreme terrain. This includes monitoring systems and transport suited to the environment.',
    image: '/images/sea-rescue.jpg',
    imageAlt:
      'A rescue helicopter hoisting a swimmer and basket above the water during a demonstration',
    imageCaption:
      'Representative sea-rescue demonstration. Photo: Ryan Dickinson / U.S. Coast Guard. Not a confirmed ECI product.',
  },
];
export const products: Product[] = [
  {
    slug: 'uav-01',
    area: 'air',
    category: 'uncrewed-aircraft',
    name: 'UAV platform 01',
    summary: 'Sample entry for an uncrewed aircraft platform.',
    description:
      'This placeholder represents an uncrewed aircraft in the Air catalogue. Model-specific images, applications and specifications will be added when the product is confirmed.',
    image: '/images/product-1.jpg',
  },
  {
    slug: 'uav-02',
    area: 'air',
    category: 'uncrewed-aircraft',
    name: 'UAV platform 02',
    summary: 'Sample entry for a second aircraft configuration.',
    description:
      'This placeholder provides space for an additional uncrewed aircraft or configuration. Contact ECI for information about currently available aircraft and support.',
    image: '/images/product-1.jpg',
  },
  {
    slug: 'maritime-01',
    area: 'naval',
    category: 'maritime-systems',
    name: 'Maritime platform 01',
    summary: 'Sample entry for an uncrewed surface vessel.',
    description:
      'This placeholder represents a maritime platform in the Naval catalogue. Confirmed model information, operating details and equipment options will be added here.',
    image: '/images/product-2.jpg',
  },
  {
    slug: 'maritime-02',
    area: 'naval',
    category: 'maritime-systems',
    name: 'Maritime platform 02',
    summary: 'Sample entry for an additional maritime system.',
    description:
      'This placeholder provides space for a second maritime system. Speak with ECI about suitable equipment and the support required for your application.',
    image: '/images/product-2.jpg',
  },
  {
    slug: 'ground-01',
    area: 'land',
    category: 'ground-platforms',
    name: 'Ground platform 01',
    summary: 'Sample entry for an uncrewed ground vehicle.',
    description:
      'This placeholder represents an uncrewed ground platform in the Land catalogue. Specific model details, images and equipment configurations will be added when confirmed.',
    image: '/images/product-3.jpg',
  },
  {
    slug: 'ground-02',
    area: 'land',
    category: 'ground-platforms',
    name: 'Ground platform 02',
    summary: 'Sample entry for a second ground configuration.',
    description:
      'This placeholder provides space for another ground platform or equipment configuration. ECI can discuss your requirements and available support options.',
    image: '/images/product-3.jpg',
  },
  {
    slug: 'software-01',
    area: 'software',
    category: 'software-applications',
    name: 'Radar monitoring software',
    summary:
      'Sample application for displaying radar data and following activity.',
    description:
      'An illustrative entry for software that brings radar data into an operational view, helping operators follow tracks and review activity. Supported radar systems, display functions and integrations will be confirmed with the selected application.',
    image: '/images/radar-monitoring.jpg',
    imageAlt: 'Operators monitoring air and surface contacts on radar consoles',
    imageCaption:
      'Representative radar-monitoring operation. Photo: Edward Guttierrez III / U.S. Navy. Not a confirmed ECI product.',
  },
  {
    slug: 'software-02',
    area: 'software',
    category: 'software-applications',
    name: 'Activity & threat monitoring',
    summary:
      'Sample application for reviewing suspicious activity and potential threats.',
    description:
      'An illustrative entry for monitoring software that helps operators review suspicious or potentially unlawful activity and assess possible threats. Data sources, alert rules and response workflows depend on the selected application.',
    image: '/images/threat-monitoring.jpg',
    imageAlt:
      'Operators viewing a wall of monitoring and situational-awareness displays',
    imageCaption:
      'Representative monitoring centre. Photo: Josef Cole / U.S. Cyber Command. Not a screenshot of an ECI product.',
  },
  {
    slug: 'rescue-01',
    area: 'search-and-rescue',
    category: 'rescue-equipment',
    name: 'Maritime search & rescue',
    summary:
      'Sample platforms and monitoring equipment for finding people at sea.',
    description:
      'An illustrative entry for boats, airborne platforms and monitoring equipment used to locate people and support rescue operations at sea. Specific platforms, equipment and operating requirements will be confirmed with ECI.',
    image: '/images/sea-rescue.jpg',
    imageAlt:
      'A rescue helicopter hoisting a swimmer and basket above the water during a demonstration',
    imageCaption:
      'Representative sea-rescue demonstration. Photo: Ryan Dickinson / U.S. Coast Guard. Not a confirmed ECI product.',
  },
  {
    slug: 'rescue-02',
    area: 'search-and-rescue',
    category: 'rescue-equipment',
    name: 'Mountain & remote-area rescue',
    summary: 'Sample transport and monitoring platforms for difficult terrain.',
    description:
      'An illustrative entry for transport and monitoring platforms that help teams search mountains, reach people and support rescue operations in extreme terrain. Discuss aerial observation, ground access and recovery requirements with ECI.',
    image: '/images/mountain-rescue.jpg',
    imageAlt:
      'A helicopter crew member preparing a rescue hoist above mountainous terrain',
    imageCaption:
      'Representative mountain-rescue training. Photo: Adeline Witherspoon / U.S. National Guard. Not a confirmed ECI product.',
  },
];
export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
export function getCategory(area: string, slug: string) {
  return categories.find(
    (category) => category.area === area && category.slug === slug,
  );
}
export function getProduct(area: string, category: string, slug: string) {
  return products.find(
    (product) =>
      product.area === area &&
      product.category === category &&
      product.slug === slug,
  );
}
export function productPath(product: Product) {
  return `/products/${product.area}/${product.category}/${product.slug}`;
}
