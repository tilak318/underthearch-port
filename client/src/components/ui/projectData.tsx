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
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743585333/7_qvdjoe.png",
        caption: "Sensitive Forge View 10"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743585333/3_dbnbtd.png",
        caption: "Sensitive Forge View 11"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743585332/4_k2chlb.png",
        caption: "Sensitive Forge View 12"
      }  
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    id: 6,
    title: "My Mall",
    category: "Commercial",
    year: "2021",
    description: "A sophisticated office complex designed for a leading tech company with focus on innovation and collaboration.",
   
    location: "Seattle, WA",
    area: "20,000 sq ft",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1743585533/2_u25l1o.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743585534/1_afa8aw.png",
        caption: "My Mall View 1"
      },
     
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743585533/3_jxba4p.png",
        caption: "My Mall View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743585534/5_n6locu.png",
        caption: "My Mall View 3"
      },
      
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743585540/6_viswr0.png",
        caption: "My Mall View 4"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1743585535/4_sjltpt.png",
        caption: "My Mall View 5"
      }
      
    ]
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
    ]
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
    ]
  },
  {
    id: 9,
    title: "Patel's House",
    category: "Residential",
    year: "2024",
    description: "A contemporary residential design blending modern aesthetics with functional living spaces for a family home.",
    location: "Ahmedabad, India",
    area: "2,800 sq ft",
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
  {
    id: 10,
    title: "Elegance Redefined",
    category: "Residential",
    year: "2024",
    description: "A masterpiece of refined living where contemporary luxury meets timeless sophistication in every carefully curated space.",
    location: "",
    area: "",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744461409/living_room_pqpcrg.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461413/living_room_3_tnhg7w.png",
        caption: "Living Room View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461411/Master_Bed_1_upca4f.png",
        caption: "Master Bedroom View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461411/Master_Bed_2_vcqdru.png",
        caption: "Master Bedroom View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461410/Mastebedroom_2_spykvq.png",
        caption: "Master Bedroom View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461409/living_room_2_ltsxtz.png",
        caption: "Living Room View 2"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461409/living_room_4_piirnr.png",
        caption: "Living Room View 3"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461406/Bedroom_1a_s79fdu.png",
        caption: "Guest Bedroom View 1"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461406/Child_s_room_fmvpbm.png",
        caption: "Children's Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461405/Bedroom_1_hevgaa.png",
        caption: "Guest Bedroom View 2"
      }
    ]
  },
  {
    id: 11,
    title: "Vista Living",
    category: "Residential",
    year: "2024",
    description: "A harmonious blend of modern design and functional spaces that create seamless living experiences with panoramic views.",
    location: "",
    area: "",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744461753/Living_22_rhopin.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461754/Mandir_room_1.1_fjclbl.png",
        caption: "Prayer Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461752/Bed_2.1_r4_uftt4n.png",
        caption: "Bedroom View"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461755/Main_door_1_zmp1ml.png",
        caption: "Main Entrance"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461752/Living_2_p0hjds.png",
        caption: "Living Area"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461750/Kitchen_1.1_czquav.png",
        caption: "Kitchen"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461742/Child_room_2_gtllku.png",
        caption: "Children's Room"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744461749/Diniing_2_pj0vxv.png",
        caption: "Dining Area"
      }
    ]
  },
  {
    id: 12,
    title: "The Casa Luxe",
    category: "Residential",
    year: "2024",
    description: "An epitome of luxurious living where every detail reflects bespoke craftsmanship and elevated design sensibilities.",
    location: "",
    area: "",
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
  {
    id: 13,
    title: "The Arcadia Residence",
    category: "Residential",
    year: "2024",
    description: "A sanctuary of refined living where architectural purity meets understated elegance in perfect harmony.",
    location: "",
    area: "",
    mainImage: "https://res.cloudinary.com/daasgedae/image/upload/v1744463077/LIV_2_r3_p9p914.png",
    gallery: [
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463075/Bed_2a_sbbkgx.png",
        caption: "Master Suite"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463074/Dining_wfbx1t.png",
        caption: "Dining Pavilion"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463078/Kitchen_1_znmf6l.png",
        caption: "Gourmet Kitchen"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463077/Kitchen_2_g9ikyf.png",
        caption: "Kitchen Detail"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463081/Foyer_d04eoc.png",
        caption: "Entry Foyer"
      },
      {
        url: "https://res.cloudinary.com/daasgedae/image/upload/v1744463085/LIV_1_r3_s7ggrl.png",
        caption: "Living Pavilion"
      }
    ]
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