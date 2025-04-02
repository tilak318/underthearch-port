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
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136290/12_clch0g.png",
        caption: "Sensitive Forge View 1"
      },
      {
        url:  "https://res.cloudinary.com/daasgedae/image/upload/v1743136293/15_gmzjju.png",
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743578707/tic11-resized_rv9iqe.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578699/tic1-resized_p1s9jh.png",
        caption: "The Inner Coterie View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578703/tic2-resized_o2pe5m.png",
        caption: "The Inner Coterie View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578713/tic3-resized_dhxo5s.png",
        caption: "The Inner Coterie View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578700/tic4-resized_ibjtsl.png",
        caption: "The Inner Coterie View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578703/tic5-resized_tmxlrl.png",
        caption: "The Inner Coterie View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578706/tic6-resized_bspvyi.png",
        caption: "The Inner Coterie View 6"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578701/tic7-resized_cmmwel.png",
        caption: "The Inner Coterie View 7"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578702/tic8-resized_bxcvcn.png",
        caption: "The Inner Coterie View 8"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578703/tic9-resized_rkmv8m.png",
        caption: "The Inner Coterie View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578705/tic10-resized_wat9jg.png",
        caption: "The Inner Coterie View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743578708/tic12-resized_fhgdm3.png",
        caption: "The Inner Coterie View 11"
      }
    ],
    challenge: "Creating a space that balances minimalist design principles with warmth and intimacy, while incorporating organic shapes and curves throughout the interior.",
    solution: "We implemented a thoughtfully curated material palette featuring marble, wood, and copper accents, complemented by a sophisticated color scheme."
  },
  {
    "id": 3,
    "title": "Rasam Fashion",
    "category": "Commercial - Retail",
    "year": "2022",
    "description": "An exclusive residential development combining luxury living with sustainable design principles.",
    "location": "Pedhak Road, Rajkot",
    "area": "6,000 sq ft",
    "mainImage": "https://res.cloudinary.com/daasgedae/image/upload/v1743578233/rf10-resized_tziz5s.png",
    "gallery": [
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578237/rf1-resized_irn37v.png",
        "caption": "Rasam Fashion View 1"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578243/rf2-resized_jabsio.png",
        "caption": "Rasam Fashion View 2"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578236/rf3-resized_mevn4d.png",
        "caption": "Rasam Fashion View 3"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578241/rf4-resized_trw5az.png",
        "caption": "Rasam Fashion View 4"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578239/rf5-resized_osfxsa.png",
        "caption": "Rasam Fashion View 5"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578241/rf6-resized_xev9tq.png",
        "caption": "Rasam Fashion View 6"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578231/rf7-resized_x3iktr.png",
        "caption": "Rasam Fashion View 7"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578228/rf8-resized_ua6tm9.png",
        "caption": "Rasam Fashion View 8"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578230/rf9-resized_sm5bad.png",
        "caption": "Rasam Fashion View 9"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578237/rf1-resized_irn37v.png",
        "caption": "Rasam Fashion View 10"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578234/rf11-resized_kslbg4.png",
        "caption": "Rasam Fashion View 11"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578239/rf12-resized_yofalw.png",
        "caption": "Rasam Fashion View 12"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578231/rf13-resized_l3ctdj.png",
        "caption": "Rasam Fashion View 13"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578233/rf14-resized_pqnxti.png",
        "caption": "Rasam Fashion View 14"
      },
      {
        "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743578236/15-resized_yarjoe.png",
        "caption": "Rasam Fashion View 15"
      }
    ],
    "challenge": "Integrating luxury amenities while maintaining energy efficiency and sustainability.",
    "solution": "Incorporated solar panels, rainwater harvesting, and smart home technology throughout the property."
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
    "mainImage": "https://res.cloudinary.com/daasgedae/image/upload/v1743577041/13-resized_arqcb2.png",
    "mainImageSmall": "https://res.cloudinary.com/daasgedae/image/upload/v1743577041/13-resized_arqcb2.png",
    "mainImageMedium": "https://res.cloudinary.com/daasgedae/image/upload/v1743577041/13-resized_arqcb2.png",
    "mainImageLarge": "https://res.cloudinary.com/daasgedae/image/upload/v1743577041/13-resized_arqcb2.png",
    "gallery": [
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577029/5-resized_yh9bga.png",
            "caption": "The White Abode View 1"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577038/6-resized_gqqqgm.png",
            "caption": "The White Abode View 2"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577040/14-resized_yim50b.png",
            "caption": "The White Abode View 3"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577032/8-resized_zthfuq.png",
            "caption": "The White Abode View 4"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577036/9-resized_c9v8ct.png",
            "caption": "The White Abode View 5"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577040/10-resized_m4cxou.png",
            "caption": "The White Abode View 6"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577043/12-resized_s37mib.png",
            "caption": "The White Abode View 7"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577041/15-resized_djr7iu.png",
            "caption": "The White Abode View 8"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577043/16-resized_kwmuek.png",
            "caption": "The White Abode View 9"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577043/17-resized_ckxrd2.png",
            "caption": "The White Abode View 10"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577029/2-resized_yzvxpy.png",
            "caption": "The White Abode View 11"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577031/3-resized_xwoorw.png",
            "caption": "The White Abode View 12"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577030/4-resized_dc4lzx.png",
            "caption": "The White Abode View 13"
        },
        {
            "url": "https://res.cloudinary.com/daasgedae/image/upload/v1743577032/1-resized_dw6xop.png",
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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743579183/ts4-resized_kbeaky.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579180/ts1-resized_heshwd.png",
        caption: "The Seraphic View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579182/ts2-resized_v5xkwh.png",
        caption: "The Seraphic View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579180/ts3-resized_ltfm1t.png",
        caption: "The Seraphic View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579188/ts5-resized_eym4n4.png",
        caption: "The Seraphic View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579182/ts6-resized_ax6wxc.png",
        caption: "The Seraphic View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579194/ts7-resized_xvt5wx.png",
        caption: "The Seraphic View 6"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579199/ts8-resized_oxwmnf.png",
        caption: "The Seraphic View 7"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579194/ts9-resized_wr615u.png",
        caption: "The Seraphic View 8"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579195/ts10-resized_y2wc1c.png",
        caption: "The Seraphic View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579195/ts11-resized_xfn4kr.png",
        caption: "The Seraphic View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579195/ts12-resized_ontozs.png",
        caption: "The Seraphic View 11"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579198/ts13-resized_ije5sk.png",
        caption: "The Seraphic View 12"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579196/ts14-resized_c9anjw.png",
        caption: "The Seraphic View 13"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743579198/ts15-resized_oeirwq.png",
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