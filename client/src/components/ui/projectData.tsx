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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743136299/11_drllvy.png",
    gallery: [

      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136299/12_zq000y.png",
        caption: "Sensitive Forge View 1"
      },
      {
        url:  "https://res.cloudinary.com/daasgedae/image/upload/v1743136299/15_qzq07y.png",
        caption: "Sensitive Forge View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136297/13_pu7kbk.png",
        caption: "Sensitive Forge View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/14_ewzjzg.png",
        caption: "Sensitive Forge View 4"
      },
      {
        url:"https://res.cloudinary.com/daasgedae/image/upload/v1743136299/8_rd2bwq.png",
        caption: "Sensitive Forge View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136291/9_ltutcm.png",
        caption: "Sensitive Forge View 6"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136288/10_vs9ldl.png",
        caption: "Sensitive Forge View 7"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136292/5_kbqkov.png",
        caption: "Sensitive Forge View 8"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136299/16_m4ppyv.png",
        caption: "Sensitive Forge View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
        caption: "Sensitive Forge View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136289/3_yhssfw.jpg",
        caption: "Sensitive Forge View 11"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136295/4_qjx4xu.jpg",
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743138148/11_x8hwzq.jpg",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138149/1_joerma.jpg",
        caption: "The Inner Coterie View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138140/2_ozb4br.jpg",
        caption: "The Inner Coterie View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138150/3_mstcir.jpg",
        caption: "The Inner Coterie View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138138/4_hyhvo3.jpg",
        caption: "The Inner Coterie View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138145/5_hnrikn.jpg",
        caption: "The Inner Coterie View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138137/6_alrxw9.jpg",
        caption: "The Inner Coterie View 6"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138145/7_ea0bht.jpg",
        caption: "The Inner Coterie View 7"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138139/8_uj9eb4.jpg",
        caption: "The Inner Coterie View 8"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138146/9_j4jeqg.jpg",
        caption: "The Inner Coterie View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138149/10_pe5lzf.jpg",
        caption: "The Inner Coterie View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138142/12_pd4loi.jpg",
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135655/1_zp4vnz.jpg",
        caption: "Rasam Fashion View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135659/2_tdgwty.jpg",
        caption: "Rasam Fashion View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135655/3_ntwto4.jpg",
        caption: "Rasam Fashion View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135657/4_j0w56q.jpg",
        caption: "Rasam Fashion View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135660/5_fednmj.jpg",
        caption: "Rasam Fashion View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135662/6_hsldcr.jpg",
        caption: "Rasam Fashion View 6"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135660/7_jwvml4.jpg",
        caption: "Rasam Fashion View 7"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135655/8_s88t1i.jpg",
        caption: "Rasam Fashion View 8"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135654/9_rl9wl2.jpg",
        caption: "Rasam Fashion View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135658/11_l8thdg.jpg",
        caption: "Rasam Fashion View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
        caption: "Rasam Fashion View 11"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135657/12_cwydgg.jpg",
        caption: "Rasam Fashion View 12"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135658/13_dkk4p3.jpg",
        caption: "Rasam Fashion View 13"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135661/14_tpmap8.jpg",
        caption: "Rasam Fashion View 14"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135662/15_dkkbzy.jpg",
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743134973/6_kukhkx.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743134973/5_udetpv.png",
        caption: "Avadh House View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743134973/2_e7szhr.png",
        caption: "Avadh House View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743134998/1_odupk1.png",
        caption: "Avadh House View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743134973/4_adtvdg.png",
        caption: "Avadh House View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
        caption: "Avadh House View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135003/7_ibftmc.png",
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