export interface RecognitionImage {
  url: string;
  caption: string;
  thumbnailUrl?: string;
  fullUrl?: string;
}

export interface Article {
  title: string;
  url: string;
  source: string;
  date?: string;
}

export interface RecognitionDetails {
  id: number;
  projectName: string;
  category: string;
  mainImage: string;
  mainImageSmall?: string;
  mainImageMedium?: string;
  mainImageLarge?: string;
  description: string;
  excerpt: string;
  articles: Article[];
  gallery: RecognitionImage[];
}

export const recognitionsData: RecognitionDetails[] = [
  {
    id: 1,
    projectName: "The White Abode",
    category: "Residential Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743138945/5_gysz6f.jpg",
    description: "A stunning residential project that showcases our commitment to creating spaces that blend form and function. The White Abode has been featured in multiple prestigious publications, highlighting its innovative design approach and architectural excellence.",
    excerpt: "A groundbreaking residential project that has captured the attention of leading architectural publications worldwide.",
    articles: [
      {
        title: "The White Abode - Archello",
        url: "https://archello.com/project/the-white-abode",
        source: "Archello",
        date: "2024"
      },
      {
        title: "The White Abode - Rethinking The Future",
        url: "https://www.re-thinkingthefuture.com/interior-design/10137-the-white-abode-by-under-the-arch/",
        source: "Rethinking The Future",
        date: "2024"
      },
      {
        title: "The White Abode - Architizer",
        url: "https://architizer.com/projects/the-white-abode/",
        source: "Architizer",
        date: "2024"
      },
      {
        title: "The White Abode - Amazing Architecture",
        url: "https://www.amazingarchitecture.com/tags/the-white-abode",
        source: "Amazing Architecture",
        date: "2024"
      },
      {
        title: "The White Abode - Instagram Post 1",
        url: "https://www.instagram.com/p/C6EgALAJnTq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        source: "Instagram",
        date: "2024"
      },
      {
        title: "The White Abode - Instagram Post 2",
        url: "https://www.instagram.com/p/C429gDYSB_-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        source: "Instagram",
        date: "2024"
      },
      {
        title: "The White Abode - Instagram Post 3",
        url: "https://www.instagram.com/p/C32n6GSS9Li/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        source: "Instagram",
        date: "2024"
      }
    ],
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138953/13_inla2w.jpg",
        caption: "The White Abode View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138554/6_vzjgxb.jpg",
        caption: "The White Abode View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138945/14_nalpzb.jpg",
        caption: "The White Abode View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138935/8_b1njtv.jpg",
        caption: "The White Abode View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138959/9_ce2cjp.jpg",
        caption: "The White Abode View 5"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138940/10_cgxslx.jpg",
        caption: "The White Abode View 6"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138955/12_lirvr2.jpg",
        caption: "The White Abode View 7"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138937/15_c0yasz.jpg",
        caption: "The White Abode View 8"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138938/16_tobl3u.jpg",
        caption: "The White Abode View 9"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138954/17_wnmbg8.jpg",
        caption: "The White Abode View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138944/2_yzaomu.jpg",
        caption: "The White Abode View 11"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138952/3_yususu.jpg",
        caption: "The White Abode View 12"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138947/4_ythyco.jpg",
        caption: "The White Abode View 13"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743138934/1_euogg7.jpg",
        caption: "The White Abode View 14"
      }
    ]
  },
  {
    id: 2,
    projectName: "The Seraphic",
    category: "Residential Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743138521/4_bixuqn.jpg",
    description: "The Seraphic is a remarkable residential project in Ahmedabad that has garnered attention for its innovative design and architectural excellence. This project has been featured in multiple prestigious publications, showcasing its unique blend of modern aesthetics and functional design.",
    excerpt: "A distinguished residential project in Ahmedabad that has captured the imagination of architectural publications worldwide.",
    articles: [
      {
        title: "The Seraphic - Archello",
        url: "https://archello.com/project/seraphic",
        source: "Archello",
        date: "2024"
      },
      {
        title: "The Seraphic - Architizer",
        url: "https://architizer.com/projects/seraphic/",
        source: "Architizer",
        date: "2024"
      },
      {
        title: "The Seraphic - Amazing Architecture",
        url: "https://amazingarchitecture.com/apartments/seraphic-ahmedabad-india-by-under-the-arch",
        source: "Amazing Architecture",
        date: "2024"
      }
    ],
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
    ]
  },
  {
    id: 3,
    projectName: "Rasam Fashion",
    category: "Retail Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
    description: "Rasam Fashion Boutique represents a perfect fusion of tradition and modernity in retail design. This project has been widely recognized for its innovative approach to creating a shopping experience that celebrates both contemporary aesthetics and cultural heritage.",
    excerpt: "A groundbreaking retail space that seamlessly blends traditional elements with modern design principles.",
    articles: [
      {
        title: "Rasam Fashion - Architizer",
        url: "https://architizer.com/projects/rasam-fashion-boutique-a-fusion-of-tradition-and-modernity/",
        source: "Architizer",
        date: "2024"
      },
      {
        title: "Rasam Fashion - Rethinking The Future",
        url: "https://www.re-thinkingthefuture.com/architecture/retail/11313-rasam-fashion-boutique-a-fusion-of-tradition-and-modernity-by-under-the-arch/",
        source: "Rethinking The Future",
        date: "2024"
      },
      {
        title: "Rasam Fashion - Archello",
        url: "https://archello.com/project/rasam-fashion-boutique",
        source: "Archello",
        date: "2024"
      }
    ],
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
    ]
  }
];

// Helper functions for responsive images
export const getResponsiveRecognitionImageUrl = (recognition: RecognitionDetails, screenWidth: number): string => {
  if (screenWidth <= 640 && recognition.mainImageSmall) {
    return recognition.mainImageSmall;
  } else if (screenWidth <= 1024 && recognition.mainImageMedium) {
    return recognition.mainImageMedium;
  } else if (recognition.mainImageLarge) {
    return recognition.mainImageLarge;
  }
  return recognition.mainImage;
};

export const getRecognitionGalleryImageUrl = (image: RecognitionImage, isThumb: boolean = true): string => {
  if (isThumb && image.thumbnailUrl) {
    return image.thumbnailUrl;
  } else if (!isThumb && image.fullUrl) {
    return image.fullUrl;
  }
  return image.url;
}; 