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
    "id": 1,
    "projectName": "The White Abode",
    "category": "Residential Design",
    "mainImage": "https://res.cloudinary.com/daasgedae/image/upload/v1743577041/13-resized_arqcb2.png",
    "description": "A stunning residential project that showcases our commitment to creating spaces that blend form and function. The White Abode has been featured in multiple prestigious publications, highlighting its innovative design approach and architectural excellence.",
    "excerpt": "A groundbreaking residential project that has captured the attention of leading architectural publications worldwide.",
    "articles": [
        {
            "title": "The White Abode - Archello",
            "url": "https://archello.com/project/the-white-abode",
            "source": "Archello",
            "date": "2024"
        },
        {
            "title": "The White Abode - Rethinking The Future",
            "url": "https://www.re-thinkingthefuture.com/interior-design/10137-the-white-abode-by-under-the-arch/",
            "source": "Rethinking The Future",
            "date": "2024"
        },
        {
            "title": "The White Abode - Architizer",
            "url": "https://architizer.com/projects/the-white-abode/",
            "source": "Architizer",
            "date": "2024"
        },
        {
            "title": "The White Abode - Amazing Architecture",
            "url": "https://www.amazingarchitecture.com/tags/the-white-abode",
            "source": "Amazing Architecture",
            "date": "2024"
        },
        {
            "title": "The White Abode - Instagram Post 1",
            "url": "https://www.instagram.com/p/C6EgALAJnTq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "source": "Instagram",
            "date": "2024"
        },
        {
            "title": "The White Abode - Instagram Post 2",
            "url": "https://www.instagram.com/p/C429gDYSB_-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "source": "Instagram",
            "date": "2024"
        },
        {
            "title": "The White Abode - Instagram Post 3",
            "url": "https://www.instagram.com/p/C32n6GSS9Li/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "source": "Instagram",
            "date": "2024"
        }
    ],
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
    ]
},

  {
    id: 2,
    projectName: "The Seraphic",
    category: "Residential Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743579183/ts4-resized_kbeaky.png",
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
    ]
  },
  {
    id: 3,
    projectName: "Rasam Fashion",
    category: "Retail Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743578233/rf10-resized_tziz5s.png",
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