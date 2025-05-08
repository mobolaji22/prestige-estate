// Centralized mock data for the entire application

export interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  priceValue: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
  features: string[];
  details: {
    yearBuilt: number;
    lotSize: string;
    propertyType: string;
    neighborhood: string;
    parking: string;
    heating: string;
    cooling: string;
    basement: string;
    roof: string;
    exterior: string;
  };
  location: {
    lat: number;
    lng: number;
  };
  locationName: string; // New field for searchable location name
  hasVirtualTour: boolean;
  agent: Agent;
  featured?: boolean; // Add this line for the optional featured field
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  bio?: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface AvailableDate {
  date: string;
  formattedDate: string;
  dayOfWeek: string;
  slots: TimeSlot[];
}

// Mock Agents
export const agents: Agent[] = [
  {
    id: "agent1",
    name: "Sarah Johnson",
    title: "Luxury Property Specialist",
    phone: "(310) 555-1234",
    email: "sarah@prestigeestates.com",
    image: "/placeholder.svg?height=100&width=100",
    bio: "With over 10 years of experience in luxury real estate, Sarah specializes in high-end properties in the most desirable neighborhoods.",
  },
  {
    id: "agent2",
    name: "Michael Chen",
    title: "Senior Real Estate Advisor",
    phone: "(310) 555-5678",
    email: "michael@prestigeestates.com",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Michael has a background in architecture and brings a unique perspective to helping clients find their perfect home.",
  },
];

