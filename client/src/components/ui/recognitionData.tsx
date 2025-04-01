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
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
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
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
        caption: "The White Abode Exterior"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
        caption: "The White Abode Interior"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
        caption: "The White Abode Details"
      }
    ]
  },
  {
    id: 2,
    projectName: "The Seraphic",
    category: "Residential Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
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
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
        caption: "The Seraphic Exterior"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
        caption: "The Seraphic Interior"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
        caption: "The Seraphic Details"
      }
    ]
  },
  {
    id: 3,
    projectName: "Rasam Fashion",
    category: "Retail Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
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
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
        caption: "Rasam Fashion Exterior"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
        caption: "Rasam Fashion Interior"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
        caption: "Rasam Fashion Details"
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