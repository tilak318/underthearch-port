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
}

export const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: "Sensitive Forge",
    category: "Office",
    year: "Ongoing",
    description: "An avant-garde office complex forging the future of work. Designed for a leading tech innovator, this space cultivates collaboration and breakthrough thinking within a sophisticated, high-performance environment.",
   
    location: "Rajkot, India",
    area: "6,000 sq ft",
    mainImage: "/projects/sf/sf11.png",
    gallery: [

      {
        url: "/projects/sf/sf1.png",
        caption: "Sensitive Forge View 1"
      },
      {
        url: "/projects/sf/sf2.png",
        caption: "Sensitive Forge View 2"
      },
      {
        url: "/projects/sf/sf3.png",
        caption: "Sensitive Forge View 3"
      },
      {
        url: "/projects/sf/sf4.png",
        caption: "Sensitive Forge View 4"
      },
      {
        url: "/projects/sf/sf5.png",
        caption: "Sensitive Forge View 5"
      },
      {
        url: "/projects/sf/sf6.png",
        caption: "Sensitive Forge View 6"
      },
      {
        url: "/projects/sf/sf7.png",
        caption: "Sensitive Forge View 7"
      },
      {
        url: "/projects/sf/sf8.png",
        caption: "Sensitive Forge View 8"
      },
      {
        url: "/projects/sf/sf9.png",
        caption: "Sensitive Forge View 9"
      },
      {
        url: "/projects/sf/sf10.png",
        caption: "Sensitive Forge View 10"
      },
      {
        url: "/projects/sf/sf11.png",
        caption: "Sensitive Forge View 11"
      },
      {
        url: "/projects/sf/sf12.png",
        caption: "Sensitive Forge View 12"
      },
      {
        url: "/projects/sf/sf13.png",
        caption: "Sensitive Forge View 13"
      },
      {
        url: "/projects/sf/sf14.png",
        caption: "Sensitive Forge View 14"
      },
      {
        url: "/projects/sf/sf15.png",
        caption: "Sensitive Forge View 15"
      }

    ]
  },
  {
    id: 2,
    title: "The Inner Coterie",
    category: "Residential",
    year: "2024",
    description: "Discover a sanctuary of subtle elegance, where every detail whispers calm and sophistication. Organic curves and warm copper accents weave a compelling visual narrative, crafting a harmonious haven for refined living.",
    
    location: "Ahmedabad, India",
    area: "1,800 sq ft",
    mainImage: "/projects/IC/IC-11.png",
    gallery: [
      {
        url: "/projects/IC/IC-1.png",
        caption: "The Inner Coterie View 1"
      },
      {
        url: "/projects/IC/IC-2.png",
        caption: "The Inner Coterie View 2"
      },
      {
        url: "/projects/IC/IC-3.png",
        caption: "The Inner Coterie View 3"
      },
      {
        url: "/projects/IC/IC-4.png",
        caption: "The Inner Coterie View 4"
      },
      {
        url: "/projects/IC/IC-5.png",
        caption: "The Inner Coterie View 5"
      },
      {
        url: "/projects/IC/IC-6.png",
        caption: "The Inner Coterie View 6"
      },
      {
        url: "/projects/IC/IC-7.png",
        caption: "The Inner Coterie View 7"
      },
      {
        url: "/projects/IC/IC-8.png",
        caption: "The Inner Coterie View 8"
      },
      {
        url: "/projects/IC/IC-9.png",
        caption: "The Inner Coterie View 9"
      },
      {
        url: "/projects/IC/IC-10.png",
        caption: "The Inner Coterie View 10"
      },
      {
        url: "/projects/IC/IC-11.png",
        caption: "The Inner Coterie View 11"
      },
      {
        url: "/projects/IC/IC-12.png",
        caption: "The Inner Coterie View 12"
      }
    ]
  },
  {
    "id": 3,
    "title": "Rasam Fashion",
    "category": "Retail",
    "year": "2025",
    "description": "Step into a world where fashion meets artistry. This bespoke retail environment captivates with its elegant design, creating an immersive and luxurious shopping experience that perfectly showcases high-end style.",
    "location": "Rajkot, India",
    "area": "6,000 sq ft",
    "mainImage": "/projects/RF/RF-15.png",
    "gallery": [
      {
        "url": "/projects/RF/RF-1.png",
        "caption": "Rasam Fashion View 1"
      },
      {
        "url": "/projects/RF/RF-2.png",
        "caption": "Rasam Fashion View 2"
      },
      {
        "url": "/projects/RF/RF-3.png",
        "caption": "Rasam Fashion View 3"
      },
      {
        "url": "/projects/RF/RF-4.png",
        "caption": "Rasam Fashion View 4"
      },
      {
        "url": "/projects/RF/RF-5.png",
        "caption": "Rasam Fashion View 5"
      },
      {
        "url": "/projects/RF/RF-6.png",
        "caption": "Rasam Fashion View 6"
      },
      {
        "url": "/projects/RF/RF-7.png",
        "caption": "Rasam Fashion View 7"
      },
      {
        "url": "/projects/RF/RF-8.png",
        "caption": "Rasam Fashion View 8"
      },
      {
        "url": "/projects/RF/RF-9.png",
        "caption": "Rasam Fashion View 9"
      },
      {
        "url": "/projects/RF/RF-10.png",
        "caption": "Rasam Fashion View 10"
      },
      {
        "url": "/projects/RF/RF-11.png",
        "caption": "Rasam Fashion View 11"
      },
      {
        "url": "/projects/RF/RF-12.png",
        "caption": "Rasam Fashion View 12"
      },
      {
        "url": "/projects/RF/RF-13.png",
        "caption": "Rasam Fashion View 13"
      },
      {
        "url": "/projects/RF/RF-14.png",
        "caption": "Rasam Fashion View 14"
      },
      {
        "url": "/projects/RF/RF-15.png",
        "caption": "Rasam Fashion View 15"
      }
    ]
  },

  
  {
    id: 4,
    title: "Avadh House",
    category: "Residential",
    year: "Ongoing",
    description: "A modern residence where architectural grace meets everyday comfort. This home offers a tranquil retreat, blending contemporary design with thoughtful spaces crafted for serene family living and effortless style.",
 
    location: "Surat, India",
    area: "3,800 sq ft",
    mainImage: "/projects/ah/ah1.png",
    gallery: [
      {
        url: "/projects/ah/ah1.png",
        caption: "Avadh House View 1"
      },
      {
        url: "/projects/ah/ah2.png",
        caption: "Avadh House View 2"
      },
      {
        url: "/projects/ah/ah3.png",
        caption: "Avadh House View 3"
      },
      {
        url: "/projects/ah/ah4.png",
        caption: "Avadh House View 4"
      },
      {
        url: "/projects/ah/ah5.png",
        caption: "Avadh House View 5"
      },
      {
        url: "/projects/ah/ah6.png",
        caption: "Avadh House View 6"
      },
      {
        url: "/projects/ah/ah7.png",
        caption: "Avadh House View 7"
      },
      {
        url: "/projects/ah/ah8.png",
        caption: "Avadh House View 8"
      },
      {
        url: "/projects/ah/ah9.png",
        caption: "Avadh House View 9"
      },
      {
        url: "/projects/ah/ah10.png",
        caption: "Avadh House View 10"
      }
      
    ]
  },
  {
    id: 5,
    title: "Laxmi Ratan",
    category: "Residential",
    year: "Ongoing",
    description: "Experience intimate luxury in this meticulously designed residence. Every square foot is optimized for elegance and comfort, creating a jewel box of sophisticated living with bespoke details and a refined atmosphere.",
   
    location: "Surat, India",
    area: "1,150 sq ft",
    mainImage: "/projects/lr/lr1.png",
    gallery: [
      {
        url: "/projects/lr/lr1.png",
        caption: "Laxmi Ratan View 1"
      },
      {
        url: "/projects/lr/lr2.png",
        caption: "Laxmi Ratan View 2"
      },
      {
        url: "/projects/lr/lr3.png",
        caption: "Laxmi Ratan View 3"
      },
      {
        url: "/projects/lr/lr4.png",
        caption: "Laxmi Ratan View 4"
      },
      {
        url: "/projects/lr/lr5.png",
        caption: "Laxmi Ratan View 5"
      },
      {
        url: "/projects/lr/lr6.png",
        caption: "Laxmi Ratan View 6"
      }
    ]
  },
  {
    id: 6,
    title: "My Mall",
    category: "Commercial",
    year: "Ongoing",
    description: "A vibrant commercial destination designed to energize and inspire. This expansive mall offers a dynamic blend of retail, dining, and entertainment, creating a premier hub for community engagement and modern commerce.",
   
    location: "Surat, India",
    area: "18,000 sq ft",
    mainImage: "/projects/mm/mm2.png",
    gallery: [
      {
        url: "/projects/mm/mm1.png",
        caption: "My Mall View 1"
      },
      {
        url: "/projects/mm/mm2.png",
        caption: "My Mall View 2"
      },
      {
        url: "/projects/mm/mm3.png",
        caption: "My Mall View 3"
      },
      {
        url: "/projects/mm/mm4.png",
        caption: "My Mall View 4"
      },
      {
        url: "/projects/mm/mm5.png",
        caption: "My Mall View 5"
      },
      {
        url: "/projects/mm/mm6.png",
        caption: "My Mall View 6"
      }
      
    ]
  },
  
  {
    "id": 7,
    "title": "The White Abode",
    "category": "Residential",
    "year": "2024",
    "description": "Enter a symphony of serenity where timeless white provides a canvas for exquisite detail. Elegant arches dance with pastel and gold accents, crafting a space that radiates understated luxury and ethereal calm.",
    
    "location": "Ahmedabad, India",
    "area": "1,800 sq ft",
    "mainImage": "/projects/WA/WA-1.png",
    "gallery": [
        {
            "url": "/projects/WA/WA-1.png",
            "caption": "The White Abode View 1"
        },
        {
            "url": "/projects/WA/WA-2.png",
            "caption": "The White Abode View 2"
        },
        {
            "url": "/projects/WA/WA-3.png",
            "caption": "The White Abode View 3"
        },
        {
            "url": "/projects/WA/WA-4.png",
            "caption": "The White Abode View 4"
        },
        {
            "url": "/projects/WA/WA-5.png",
            "caption": "The White Abode View 5"
        },
        {
            "url": "/projects/WA/WA-6.png",
            "caption": "The White Abode View 6"
        },
        {
            "url": "/projects/WA/WA-7.png",
            "caption": "The White Abode View 7"
        },
        {
            "url": "/projects/WA/WA-8.png",
            "caption": "The White Abode View 8"
        },
        {
            "url": "/projects/WA/WA-9.png",
            "caption": "The White Abode View 9"
        },
        {
            "url": "/projects/WA/WA-10.png",
            "caption": "The White Abode View 10"
        },
        {
            "url": "/projects/WA/WA-11.png",
            "caption": "The White Abode View 11"
        }
    ]
  },

  {
    id: 8,
    title: "The Seraphic",
    category: "Residential",
    year: "2024",
    description: "An angelic retreat defined by purity and light. This contemporary residence offers an atmosphere of elevated tranquility, where clean lines and luminous spaces create a heavenly haven for modern living.",
    
    location: "Ahmedabad, India",
    area: "1,800 sq ft",
    mainImage: "/projects/S/S-6.png",
    gallery: [
      {
        url: "/projects/S/S-1.png",
        caption: "The Seraphic View 1"
      },
      {
        url: "/projects/S/S-2.png",
        caption: "The Seraphic View 2"
      },
      {
        url: "/projects/S/S-3.png",
        caption: "The Seraphic View 3"
      },
      {
        url: "/projects/S/S-4.png",
        caption: "The Seraphic View 4"
      },
      {
        url: "/projects/S/S-5.png",
        caption: "The Seraphic View 5"
      },
      {
        url: "/projects/S/S-6.png",
        caption: "The Seraphic View 6"
      },
      {
        url: "/projects/S/S-7.png",
        caption: "The Seraphic View 7"
      },
      {
        url: "/projects/S/S-8.png",
        caption: "The Seraphic View 8"
      },
      {
        url: "/projects/S/S-9.png",
        caption: "The Seraphic View 9"
      },
      {
        url: "/projects/S/S-10.png",
        caption: "The Seraphic View 10"
      },
      {
        url: "/projects/S/S-11.png",
        caption: "The Seraphic View 11"
      },
      {
        url: "/projects/S/S-12.png",
        caption: "The Seraphic View 12"
      },
      {
        url: "/projects/S/S-13.png",
        caption: "The Seraphic View 13"
      },
      {
        url: "/projects/S/S-14.png",
        caption: "The Seraphic View 14"
      }
    ]
  },
  {
    id: 9,
    title: "Patel's House",
    category: "Residential",
    year: "2024",
    description: "A contemporary family home where modern aesthetics embrace functional warmth. Designed for connection and comfort, this residence blends stylish living spaces with practical design, creating an inviting and sophisticated atmosphere.",
    location: "Ahmedabad, India",
    area: "1,800 sq ft",
    mainImage: "/projects/PH/PH-1.png",
    gallery: [
      {
        url: "/projects/PH/PH-1.png",
        caption: "Patel's House View 1"
      },
      {
        url: "/projects/PH/PH-2.png",
        caption: "Patel's House View 2"
      },
      {
        url: "/projects/PH/PH-3.png",
        caption: "Patel's House View 3"
      },
      {
        url: "/projects/PH/PH-4.png",
        caption: "Patel's House View 4"
      },
      {
        url: "/projects/PH/PH-5.png",
        caption: "Patel's House View 5"
      },
      {
        url: "/projects/PH/PH-6.png",
        caption: "Patel's House View 6"
      },
      {
        url: "/projects/PH/PH-7.png",
        caption: "Patel's House View 7"
      },
      {
        url: "/projects/PH/PH-8.png",
        caption: "Patel's House View 8"
      },
      {
        url: "/projects/PH/PH-9.png",
        caption: "Patel's House View 9"
      },
      {
        url: "/projects/PH/PH-10.png",
        caption: "Patel's House View 10"
      },
      {
        url: "/projects/PH/PH-11.png",
        caption: "Patel's House View 11"
      }
    ]
  },
 
  {
    id: 12,
    title: "The Casa Luxe",
    category: "Residential",
    year: "2022",
    description: "An embodiment of bespoke luxury, where every detail exudes opulence and refined taste. This residence is a masterpiece of elevated design, offering an unparalleled living experience crafted for the discerning.",
    location: "Ahmedabad, India",
    area: "1,200 sq ft",
    mainImage: "/projects/CL/CL-1.png",
    gallery: [
      {
        url: "/projects/CL/CL-1.png",
        caption: "The Casa Luxe View 1"
      },
      {
        url: "/projects/CL/CL-2.png",
        caption: "The Casa Luxe View 2"
      },
      {
        url: "/projects/CL/CL-3.png",
        caption: "The Casa Luxe View 3"
      },
      {
        url: "/projects/CL/CL-4.png",
        caption: "The Casa Luxe View 4"
      },
      {
        url: "/projects/CL/CL-5.png",
        caption: "The Casa Luxe View 5"
      },
      {
        url: "/projects/CL/CL-6.png",
        caption: "The Casa Luxe View 6"
      },
      {
        url: "/projects/CL/CL-7.png",
        caption: "The Casa Luxe View 7"
      },
      {
        url: "/projects/CL/CL-8.png",
        caption: "The Casa Luxe View 8"
      }
    ]
  },
  
  {
    id: 17,
    title: "The Aesthetic Abode",
    category: "Residential",
    year: "2023",
    description: 'A beautifully curated sanctuary where artistry meets everyday life. Meticulous attention to detail, a harmonious material palette, and thoughtfully composed spaces create an inspiring environment that elevates the concept of home.',
    location: "Ahmedabad, India",
    area: "2,000 sq ft",
    mainImage: "/projects/AA/AA-1.png",
    gallery: [
      { url: "/projects/AA/AA-1.png", caption: "The Aesthetic Abode View 1" },
      { url: "/projects/AA/AA-2.png", caption: "The Aesthetic Abode View 2" },
      { url: "/projects/AA/AA-3.png", caption: "The Aesthetic Abode View 3" },
      { url: "/projects/AA/AA-4.png", caption: "The Aesthetic Abode View 4" },
      { url: "/projects/AA/AA-5.png", caption: "The Aesthetic Abode View 5" },
      { url: "/projects/AA/AA-6.png", caption: "The Aesthetic Abode View 6" },
      { url: "/projects/AA/AA-7.png", caption: "The Aesthetic Abode View 7" },
      { url: "/projects/AA/AA-8.png", caption: "The Aesthetic Abode View 8" },
      { url: "/projects/AA/AA-9.png", caption: "The Aesthetic Abode View 9" },
      { url: "/projects/AA/AA-10.png", caption: "The Aesthetic Abode View 10" },
      { url: "/projects/AA/AA-11.png", caption: "The Aesthetic Abode View 11" },
      { url: "/projects/AA/AA-12.png", caption: "The Aesthetic Abode View 12" }
    ]
  },
  {
    id: 18,
    title: "Heritage Heaven",
    category: "Residential",
    year: "2023",
    description:'A timeless haven where heritage craftsmanship intertwines with modern comfort. Intricate details and warm palettes celebrate tradition, creating a soulful residence designed for multi-generational harmony and enduring elegance.',
    location: "Ahmedabad, India",
    area: "1,000 sq ft",
    mainImage: "/projects/HH/HH-1.png",
    gallery: [
      { url: "/projects/HH/HH-1.png", caption: "Heritage Heaven View 1" },
      { url: "/projects/HH/HH-2.png", caption: "Heritage Heaven View 2" },
      { url: "/projects/HH/HH-3.png", caption: "Heritage Heaven View 3" },
      { url: "/projects/HH/HH-4.png", caption: "Heritage Heaven View 4" },
      { url: "/projects/HH/HH-5.png", caption: "Heritage Heaven View 5" },
      { url: "/projects/HH/HH-6.png", caption: "Heritage Heaven View 6" },
      { url: "/projects/HH/HH-7.png", caption: "Heritage Heaven View 7" },
      { url: "/projects/HH/HH-8.png", caption: "Heritage Heaven View 8" },
      
    ]
  },
  {
    id: 19,
    title: "ClearFreight Logistics",
    category: "Office",
    year: "2024",
    description: 'A sleek, modern logistics hub engineered for peak operational efficiency. Clean industrial aesthetics meet functional workspaces, reflecting precision and professionalism in every aspect of its streamlined design.',
    location: "Ahmedabad, India",
    area: "600 sq ft",
    mainImage: "/projects/CLF/CLF-1.png",
    gallery: [
      { url: "/projects/CLF/CLF-1.png", caption: "ClearFreight Logistics View 1" },
      { url: "/projects/CLF/CLF-2.png", caption: "ClearFreight Logistics View 2" },
      { url: "/projects/CLF/CLF-3.png", caption: "ClearFreight Logistics View 3" },
      { url: "/projects/CLF/CLF-4.png", caption: "ClearFreight Logistics View 4" },
      { url: "/projects/CLF/CLF-5.png", caption: "ClearFreight Logistics View 5" },
      { url: "/projects/CLF/CLF-6.png", caption: "ClearFreight Logistics View 6" },
      { url: "/projects/CLF/CLF-7.png", caption: "ClearFreight Logistics View 7" },
      { url: "/projects/CLF/CLF-8.png", caption: "ClearFreight Logistics View 8" },
      { url: "/projects/CLF/CLF-9.png", caption: "ClearFreight Logistics View 9" },
    ]
  },
  
  {
    id: 21,
    title: "The IndoModern Living",
    category: "Residential",
    year: "Ongoing",
    description: 'Experience a captivating fusion where traditional Indian artistry meets contemporary design. Handcrafted details and natural materials create warm, inviting spaces that beautifully balance cultural richness with modern functionality.',
    location: "Ahmedabad, India",
    area: "3,300 sq ft",
    mainImage: "/projects/IL/IL-1.png",
    gallery: [
      { url: "/projects/IL/IL-1.png", caption: "The IndoModern Living View 1" },
      { url: "/projects/IL/IL-2.png", caption: "The IndoModern Living View 2" },
      { url: "/projects/IL/IL-3.png", caption: "The IndoModern Living View 3" },
      { url: "/projects/IL/IL-4.png", caption: "The IndoModern Living View 4" },
      { url: "/projects/IL/IL-5.png", caption: "The IndoModern Living View 5" },
      { url: "/projects/IL/IL-6.png", caption: "The IndoModern Living View 6" },
      { url: "/projects/IL/IL-7.png", caption: "The IndoModern Living View 7" },
      { url: "/projects/IL/IL-8.png", caption: "The IndoModern Living View 8" },
      { url: "/projects/IL/IL-9.png", caption: "The IndoModern Living View 9" }
    ]
  },
  {
    id: 22,
    title: "FIOF International",
    category: "Office",
    year: "2024",
    description: 'A sophisticated global headquarters designed for seamless international operations. Premium materials and strategic spatial planning create a commanding presence, reflecting world-class professionalism and connectivity.',
    location: "Surat, India",
    area: "700 sq ft",
    mainImage: "/projects/FI/FI-1.png",
    gallery: [
      { url: "/projects/FI/FI-1.png", caption: "FIOF International View 1" },
      { url: "/projects/FI/FI-2.png", caption: "FIOF International View 2" },
      { url: "/projects/FI/FI-3.png", caption: "FIOF International View 3" },
      { url: "/projects/FI/FI-4.png", caption: "FIOF International View 4" },
      { url: "/projects/FI/FI-5.png", caption: "FIOF International View 5" },
      { url: "/projects/FI/FI-6.png", caption: "FIOF International View 6" },
      { url: "/projects/FI/FI-7.png", caption: "FIOF International View 7" },
      { url: "/projects/FI/FI-8.png", caption: "FIOF International View 8" }
    ]
  },
  {
    id: 23,
    title: "Vinay Ply Traders",
    category: "Office",
    year: "2024",
    description: 'A dynamic trading office where industrial chic meets professional functionality. Designed for the plywood industry, this space optimizes workflow and client interaction with durable finishes and smart, practical layouts.',
    location: "Surat, India",
    area: "850 sq ft",
    mainImage: "/projects/VT/VT-1.png",
    gallery: [
      { url: "/projects/VT/VT-1.png", caption: "Vinay Ply Traders View 1" },
      { url: "/projects/VT/VT-2.png", caption: "Vinay Ply Traders View 2" },
      { url: "/projects/VT/VT-3.png", caption: "Vinay Ply Traders View 3" },
      { url: "/projects/VT/VT-4.png", caption: "Vinay Ply Traders View 4" },
      { url: "/projects/VT/VT-5.png", caption: "Vinay Ply Traders View 5" },
      { url: "/projects/VT/VT-6.png", caption: "Vinay Ply Traders View 6" },
      { url: "/projects/VT/VT-7.png", caption: "Vinay Ply Traders View 7" },
      { url: "/projects/VT/VT-8.png", caption: "Vinay Ply Traders View 8" },
      { url: "/projects/VT/VT-9.png", caption: "Vinay Ply Traders View 9" },
      { url: "/projects/VT/VT-10.png", caption: "Vinay Ply Traders View 10" },
      { url: "/projects/VT/VT-11.png", caption: "Vinay Ply Traders View 11" },
      { url: "/projects/VT/VT-12.png", caption: "Vinay Ply Traders View 12" }
    ]
  },
  {
    id: 24,
    title: "Anand Liner India Pvt.Ltd",
    category: "Office",
    year: "Ongoing",
    description: "A precision-engineered corporate space tailored for a leader in manufacturing. This modern office blends industrial strength with refined design, fostering innovation and operational excellence.",
    location: "Rajkot, India",
    area: "1,700 sq ft",
    mainImage: "/projects/AL/AL-1.png",
    gallery: [
      { url: "/projects/AL/AL-1.png", caption: "Anand Liner India Pvt.Ltd View 1" },
      { url: "/projects/AL/AL-2.png", caption: "Anand Liner India Pvt.Ltd View 2" },
      { url: "/projects/AL/AL-3.png", caption: "Anand Liner India Pvt.Ltd View 3" },
      { url: "/projects/AL/AL-4.png", caption: "Anand Liner India Pvt.Ltd View 4" },
      { url: "/projects/AL/AL-5.png", caption: "Anand Liner India Pvt.Ltd View 5" },
      { url: "/projects/AL/AL-6.png", caption: "Anand Liner India Pvt.Ltd View 6" },
      { url: "/projects/AL/AL-7.png", caption: "Anand Liner India Pvt.Ltd View 7" },
      { url: "/projects/AL/AL-8.png", caption: "Anand Liner India Pvt.Ltd View 8" },
      { url: "/projects/AL/AL-9.png", caption: "Anand Liner India Pvt.Ltd View 9" },
      { url: "/projects/AL/AL-10.png", caption: "Anand Liner India Pvt.Ltd View 10" }
    ]
  },
  {
    id: 25,
    title: "BHT Forge",
    category: "Industrial",
    year: "Ongoing",
    description: "A powerhouse of industrial innovation, this state-of-the-art forging plant is engineered for robust production and uncompromising quality, setting new benchmarks in manufacturing excellence.",
    location: "Rajkot, India",
    area: "6,600 sq ft",
    mainImage: "/projects/BHT/BHT-1.png",
    gallery: [
      { url: "/projects/BHT/BHT-1.png", caption: "BHT Forge View 1" },
      { url: "/projects/BHT/BHT-2.png", caption: "BHT Forge View 2" },
      { url: "/projects/BHT/BHT-3.png", caption: "BHT Forge View 3" },
      { url: "/projects/BHT/BHT-4.png", caption: "BHT Forge View 4" },
      { url: "/projects/BHT/BHT-5.png", caption: "BHT Forge View 5" },
      { url: "/projects/BHT/BHT-6.png", caption: "BHT Forge View 6" },
      { url: "/projects/BHT/BHT-7.png", caption: "BHT Forge View 7" },
      { url: "/projects/BHT/BHT-8.png", caption: "BHT Forge View 8" },
      { url: "/projects/BHT/BHT-9.png", caption: "BHT Forge View 9" },
      { url: "/projects/BHT/BHT-10.png", caption: "BHT Forge View 10" }
    ]
  },
  {
    id: 26,
    title: "Epitome Financial Service",
    category: "Office",
    year: "Ongoing",
    description: "The pinnacle of financial service environments, this cutting-edge office combines sophisticated design with client-centric innovation, creating a space where trust and expertise flourish.",
    location: "Rajkot, India",
    area: "610 sq ft",
    mainImage: "/projects/EFS/EFS-1.png",
    gallery: [
      { url: "/projects/EFS/EFS-1.png", caption: "Epitome Financial Service View 1" },
      { url: "/projects/EFS/EFS-2.png", caption: "Epitome Financial Service View 2" },
      { url: "/projects/EFS/EFS-3.png", caption: "Epitome Financial Service View 3" },
      { url: "/projects/EFS/EFS-4.png", caption: "Epitome Financial Service View 4" },
      { url: "/projects/EFS/EFS-5.png", caption: "Epitome Financial Service View 5" },
      { url: "/projects/EFS/EFS-6.png", caption: "Epitome Financial Service View 6" },
      { url: "/projects/EFS/EFS-7.png", caption: "Epitome Financial Service View 7" },
    ]
  },
  {
    id: 27,
    title: "Smart Delta Hedging",
    category: "Office",
    year: "2024",
    description: "An intelligent financial analytics hub designed for the future of trading. This advanced center blends high-tech infrastructure with sharp design, empowering strategic decision-making and risk management.",
    location: "Surat, India",
    area: "1,800 sq ft",
    mainImage: "/projects/SDH/SDH-1.png",
    gallery: [
      { url: "/projects/SDH/SDH-1.png", caption: "Smart Delta Hedging View 1" },
      { url: "/projects/SDH/SDH-2.png", caption: "Smart Delta Hedging View 2" },
      { url: "/projects/SDH/SDH-3.png", caption: "Smart Delta Hedging View 3" },
      { url: "/projects/SDH/SDH-4.png", caption: "Smart Delta Hedging View 4" },
      { url: "/projects/SDH/SDH-5.png", caption: "Smart Delta Hedging View 5" },
      { url: "/projects/SDH/SDH-6.png", caption: "Smart Delta Hedging View 6" },
      { url: "/projects/SDH/SDH-7.png", caption: "Smart Delta Hedging View 7" },
    ]
  },
  {
    id: 28,
    title: "Antique Square",
    category: "Commercial",
    year: "2025",
    description: "A landmark commercial plaza where timeless appeal meets modern enterprise. This versatile space offers a sophisticated backdrop for premier retail and dynamic office environments, destined to become a vibrant hub.",
    location: "Rajkot, India",
    area: "8,225 sq ft",
    mainImage: "/projects/AS/AS-1.png",
    gallery: [
      { url: "/projects/AS/AS-1.png", caption: "Antique Square View 1" },
      { url: "/projects/AS/AS-2.png", caption: "Antique Square View 2" },
     
    ]
  },
  {
    id: 29,
    title: "BHT Forge - 1",
    category: "Industrial",
    year: "2024",
    description: "An monumental expansion of industrial capability, this advanced forging facility represents a leap forward in production scale and technological prowess, built for enduring performance.",
    location: "Rajkot, India",
    area: "113,630 sq ft",
    mainImage: "/projects/BF/BF-1.png",
    gallery: [
      { url: "/projects/BF/BF-1.png", caption: "BHT FORGE - 1 View 1" },
      { url: "/projects/BF/BF-2.png", caption: "BHT FORGE - 1 View 2" },
    
    ]
  },
  {
    id: 30,
    title: "Deem Light Cafe",
    category: "Hospitality",
    year: "2025",
    description: "Immerse yourself in the warm glow of this chic cafe sanctuary. Ambient lighting and creative interiors craft an inviting atmosphere, perfect for savoring moments of connection and culinary delight.",
    location: "Surat, India",
    area: "980 sq ft",
    mainImage: "/projects/DC/DC-1.png",
    gallery: [
      { url: "/projects/DC/DC-1.png", caption: "Deem Light Cafe View 1" },
      { url: "/projects/DC/DC-2.png", caption: "Deem Light Cafe View 2" },
      { url: "/projects/DC/DC-3.png", caption: "Deem Light Cafe View 3" },
      { url: "/projects/DC/DC-4.png", caption: "Deem Light Cafe View 4" },
      { url: "/projects/DC/DC-5.png", caption: "Deem Light Cafe View 5" },
      { url: "/projects/DC/DC-6.png", caption: "Deem Light Cafe View 6" }
    ]
  },
  {
    id: 31,
    title: "Gondaliya Estate",
    category: "Commercial",
    year: "Ongoing",
    description: "A prestigious commercial estate setting a new standard for business environments. Featuring modern amenities and sophisticated design, it offers a premier address for discerning enterprises.",
    location: "Rajkot, India",
    area: "2,700 sq ft",
    mainImage: "/projects/GE/GE-1.png",
    gallery: [
      { url: "/projects/GE/GE-1.png", caption: "Gondaliya Estate View 1" },
      { url: "/projects/GE/GE-2.png", caption: "Gondaliya Estate View 2" },
      { url: "/projects/GE/GE-3.png", caption: "Gondaliya Estate View 3" },
      { url: "/projects/GE/GE-4.png", caption: "Gondaliya Estate View 4" },
    ]
  },
  {
    id: 32,
    title: "Nexus Square",
    category: "Hospitality",
    year: "Ongoing",
    description: "A dynamic destination where connections flourish. This vibrant hub blends sophisticated hospitality with versatile spaces, creating an energetic center for business, leisure, and community interaction.",
    location: "Rajkot, India",
    area: "8,580 sq ft",
    mainImage: "/projects/NS/NS-1.png",
    gallery: [
      { url: "/projects/NS/NS-1.png", caption: "Nexus Square View 1" },
      { url: "/projects/NS/NS-2.png", caption: "Nexus Square View 2" },
      { url: "/projects/NS/NS-3.png", caption: "Nexus Square View 3" },
      { url: "/projects/NS/NS-4.png", caption: "Nexus Square View 4" },
      { url: "/projects/NS/NS-5.png", caption: "Nexus Square View 5" },
      { url: "/projects/NS/NS-6.png", caption: "Nexus Square View 6" },
      { url: "/projects/NS/NS-7.png", caption: "Nexus Square View 7" },
      { url: "/projects/NS/NS-8.png", caption: "Nexus Square View 8" },
      { url: "/projects/NS/NS-9.png", caption: "Nexus Square View 9" },
      { url: "/projects/NS/NS-10.png", caption: "Nexus Square View 10" },
      { url: "/projects/NS/NS-11.png", caption: "Nexus Square View 11" },
      { url: "/projects/NS/NS-12.png", caption: "Nexus Square View 12" },
    ]
  },
  {
    id: 33,
    title: "The Arco Residence",
    category: "Residential",
    year: "2024",
    description: "Discover architectural poetry in this modern residence, where elegant arches define open, light-filled spaces. A masterful blend of contemporary design and timeless grace creates a home of distinctive beauty and comfort.",
    location: "Ahmedabad, India",
    area: "1,300 sq ft",
    mainImage: "/projects/TAR/TAR-1.png",
    gallery: [
      { url: "/projects/TAR/TAR-1.png", caption: "The Arco Residence View 1" },
      { url: "/projects/TAR/TAR-2.png", caption: "The Arco Residence View 2" },
      { url: "/projects/TAR/TAR-3.png", caption: "The Arco Residence View 3" },
      { url: "/projects/TAR/TAR-4.png", caption: "The Arco Residence View 4" },
      { url: "/projects/TAR/TAR-5.png", caption: "The Arco Residence View 5" },
      { url: "/projects/TAR/TAR-6.png", caption: "The Arco Residence View 6" },
      { url: "/projects/TAR/TAR-7.png", caption: "The Arco Residence View 7" },
      { url: "/projects/TAR/TAR-8.png", caption: "The Arco Residence View 8" },
      { url: "/projects/TAR/TAR-9.png", caption: "The Arco Residence View 9" },
      { url: "/projects/TAR/TAR-10.png", caption: "The Arco Residence View 10" },
      { url: "/projects/TAR/TAR-11.png", caption: "The Arco Residence View 11" },
      { url: "/projects/TAR/TAR-12.png", caption: "The Arco Residence View 12" },
    ]
  },
  {
    id: 34,
    title: "The Canvas House",
    category: "Residential",
    year: "2025",
    description: "A unique residence designed as a backdrop for life's masterpieces. Clean lines and versatile spaces invite personalization and creativity, transforming everyday living into an art form.",
    location: "Rajkot, India",
    area: "1,600 sq ft",
    mainImage: "/projects/TCH/TCH-1.png",
    gallery: [
      { url: "/projects/TCH/TCH-1.png", caption: "The Canvas House View 1" },
      { url: "/projects/TCH/TCH-2.png", caption: "The Canvas House View 2" },
      { url: "/projects/TCH/TCH-3.png", caption: "The Canvas House View 3" },
      { url: "/projects/TCH/TCH-4.png", caption: "The Canvas House View 4" },
      { url: "/projects/TCH/TCH-5.png", caption: "The Canvas House View 5" },
      { url: "/projects/TCH/TCH-6.png", caption: "The Canvas House View 6" },
      { url: "/projects/TCH/TCH-7.png", caption: "The Canvas House View 7" },
      { url: "/projects/TCH/TCH-8.png", caption: "The Canvas House View 8" },
      { url: "/projects/TCH/TCH-9.png", caption: "The Canvas House View 9" }
    ]
  },
  {
    id: 35,
    title: "Zenwood Residence",
    category: "Residential",
    year: "Ongoing",
    description: "Find tranquility in this serene home, where the warmth of natural wood meets minimalist design. Every element is crafted to promote peace, mindfulness, and a harmonious connection with nature.",
    location: "Surat, India",
    area: "1,100 sq ft",
    mainImage: "/projects/ZR/ZR-1.png",
    gallery: [
      { url: "/projects/ZR/ZR-1.png", caption: "Zenwood Residence View 1" },
      { url: "/projects/ZR/ZR-2.png", caption: "Zenwood Residence View 2" },
      { url: "/projects/ZR/ZR-3.png", caption: "Zenwood Residence View 3" },
      { url: "/projects/ZR/ZR-4.png", caption: "Zenwood Residence View 4" },
      { url: "/projects/ZR/ZR-5.png", caption: "Zenwood Residence View 5" },
      { url: "/projects/ZR/ZR-6.png", caption: "Zenwood Residence View 6" },
      { url: "/projects/ZR/ZR-7.png", caption: "Zenwood Residence View 7" },
      { url: "/projects/ZR/ZR-8.png", caption: "Zenwood Residence View 8" },
      { url: "/projects/ZR/ZR-9.png", caption: "Zenwood Residence View 9" }
    ]
  },
  {
    id: 36,
    title: "Patel Niwas",
    category: "Residential",
    year: "2024",
    description: "A grand family residence where cherished traditions meet modern comforts. Spacious interiors and thoughtful design create an enduring legacy home, perfect for multi-generational living and creating lasting memories.",
    location: "Surendranagar, India",
    area: "3,000 sq ft",
    mainImage: "/projects/PN/PN-1.png",
    gallery: [
      { url: "/projects/PN/PN-1.png", caption: "Patel Niwas View 1" },
      { url: "/projects/PN/PN-2.png", caption: "Patel Niwas View 2" },
      { url: "/projects/PN/PN-3.png", caption: "Patel Niwas View 3" },
      { url: "/projects/PN/PN-4.png", caption: "Patel Niwas View 4" },
      { url: "/projects/PN/PN-5.png", caption: "Patel Niwas View 5" },
      { url: "/projects/PN/PN-6.png", caption: "Patel Niwas View 6" },
      { url: "/projects/PN/PN-7.png", caption: "Patel Niwas View 7" },
      { url: "/projects/PN/PN-8.png", caption: "Patel Niwas View 8" }
    ]
  }
];

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