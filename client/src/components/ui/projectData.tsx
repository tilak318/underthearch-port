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
    category: "Commercial",
    year: "Ongoing",
    description: "A sophisticated office complex designed for a leading tech company with focus on innovation and collaboration.",
   
    location: "Rajkot, India",
    area: "6,000 sq ft",
    mainImage: "/sf11.png",
    gallery: [

      {
        url: "/sf12.png",
        caption: "Sensitive Forge View 1"
      },
      {
        url: "/sf15.png",
        caption: "Sensitive Forge View 2"
      },
      {
        url: "/sf13.png",
        caption: "Sensitive Forge View 3"
      },
      {
        url: "/sf14.png",
        caption: "Sensitive Forge View 4"
      },
      {
        url: "/sf8.png",
        caption: "Sensitive Forge View 5"
      },
      {
        url: "/sf9.png",
        caption: "Sensitive Forge View 6"
      },
      {
        url: "/sf10.png",
        caption: "Sensitive Forge View 7"
      },
      {
        url: "/sf5.png",
        caption: "Sensitive Forge View 8"
      },
      {
        url: "/sf16.png",
        caption: "Sensitive Forge View 9"
      },
      {
        url: "/sf7.png",
        caption: "Sensitive Forge View 10"
      },
      {
        url: "/sf3.png",
        caption: "Sensitive Forge View 11"
      },
      {
        url: "/sf4.png",
        caption: "Sensitive Forge View 12"
      }  
    ]
  },
  {
    id: 2,
    title: "The Inner Coterie",
    category: "Residential",
    year: "2024",
    description: "Step into a haven of subtle elegance where all the details exude calm and sophistication. The harmony between form and function is evident in this carefully crafted space, where soft curves and organic shapes blend with copper accents to create a compelling visual narrative.",
    
    location: "Ahmedabad, India",
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
    ]
  },
  {
    "id": 3,
    "title": "Rasam Fashion",
    "category": "Commercial - Retail",
    "year": "2025",
    "description": "An exclusive residential development combining luxury living with sustainable design principles.",
    "location": "Rajkot, India",
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
    ]
  },

  
  {
    id: 4,
    title: "Avadh House",
    category: "Residential",
    year: "Ongoing",
    description: "A community-focused library that blends traditional architecture with modern technology and accessibility.",
 
    location: "Surat, India",
    area: "3,800 sq ft",
    mainImage: "/ah6.png",
    gallery: [
      {
        url: "/ah5.png",
        caption: "Avadh House View 1"
      },
      {
        url: "/ah4.png",
        caption: "Avadh House View 2"
      },
      {
        url: "/ah1.png",
        caption: "Avadh House View 3"
      },
      {
        url: "/ah4.png",
        caption: "Avadh House View 4"
      },
      {
        url: "/ah3.png",
        caption: "Avadh House View 5"
      },
      {
        url: "/ah7.png",
        caption: "Avadh House View 6"
      }
    ]
  },
  {
    id: 5,
    title: "Laxmi Ratan",
    category: "Residential",
    year: "Ongoing",
    description: "An eco-friendly office building with cutting-edge sustainable features and modern workspace solutions.",
   
    location: "Surat, India",
    area: "1,150 sq ft",
    mainImage: "/lr1.png",
    gallery: [
      {
        url: "/lr2.png",
        caption: "Laxmi Ratan View 1"
      },
      {
        url: "/lr3.png",
        caption: "Laxmi Ratan View 2"
      },
      {
        url: "/lr4.png",
        caption: "Laxmi Ratan View 3"
      },
      {
        url: "/lr5.png",
        caption: "Laxmi Ratan View 4"
      },
      {
        url: "/lr6.png",
        caption: "Laxmi Ratan View 5"
      }
    ]
  },
  {
    id: 6,
    title: "My Mall",
    category: "Commercial",
    year: "Ongoing",
    description: "A sophisticated office complex designed for a leading tech company with focus on innovation and collaboration.",
   
    location: "Surat, India",
    area: "18,000 sq ft",
    mainImage: "/mm2.png",
    gallery: [
      {
        url: "/mm1.png",
        caption: "My Mall View 1"
      },
      {
        url: "/mm3.png",
        caption: "My Mall View 2"
      },
      {
        url: "/mm5.png",
        caption: "My Mall View 3"
      },
      
      {
        url: "/mm6.png",
        caption: "My Mall View 4"
      },
      {
        url: "/mm4.png",
        caption: "My Mall View 5"
      }
      
    ]
  },
  
  {
    "id": 7,
    "title": "The White Abode",
    "category": "Residential",
    "year": "2024",
    "description": "A SYMPHONY OF SERENITY: The timelessness of white and a dance of details. This design journey explores the delicate balance between luxury and simplicity, where a symphony of pastel and gold accents, elegant design, and the eternal appeal of architectural arches are set above a calm white canvas. The interplay between white, pastels, and gold results in a space that radiates luxury with a touch of extravagance.",
    
    "location": "Ahmedabad, India",
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
    ]
  },

  {
    id: 8,
    title: "The Seraphic",
    category: "Residential",
    year: "2024",
    description: "A contemporary commercial space designed for optimal workflow and employee well-being in the heart of the business district.",
    
    location: "Ahmedabad, India",
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
    ]
  },
  {
    id: 9,
    title: "Patel's House",
    category: "Residential",
    year: "2024",
    description: "A contemporary residential design blending modern aesthetics with functional living spaces for a family home.",
    location: "Ahmedabad, India",
    area: "1,800 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744460686/liv_1.1_nwqmmf.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460682/parents_bed_1_r5_vxwgva.png",
        caption: "Parents Bedroom View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460682/parents_bed_2_r5_efi9kn.png",
        caption: "Parents Bedroom View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460681/Living_3_xrvok1.png",
        caption: "Living Room View"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460680/master_bed_2_t9a3vh.png",
        caption: "Master Bedroom View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460680/Master_Bedroom_R8_aurrun.png",
        caption: "Master Bedroom View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460677/children_beed_room_bcznqy.png",
        caption: "Children's Bedroom View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460676/Main_Door_op4_bxeqnm.png",
        caption: "Main Entrance"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460676/master_bed_1_wpmyg1.png",
        caption: "Master Bedroom View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460676/liv_2.1_gziyb5.png",
        caption: "Living Room Alternate View"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744460675/children_bed_room_view_2_igw7o1.png",
        caption: "Children's Bedroom View 2"
      }
    ]
  },
  // {
  //   id: 10,
  //   title: "Elegance Redefined",
  //   category: "Residential",
  //   year: "2023",
  //   description: "A masterpiece of refined living where contemporary luxury meets timeless sophistication in every carefully curated space.",
  //   location: "Ahmedabad, India",
  //   area: "1,800 sq ft",
  //   mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744461409/living_room_pqpcrg.png",
  //   gallery: [
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461413/living_room_3_tnhg7w.png",
  //       caption: "Living Room View 1"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461411/Master_Bed_1_upca4f.png",
  //       caption: "Master Bedroom View 1"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461411/Master_Bed_2_vcqdru.png",
  //       caption: "Master Bedroom View 2"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461410/Mastebedroom_2_spykvq.png",
  //       caption: "Master Bedroom View 3"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461409/living_room_2_ltsxtz.png",
  //       caption: "Living Room View 2"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461409/living_room_4_piirnr.png",
  //       caption: "Living Room View 3"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461406/Bedroom_1a_s79fdu.png",
  //       caption: "Guest Bedroom View 1"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461406/Child_s_room_fmvpbm.png",
  //       caption: "Children's Room"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461405/Bedroom_1_hevgaa.png",
  //       caption: "Guest Bedroom View 2"
  //     }
  //   ]
  // },
  // {
  //   id: 11,
  //   title: "Vista Living",
  //   category: "Residential",
  //   year: "2022",
  //   description: "A harmonious blend of modern design and functional spaces that create seamless living experiences with panoramic views.",
  //   location: "Ahmedabad, India",
  //   area: "1,200 sq ft",
  //   mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744461752/Living_2_p0hjds.png",
  //   gallery: [
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461754/Mandir_room_1.1_fjclbl.png",
  //       caption: "Prayer Room"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461752/Bed_2.1_r4_uftt4n.png",
  //       caption: "Bedroom View"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461755/Main_door_1_zmp1ml.png",
  //       caption: "Main Entrance"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461752/Living_2_p0hjds.png",
  //       caption: "Living Area"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461750/Kitchen_1.1_czquav.png",
  //       caption: "Kitchen"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461742/Child_room_2_gtllku.png",
  //       caption: "Children's Room"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461749/Diniing_2_pj0vxv.png",
  //       caption: "Dining Area"
  //     }
  //   ]
  // },
  {
    id: 12,
    title: "The Casa Luxe",
    category: "Residential",
    year: "2022",
    description: "An epitome of luxurious living where every detail reflects bespoke craftsmanship and elevated design sensibilities.",
    location: "Ahmedabad, India",
    area: "1,200 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744462331/Living_Room_r4_feou1y.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462335/Girishbhai_Bed_room_yxdx75.png",
        caption: "Master Suite"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462331/Living_4.2_q24tko.png",
        caption: "Living Area View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462326/Parents_Bedroom_r5.2_vcc358.png",
        caption: "Guest Suite"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462335/Dinning_uje0ob.png",
        caption: "Formal Dining"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462326/Living_3.2_aeiolu.png",
        caption: "Living Area View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462326/Childs_bed_r4_3_abf5rt.png",
        caption: "Junior Suite"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462326/Living_2.2_ala2yi.png",
        caption: "Living Area View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462324/Parents_Bedroom_r5_uucpiy.png",
        caption: "Guest Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744462322/Main_door_w5mdxc.png",
        caption: "Grand Foyer"
      }
    ]
  },
  // {
  //   id: 13,
  //   title: "The Arcadia Residence",
  //   category: "Residential",
  //   year: "2024",
  //   description: "A sanctuary of refined living where architectural purity meets understated elegance in perfect harmony.",
  //   location: "",
  //   area: "",
  //   mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744463077/LIV_2_r3_p9p914.png",
  //   gallery: [
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463075/Bed_2a_sbbkgx.png",
  //       caption: "Master Suite"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463074/Dining_wfbx1t.png",
  //       caption: "Dining Pavilion"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463078/Kitchen_1_znmf6l.png",
  //       caption: "Gourmet Kitchen"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463077/Kitchen_2_g9ikyf.png",
  //       caption: "Kitchen Detail"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463081/Foyer_d04eoc.png",
  //       caption: "Entry Foyer"
  //     },
  //     {
  //       url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463085/LIV_1_r3_s7ggrl.png",
  //       caption: "Living Pavilion"
  //     }
  //   ]
  // },
  // {
  //   id: 14,
  //   title: "Modern Tranquility Home",
  //   category: "Residential",
  //   year: "2022", 
  //   description: 'A contemporary residential design blending modern aesthetics with functional living spaces. This home features clean lines, expansive windows for natural light, and thoughtful spatial planning that creates a seamless flow between indoor and outdoor living areas. The design emphasizes tranquility through its minimalist approach and harmonious material palette.',
  //   location: 'Ahmedabad, India',
  //   area: '1,800 sq.ft.',
  //   mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744515576/1._Living_2.4_yvruqy.png",
  //   gallery: [
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744515558/Bed_3.1_r3_e71xzk.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744515559/mAIN_DOOR_bduxcd.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744515558/Master_Bedroom_1_ctrzg3.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744515557/Informal_Living_mns0n1.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744515555/1._Living_1_qmzzxd.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744515555/foyer_r2_epk8dk.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744515555/Dinning_wall_r2_qcgeio.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744515554/bed_2.1_r3_o2x8se.png", caption: "" },
  //   ]
  // },
  // {
  //   id: 15,
  //   title: "Serene Abode",
  //   category: "Residential",
  //   year: "2024",
  //   description: 'A harmonious residential space designed for peaceful living, featuring clean modern lines, natural materials, and thoughtful lighting. The design creates a serene atmosphere through balanced proportions and a calming neutral palette while maintaining functional living spaces.',
  //   location: "",
  //   area: "",
  //   mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744519014/Living_3_ppkfjp.png",
  //   gallery: [
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519014/Living_1_girv6x.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519015/Tusharbhai_bedroom_mtlkmh.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519013/9._Tusharbhai_Bedroom_2_xiyydr.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519012/3._Living_dpcwng.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519013/11._Bedroom_2.2_k5jewp.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519012/Tusharbhai_bed_2_sosv7w.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519011/12._Bedroom_3.1_qbwv1l.png", caption: "" }
  //   ]
  // },
  // {
  //   id: 16,
  //   title: "ModEdge",
  //   category: "Residential",
  //   year: "2021",
  //   description: 'A cutting-edge modern residence blending contemporary design with functional elegance. The space features bold geometric forms, innovative material combinations, and seamless transitions between living areas, creating a striking yet livable environment.',
  //   location: "Ahmedabad, India",
  //   area: "1,800 sq ft",
  //   mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744519562/Living_2_i1cv8p.png",
  //   gallery: [
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519560/bedroom_1_lwicha.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519560/Bed_4_y0cdx1.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519560/Mandir_1_s5ldfe.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519563/Mandir_3_cp2h1i.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519563/Mandir_2_xfrecj.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519570/Living_Room_op4_uiosx3.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519570/Living_3_nnm96z.png", caption: "" },
  //     { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519564/Master_bedroom_kxfina.png", caption: "" }
  //   ]
  // },
  {
    id: 17,
    title: "The Aesthetic Abode",
    category: "Residential",
    year: "2023",
    description: 'A beautifully curated living space where design meets functionality. This residence showcases meticulous attention to detail through its harmonious material palette, custom millwork, and thoughtfully composed spaces that balance aesthetics with everyday living.',
    location: "Ahmedabad, India",
    area: "2,000 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744519789/Liv_2_dxh3am.png",
    gallery: [
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519794/Liv_5_pnia2z.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519795/Mandir1_vpjrxe.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519789/Liv_3_sdq9at.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519789/Liv_6_oyurkk.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519788/Liv_4_toa4vl.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519787/2_Master_Bed_1.1_etru4k.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519786/Bedroom_1.1_r4.1_am3ntk.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519786/Liv_1_nulk1e.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519785/Foyer_hmtw57.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519784/Foyer_2_rvugqn.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519783/Bedroom_1.1_r4_kgpt8o.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519783/Bedroom_1.2_wqlwnk.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744519782/Bedroom_1.1_ywwjex.png", caption: "" }
    ]
  },
  {
    id: 18,
    title: "Heritage Heaven",
    category: "Residential",
    year: "2023",
    description: 'A timeless residence blending traditional architectural elements with modern comforts. This home celebrates heritage craftsmanship through intricate detailing, warm material palettes, and spaces designed for multi-generational living while maintaining contemporary functionality.',
    location: "Ahmedabad, India",
    area: "1,000 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744520170/Liv_1_d3rmjs.png",
    gallery: [
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520174/Liv_2_p66um7.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520221/dINNING_ebayyr.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520219/Main_Door_j8u00e.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520229/Bed_2.1_fl5fja.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520219/Bed_1.1_kkagjl.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520218/Bed_1.2_oo1953.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520163/foyer_o92tfq.png", caption: "" }
    ]
  },
  {
    id: 19,
    title: "ClearFreight Logistics",
    category: "Commercial",
    year: "2024",
    description: 'A modern logistics facility designed for operational efficiency, featuring clean industrial aesthetics with functional workspaces. The design incorporates durable materials, optimized workflow layouts, and professional branding elements to create a cohesive corporate identity.',
    location: "Ahmedabad, India",
    area: "600 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744520687/Enscape_2024-08-09-20-46-37_ers8is.png",
    gallery: [
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520689/Enscape_2024-08-09-20-45-35_svyc1h.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520690/Enscape_2024-08-08-21-30-08_w9mlrk.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520690/Enscape_2024-08-08-21-27-21_awosgu.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520691/Enscape_2024-08-09-20-47-26_upc6t8.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520693/Enscape_2024-08-08-21-37-06_ntdobd.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520693/Enscape_2024-08-08-20-54-06_fpk0sh.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520694/Enscape_2024-08-09-20-51-05_fk2vkr.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520700/Enscape_2024-08-09-20-55-58_lkj64k.png", caption: "" }
    ]
  },
  {
    id: 20,
    title: "New Age",
    category: "Commercial",
    year: "2025",
    description: 'A contemporary office space designed for innovation and collaboration, featuring sleek modern aesthetics with functional work zones. The design incorporates ergonomic workstations, dynamic communal areas, and premium finishes to create a professional yet inspiring work environment that fosters productivity and creativity.',
    location: "Surat, India",
    area: "780 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744520982/MAIN_OFFICE_2.1_ys5j93.png",
    gallery: [
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520982/MAIN_OFFICE_2.1_ys5j93.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520981/ENTRENCE_1_ey30de.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520985/Enscape_2025-02-20-13-18-58_tjxp6k.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520990/MAIN_OFFICE_2.3_qih7dw.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744520988/Enscape_2025-02-20-14-26-30_opt7go.png", caption: "" }
    ]
  },
  {
    id: 21,
    title: "The IndoModern Living",
    category: "Residential",
    year: "Ongoing",
    description: 'A harmonious fusion of traditional Indian design elements with contemporary aesthetics, creating warm, inviting living spaces. The residence features handcrafted details, natural materials, and a thoughtful layout that balances cultural heritage with modern functionality for comfortable family living.',
    location: "Ahmedabad, India",
    area: "3,300 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744521254/LIVING_ROOM_3_uutojv.png",
    gallery: [
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521251/BED_ROOOM_1.3_w9u9go.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521257/LIVING_ROOM_7_nzrafm.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521247/BED_ROOM_4_v1fq3s.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521246/LIVING_ROOM_1_mslwqp.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521245/LIVING_ROOM_6_koaem5.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521244/LIVING_ROOM_4_ky8lec.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521239/GUEST_ROOM_ixlmtw.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521236/Enscape_2024-07-12-19-22-41_z2gdgo.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521162/ANILBHAI_ROOM_mefajr.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521161/BED_ROOM_3_rravh3.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521153/Bed_room_3_r2_xfkjeh.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521153/BED_ROOM_1_bckonf.png", caption: "" }
    ]
  },
  {
    id: 22,
    title: "FIOF International",
    category: "Commercial",
    year: "2024",
    description: 'A sophisticated corporate headquarters designed for international operations, featuring sleek professional spaces with global aesthetic appeal. The design combines modern office functionality with premium materials and strategic spatial planning to support multinational business operations and client interactions.',
    location: "Surat, India",
    area: "700 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744521781/Enscape_2023-12-30-20-04-22_nvp9ht.png",
    gallery: [
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521782/Enscape_2023-12-30-20-06-33_oes010.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521783/Enscape_2023-12-30-20-03-38_hoy6i9.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521783/Enscape_2023-12-30-20-07-29_emiqdy.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521783/Enscape_2023-12-30-20-02-52_ezzfo4.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521784/Enscape_2023-12-30-20-01-42_qfnvkt.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744521791/Enscape_2023-12-30-20-05-13_rnhoff.png", caption: "" }
    ]
  },
  {
    id: 23,
    title: "Vinay Ply Traders",
    category: "Commercial",
    year: "2024",
    description: 'A functional yet professional trading office space designed for the plywood industry, featuring practical work areas with durable finishes. The layout optimizes product display, client meetings, and administrative operations while incorporating industrial-chic design elements that reflect the building materials trade.',
    location: "Surat, India",
    area: "850 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744522508/main_office_3-min_qf2wcg.png",
    gallery: [
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522514/OFFICE_4-min_cir4xi.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522514/OFFICE_5-min_fuevck.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522512/reception_area_2-min_v56ejw.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522511/reception_area_1-min_bwqkla.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522508/main_office_1-min_lbu3x9.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522508/OFFICE_3-min_nrbnxr.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522508/main_office_2-min_eryeq8.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522507/OFFICE_2-min_ovoav5.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522507/Enscape_2024-12-27-18-12-28_v_1_-min_urgqri.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522503/office_1-min_ezvcuy.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522503/main_office_5-min_oykd6u.png", caption: "" },
      { url: "https://res.cloudinary.com/daasgedae/image/upload/v1744522502/Enscape_2024-12-17-19-05-20_Enscape_scene_1-min_i5dct9.png", caption: "" }
    ]
  },
  {
    id: 24,
    title: "ANAND LINER INDIA PVT.LTD",
    category: "Commercial",
    year: "2025",
    description: "A modern industrial facility tailored for precision manufacturing and operational efficiency.",
    location: "India",
    area: "10,000 sq ft",
    mainImage: "/AL-1.png",
    gallery: [
      { url: "/AL-2.png", caption: "ANAND LINER INDIA PVT.LTD View 1" },
      { url: "/AL-3.png", caption: "ANAND LINER INDIA PVT.LTD View 2" },
      { url: "/AL-4.png", caption: "ANAND LINER INDIA PVT.LTD View 3" },
      { url: "/AL-5.png", caption: "ANAND LINER INDIA PVT.LTD View 4" },
      { url: "/AL-6.png", caption: "ANAND LINER INDIA PVT.LTD View 5" },
      { url: "/AL-7.png", caption: "ANAND LINER INDIA PVT.LTD View 6" },
      { url: "/AL-8.png", caption: "ANAND LINER INDIA PVT.LTD View 7" },
      { url: "/AL-9.png", caption: "ANAND LINER INDIA PVT.LTD View 8" },
      { url: "/AL-10.png", caption: "ANAND LINER INDIA PVT.LTD View 9" }
    ]
  },
  {
    id: 25,
    title: "BHT FORGE",
    category: "Commercial",
    year: "2025",
    description: "A state-of-the-art forging plant designed for robust production and quality control.",
    location: "India",
    area: "8,500 sq ft",
    mainImage: "/BHT-1.png",
    gallery: [
      { url: "/BHT-2.png", caption: "BHT FORGE View 1" },
      { url: "/BHT-3.png", caption: "BHT FORGE View 2" },
      { url: "/BHT-4.png", caption: "BHT FORGE View 3" },
      { url: "/BHT-5.png", caption: "BHT FORGE View 4" },
      { url: "/BHT-6.png", caption: "BHT FORGE View 5" },
      { url: "/BHT-7.png", caption: "BHT FORGE View 6" },
      { url: "/BHT-8.png", caption: "BHT FORGE View 7" },
      { url: "/BHT-9.png", caption: "BHT FORGE View 8" },
      { url: "/BHT-10.png", caption: "BHT FORGE View 9" }
    ]
  },
  {
    id: 26,
    title: "EPITOME FINANCIAL SERVICE",
    category: "Commercial",
    year: "2025",
    description: "A cutting-edge financial service office focused on client-centric solutions and innovation.",
    location: "India",
    area: "5,000 sq ft",
    mainImage: "/EFS-1.png",
    gallery: [
      { url: "/EFS-2.png", caption: "EPITOME FINANCIAL SERVICE View 1" },
      { url: "/EFS-3.png", caption: "EPITOME FINANCIAL SERVICE View 2" },
      { url: "/EFS-4.png", caption: "EPITOME FINANCIAL SERVICE View 3" },
      { url: "/EFS-5.png", caption: "EPITOME FINANCIAL SERVICE View 4" },
      { url: "/EFS-6.png", caption: "EPITOME FINANCIAL SERVICE View 5" },
      { url: "/EFS-7.png", caption: "EPITOME FINANCIAL SERVICE View 6" }
    ]
  },
  {
    id: 27,
    title: "SMART DELTA HEDGING",
    category: "Commercial",
    year: "2025",
    description: "A smart financial analytics center equipped for advanced trading and risk management.",
    location: "India",
    area: "4,200 sq ft",
    mainImage: "/SDH-4.png",
    gallery: [
      { url: "/SDH-2.png", caption: "SMART DELTA HEDGING View 1" },
      { url: "/SDH-3.png", caption: "SMART DELTA HEDGING View 2" },
      { url: "/SDH-1.png", caption: "SMART DELTA HEDGING View 3" },
      { url: "/SDH-5.png", caption: "SMART DELTA HEDGING View 4" },
      { url: "/SDH-6.png", caption: "SMART DELTA HEDGING View 5" },
      { url: "/SDH-7.png", caption: "SMART DELTA HEDGING View 6" }
    ]
  },
  {
    id: 28,
    title: "ANTIC SQUARE",
    category: "Commercial",
    year: "2025",
    description: "A contemporary commercial plaza designed for retail and office spaces.",
    location: "India",
    area: "12,000 sq ft",
    mainImage: "/AS-1.png",
    gallery: [
      { url: "/AS-1.png", caption: "ANTIC SQUARE View 1" },
      { url: "/AS-2.png", caption: "ANTIC SQUARE View 2" },
     
    ]
  },
  {
    id: 29,
    title: "BHT FORGE - 1",
    category: "Industrial",
    year: "2025",
    description: "An advanced forging facility extension for expanded production.",
    location: "India",
    area: "8,000 sq ft",
    mainImage: "/BF-1.png",
    gallery: [
      { url: "/BF-1.png", caption: "BHT FORGE - 1 View 1" },
      { url: "/BF-2.png", caption: "BHT FORGE - 1 View 2" },
    
    ]
  },
  {
    id: 30,
    title: "DEAM LIGHT CAFE",
    category: "Hospitality",
    year: "2025",
    description: "A cozy and modern cafe space with ambient lighting and creative interiors.",
    location: "India",
    area: "2,500 sq ft",
    mainImage: "/DC-1.png",
    gallery: [
      { url: "/DC-1.png", caption: "DEAM LIGHT CAFE View 1" },
      { url: "/DC-2.png", caption: "DEAM LIGHT CAFE View 2" },
      { url: "/DC-3.png", caption: "DEAM LIGHT CAFE View 3" },
      { url: "/DC-4.png", caption: "DEAM LIGHT CAFE View 4" },
      { url: "/DC-5.png", caption: "DEAM LIGHT CAFE View 5" },
      { url: "/DC-6.png", caption: "DEAM LIGHT CAFE View 6" }
    ]
  },
  {
    id: 31,
    title: "GONDALIYA ESTATE",
    category: "Residential",
    year: "2025",
    description: "A premium residential estate with modern amenities and lush landscaping.",
    location: "India",
    area: "15,000 sq ft",
    mainImage: "/GE-1.png",
    gallery: [
      { url: "/GE-1.png", caption: "GONDALIYA ESTATE View 1" },
      { url: "/GE-2.png", caption: "GONDALIYA ESTATE View 2" },
      { url: "/GE-3.png", caption: "GONDALIYA ESTATE View 3" },
      { url: "/GE-4.png", caption: "GONDALIYA ESTATE View 4" },
    ]
  },
  {
    id: 32,
    title: "NEXUS SQUARE",
    category: "Commercial",
    year: "2025",
    description: "A dynamic business hub for startups and established enterprises alike.",
    location: "India",
    area: "11,000 sq ft",
    mainImage: "/NS-1.png",
    gallery: [
      { url: "/NS-1.png", caption: "NEXUS SQUARE View 1" },
      { url: "/NS-2.png", caption: "NEXUS SQUARE View 2" },
      { url: "/NS-3.png", caption: "NEXUS SQUARE View 3" },
      { url: "/NS-4.png", caption: "NEXUS SQUARE View 4" },
      { url: "/NS-5.png", caption: "NEXUS SQUARE View 5" },
      { url: "/NS-6.png", caption: "NEXUS SQUARE View 6" },
      { url: "/NS-7.png", caption: "NEXUS SQUARE View 7" },
      { url: "/NS-8.png", caption: "NEXUS SQUARE View 8" },
      { url: "/NS-9.png", caption: "NEXUS SQUARE View 9" },
      { url: "/NS-10.png", caption: "NEXUS SQUARE View 10" },
      { url: "/NS-11.png", caption: "NEXUS SQUARE View 11" },
      { url: "/NS-12.png", caption: "NEXUS SQUARE View 12" },
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