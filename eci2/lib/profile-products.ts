import type { Product, Category } from "./catalogue.ts";

// Source: ECI company profile, pages 14–42. Overviews are written for this website.
export const profileProducts: Product[] = [
  {
    slug: "hydro-informatics-institute",
    area: "land",
    category: "monitoring-and-site-security",
    name: "Hydro Informatics Institute",
    summary:
      "Field monitoring installations bring information from remote sites into a wider monitoring network. This project reference shows solar-powered equipment used for environmental monitoring.",
    description:
      "Field monitoring installations bring information from remote sites into a wider monitoring network. This project reference shows solar-powered equipment used for environmental monitoring.",
    images: [
      {
        src: "/images/catalogue/hydro-informatics-field-unit-01.webp",
        alt: "Solar-powered field monitoring unit for the Hydro Informatics Institute.",
        caption: "Solar-powered field monitoring unit for the Hydro Informatics Institute.",
      },
      {
        src: "/images/catalogue/hydro-informatics-field-unit-02.webp",
        alt: "Second solar-powered Hydro Informatics Institute field monitoring unit.",
        caption: "Second solar-powered Hydro Informatics Institute field monitoring unit.",
      },
    ],
    sample: false,
    kind: "project",
    sourcePages: [14],
  },
  {
    slug: "utapao-airport",
    area: "air",
    category: "airport-systems",
    name: "U-Tapao Rayong-Pattaya International Airport",
    summary:
      "Airport systems bring communications and monitoring into the daily work of an operations team. This project reference shows the site and control-room environment at U-Tapao airport.",
    description:
      "Airport systems bring communications and monitoring into the daily work of an operations team. This project reference shows the site and control-room environment at U-Tapao airport.",
    images: [
      {
        src: "/images/catalogue/utapao-airport-site-model.webp",
        alt: "Site model for the U-Tapao airport project.",
        caption: "Site model for the U-Tapao airport project.",
      },
      {
        src: "/images/catalogue/utapao-airport-control-room.webp",
        alt: "Integrated monitoring control room for the U-Tapao airport project.",
        caption: "Integrated monitoring control room for the U-Tapao airport project.",
      },
    ],
    sample: false,
    kind: "project",
    sourcePages: [14],
  },
  {
    slug: "ai-surveillance-system",
    area: "land",
    category: "monitoring-and-site-security",
    name: "AI surveillance system",
    summary:
      "Video monitoring brings camera views together in an operator workspace. AI-assisted analysis helps teams review activity and focus their attention on events that need a closer look.",
    description:
      "Video monitoring brings camera views together in an operator workspace. AI-assisted analysis helps teams review activity and focus their attention on events that need a closer look.",
    images: [
      {
        src: "/images/catalogue/ai-surveillance-workstation.webp",
        alt: "Multi-screen AI surveillance workstation.",
        caption: "Multi-screen AI surveillance workstation.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [14],
  },
  {
    slug: "narathiwat-airport",
    area: "air",
    category: "airport-systems",
    name: "Narathiwat Airport",
    summary:
      "Network infrastructure connects the equipment and communications used across an airport. This project reference shows rack-mounted systems installed for Narathiwat Airport.",
    description:
      "Network infrastructure connects the equipment and communications used across an airport. This project reference shows rack-mounted systems installed for Narathiwat Airport.",
    images: [
      {
        src: "/images/catalogue/narathiwat-airport-network-rack.webp",
        alt: "Network and communications rack for the Narathiwat Airport project.",
        caption: "Network and communications rack for the Narathiwat Airport project.",
      },
    ],
    sample: false,
    kind: "project",
    sourcePages: [14],
  },
  {
    slug: "navy-network",
    area: "naval",
    category: "maritime-networks-and-command",
    name: "Navy network",
    summary:
      "Communications infrastructure links teams and equipment across maritime facilities. Tower and equipment-shelter installations form part of a connected network for naval operations.",
    description:
      "Communications infrastructure links teams and equipment across maritime facilities. Tower and equipment-shelter installations form part of a connected network for naval operations.",
    images: [
      {
        src: "/images/catalogue/navy-network-radio-tower.webp",
        alt: "Navy Network communications tower.",
        caption: "Navy Network communications tower.",
      },
      {
        src: "/images/catalogue/navy-network-equipment-shelter.webp",
        alt: "Navy Network equipment shelter installation.",
        caption: "Navy Network equipment shelter installation.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [15],
  },
  {
    slug: "mobile-command-vehicle",
    area: "land",
    category: "mobile-operations",
    name: "Mobile command vehicle",
    summary:
      "A mobile workspace brings communications, displays and operator equipment to the field. Vehicle layouts can bring these systems together around the needs of a particular project.",
    description:
      "A mobile workspace brings communications, displays and operator equipment to the field. Vehicle layouts can bring these systems together around the needs of a particular project.",
    images: [
      {
        src: "/images/catalogue/mobile-vehicle-exterior.webp",
        alt: "Exterior view of the Panasonic-branded mobile system vehicle.",
        caption: "Exterior view of the Panasonic-branded mobile system vehicle.",
      },
      {
        src: "/images/catalogue/mobile-vehicle-demo-interior.webp",
        alt: "Interior display and operator area of the mobile system vehicle.",
        caption: "Interior display and operator area of the mobile system vehicle.",
      },
      {
        src: "/images/catalogue/mobile-vehicle-construction-01.webp",
        alt: "Mobile system vehicle body construction in progress.",
        caption: "Mobile system vehicle body construction in progress.",
      },
      {
        src: "/images/catalogue/mobile-vehicle-construction-02.webp",
        alt: "Exterior fabrication work on the mobile system vehicle.",
        caption: "Exterior fabrication work on the mobile system vehicle.",
      },
      {
        src: "/images/catalogue/mobile-vehicle-interior-fitout.webp",
        alt: "Interior equipment fit-out during mobile vehicle construction.",
        caption: "Interior equipment fit-out during mobile vehicle construction.",
      },
      {
        src: "/images/catalogue/mobile-command-vehicle-interior.webp",
        alt: "Wide interior view of the completed mobile command vehicle.",
        caption: "Wide interior view of the completed mobile command vehicle.",
      },
      {
        src: "/images/catalogue/mobile-command-vehicle-console.webp",
        alt: "Operator console inside the completed mobile command vehicle.",
        caption: "Operator console inside the completed mobile command vehicle.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [15, 16, 18],
  },
  {
    slug: "maritime-command-center",
    area: "naval",
    category: "maritime-networks-and-command",
    name: "Thai Maritime Enforcement Command Center",
    summary:
      "A mobile command workspace supports coordination away from a permanent control room. This project reference shows a vehicle prepared for the Thai Maritime Enforcement Command Center.",
    description:
      "A mobile command workspace supports coordination away from a permanent control room. This project reference shows a vehicle prepared for the Thai Maritime Enforcement Command Center.",
    images: [
      {
        src: "/images/catalogue/thai-maritime-mobile-command-center.webp",
        alt: "Thai Maritime Enforcement Command Center mobile command vehicle and project team.",
        caption:
          "Thai Maritime Enforcement Command Center mobile command vehicle and project team.",
      },
    ],
    sample: false,
    kind: "project",
    sourcePages: [17],
  },
  {
    slug: "mobile-check-point",
    area: "land",
    category: "monitoring-and-site-security",
    name: "Mobile checkpoint",
    summary:
      "A mobile checkpoint brings inspection equipment to temporary access points. It supports teams managing vehicle entry where a permanent checkpoint is not available.",
    description:
      "A mobile checkpoint brings inspection equipment to temporary access points. It supports teams managing vehicle entry where a permanent checkpoint is not available.",
    images: [
      {
        src: "/images/catalogue/mobile-check-point-field-equipment.webp",
        alt: "Portable field equipment and workstation for the mobile checkpoint system.",
        caption: "Portable field equipment and workstation for the mobile checkpoint system.",
      },
      {
        src: "/images/catalogue/mobile-check-point-operator-terminal.webp",
        alt: "Rugged operator terminal used at the mobile checkpoint.",
        caption: "Rugged operator terminal used at the mobile checkpoint.",
      },
      {
        src: "/images/catalogue/mobile-check-point-equipment-cases.webp",
        alt: "Transport cases for mobile checkpoint equipment.",
        caption: "Transport cases for mobile checkpoint equipment.",
      },
      {
        src: "/images/catalogue/mobile-check-point-lane-camera.webp",
        alt: "Temporary lane camera deployed at a checkpoint.",
        caption: "Temporary lane camera deployed at a checkpoint.",
      },
      {
        src: "/images/catalogue/mobile-check-point-gatehouse.webp",
        alt: "Mobile checkpoint deployment at a gatehouse.",
        caption: "Mobile checkpoint deployment at a gatehouse.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [19],
  },
  {
    slug: "under-vehicle-inspection",
    area: "land",
    category: "monitoring-and-site-security",
    name: "Under-vehicle inspection (UVS)",
    summary:
      "Under-vehicle inspection equipment gives operators a view of areas beneath a vehicle. It supports access-point checks by helping teams examine the underside for unusual objects.",
    description:
      "Under-vehicle inspection equipment gives operators a view of areas beneath a vehicle. It supports access-point checks by helping teams examine the underside for unusual objects.",
    images: [
      {
        src: "/images/catalogue/uvs-vehicle-inspection.webp",
        alt: "Under-vehicle scanning system in use during a vehicle inspection.",
        caption: "Under-vehicle scanning system in use during a vehicle inspection.",
      },
      {
        src: "/images/catalogue/uvs-road-scanner.webp",
        alt: "Under-vehicle scanner installed across a vehicle lane.",
        caption: "Under-vehicle scanner installed across a vehicle lane.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [20],
  },
  {
    slug: "surveillance-radar",
    area: "land",
    category: "monitoring-and-site-security",
    name: "Surveillance radar",
    summary:
      "Radar provides an additional view of activity across a monitored area. It can support a wider surveillance system alongside cameras and operator displays.",
    description:
      "Radar provides an additional view of activity across a monitored area. It can support a wider surveillance system alongside cameras and operator displays.",
    images: [
      {
        src: "/images/catalogue/surveillance-radar-tower-night.webp",
        alt: "Surveillance radar tower photographed at night.",
        caption: "Surveillance radar tower photographed at night.",
      },
      {
        src: "/images/catalogue/surveillance-radar-tower-day.webp",
        alt: "Surveillance radar tower in daylight.",
        caption: "Surveillance radar tower in daylight.",
      },
    ],
    sample: false,
    kind: "product",
    sourcePages: [21],
  },
  {
    slug: "precision-air",
    area: "land",
    category: "data-centre-and-power",
    name: "Precision air conditioning",
    summary:
      "Precision cooling helps maintain suitable conditions around IT and communications equipment. It supports equipment rooms where temperature management is part of day-to-day operation.",
    description:
      "Precision cooling helps maintain suitable conditions around IT and communications equipment. It supports equipment rooms where temperature management is part of day-to-day operation.",
    images: [
      {
        src: "/images/catalogue/precision-air-cooling-room.webp",
        alt: "Precision cooling units installed in an equipment room.",
        caption: "Precision cooling units installed in an equipment room.",
      },
      {
        src: "/images/catalogue/precision-air-cooling-cabinet.webp",
        alt: "Close view of a Schneider Electric precision cooling cabinet.",
        caption: "Close view of a Schneider Electric precision cooling cabinet.",
      },
    ],
    sample: false,
    kind: "product",
    sourcePages: [22],
  },
  {
    slug: "cable-basket-tray",
    area: "land",
    category: "data-centre-and-power",
    name: "Cable basket tray",
    summary:
      "Cable basket trays provide organised routes for power and data cabling. Their open construction keeps cable runs accessible for installation, inspection and changes.",
    description:
      "Cable basket trays provide organised routes for power and data cabling. Their open construction keeps cable runs accessible for installation, inspection and changes.",
    images: [
      {
        src: "/images/catalogue/cable-basket-tray-installation.webp",
        alt: "Overhead cable basket tray installation in a technical facility.",
        caption: "Overhead cable basket tray installation in a technical facility.",
      },
    ],
    sample: false,
    kind: "product",
    sourcePages: [23],
  },
  {
    slug: "electrical-control-panel",
    area: "land",
    category: "data-centre-and-power",
    name: "Electrical control panel",
    summary:
      "Electrical panels bring power distribution and control equipment into an organised enclosure. They provide a central point for managing the electrical systems within a facility.",
    description:
      "Electrical panels bring power distribution and control equipment into an organised enclosure. They provide a central point for managing the electrical systems within a facility.",
    images: [
      {
        src: "/images/catalogue/electrical-control-panel-01.webp",
        alt: "Electrical distribution and control panel.",
        caption: "Electrical distribution and control panel.",
      },
      {
        src: "/images/catalogue/electrical-control-panel-02.webp",
        alt: "Second electrical control-panel cabinet.",
        caption: "Second electrical control-panel cabinet.",
      },
    ],
    sample: false,
    kind: "product",
    sourcePages: [24],
  },
  {
    slug: "inrow-data-centre",
    area: "land",
    category: "data-centre-and-power",
    name: "In-row data centre",
    summary:
      "An in-row data centre layout brings IT racks and supporting equipment into a coordinated arrangement. It helps organise computing infrastructure, cooling and power around the space available.",
    description:
      "An in-row data centre layout brings IT racks and supporting equipment into a coordinated arrangement. It helps organise computing infrastructure, cooling and power around the space available.",
    images: [
      {
        src: "/images/catalogue/inrow-data-center-technician.webp",
        alt: "Technician working between in-row data-center cabinets.",
        caption: "Technician working between in-row data-center cabinets.",
      },
      {
        src: "/images/catalogue/inrow-data-center-cabinet.webp",
        alt: "Close view of an in-row data-center cabinet.",
        caption: "Close view of an in-row data-center cabinet.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [25],
  },
  {
    slug: "radio-system-control-centre",
    area: "land",
    category: "communications-and-displays",
    name: "Radio system control centre",
    summary:
      "A radio control centre brings communications equipment and operator interfaces into one workspace. It helps teams coordinate radio traffic and keep operational conversations organised.",
    description:
      "A radio control centre brings communications equipment and operator interfaces into one workspace. It helps teams coordinate radio traffic and keep operational conversations organised.",
    images: [
      {
        src: "/images/catalogue/radio-system-control-center.webp",
        alt: "Radio system control center equipment room.",
        caption: "Radio system control center equipment room.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [26],
  },
  {
    slug: "uninterruptible-power-supply",
    area: "land",
    category: "data-centre-and-power",
    name: "Uninterruptible power supply (UPS)",
    summary:
      "A UPS provides temporary backup power when the main supply is interrupted. It helps equipment keep running briefly or shut down in a controlled way.",
    description:
      "A UPS provides temporary backup power when the main supply is interrupted. It helps equipment keep running briefly or shut down in a controlled way.",
    images: [
      {
        src: "/images/catalogue/ups-battery-cabinet.webp",
        alt: "UPS and battery cabinet installation.",
        caption: "UPS and battery cabinet installation.",
      },
    ],
    sample: false,
    kind: "product",
    sourcePages: [27],
  },
  {
    slug: "telephone-exchange-system",
    area: "land",
    category: "communications-and-displays",
    name: "Telephone exchange system",
    summary:
      "A telephone exchange connects internal extensions and manages calls across an organisation. It brings everyday voice communications into a central system.",
    description:
      "A telephone exchange connects internal extensions and manages calls across an organisation. It brings everyday voice communications into a central system.",
    images: [
      {
        src: "/images/catalogue/telephone-exchange-system.webp",
        alt: "Telephone exchange distribution frame and cabling.",
        caption: "Telephone exchange distribution frame and cabling.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [28],
  },
  {
    slug: "lightning-protection-system",
    area: "land",
    category: "data-centre-and-power",
    name: "Lightning protection system",
    summary:
      "Lightning protection provides a planned path for electrical discharge around a structure. It forms part of a site protection approach for buildings and installed equipment.",
    description:
      "Lightning protection provides a planned path for electrical discharge around a structure. It forms part of a site protection approach for buildings and installed equipment.",
    images: [
      {
        src: "/images/catalogue/lightning-protection-panel.webp",
        alt: "Lightning protection system control cabinet.",
        caption: "Lightning protection system control cabinet.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [29],
  },
  {
    slug: "generator",
    area: "land",
    category: "data-centre-and-power",
    name: "Generator",
    summary:
      "A generator supplies an alternative source of electrical power when needed. It can support facilities and field installations during interruptions to the main supply.",
    description:
      "A generator supplies an alternative source of electrical power when needed. It can support facilities and field installations during interruptions to the main supply.",
    images: [
      {
        src: "/images/catalogue/generator-installation.webp",
        alt: "Outdoor generator installation under a protective shelter.",
        caption: "Outdoor generator installation under a protective shelter.",
      },
    ],
    sample: false,
    kind: "product",
    sourcePages: [30],
  },
  {
    slug: "mobile-disaster-recovery-site",
    area: "land",
    category: "data-centre-and-power",
    name: "Mobile disaster recovery site",
    summary:
      "A mobile disaster recovery site brings backup IT infrastructure into a transportable facility. It supports plans to restore essential systems when the primary site is unavailable.",
    description:
      "A mobile disaster recovery site brings backup IT infrastructure into a transportable facility. It supports plans to restore essential systems when the primary site is unavailable.",
    images: [
      {
        src: "/images/catalogue/mobile-dr-site-rack.webp",
        alt: "Equipment rack used for the mobile disaster-recovery site.",
        caption: "Equipment rack used for the mobile disaster-recovery site.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [31],
  },
  {
    slug: "conference-room",
    area: "land",
    category: "communications-and-displays",
    name: "Conference room systems",
    summary:
      "Integrated meeting-room equipment brings audio, video and presentation displays together. It supports clear communication for briefings, discussions and remote meetings.",
    description:
      "Integrated meeting-room equipment brings audio, video and presentation displays together. It supports clear communication for briefings, discussions and remote meetings.",
    images: [
      {
        src: "/images/catalogue/conference-room-av-ceiling.webp",
        alt: "Conference-room ceiling, lighting, and AV projector installation.",
        caption: "Conference-room ceiling, lighting, and AV projector installation.",
      },
      {
        src: "/images/catalogue/conference-room-display.webp",
        alt: "Conference room with multi-panel display wall.",
        caption: "Conference room with multi-panel display wall.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [32],
  },
  {
    slug: "mobile-surveillance-system",
    area: "land",
    category: "mobile-operations",
    name: "Mobile surveillance system",
    summary:
      "A mobile surveillance workspace brings monitoring equipment closer to a temporary operation. Operators can review camera views and coordinate activity from an equipped vehicle.",
    description:
      "A mobile surveillance workspace brings monitoring equipment closer to a temporary operation. Operators can review camera views and coordinate activity from an equipped vehicle.",
    images: [
      {
        src: "/images/catalogue/mobile-surveillance-system-operator.webp",
        alt: "Field operator using the mobile surveillance system.",
        caption: "Field operator using the mobile surveillance system.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [33],
  },
  {
    slug: "wifi-system",
    area: "land",
    category: "communications-and-displays",
    name: "Wi-Fi system",
    summary:
      "Wireless networking connects users and devices across a facility. Access points and supporting network equipment provide connectivity around the layout and use of the site.",
    description:
      "Wireless networking connects users and devices across a facility. Access points and supporting network equipment provide connectivity around the layout and use of the site.",
    images: [
      {
        src: "/images/catalogue/wifi-system-venue-exterior.webp",
        alt: "Exterior of the WiFi system project venue.",
        caption: "Exterior of the WiFi system project venue.",
      },
      {
        src: "/images/catalogue/wifi-system-venue-interior.webp",
        alt: "Interior hall covered by the WiFi system project.",
        caption: "Interior hall covered by the WiFi system project.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [34],
  },
  {
    slug: "control-room-led-display",
    area: "land",
    category: "communications-and-displays",
    name: "Control-room LED display",
    summary:
      "A large control-room display brings multiple sources of information into a shared view. It helps operators follow events and discuss the same operational picture.",
    description:
      "A large control-room display brings multiple sources of information into a shared view. It helps operators follow events and discuss the same operational picture.",
    images: [
      {
        src: "/images/catalogue/control-room-led-wall.webp",
        alt: "Large LED video wall installed in a control room.",
        caption: "Large LED video wall installed in a control room.",
      },
      {
        src: "/images/catalogue/control-room-led-wall-panorama.webp",
        alt: "Panoramic view of the completed control-room LED display.",
        caption: "Panoramic view of the completed control-room LED display.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [35, 36],
  },
  {
    slug: "led-display",
    area: "land",
    category: "communications-and-displays",
    name: "LED display",
    summary:
      "LED displays present visual information across a large viewing area. They can support presentations, shared monitoring views and information displays.",
    description:
      "LED displays present visual information across a large viewing area. They can support presentations, shared monitoring views and information displays.",
    images: [
      {
        src: "/images/catalogue/outdoor-led-display.webp",
        alt: "Outdoor LED display installation.",
        caption: "Outdoor LED display installation.",
      },
    ],
    sample: false,
    kind: "product",
    sourcePages: [37],
  },
  {
    slug: "thales-surveillance-radar",
    area: "land",
    category: "monitoring-and-site-security",
    name: "Thales surveillance radar",
    summary:
      "Surveillance radar supports the detection and monitoring of activity across an area. The company profile features Thales radar equipment as part of its surveillance offering.",
    description:
      "Surveillance radar supports the detection and monitoring of activity across an area. The company profile features Thales radar equipment as part of its surveillance offering.",
    images: [
      {
        src: "/images/catalogue/thales-surveillance-radar-equipment.webp",
        alt: "Thales surveillance radar equipment.",
        caption: "Thales surveillance radar equipment.",
      },
      {
        src: "/images/catalogue/thales-surveillance-radar-team.webp",
        alt: "Thales surveillance radar project delegation.",
        caption: "Thales surveillance radar project delegation.",
      },
    ],
    sample: false,
    kind: "product",
    sourcePages: [38],
  },
  {
    slug: "cambridge-pixel",
    area: "software",
    category: "radar-visualisation",
    name: "Cambridge Pixel",
    summary:
      "Radar visualisation software turns radar information into an operator display. Cambridge Pixel tools support the presentation and integration of radar data within monitoring systems.",
    description:
      "Radar visualisation software turns radar information into an operator display. Cambridge Pixel tools support the presentation and integration of radar data within monitoring systems.",
    images: [
      {
        src: "/images/catalogue/cambridge-pixel-radar-system.webp",
        alt: "Cambridge Pixel radar sensor and monitoring-display composition.",
        caption: "Cambridge Pixel radar sensor and monitoring-display composition.",
      },
      {
        src: "/images/catalogue/cambridge-pixel-radar-software.webp",
        alt: "Cambridge Pixel radar visualization software interface.",
        caption: "Cambridge Pixel radar visualization software interface.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [39],
  },
  {
    slug: "tdsi",
    area: "software",
    category: "access-and-video-management",
    name: "TDSi",
    summary:
      "Access-control management brings doors, credentials and access records into one system. TDSi solutions help teams manage who can enter controlled areas.",
    description:
      "Access-control management brings doors, credentials and access records into one system. TDSi solutions help teams manage who can enter controlled areas.",
    images: [
      {
        src: "/images/catalogue/tdsi-access-control-software.webp",
        alt: "TDSi access-control software interface shown on a laptop.",
        caption: "TDSi access-control software interface shown on a laptop.",
      },
      {
        src: "/images/catalogue/tdsi-access-control-hardware.webp",
        alt: "TDSi access-control controller hardware.",
        caption: "TDSi access-control controller hardware.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [40],
  },
  {
    slug: "mirasys",
    area: "software",
    category: "access-and-video-management",
    name: "Mirasys",
    summary:
      "Video management software brings live camera views and recorded footage into a common workspace. Mirasys supports operators in monitoring cameras and reviewing video events.",
    description:
      "Video management software brings live camera views and recorded footage into a common workspace. Mirasys supports operators in monitoring cameras and reviewing video events.",
    images: [
      {
        src: "/images/catalogue/mirasys-video-management-software.webp",
        alt: "Mirasys video management software interface.",
        caption: "Mirasys video management software interface.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [41],
  },
  {
    slug: "luxriot",
    area: "software",
    category: "access-and-video-management",
    name: "Luxriot",
    summary:
      "Video management software helps teams work with multiple camera feeds from one interface. Luxriot supports live monitoring and the review of recorded video.",
    description:
      "Video management software helps teams work with multiple camera feeds from one interface. Luxriot supports live monitoring and the review of recorded video.",
    images: [
      {
        src: "/images/catalogue/luxriot-video-management-software.webp",
        alt: "Luxriot video surveillance and management software interface.",
        caption: "Luxriot video surveillance and management software interface.",
      },
    ],
    sample: false,
    kind: "solution",
    sourcePages: [42],
  },
];
export const profileCategories: Category[] = [
  {
    slug: "airport-systems",
    area: "air",
    name: "Airport systems",
    description: "Communications, networks and monitoring for airport facilities.",
    images: [
      {
        src: "/images/catalogue/utapao-airport-site-model.webp",
        alt: "Site model for the U-Tapao airport project.",
        caption: "Site model for the U-Tapao airport project.",
      },
    ],
    sample: false,
  },
  {
    slug: "maritime-networks-and-command",
    area: "naval",
    name: "Maritime networks & command",
    description: "Communications infrastructure and mobile coordination for maritime operations.",
    images: [
      {
        src: "/images/catalogue/navy-network-radio-tower.webp",
        alt: "Navy Network communications tower.",
        caption: "Navy Network communications tower.",
      },
    ],
    sample: false,
  },
  {
    slug: "monitoring-and-site-security",
    area: "land",
    name: "Monitoring & site security",
    description: "Systems for observing activity, inspecting vehicles and managing site access.",
    images: [
      {
        src: "/images/catalogue/hydro-informatics-field-unit-01.webp",
        alt: "Solar-powered field monitoring unit for the Hydro Informatics Institute.",
        caption: "Solar-powered field monitoring unit for the Hydro Informatics Institute.",
      },
    ],
    sample: false,
  },
  {
    slug: "mobile-operations",
    area: "land",
    name: "Mobile operations",
    description: "Communications and monitoring workspaces that travel with a field team.",
    images: [
      {
        src: "/images/catalogue/mobile-vehicle-exterior.webp",
        alt: "Exterior view of the Panasonic-branded mobile system vehicle.",
        caption: "Exterior view of the Panasonic-branded mobile system vehicle.",
      },
    ],
    sample: false,
  },
  {
    slug: "data-centre-and-power",
    area: "land",
    name: "Data centre & power",
    description: "IT infrastructure, cooling, cabling and power systems for connected facilities.",
    images: [
      {
        src: "/images/catalogue/precision-air-cooling-room.webp",
        alt: "Precision cooling units installed in an equipment room.",
        caption: "Precision cooling units installed in an equipment room.",
      },
    ],
    sample: false,
  },
  {
    slug: "communications-and-displays",
    area: "land",
    name: "Communications & displays",
    description: "Voice, wireless connectivity and shared displays for working together.",
    images: [
      {
        src: "/images/catalogue/radio-system-control-center.webp",
        alt: "Radio system control center equipment room.",
        caption: "Radio system control center equipment room.",
      },
    ],
    sample: false,
  },
  {
    slug: "radar-visualisation",
    area: "software",
    name: "Radar visualisation",
    description: "Software for presenting and integrating radar information.",
    images: [
      {
        src: "/images/catalogue/cambridge-pixel-radar-system.webp",
        alt: "Cambridge Pixel radar sensor and monitoring-display composition.",
        caption: "Cambridge Pixel radar sensor and monitoring-display composition.",
      },
    ],
    sample: false,
  },
  {
    slug: "access-and-video-management",
    area: "software",
    name: "Access & video management",
    description: "Applications for managing controlled entry and video monitoring.",
    images: [
      {
        src: "/images/catalogue/tdsi-access-control-software.webp",
        alt: "TDSi access-control software interface shown on a laptop.",
        caption: "TDSi access-control software interface shown on a laptop.",
      },
    ],
    sample: false,
  },
];
