export interface Article {
  url: string;
  source: string;
  date?: string;
  projectName: string;
  projectImage: string;
  sourceLogo: string;  // Add this new field
}

export const recognitionsData: Article[] = (() => [
  {
    url: "https://archello.com/project/the-white-abode",
    source: "Archello",
    date: "2024",
    projectName: "The White Abode",
    projectImage: "/WA-3.png",
    sourceLogo: "/reclogo/archello.png"
  },
  {
    url: "https://architizer.com/projects/seraphic/",
    source: "Architizer",
    date: "2024",
    projectName: "The Seraphic",
    projectImage: "/S-8.png",
    sourceLogo: "/reclogo/architizer.png"
  },
  {
    url: "https://archello.com/project/rasam-fashion-boutique",
    source: "Archello",
    date: "2025",
    projectName: "Rasam Fashion",
    projectImage: "/RF-15.png",
    sourceLogo: "/reclogo/archello.png" 
  },
  {
    url: "https://architizer.com/projects/rasam-fashion-boutique-a-fusion-of-tradition-and-modernity/",
    source: "Architizer",
    date: "2025",
    projectName: "Rasam Fashion",
    projectImage: "/RF-8.png",
    sourceLogo: "/reclogo/architizer.png"  
  },
  {
    url: "https://www.re-thinkingthefuture.com/interior-design/10137-the-white-abode-by-under-the-arch/",
    source: "Rethinking The Future",
    date: "2024",
    projectName: "The White Abode",
    projectImage: "/WA-4.png",
    sourceLogo: "/reclogo/RTF.png"  
  },
  {
    url: "https://archello.com/project/seraphic",
    source: "Archello",
    date: "2024",
    projectName: "The Seraphic",
    projectImage: "/S-7.png",
    sourceLogo: "/reclogo/rtf.png"  
  },
  {
    url: "https://architizer.com/projects/the-white-abode/",
    source: "Architizer",
    date: "2024",
    projectName: "The White Abode",
    projectImage: "/WA-6.png",
    sourceLogo: "/reclogo/rtf.png"  
  },
  {
    url: "https://www.re-thinkingthefuture.com/architecture/retail/11313-rasam-fashion-boutique-a-fusion-of-tradition-and-modernity-by-under-the-arch/",
    source: "Rethinking The Future",
    date: "2025",
    projectName: "Rasam Fashion",
    projectImage: "/RF-7.png",
    sourceLogo: "/reclogo/rtf.png"  
  },
  {
    url: "https://amazingarchitecture.com/apartments/seraphic-ahmedabad-india-by-under-the-arch",
    source: "Amazing Architecture",
    date: "2024",
    projectName: "The Seraphic",
    projectImage: "/S-1.png",
    sourceLogo: "/reclogo/aa.png"  
  },
  {
    url: "https://www.instagram.com/p/C6EgALAJnTq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    source: "Dream Hom’Z ",
    date: "2024",
    projectName: "The White Abode",
    projectImage: "/WA-7.png",
    sourceLogo: "/reclogo/aa.png"  
  },
  {
    url: "https://www.amazingarchitecture.com/tags/the-white-abode",
    source: "Amazing Architecture",
    date: "2024",
    projectName: "The White Abode",
    projectImage: "/WA-6.png",
    sourceLogo: "/reclogo/aa.png"  
  },
  {
    url: "https://www.instagram.com/p/C429gDYSB_-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    source: "Architects in India",
    date: "2024",
    projectName: "The White Abode",
    projectImage: "/WA-5.png",
    sourceLogo: "/reclogo/aa.png"  
  },
  {
    url: "https://www.instagram.com/p/C32n6GSS9Li/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    source: "Design Talks India",
    date: "2024",
    projectName: "The White Abode",
    projectImage: "/WA-4.png",
    sourceLogo: "/reclogo/aa.png"  
  }





















 

 


























 
 

].sort((a, b) =>
  a.source.localeCompare(b.source, undefined, { sensitivity: 'base' })
))();
