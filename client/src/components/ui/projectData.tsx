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
    title: "Sensitive Forge",
    category: "Commercial",
    year: "2021",
    description: "A sophisticated office complex designed for a leading tech company with focus on innovation and collaboration.",
   
    location: "Seattle, WA",
    area: "20,000 sq ft",
    mainImage: "/sf/sf11.png",
    gallery: [

      {
        url: "/sf/sf12.png",
        caption: "Sensitive Forge View 1"
      },
      {
        url:  "/sf/sf15.png",
        caption: "Sensitive Forge View 2"
      },
      {
        url: "/sf/sf13.png",
        caption: "Sensitive Forge View 3"
      },
      {
        url: "/sf/sf14.png",
        caption: "Sensitive Forge View 4"
      },
      {
        url: "/sf/sf8.png",
        caption: "Sensitive Forge View 5"
      },
      {
        url: "/sf/sf9.png",
        caption: "Sensitive Forge View 6"
      },
      {
        url: "/sf/sf10.png",
        caption: "Sensitive Forge View 7"
      },
      {
        url: "/sf/sf5.png",
        caption: "Sensitive Forge View 8"
      },
      {
        url: "/sf/sf16.png",
        caption: "Sensitive Forge View 9"
      },
      {
        url: "/sf/sf7.jpg",
        caption: "Sensitive Forge View 10"
      },
      {
        url: "/sf/sf3.png",
        caption: "Sensitive Forge View 11"
      },
      {
        url: "/sf/sf4.jpg",
        caption: "Sensitive Forge View 12"
      }  
    ],
    challenge: "Creating a workspace that fosters innovation while maintaining security and privacy.",
    solution: "Implemented zones with varying security levels and flexible meeting spaces with advanced tech integration."
  },
  {
    id: 2,
    title: "The Inner Coterie",
    category: "Residential",
    year: "2023",
    description: "Step into a haven of subtle elegance where all the details exude calm and sophistication. The harmony between form and function is evident in this carefully crafted space, where soft curves and organic shapes blend with copper accents to create a compelling visual narrative.",
    
    location: "Nikol, Ahmedabad",
    area: "1,800 sq ft",
    mainImage: "/tic/tic11.jpg",
    gallery: [
      {
        url: "/tic/tic1.jpg",
        caption: "The Inner Coterie View 1"
      },
      {
        url: "/tic/tic2.jpg",
        caption: "The Inner Coterie View 2"
      },
      {
        url: "/tic/tic3.jpg",
        caption: "The Inner Coterie View 3"
      },
      {
        url: "/tic/tic4.jpg",
        caption: "The Inner Coterie View 4"
      },
      {
        url: "/tic/tic5.jpg",
        caption: "The Inner Coterie View 5"
      },
      {
        url: "/tic/tic6.jpg",
        caption: "The Inner Coterie View 6"
      },
      {
        url: "/tic/tic7.jpg",
        caption: "The Inner Coterie View 7"
      },
      {
        url: "/tic/tic8.jpg",
        caption: "The Inner Coterie View 8"
      },
      {
        url: "/tic/tic9.jpg",
        caption: "The Inner Coterie View 9"
      },
      {
        url: "/tic/tic10.jpg",
        caption: "The Inner Coterie View 10"
      },
      {
        url: "/tic/tic12.jpg",
        caption: "The Inner Coterie View 11"
      }
    ],
    challenge: "Creating a space that balances minimalist design principles with warmth and intimacy, while incorporating organic shapes and curves throughout the interior.",
    solution: "We implemented a thoughtfully curated material palette featuring marble, wood, and copper accents, complemented by a sophisticated color scheme."
  },
  {
    id: 3,
    title: "Rasam Fashion",
    category: "Commercial - Retail",
    year: "2022",
    description: "An exclusive residential development combining luxury living with sustainable design principles.",
 
    location: "Pedhak Road, Rajkot",
    area: "6,000 sq ft",
    mainImage: "/rf/rf10.jpg",
    gallery: [
      {
        url: "/rf/rf1.jpg",
        caption: "Rasam Fashion View 1"
      },
      {
        url: "/rf/rf2.jpg",
        caption: "Rasam Fashion View 2"
      },
      {
        url: "/rf/rf3.jpg",
        caption: "Rasam Fashion View 3"
      },
      {
        url: "/rf/rf4.jpg",
        caption: "Rasam Fashion View 4"
      },
      {
        url: "/rf/rf5.jpg",
        caption: "Rasam Fashion View 5"
      },
      {
        url: "/rf/rf6.jpg",
        caption: "Rasam Fashion View 6"
      },
      {
        url: "/rf/rf7.jpg",
        caption: "Rasam Fashion View 7"
      },
      {
        url: "/rf/rf8.jpg",
        caption: "Rasam Fashion View 8"
      },
      {
        url: "/rf/rf9.jpg",
        caption: "Rasam Fashion View 9"
      },
      {
        url: "/rf/rf11.jpg",
        caption: "Rasam Fashion View 10"
      },
      {
        url: "/rf/rf10.jpg",
        caption: "Rasam Fashion View 11"
      },
      {
        url: "/rf/rf12.jpg",
        caption: "Rasam Fashion View 12"
      },
      {
        url: "/rf/rf13.jpg",
        caption: "Rasam Fashion View 13"
      },
      {
        url: "/rf/rf14.jpg",
        caption: "Rasam Fashion View 14"
      },
      {
        url: "/rf/rf15.jpg",
        caption: "Rasam Fashion View 15"
      }
     
    ],
    challenge: "Integrating luxury amenities while maintaining energy efficiency and sustainability.",
    solution: "Incorporated solar panels, rainwater harvesting, and smart home technology throughout the property."
  },
  
  {
    id: 4,
    title: "Avadh House",
    category: "Residential",
    year: "2023",
    description: "A community-focused library that blends traditional architecture with modern technology and accessibility.",
 
    location: "Mota Varachha, Surat",
    area: "3,800 sq ft",
    mainImage: "/ah/ah6.png",
    gallery: [
      {
        url: "/ah/ah5.png",
        caption: "Avadh House View 1"
      },
      {
        url: "/ah/ah2.png",
        caption: "Avadh House View 2"
      },
      {
        url: "/ah/ah1.png",
        caption: "Avadh House View 3"
      },
      {
        url: "/ah/ah4.png",
        caption: "Avadh House View 4"
      },
      {
        url: "/ah/ah3.png",
        caption: "Avadh House View 5"
      },
      {
        url: "/ah/ah7.png",
        caption: "Avadh House View 6"
      }
    ],
    challenge: "Creating an inclusive space that serves diverse community needs while preserving historical elements.",
    solution: "Restored historical features while adding modern amenities and technology infrastructure."
  },
  {
    id: 5,
    title: "Laxmi Ratan",
    category: "Residential",
    year: "2022",
    description: "An eco-friendly office building with cutting-edge sustainable features and modern workspace solutions.",
   
    location: "Outer Ring Road, Surat",
    area: "1,150 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743135528/6_bjwtlo.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135535/1_ksw0qo.png",
        caption: "Laxmi Ratan View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135536/2_owfllo.png",
        caption: "Laxmi Ratan View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135533/3_hi119k.png",
        caption: "Laxmi Ratan View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135534/4_tqh0gg.png",
        caption: "Laxmi Ratan View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135535/5_mvzktd.png",
        caption: "Laxmi Ratan View 5"
      }
    ],
    challenge: "Achieving LEED Platinum certification while creating an inspiring workplace.",
    solution: "Integrated renewable energy systems, green spaces, and sustainable materials throughout the building."
  },
  {
    id: 6,
    title: "My Mall",
    category: "Commercial",
    year: "2021",
    description: "A sophisticated office complex designed for a leading tech company with focus on innovation and collaboration.",
   
    location: "Seattle, WA",
    area: "20,000 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743150748/2_cl4oh0.jpg",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743150747/1_s7r4pq.jpg",
        caption: "My Mall View 1"
      },
     
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743150748/3_uyhzpd.jpg",
        caption: "My Mall View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743150748/5_xpnzwx.jpg",
        caption: "My Mall View 3"
      },
      
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743150748/6_bw5kbr.jpg",
        caption: "My Mall View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743150748/4_s9vd1k.jpg",
        caption: "My Mall View 5"
      }
      
    ],
    challenge: "Creating a workspace that fosters innovation while maintaining security and privacy.",
    solution: "Implemented zones with varying security levels and flexible meeting spaces with advanced tech integration."
  },
  
  {
    "id": 7,
    "title": "The White Abode",
    "category": "Residential",
    "year": "2023",
    "description": "A SYMPHONY OF SERENITY: The timelessness of white and a dance of details. This design journey explores the delicate balance between luxury and simplicity, where a symphony of pastel and gold accents, elegant design, and the eternal appeal of architectural arches are set above a calm white canvas. The interplay between white, pastels, and gold results in a space that radiates luxury with a touch of extravagance.",
    
    "location": "Nikol, Ahmedabad",
    "area": "1,800 sq ft",
    "mainImage": "https://res.cloudinary.com/daasgedae/image/upload/v1743512201/13_qkimgp.jpg",
    "mainImageSmall": "https://res.cloudinary.com/daasgedae/image/upload/v1743512201/13_qkimgp.jpg",
    "mainImageMedium": "https://res.cloudinary.com/daasgedae/image/upload/v1743512201/13_qkimgp.jpg",
    "mainImageLarge": "https://res.cloudinary.com/daasgedae/image/upload/v1743512201/13_qkimgp.jpg",
    "gallery": [
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512203/5_qsedcw.jpg",
            "caption": "The White Abode View 1"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512204/6_e8lwfr.jpg",
            "caption": "The White Abode View 2"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512204/14_wat9ch.jpg",
            "caption": "The White Abode View 3"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512206/8_huidp3.jpg",
            "caption": "The White Abode View 4"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512207/9_tjdhln.jpg",
            "caption": "The White Abode View 5"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512207/10_qo5jau.jpg",
            "caption": "The White Abode View 6"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512201/12_ifti9v.jpg",
            "caption": "The White Abode View 7"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512204/15_neq9rk.jpg",
            "caption": "The White Abode View 8"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512205/16_hjjfue.jpg",
            "caption": "The White Abode View 9"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512207/17_vsm9mm.jpg",
            "caption": "The White Abode View 10"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512202/2_oqvhtc.jpg",
            "caption": "The White Abode View 11"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512202/3_wby36c.jpg",
            "caption": "The White Abode View 12"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512203/4_fw7fmd.jpg",
            "caption": "The White Abode View 13"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743512201/1_ra1zgf.jpg",
            "caption": "The White Abode View 14"
        }
    ],
    "challenge": "The client sought a design concept that would foster a peaceful environment while aligning with his connection to the metal industry. The challenge was to create a space that exudes strength while maintaining calmness, integrating industrial elements with luxury and comfort.",
    "solution": "We implemented a sophisticated design approach featuring architectural arches, clean lines, and a carefully curated color palette of whites, pastels, and gold accents. The juxtaposition of sleek metal finishes against soft, tactile fabrics creates a tactile symphony throughout the space. Strategic placement of arches and grooved wall details adds depth and character while maintaining minimalist principles."
},

  {
    id: 8,
    title: "The Seraphic",
    category: "Residential",
    year: "2024",
    description: "A contemporary commercial space designed for optimal workflow and employee well-being in the heart of the business district.",
    
    location: "Nikol, Ahmedabad",
    area: "1,800 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743138521/4_bixuqn.jpg",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138520/1_imfwwz.jpg",
        caption: "The Seraphic View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138522/2_yancnv.jpg",
        caption: "The Seraphic View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138150/3_mstcir.jpg",
        caption: "The Seraphic View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138548/5_xebm3w.jpg",
        caption: "The Seraphic View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138554/6_vzjgxb.jpg",
        caption: "The Seraphic View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138516/7_dnvqkf.jpg",
        caption: "The Seraphic View 6"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138547/8_bw662u.jpg",
        caption: "The Seraphic View 7"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138523/9_gplohk.jpg",
        caption: "The Seraphic View 8"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138526/10_urznfi.jpg",
        caption: "The Seraphic View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138523/11_fxezwh.jpg",
        caption: "The Seraphic View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138546/12_fta3op.jpg",
        caption: "The Seraphic View 11"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138524/13_e4u5iu.jpg",
        caption: "The Seraphic View 12"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138546/14_jdv7xn.jpg",
        caption: "The Seraphic View 13"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138515/15_obi6vw.jpg",
        caption: "The Seraphic View 14"
      }
    ],
    challenge: "Designing a space that promotes collaboration while maintaining individual focus areas in a limited footprint.",
    solution: "Created flexible workspaces with acoustic treatments and implemented a hot-desking system with dedicated quiet zones."
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