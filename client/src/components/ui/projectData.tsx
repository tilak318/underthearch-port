export interface ProjectImage {
  url: string;
  caption: string;
  // Adding responsive image URLs
  thumbnailUrl?: string; // Smaller version for cards
  fullUrl?: string; // Full size for gallery
}

export interface ProjectDetails {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  client: string;
  location: string;
  area: string;
  mainImage: string;
  // Adding responsive main image URLs
  mainImageSmall?: string; // For mobile devices
  mainImageMedium?: string; // For tablets
  mainImageLarge?: string; // For desktop
  gallery: ProjectImage[];
  challenge: string;
  solution: string;
}

export const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: "The White Abode",
    category: "Residential",
    year: "2023",
    description: "A sleek residential project featuring clean lines and open spaces, designed to maximize natural light and create a seamless indoor-outdoor living experience.",
    client: "John & Sarah Smith",
    location: "Beverly Hills, CA",
    area: "4,500 sq ft",
    mainImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    // Optional responsive image URLs
    mainImageSmall: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=640&q=80",
    mainImageMedium: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1080&q=80",
    mainImageLarge: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        caption: "Modern Living Room with Floor-to-Ceiling Windows",
        thumbnailUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
        fullUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        caption: "Gourmet Kitchen with Island",
        thumbnailUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&q=80",
        fullUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=90"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        caption: "Master Suite with Private Terrace",
        thumbnailUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80",
        fullUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=90"
      }
    ],
    challenge: "Creating a modern living space that maintains privacy while maximizing natural light and views.",
    solution: "Implemented smart glass technology, strategic landscaping, and a flowing floor plan that connects indoor and outdoor spaces seamlessly."
  },
  // ... Rest of your projects following the same pattern



    {
      id: 2,
      title: "The Seraphic",
      category: "Commercial",
      year: "2022",
      description: "A contemporary commercial space designed for optimal workflow and employee well-being in the heart of the business district.",
      client: "Seraphic Industries Corp",
      location: "Manhattan, NY",
      area: "12,000 sq ft",
      mainImage: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
          caption: "Open Plan Office Space"
        },
        {
          url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
          caption: "Executive Conference Room"
        },
        {
          url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
          caption: "Collaborative Work Areas"
        }
      ],
      challenge: "Designing a space that promotes collaboration while maintaining individual focus areas in a limited footprint.",
      solution: "Created flexible workspaces with acoustic treatments and implemented a hot-desking system with dedicated quiet zones."
    },
    {
      id: 3,
      title: "Bhalala's",
      category: "Cultural",
      year: "2023",
      description: "An immersive cultural center designed to showcase artistic expression and cultural heritage through interactive spaces.",
      client: "Bhalala Cultural Foundation",
      location: "Austin, TX",
      area: "15,000 sq ft",
      mainImage: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
          caption: "Main Exhibition Hall"
        },
        {
          url: "https://images.unsplash.com/photo-1460471652280-e3c30f911637",
          caption: "Performance Space"
        },
        {
          url: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212",
          caption: "Interactive Gallery"
        }
      ],
      challenge: "Creating flexible spaces that can accommodate various types of exhibitions and cultural events.",
      solution: "Designed modular exhibition spaces with state-of-the-art lighting and acoustic systems."
    },
    {
      id: 4,
      title: "Rasam Fashion",
      category: "Residential",
      year: "2022",
      description: "An exclusive residential development combining luxury living with sustainable design principles.",
      client: "Rasam Developments",
      location: "Miami, FL",
      area: "8,200 sq ft",
      mainImage: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1600566753376-12c8ab8c09f1",
          caption: "Infinity Pool and Lounge"
        },
        {
          url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
          caption: "Designer Kitchen"
        },
        {
          url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
          caption: "Private Garden"
        }
      ],
      challenge: "Integrating luxury amenities while maintaining energy efficiency and sustainability.",
      solution: "Incorporated solar panels, rainwater harvesting, and smart home technology throughout the property."
    },
    {
      id: 5,
      title: "Sensitive Forge",
      category: "Commercial",
      year: "2021",
      description: "A sophisticated office complex designed for a leading tech company with focus on innovation and collaboration.",
      client: "TechForge Industries",
      location: "Seattle, WA",
      area: "20,000 sq ft",
      mainImage: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
          caption: "Innovation Lab"
        },
        {
          url: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
          caption: "Collaborative Workspace"
        },
        {
          url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
          caption: "Relaxation Area"
        }
      ],
      challenge: "Creating a workspace that fosters innovation while maintaining security and privacy.",
      solution: "Implemented zones with varying security levels and flexible meeting spaces with advanced tech integration."
    },
    {
      id: 6,
      title: "Avadh House",
      category: "Public",
      year: "2023",
      description: "A community-focused library that blends traditional architecture with modern technology and accessibility.",
      client: "Avadh City Council",
      location: "Portland, OR",
      area: "25,000 sq ft",
      mainImage: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
          caption: "Reading Room"
        },
        {
          url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
          caption: "Digital Media Center"
        },
        {
          url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
          caption: "Community Meeting Space"
        }
      ],
      challenge: "Creating an inclusive space that serves diverse community needs while preserving historical elements.",
      solution: "Restored historical features while adding modern amenities and technology infrastructure."
    },
    {
      id: 7,
      title: "Laxmi Ratan",
      category: "Commercial",
      year: "2022",
      description: "An eco-friendly office building with cutting-edge sustainable features and modern workspace solutions.",
      client: "Laxmi Ratan Enterprises",
      location: "Chicago, IL",
      area: "18,000 sq ft",
      mainImage: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
          caption: "Green Roof Garden"
        },
        {
          url: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
          caption: "Solar Panel Installation"
        },
        {
          url: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
          caption: "Energy Efficient Lighting"
        }
      ],
      challenge: "Achieving LEED Platinum certification while creating an inspiring workplace.",
      solution: "Integrated renewable energy systems, green spaces, and sustainable materials throughout the building."
    },
    {
      id: 8,
      title: "My Mall",
      category: "Cultural",
      year: "2021",
      description: "A modern museum space designed to create an immersive visitor experience with interactive exhibitions.",
      client: "City Arts Foundation",
      location: "San Francisco, CA",
      area: "30,000 sq ft",
      mainImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
          caption: "Main Gallery"
        },
        {
          url: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
          caption: "Interactive Exhibits"
        },
        {
          url: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
          caption: "Multimedia Theater"
        }
      ],
      challenge: "Creating flexible exhibition spaces that can accommodate both traditional and digital art.",
      solution: "Implemented modular display systems and integrated advanced projection mapping technology."
    }
  ];

  // Helper function to get responsive image URL based on screen size
export const getResponsiveImageUrl = (project: ProjectDetails, screenWidth: number): string => {
  if (screenWidth <= 640 && project.mainImageSmall) {
    return project.mainImageSmall;
  } else if (screenWidth <= 1024 && project.mainImageMedium) {
    return project.mainImageMedium;
  } else if (project.mainImageLarge) {
    return project.mainImageLarge;
  }
  return project.mainImage;
};

// Helper function to get gallery image URL based on view type
export const getGalleryImageUrl = (image: ProjectImage, isThumb: boolean = true): string => {
  if (isThumb && image.thumbnailUrl) {
    return image.thumbnailUrl;
  } else if (!isThumb && image.fullUrl) {
    return image.fullUrl;
  }
  return image.url;
};