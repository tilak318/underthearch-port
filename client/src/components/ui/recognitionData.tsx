export interface RecognitionImage {
  url: string;
  caption: string;
  thumbnailUrl?: string;
  fullUrl?: string;
}

export interface RecognitionDetails {
  id: number;
  magazineName: string;
  publicationDate: string;
  title: string;
  description: string;
  category: string;
  mainImage: string;
  mainImageSmall?: string;
  mainImageMedium?: string;
  mainImageLarge?: string;
  articleUrl: string;
  gallery: RecognitionImage[];
  excerpt: string;
}

export const recognitionsData: RecognitionDetails[] = [
  {
    id: 1,
    magazineName: "Architecture Today",
    publicationDate: "March 2024",
    title: "Modern Residential Design Excellence",
    description: "Our innovative approach to residential architecture has been featured in the latest issue of Architecture Today, showcasing our commitment to creating spaces that blend form and function.",
    category: "Residential Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
    articleUrl: "#",
    excerpt: "A groundbreaking approach to modern residential design that sets new standards in architectural innovation.",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
        caption: "Architecture Today Feature 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
        caption: "Architecture Today Feature 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
        caption: "Architecture Today Feature 3"
      }
    ]
  },
  {
    id: 2,
    magazineName: "Design World",
    publicationDate: "February 2024",
    title: "Sustainable Architecture Innovation",
    description: "Our commitment to sustainable design practices has earned recognition in Design World's annual sustainability issue, highlighting our eco-friendly architectural solutions.",
    category: "Sustainable Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
    articleUrl: "#",
    excerpt: "Pioneering sustainable architecture that balances environmental responsibility with aesthetic excellence.",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
        caption: "Design World Feature 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
        caption: "Design World Feature 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
        caption: "Design World Feature 3"
      }
    ]
  },
  {
    id: 3,
    magazineName: "Urban Living",
    publicationDate: "January 2024",
    title: "Commercial Architecture Excellence",
    description: "Our commercial projects have been highlighted in Urban Living's special feature on innovative workspace design, showcasing our ability to create functional yet inspiring work environments.",
    category: "Commercial Design",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
    articleUrl: "#",
    excerpt: "Redefining commercial spaces with innovative design solutions that enhance productivity and well-being.",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743136294/7_xeqkqw.jpg",
        caption: "Urban Living Feature 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135656/10_qkqvvi.jpg",
        caption: "Urban Living Feature 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743135004/3_xqmtcm.png",
        caption: "Urban Living Feature 3"
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