// Mock Properties
export const properties: Record<string, Property> = {
  prop1: {
    id: "prop1",
    title: "Modern Beachfront Villa",
    address: "123 Ocean Drive, Malibu, CA",
    price: "$4,500,000",
    priceValue: 4500000,
    description:
      "This stunning beachfront villa offers panoramic ocean views and luxurious living spaces. Featuring floor-to-ceiling windows, a gourmet kitchen, and a private infinity pool, this property embodies coastal elegance. The master suite includes a spa-like bathroom and private terrace overlooking the Pacific. Additional amenities include a home theater, wine cellar, and direct beach access.",
    bedrooms: 5,
    bathrooms: 6,
    squareFeet: 4200,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Beachfront Property",
      "Infinity Pool",
      "Home Theater",
      "Wine Cellar",
      "Gourmet Kitchen",
      "Smart Home Technology",
      "3-Car Garage",
      "Outdoor Kitchen",
      "Private Beach Access",
    ],
    details: {
      yearBuilt: 2018,
      lotSize: "0.5 acres",
      propertyType: "Single Family",
      neighborhood: "Malibu Beach",
      parking: "3-Car Garage",
      heating: "Central",
      cooling: "Central AC",
      basement: "Finished",
      roof: "Tile",
      exterior: "Stucco",
    },
    location: {
      lat: 34.025922,
      lng: -118.779757,
    },
    locationName: "Malibu Coast", // Added locationName
    hasVirtualTour: true,
    agent: agents[0],
  },
  prop2: {
    id: "prop2",
    title: "Luxury Penthouse",
    address: "456 Skyline Ave, Beverly Hills, CA",
    price: "$3,200,000",
    priceValue: 3200000,
    description:
      "Experience the height of luxury living in this stunning penthouse with panoramic city views. This meticulously designed residence features soaring ceilings, floor-to-ceiling windows, and a private rooftop terrace. The gourmet kitchen includes top-of-the-line appliances and custom cabinetry. The master suite offers a spa-like bathroom and walk-in closet. Building amenities include 24-hour concierge, fitness center, and rooftop pool.",
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 2800,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Panoramic City Views",
      "Private Rooftop Terrace",
      "Floor-to-Ceiling Windows",
      "Gourmet Kitchen",
      "Smart Home Technology",
      "24-Hour Concierge",
      "Fitness Center",
      "Rooftop Pool",
      "Wine Storage",
    ],
    details: {
      yearBuilt: 2020,
      lotSize: "N/A (Condo)",
      propertyType: "Condominium",
      neighborhood: "Beverly Hills",
      parking: "2 Reserved Spaces",
      heating: "Central",
      cooling: "Central AC",
      basement: "N/A",
      roof: "Flat",
      exterior: "Glass and Steel",
    },
    location: {
      lat: 34.07362,
      lng: -118.400352,
    },
    locationName: "Beverly Hills Central", // Added locationName
    hasVirtualTour: true,
    agent: agents[1],
  },
  prop3: {
    id: "prop3",
    title: "Contemporary Hillside Estate",
    address: "789 Summit Rd, Hollywood Hills, CA",
    price: "$7,900,000",
    priceValue: 7900000,
    description:
      "Perched high in the Hollywood Hills, this architectural masterpiece offers unparalleled views and privacy. The open-concept design features walls of glass that blur the line between indoor and outdoor living. The infinity pool seems to float above the city, while the outdoor entertaining areas are perfect for hosting gatherings of any size. The chef's kitchen includes custom cabinetry and professional-grade appliances. The master suite is a true retreat with a private terrace, fireplace, and luxurious bathroom.",
    bedrooms: 6,
    bathrooms: 8,
    squareFeet: 6500,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Panoramic City Views",
      "Infinity Pool",
      "Home Theater",
      "Wine Cellar",
      "Chef's Kitchen",
      "Smart Home Technology",
      "4-Car Garage",
      "Outdoor Entertainment Area",
      "Home Gym",
    ],
    details: {
      yearBuilt: 2015,
      lotSize: "1.2 acres",
      propertyType: "Single Family",
      neighborhood: "Hollywood Hills",
      parking: "4-Car Garage",
      heating: "Radiant",
      cooling: "Central AC",
      basement: "Finished with Theater",
      roof: "Flat",
      exterior: "Glass and Stone",
    },
    location: {
      lat: 34.134117,
      lng: -118.321495,
    },
    locationName: "Hollywood Hills View Estates", // Added locationName
    hasVirtualTour: false,
    agent: agents[0],
  },
  prop4: {
    id: "prop4",
    title: "Elegant Downtown Loft",
    address: "101 Arts District, Los Angeles, CA",
    price: "$1,850,000",
    priceValue: 1850000,
    description:
      "This stunning loft in the heart of the Arts District combines industrial charm with modern luxury. The open floor plan features soaring ceilings, exposed brick walls, and original hardwood floors. The chef's kitchen includes custom cabinetry, stone countertops, and high-end appliances. The spacious master suite offers a walk-in closet and a spa-like bathroom. Additional features include large windows that flood the space with natural light, a private balcony, and secure parking.",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1800,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Exposed Brick Walls",
      "Soaring Ceilings",
      "Original Hardwood Floors",
      "Chef's Kitchen",
      "Private Balcony",
      "Secure Parking",
      "In-Unit Laundry",
      "Building Security",
      "Rooftop Access",
    ],
    details: {
      yearBuilt: 2010,
      lotSize: "N/A (Loft)",
      propertyType: "Loft",
      neighborhood: "Arts District",
      parking: "1 Reserved Space",
      heating: "Forced Air",
      cooling: "Central AC",
      basement: "N/A",
      roof: "Flat",
      exterior: "Brick",
    },
    location: {
      lat: 34.040713,
      lng: -118.231481,
    },
    locationName: "Downtown LA Arts District", // Added locationName
    hasVirtualTour: false,
    agent: agents[1],
  },
  prop5: {
    // New property
    id: "prop5",
    title: "Charming Suburban Home",
    address: "456 Oak Lane, Pasadena, CA",
    price: "$1,200,000",
    priceValue: 1200000,
    description:
      "A beautiful family home in a quiet Pasadena neighborhood, featuring a large backyard and modern amenities. Close to parks and excellent schools.",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2500,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Large Backyard",
      "Modern Kitchen",
      "Family Friendly",
      "Two-Car Garage",
      "Quiet Neighborhood",
      "Near Parks",
    ],
    details: {
      yearBuilt: 1995,
      lotSize: "0.25 acres",
      propertyType: "Single Family",
      neighborhood: "Pasadena Oaks",
      parking: "2-Car Garage",
      heating: "Central",
      cooling: "Central AC",
      basement: "None",
      roof: "Shingle",
      exterior: "Siding",
    },
    location: {
      lat: 34.1478, // Approx Pasadena
      lng: -118.1445,
    },
    locationName: "Pasadena Residential",
    hasVirtualTour: false,
    agent: agents[0],
  },
  prop6: {
    // New property
    id: "prop6",
    title: "Urban Studio Apartment",
    address: "789 City Center Blvd, Apt 12B, Long Beach, CA",
    price: "$650,000",
    priceValue: 650000,
    description:
      "A sleek and modern studio apartment in the vibrant downtown Long Beach area, perfect for city living. Includes access to building amenities and stunning city views.",
    bedrooms: 1, // Studio, can be 0 or 1 depending on definition
    bathrooms: 1,
    squareFeet: 750,
    images: ["/placeholder.svg?height=600&width=800"],
    features: [
      "City Views",
      "Modern Design",
      "Building Gym",
      "Close to Public Transport",
      "Concierge Service",
    ],
    details: {
      yearBuilt: 2015,
      lotSize: "N/A (Apartment)",
      propertyType: "Apartment",
      neighborhood: "Downtown Long Beach",
      parking: "1 Assigned Spot",
      heating: "Electric",
      cooling: "Wall Unit AC",
      basement: "N/A",
      roof: "Flat",
      exterior: "Concrete",
    },
    location: {
      lat: 33.7701, // Approx Long Beach
      lng: -118.1937,
    },
    locationName: "Long Beach Downtown",
    hasVirtualTour: true,
    agent: agents[1],
  },
  prop7: {
    id: "prop7",
    title: "Rustic Mountain Cabin",
    address: "12 Bear Creek Road, Big Bear Lake, CA",
    price: "$850,000",
    priceValue: 850000,
    description:
      "Escape to this charming rustic cabin nestled in the mountains of Big Bear Lake. Features a cozy fireplace, wooden interiors, and stunning forest views. Perfect for a weekend getaway or a nature lover's retreat. Includes a spacious deck for outdoor entertaining and close proximity to hiking trails and ski resorts.",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Mountain Views",
      "Wood-Burning Fireplace",
      "Large Deck",
      "Close to Ski Resorts",
      "Hiking Trails Nearby",
      "Quiet and Secluded",
    ],
    details: {
      yearBuilt: 1985,
      lotSize: "1 acre",
      propertyType: "Cabin",
      neighborhood: "Big Bear Woods",
      parking: "Driveway (2 cars)",
      heating: "Propane Stove & Electric",
      cooling: "None (Mountain Air)",
      basement: "Crawl Space",
      roof: "Asphalt Shingle",
      exterior: "Log Siding",
    },
    location: {
      lat: 34.2439, // Approx Big Bear Lake
      lng: -116.9114,
    },
    locationName: "Big Bear Lake Mountain Retreat",
    hasVirtualTour: false,
    agent: agents[0],
  },
  prop8: {
    id: "prop8",
    title: "Modern Townhouse in Irvine",
    address: "321 Innovation Way, Irvine, CA",
    price: "$980,000",
    priceValue: 980000,
    description:
      "Sleek and contemporary townhouse located in a desirable Irvine community. Features an open floor plan, high-end finishes, and smart home technology. Community amenities include a pool, clubhouse, and parks. Close to top-rated schools and shopping centers.",
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2200,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Community Pool",
      "Smart Home Technology",
      "Open Floor Plan",
      "Gourmet Kitchen",
      "Attached 2-Car Garage",
      "Private Patio",
      "Top-Rated Schools",
    ],
    details: {
      yearBuilt: 2019,
      lotSize: "N/A (Townhouse)",
      propertyType: "Townhouse",
      neighborhood: "Irvine Spectrum",
      parking: "Attached 2-Car Garage",
      heating: "Central",
      cooling: "Central AC",
      basement: "None",
      roof: "Tile",
      exterior: "Stucco & Stone",
    },
    location: {
      lat: 33.6846, // Approx Irvine
      lng: -117.8265,
    },
    locationName: "Irvine Tech Corridor",
    hasVirtualTour: true,
    agent: agents[1],
  },
  prop9: {
    id: "prop9",
    title: "Historic Victorian Home",
    address: "789 Heritage Lane, San Francisco, CA",
    price: "$2,750,000",
    priceValue: 2750000,
    description:
      "A beautifully preserved Victorian home in a historic San Francisco neighborhood. Boasts original architectural details, high ceilings, and a charming garden. Updated kitchen and bathrooms blend modern convenience with classic style. Walking distance to parks and local cafes.",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Original Victorian Details",
      "High Ceilings",
      "Landscaped Garden",
      "Modern Updated Kitchen",
      "Bay Windows",
      "Hardwood Floors",
      "Prime SF Location",
    ],
    details: {
      yearBuilt: 1890,
      lotSize: "3,000 sqft",
      propertyType: "Single Family",
      neighborhood: "Pacific Heights",
      parking: "Street Parking (Permit)",
      heating: "Radiator",
      cooling: "None (Coastal Breeze)",
      basement: "Partial, Unfinished",
      roof: "Slate",
      exterior: "Wood Siding",
    },
    location: {
      lat: 37.792, // Approx Pacific Heights, SF
      lng: -122.436,
    },
    locationName: "San Francisco Pacific Heights",
    hasVirtualTour: false,
    agent: agents[0],
  },
  prop10: {
    id: "prop10",
    title: "Charming Suburban Home",
    address: "101 Maple Street, Pleasantville, CA",
    price: "$850,000",
    priceValue: 850000,
    description: "A lovely suburban home perfect for families, featuring a spacious yard and modern updates. Close to schools and parks.",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2200,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Spacious Yard", "Modern Kitchen", "Family Room", "Two-Car Garage", "Hardwood Floors"],
    details: {
      yearBuilt: 1995,
      lotSize: "0.25 acres",
      propertyType: "Single Family",
      neighborhood: "Green Valley",
      parking: "2-Car Attached Garage",
      heating: "Central Forced Air",
      cooling: "Central AC",
      basement: "None",
      roof: "Composition Shingle",
      exterior: "Siding",
    },
    location: { lat: 34.1672, lng: -118.9817 }, // Approx Pleasantville/Thousand Oaks
    locationName: "Pleasantville",
    hasVirtualTour: true,
    agent: agents[0],
    featured: false,
  },
  prop11: {
    id: "prop11",
    title: "Urban Loft with City Views",
    address: "202 Central Ave, Downtown, CA",
    price: "$1,200,000",
    priceValue: 1200000,
    description: "Stylish urban loft in the heart of downtown, offering stunning city views and modern amenities. Exposed brick and high ceilings.",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1500,
    images: ["/placeholder.svg?height=400&width=600"],
    features: ["City Views", "Exposed Brick", "High Ceilings", "Rooftop Deck Access", "Fitness Center"],
    details: {
      yearBuilt: 2010,
      lotSize: "N/A",
      propertyType: "Loft",
      neighborhood: "Arts District",
      parking: "1 Secured Space",
      heating: "Central",
      cooling: "Central AC",
      basement: "N/A",
      roof: "Flat",
      exterior: "Brick and Steel",
    },
    location: { lat: 34.0407, lng: -118.2369 }, // Approx Arts District LA
    locationName: "Downtown",
    hasVirtualTour: false,
    agent: agents[1],
    featured: true,
  },
  prop12: {
    id: "prop12",
    title: "Rustic Mountain Cabin",
    address: "303 Pine Ridge, Big Bear, CA",
    price: "$650,000",
    priceValue: 650000,
    description: "Cozy mountain cabin perfect for getaways. Features a stone fireplace, large deck, and serene forest surroundings.",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Stone Fireplace", "Large Deck", "Forest Views", "Near Skiing", "Hiking Trails"],
    details: {
      yearBuilt: 1980,
      lotSize: "1 acre",
      propertyType: "Cabin",
      neighborhood: "Forest Highlands",
      parking: "Driveway (3+ cars)",
      heating: "Wood Stove & Propane",
      cooling: "Ceiling Fans",
      basement: "Crawl Space",
      roof: "Metal",
      exterior: "Wood Siding",
    },
    location: { lat: 34.2439, lng: -116.9114 }, // Approx Big Bear Lake
    locationName: "Big Bear",
    hasVirtualTour: true,
    agent: agents[0],
    featured: false,
  },
  prop13: {
    id: "prop13",
    title: "Modern Glass House",
    address: "404 Hilltop Dr, Hollywood Hills, CA",
    price: "$6,200,000",
    priceValue: 6200000,
    description: "Spectacular modern home with walls of glass offering panoramic views. Infinity pool and high-end finishes throughout.",
    bedrooms: 5,
    bathrooms: 5.5,
    squareFeet: 5000,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Panoramic Views", "Infinity Pool", "Smart Home System", "Gourmet Kitchen", "Home Theater"],
    details: {
      yearBuilt: 2022,
      lotSize: "0.75 acres",
      propertyType: "Single Family",
      neighborhood: "Sunset Plaza",
      parking: "3-Car Garage",
      heating: "Radiant Floor",
      cooling: "Multi-Zone AC",
      basement: "Finished Entertainment Area",
      roof: "Flat",
      exterior: "Glass and Stucco",
    },
    location: { lat: 34.0984, lng: -118.3615 }, // Approx Hollywood Hills
    locationName: "Hollywood Hills",
    hasVirtualTour: true,
    agent: agents[1],
    featured: true,
  },
  prop14: {
    id: "prop14",
    title: "Cozy Beach Cottage",
    address: "505 Shoreline Rd, Santa Cruz, CA",
    price: "$980,000",
    priceValue: 980000,
    description: "Charming beach cottage just steps from the sand. Perfect for a relaxed coastal lifestyle, with a private patio and ocean breezes.",
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 950,
    images: ["/placeholder.svg?height=400&width=600"],
    features: ["Steps to Beach", "Private Patio", "Ocean Breezes", "Updated Kitchen", "Outdoor Shower"],
    details: {
      yearBuilt: 1965,
      lotSize: "5000 sqft",
      propertyType: "Cottage",
      neighborhood: "Seabright",
      parking: "Driveway (1 car)",
      heating: "Wall Furnace",
      cooling: "None (Ocean Breeze)",
      basement: "None",
      roof: "Composition Shingle",
      exterior: "Wood Shingle",
    },
    location: { lat: 36.9636, lng: -121.9931 }, // Approx Santa Cruz Seabright
    locationName: "Santa Cruz",
    hasVirtualTour: false,
    agent: agents[0],
    featured: false,
  },
  prop15: {
    id: "prop15",
    title: "Sprawling Ranch Estate",
    address: "606 Country Lane, Ojai, CA",
    price: "$3,500,000",
    priceValue: 3500000,
    description: "Expansive ranch estate on several acres, offering privacy, horse facilities, and stunning mountain views. Includes a guest house.",
    bedrooms: 6,
    bathrooms: 5,
    squareFeet: 5500,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Mountain Views", "Horse Facilities", "Guest House", "Swimming Pool", "Tennis Court", "Large Acreage"],
    details: {
      yearBuilt: 2005,
      lotSize: "5 acres",
      propertyType: "Ranch",
      neighborhood: "East End",
      parking: "4+ Car Garage & Carport",
      heating: "Central Forced Air",
      cooling: "Multi-Zone AC",
      basement: "Partial",
      roof: "Tile",
      exterior: "Stucco and Stone",
    },
    location: { lat: 34.4483, lng: -119.2429 }, // Approx Ojai
    locationName: "Ojai",
    hasVirtualTour: true,
    agent: agents[1],
    featured: true,
  },
  prop16: {
    id: "prop16",
    title: "Sleek Downtown Condo",
    address: "707 Highrise Blvd, Los Angeles, CA",
    price: "$1,750,000",
    priceValue: 1750000,
    description: "Luxurious condominium in a premier downtown high-rise. Floor-to-ceiling windows, resort-style amenities, and walkability.",
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1900,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Floor-to-Ceiling Windows", "City Views", "Concierge Service", "Rooftop Pool", "Fitness Center"],
    details: {
      yearBuilt: 2018,
      lotSize: "N/A",
      propertyType: "Condominium",
      neighborhood: "South Park",
      parking: "2 Assigned Spaces",
      heating: "Central",
      cooling: "Central AC",
      basement: "N/A",
      roof: "Flat",
      exterior: "Glass and Concrete",
    },
    location: { lat: 34.0428, lng: -118.2586 }, // Approx South Park LA
    locationName: "Los Angeles",
    hasVirtualTour: true,
    agent: agents[0],
    featured: false,
  },
  prop17: {
    id: "prop17",
    title: "Historic Victorian Home",
    address: "808 Heritage Way, Pasadena, CA",
    price: "$2,100,000",
    priceValue: 2100000,
    description: "Beautifully restored Victorian home with original details and modern comforts. Located in a charming historic district.",
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 3800,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Original Woodwork", "Stained Glass Windows", "Wrap-Around Porch", "Landscaped Gardens", "Updated Systems"],
    details: {
      yearBuilt: 1902,
      lotSize: "0.3 acres",
      propertyType: "Victorian",
      neighborhood: "Old Town",
      parking: "Detached 2-Car Garage",
      heating: "Central Forced Air",
      cooling: "Central AC (newer)",
      basement: "Partial, Unfinished",
      roof: "Slate",
      exterior: "Wood Siding",
    },
    location: { lat: 34.1450, lng: -118.1390 }, // Approx Old Town Pasadena
    locationName: "Pasadena",
    hasVirtualTour: false,
    agent: agents[1],
    featured: false,
  },
  prop18: {
    id: "prop18",
    title: "Eco-Friendly Modern Home",
    address: "909 Greenleaf Ave, Topanga, CA",
    price: "$2,900,000",
    priceValue: 2900000,
    description: "Stunning eco-friendly home with sustainable materials, solar panels, and breathtaking canyon views. Designed for harmony with nature.",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: ["Canyon Views", "Solar Panels", "Sustainable Materials", "Drought-Tolerant Landscaping", "Indoor-Outdoor Flow"],
    details: {
      yearBuilt: 2020,
      lotSize: "1.5 acres",
      propertyType: "Single Family",
      neighborhood: "Canyon View",
      parking: "2-Car Carport",
      heating: "Electric Heat Pump",
      cooling: "Passive Cooling & AC",
      basement: "None",
      roof: "Living Roof / Metal",
      exterior: "Reclaimed Wood & Stucco",
    },
    location: { lat: 34.0937, lng: -118.6059 }, // Approx Topanga
    locationName: "Topanga",
    hasVirtualTour: true,
    agent: agents[0],
    featured: true,
  },
  prop19: {
    id: "prop19",
    title: "Luxury Townhouse",
    address: "1010 Parkside Pl, Irvine, CA",
    price: "$1,500,000",
    priceValue: 1500000,
    description: "Elegant townhouse in a desirable Irvine community, featuring high-end finishes, a private patio, and access to community amenities.",
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2400,
    images: ["/placeholder.svg?height=400&width=600"],
    features: ["Community Pool & Spa", "Gourmet Kitchen", "Private Patio", "Attached Garage", "Walk to Parks"],
    details: {
      yearBuilt: 2015,
      lotSize: "N/A",
      propertyType: "Townhouse",
      neighborhood: "Woodbridge",
      parking: "2-Car Attached Garage",
      heating: "Central",
      cooling: "Central AC",
      basement: "None",
      roof: "Tile",
      exterior: "Stucco",
    },
    location: { lat: 33.6780, lng: -117.8321 }, // Approx Woodbridge Irvine
    locationName: "Irvine",
    hasVirtualTour: true,
    agent: agents[1],
    featured: false,
  },
};

// Generate available dates for property viewings (next 7 days)
export const generateAvailableDates = (): AvailableDate[] => {
  const dates: AvailableDate[] = [];
  const today = new Date();

  const timeSlots: TimeSlot[] = [
    { id: "1", time: "9:00 AM", available: true },
    { id: "2", time: "10:00 AM", available: true },
    { id: "3", time: "11:00 AM", available: true },
    { id: "4", time: "1:00 PM", available: true },
    { id: "5", time: "2:00 PM", available: true },
    { id: "6", time: "3:00 PM", available: true },
    { id: "7", time: "4:00 PM", available: true },
  ];

  // Create random availability for each time slot
  const getRandomSlots = () => {
    return timeSlots.map((slot) => ({
      ...slot,
      available: Math.random() > 0.3, // 70% chance of being available
    }));
  };

  // Generate dates for the next 7 days
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);

    dates.push({
      date: date.toISOString().split("T")[0],
      formattedDate,
      dayOfWeek,
      slots: getRandomSlots(),
    });
  }

  return dates;
};

// Function to get a property by ID
export const getPropertyById = (id: string): Property | null => {
  return properties[id] || null;
};
