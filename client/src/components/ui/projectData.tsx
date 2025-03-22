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
 // ... previous interfaces remain the same ...


  {
    id: 1,
    title: "The White Abode",
    category: "Residential",
    year: "2023",
    description: "A SYMPHONY OF SERENITY: The timelessness of white and a dance of details. This design journey explores the delicate balance between luxury and simplicity, where a symphony of pastel and gold accents, elegant design, and the eternal appeal of architectural arches are set above a calm white canvas. The interplay between white, pastels, and gold results in a space that radiates luxury with a touch of extravagance.",
    client: "Private Metal Industry Professional",
    location: "Beverly Hills, CA",
    area: "4,500 sq ft",
    mainImage: "Portfolio/The_White_Abode/13.jpg",
    mainImageSmall: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=640&q=80",
    mainImageMedium: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1080&q=80",
    mainImageLarge: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        caption: "Living Room: A harmonious blend of minimalism and luxury with architectural arches",
        thumbnailUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
        fullUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        caption: "Bedroom: Opulent sanctuary with bespoke headboard and gold accents",
        thumbnailUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&q=80",
        fullUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=90"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        caption: "Kitchen & Dining: Seamless integration with understated hues",
        thumbnailUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80",
        fullUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=90"
      }
    ],
    challenge: "The client sought a design concept that would foster a peaceful environment while aligning with his connection to the metal industry. The challenge was to create a space that exudes strength while maintaining calmness, integrating industrial elements with luxury and comfort.",
    solution: "We implemented a sophisticated design approach featuring architectural arches, clean lines, and a carefully curated color palette of whites, pastels, and gold accents. The juxtaposition of sleek metal finishes against soft, tactile fabrics creates a tactile symphony throughout the space. Strategic placement of arches and grooved wall details adds depth and character while maintaining minimalist principles."
  },
  

    {
      id: 2,
      title: "The Seraphic",
      category: "Commercial",
      year: "2022",
      description: "A contemporary commercial space designed for optimal workflow and employee well-being in the heart of the business district.",
      client: "Seraphic Industries Corp",
      location: "Manhattan, NY",
      area: "12,000 sq ft",
      mainImage: "Portfolio/The_Seraphic/4.jpg",
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
      title: "The Inner Coterie",
      category: "Cultural",
      year: "2023",
      description: "Step into a haven of subtle elegance where all the details exude calm and sophistication. The harmony between form and function is evident in this carefully crafted space, where soft curves and organic shapes blend with copper accents to create a compelling visual narrative. The design captures the spirit of minimalism while maintaining warmth and intimacy, offering a quiet atmosphere that invites one to relax and appreciate the elegance of simplicity.",
      client: "Private Residential Client",
      location: "Austin, TX",
      area: "15,000 sq ft",
      mainImage: "Portfolio/Bhalala's/11.jpg",
      mainImageSmall: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=640&q=80",
      mainImageMedium: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1080&q=80",
      mainImageLarge: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1920&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
          caption: "Living Space: Sweeping curves and organic shapes create a harmonious flow",
          thumbnailUrl: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=400&q=80",
          fullUrl: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1920&q=90"
        },
        {
          url: "https://images.unsplash.com/photo-1460471652280-e3c30f911637",
          caption: "Material Palette: Rich marble and wood textures with copper accents",
          thumbnailUrl: "https://images.unsplash.com/photo-1460471652280-e3c30f911637?w=400&q=80",
          fullUrl: "https://images.unsplash.com/photo-1460471652280-e3c30f911637?w=1920&q=90"
        },
        {
          url: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212",
          caption: "Lighting Design: Elegant installations creating depth and dimension",
          thumbnailUrl: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&q=80",
          fullUrl: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=1920&q=90"
        }
      ],
      challenge: "Creating a space that balances minimalist design principles with warmth and intimacy, while incorporating organic shapes and curves throughout the interior. The challenge was to maintain visual coherence while integrating various textures, materials, and subtle color variations.",
      solution: "We implemented a thoughtfully curated material palette featuring marble, wood, and copper accents, complemented by a sophisticated color scheme of soft greys, milky whites, and earthy neutrals. The design incorporates sweeping curves and organic shapes throughout the space, from furniture to decorative elements, creating a cohesive visual narrative. Elegant light installations and metal elements were strategically placed to add modern sophistication while maintaining the warm atmosphere."
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
      mainImage: "Portfolio/Rasam_Fashion/10.jpg",
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
      mainImage: "Portfolio/Sensitive_Forge/8.png",
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
      mainImage: "Portfolio/Avadh_House/6.png",
      gallery: [
        {
          url: "Portfolio/Avadh_House/6.jpg",
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
      mainImage: "/Portfolio/Laxmi_Ratan/6.png",
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