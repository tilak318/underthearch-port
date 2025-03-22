export interface ProjectImage {
  url: string;
  caption: string;
  thumbnailUrl?: string;
  fullUrl?: string;
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
  mainImageSmall?: string;
  mainImageMedium?: string;
  mainImageLarge?: string;
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
    description: "A SYMPHONY OF SERENITY: The timelessness of white and a dance of details. This design journey explores the delicate balance between luxury and simplicity, where a symphony of pastel and gold accents, elegant design, and the eternal appeal of architectural arches are set above a calm white canvas. The interplay between white, pastels, and gold results in a space that radiates luxury with a touch of extravagance.",
    client: "Private Metal Industry Professional",
    location: "Beverly Hills, CA",
    area: "4,500 sq ft",
    mainImage: "/Portfolio/The_White_Abode/13.jpg",
    mainImageSmall: "/Portfolio/The_White_Abode/13.jpg",
    mainImageMedium: "/Portfolio/The_White_Abode/13.jpg",
    mainImageLarge: "/Portfolio/The_White_Abode/13.jpg",
    gallery: [
      {
        url: "/Portfolio/The_White_Abode/1.jpg",
        caption: "Interior View - Living Space"
      },
      {
        url: "/Portfolio/The_White_Abode/2.jpg",
        caption: "Interior View - Bedroom"
      },
      {
        url: "/Portfolio/The_White_Abode/3.jpg",
        caption: "Interior View - Dining Area"
      },
      {
        url: "/Portfolio/The_White_Abode/4.jpg",
        caption: "Interior View - Kitchen"
      },
      {
        url: "/Portfolio/The_White_Abode/5.jpg",
        caption: "Interior View - Master Suite"
      },
      {
        url: "/Portfolio/The_White_Abode/6.jpg",
        caption: "Interior View - Bathroom"
      },
      {
        url: "/Portfolio/The_White_Abode/7.jpg",
        caption: "Interior View - Study Room"
      },
      {
        url: "/Portfolio/The_White_Abode/8.jpg",
        caption: "Interior View - Living Room Detail"
      },
      {
        url: "/Portfolio/The_White_Abode/9.jpg",
        caption: "Interior View - Hallway"
      },
      {
        url: "/Portfolio/The_White_Abode/10.jpg",
        caption: "Interior View - Entertainment Area"
      },
      {
        url: "/Portfolio/The_White_Abode/11.jpg",
        caption: "Interior View - Guest Room"
      },
      {
        url: "/Portfolio/The_White_Abode/12.jpg",
        caption: "Interior View - Powder Room"
      },
      {
        url: "/Portfolio/The_White_Abode/14.jpg",
        caption: "Interior View - Family Room"
      },
      {
        url: "/Portfolio/The_White_Abode/15.jpg",
        caption: "Interior View - Dining Detail"
      },
      {
        url: "/Portfolio/The_White_Abode/16.jpg",
        caption: "Interior View - Kitchen Detail"
      },
      {
        url: "/Portfolio/The_White_Abode/17.jpg",
        caption: "Interior View - Master Bathroom"
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
    mainImage: "/Portfolio/The_Seraphic/4.jpg",
    gallery: [
      {
        url: "/Portfolio/The_Seraphic/1.jpg",
        caption: "Commercial Space - Reception"
      },
      {
        url: "/Portfolio/The_Seraphic/2.jpg",
        caption: "Commercial Space - Office Area"
      },
      {
        url: "/Portfolio/The_Seraphic/3.jpg",
        caption: "Commercial Space - Meeting Room"
      },
      {
        url: "/Portfolio/The_Seraphic/5.jpg",
        caption: "Commercial Space - Collaboration Area"
      },
      {
        url: "/Portfolio/The_Seraphic/6.jpg",
        caption: "Commercial Space - Break Room"
      },
      {
        url: "/Portfolio/The_Seraphic/7.jpg",
        caption: "Commercial Space - Executive Office"
      },
      {
        url: "/Portfolio/The_Seraphic/8.jpg",
        caption: "Commercial Space - Conference Room"
      },
      {
        url: "/Portfolio/The_Seraphic/9.jpg",
        caption: "Commercial Space - Workspace"
      },
      {
        url: "/Portfolio/The_Seraphic/10.jpg",
        caption: "Commercial Space - Lounge Area"
      },
      {
        url: "/Portfolio/The_Seraphic/11.jpg",
        caption: "Commercial Space - Phone Booths"
      },
      {
        url: "/Portfolio/The_Seraphic/12.jpg",
        caption: "Commercial Space - Cafeteria"
      },
      {
        url: "/Portfolio/The_Seraphic/13.jpg",
        caption: "Commercial Space - Training Room"
      },
      {
        url: "/Portfolio/The_Seraphic/14.jpg",
        caption: "Commercial Space - Lobby"
      },
      {
        url: "/Portfolio/The_Seraphic/15.jpg",
        caption: "Commercial Space - Exterior View"
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
    description: "Step into a haven of subtle elegance where all the details exude calm and sophistication. The harmony between form and function is evident in this carefully crafted space, where soft curves and organic shapes blend with copper accents to create a compelling visual narrative.",
    client: "Private Residential Client",
    location: "Austin, TX",
    area: "15,000 sq ft",
    mainImage: "/Portfolio/The_Inner_Coterie/11.jpg",
    gallery: [
      {
        url: "/Portfolio/The_Inner_Coterie/1.jpg",
        caption: "Interior View 1"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/2.jpg",
        caption: "Interior View 2"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/3.jpg",
        caption: "Interior View 3"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/4.jpg",
        caption: "Interior View 4"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/5.jpg",
        caption: "Interior View 5"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/6.jpg",
        caption: "Interior View 6"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/7.jpg",
        caption: "Interior View 7"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/8.jpg",
        caption: "Interior View 8"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/9.jpg",
        caption: "Interior View 9"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/10.jpg",
        caption: "Interior View 10"
      },
      {
        url: "/Portfolio/The_Inner_Coterie/12.jpg",
        caption: "Interior View 12"
      }
    ],
    challenge: "Creating a space that balances minimalist design principles with warmth and intimacy, while incorporating organic shapes and curves throughout the interior.",
    solution: "We implemented a thoughtfully curated material palette featuring marble, wood, and copper accents, complemented by a sophisticated color scheme."
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
    mainImage: "/Portfolio/Rasam_Fashion/10.jpg",
    gallery: [
      {
        url: "/Portfolio/Rasam_Fashion/1.jpg",
        caption: "Fashion Space View 1"
      },
      {
        url: "/Portfolio/Rasam_Fashion/2.jpg",
        caption: "Fashion Space View 2"
      },
      {
        url: "/Portfolio/Rasam_Fashion/3.jpg",
        caption: "Fashion Space View 3"
      },
      {
        url: "/Portfolio/Rasam_Fashion/4.jpg",
        caption: "Fashion Space View 4"
      },
      {
        url: "/Portfolio/Rasam_Fashion/5.jpg",
        caption: "Fashion Space View 5"
      },
      {
        url: "/Portfolio/Rasam_Fashion/6.jpg",
        caption: "Fashion Space View 6"
      },
      {
        url: "/Portfolio/Rasam_Fashion/7.jpg",
        caption: "Fashion Space View 7"
      },
      {
        url: "/Portfolio/Rasam_Fashion/8.jpg",
        caption: "Fashion Space View 8"
      },
      {
        url: "/Portfolio/Rasam_Fashion/9.jpg",
        caption: "Fashion Space View 9"
      },
      {
        url: "/Portfolio/Rasam_Fashion/11.jpg",
        caption: "Fashion Space View 11"
      },
      {
        url: "/Portfolio/Rasam_Fashion/12.jpg",
        caption: "Fashion Space View 12"
      },
      {
        url: "/Portfolio/Rasam_Fashion/13.jpg",
        caption: "Fashion Space View 13"
      },
      {
        url: "/Portfolio/Rasam_Fashion/14.jpg",
        caption: "Fashion Space View 14"
      },
      {
        url: "/Portfolio/Rasam_Fashion/15.jpg",
        caption: "Fashion Space View 15"
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
    mainImage: "/Portfolio/Sensitive_Forge/8.png",
    gallery: [
      {
        url: "/Portfolio/Sensitive_Forge/1.png",
        caption: "Office Space View 1"
      },
      {
        url: "/Portfolio/Sensitive_Forge/2.png",
        caption: "Office Space View 2"
      },
      {
        url: "/Portfolio/Sensitive_Forge/3.png",
        caption: "Office Space View 3"
      },
      {
        url: "/Portfolio/Sensitive_Forge/4.png",
        caption: "Office Space View 4"
      },
      {
        url: "/Portfolio/Sensitive_Forge/5.png",
        caption: "Office Space View 5"
      },
      {
        url: "/Portfolio/Sensitive_Forge/6.png",
        caption: "Office Space View 6"
      },
      {
        url: "/Portfolio/Sensitive_Forge/7.png",
        caption: "Office Space View 7"
      },
      {
        url: "/Portfolio/Sensitive_Forge/9.png",
        caption: "Office Space View 9"
      },
      {
        url: "/Portfolio/Sensitive_Forge/10.png",
        caption: "Office Space View 10"
      },
      {
        url: "/Portfolio/Sensitive_Forge/11.png",
        caption: "Office Space View 11"
      },
      {
        url: "/Portfolio/Sensitive_Forge/12.png",
        caption: "Office Space View 12"
      },
      {
        url: "/Portfolio/Sensitive_Forge/13.png",
        caption: "Office Space View 13"
      },
      {
        url: "/Portfolio/Sensitive_Forge/14.png",
        caption: "Office Space View 14"
      },
      {
        url: "/Portfolio/Sensitive_Forge/15.png",
        caption: "Office Space View 15"
      },
      {
        url: "/Portfolio/Sensitive_Forge/16.png",
        caption: "Office Space View 16"
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
    mainImage: "/Portfolio/Avadh_House/6.png",
    gallery: [
      {
        url: "/Portfolio/Avadh_House/1.png",
        caption: "Avadh House View 1"
      },
      {
        url: "/Portfolio/Avadh_House/2.png",
        caption: "Avadh House View 2"
      },
      {
        url: "/Portfolio/Avadh_House/3.png",
        caption: "Avadh House View 3"
      },
      {
        url: "/Portfolio/Avadh_House/4.png",
        caption: "Avadh House View 4"
      },
      {
        url: "/Portfolio/Avadh_House/5.png",
        caption: "Avadh House View 5"
      },
      {
        url: "/Portfolio/Avadh_House/7.png",
        caption: "Avadh House View 7"
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
        url: "/Portfolio/Laxmi_Ratan/1.png",
        caption: "Laxmi Ratan View 1"
      },
      {
        url: "/Portfolio/Laxmi_Ratan/2.png",
        caption: "Laxmi Ratan View 2"
      },
      {
        url: "/Portfolio/Laxmi_Ratan/3.png",
        caption: "Laxmi Ratan View 3"
      },
      {
        url: "/Portfolio/Laxmi_Ratan/4.png",
        caption: "Laxmi Ratan View 4"
      },
      {
        url: "/Portfolio/Laxmi_Ratan/5.png",
        caption: "Laxmi Ratan View 5"
      }
    ],
    challenge: "Achieving LEED Platinum certification while creating an inspiring workplace.",
    solution: "Integrated renewable energy systems, green spaces, and sustainable materials throughout the building."
  }
];

// Helper functions remain the same
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

export const getGalleryImageUrl = (image: ProjectImage, isThumb: boolean = true): string => {
  if (isThumb && image.thumbnailUrl) {
    return image.thumbnailUrl;
  } else if (!isThumb && image.fullUrl) {
    return image.fullUrl;
  }
  return image.url;
};