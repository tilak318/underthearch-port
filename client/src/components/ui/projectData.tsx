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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1742900395/13_yuui1v.jpg",
    mainImageSmall: "https://res.cloudinary.com/daasgedae/image/upload/v1742900395/13_yuui1v.jpg",
    mainImageMedium: "https://res.cloudinary.com/daasgedae/image/upload/v1742900395/13_yuui1v.jpg",
    mainImageLarge: "https://res.cloudinary.com/daasgedae/image/upload/v1742900395/13_yuui1v.jpg",
    gallery: [
     
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900396/2_se3xrn.jpg",
        caption: "Interior View - Bedroom"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900391/3_ok1xxg.jpg",
        caption: "Interior View - Dining Area"
      },
     
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900390/5_kc6lxv.jpg",
        caption: "Interior View - Master Suite"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900392/6_ysnh6x.jpg",
        caption: "Interior View - Bathroom"
      },
     
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900370/8_zcby2t.jpg",
        caption: "Interior View - Living Room Detail"
      },
      
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900393/10_ndcq0v.jpg",
        caption: "Interior View - Entertainment Area"
      },
     
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900392/14_omf7pt.jpg",
        caption: "Interior View - Family Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900395/15_unx6u3.jpg",
        caption: "Interior View - Dining Detail"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900370/16_xbmyuq.jpg",
        caption: "Interior View - Kitchen Detail"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900392/17_n4epfj.jpg",
        caption: "Interior View - Master Bathroom"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900398/1_rtyixq.jpg",
        caption: "Interior View - Living Space"
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1742900621/4_pfnkvd.jpg",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900622/1_pzupf4.jpg",
        caption: "Commercial Space - Reception"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900619/2_srdg75.jpg",
        caption: "Commercial Space - Office Area"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900620/3_ihf3y2.jpg",
        caption: "Commercial Space - Meeting Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900618/5_mbhut7.jpg",
        caption: "Commercial Space - Collaboration Area"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900620/6_tpzaow.jpg",
        caption: "Commercial Space - Break Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900618/7_ogskcc.jpg",
        caption: "Commercial Space - Executive Office"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900617/8_zjq9bq.jpg",
        caption: "Commercial Space - Conference Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900609/9_e3mfxp.jpg",
        caption: "Commercial Space - Workspace"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900610/10_z7q425.jpg",
        caption: "Commercial Space - Lounge Area"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900608/11_sdxpvh.jpg",
        caption: "Commercial Space - Phone Booths"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900616/12_nacjzn.jpg",
        caption: "Commercial Space - Cafeteria"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900616/13_zc3leb.jpg",
        caption: "Commercial Space - Training Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900609/14_zczojm.jpg",
        caption: "Commercial Space - Lobby"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900619/15_kvylxb.jpg",
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1742900901/11_r2rqy9.jpg",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900901/1_zfsfra.jpg",
        caption: "Interior View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900899/2_xepxn5.jpg",
        caption: "Interior View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900904/3_tvj0xa.jpg",
        caption: "Interior View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900901/4_qubev4.jpg",
        caption: "Interior View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900899/5_nfvc0m.jpg",
        caption: "Interior View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900903/6_a1dr6g.jpg",
        caption: "Interior View 6"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900905/7_r86xdv.jpg",
        caption: "Interior View 7"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900902/8_kpuzhi.jpg",
        caption: "Interior View 8"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900899/9_oglrbk.jpg",
        caption: "Interior View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900904/10_zcc3ll.jpg",
        caption: "Interior View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742900898/12_jj4lqr.jpg",
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1742893238/8_phlf7b.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893267/1_s2y8l1.jpg",
        caption: "Office Space View 1"
      },
     
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893268/3_tmtqph.jpg",
        caption: "Office Space View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893270/4_knht8l.jpg",
        caption: "Office Space View 4"
      },
      
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893264/7_kez6ll.jpg",
        caption: "Office Space View 7"
      },
      
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893268/9_ooqjce.png",
        caption: "Office Space View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893233/10_rt5kfk.png",
        caption: "Office Space View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893270/1_moujh1.png",
        caption: "Office Space View 11"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893262/12_cveyby.png",
        caption: "Office Space View 12"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893235/13_ldhoo0.png",
        caption: "Office Space View 13"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893236/14_qc3atq.png",
        caption: "Office Space View 14"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893265/15_it7jge.png",
        caption: "Office Space View 15"
      },
      
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1742892866/6_ycq90g.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742892863/1_hqw6vd.png",
        caption: "Avadh House View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742892864/2_m7jy3h.png",
        caption: "Avadh House View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742892864/3_yz4n3s.png",
        caption: "Avadh House View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742892865/4_s88t9x.png",
        caption: "Avadh House View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742892865/5_c161ys.png",
        caption: "Avadh House View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742892865/7_cpfkxn.png",
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1742893081/6_lawmpu.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893084/1_rpzcin.png",
        caption: "Laxmi Ratan View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893084/2_kdmq8a.png",
        caption: "Laxmi Ratan View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893081/3_tnibfa.png",
        caption: "Laxmi Ratan View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893082/4_va2lje.png",
        caption: "Laxmi Ratan View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1742893082/5_macwgk.png",
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