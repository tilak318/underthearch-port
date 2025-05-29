export interface CSRProjectImage {
  url: string;
  caption: string;
  thumbnailUrl?: string;
  fullUrl?: string;
}

export interface CSRProjectDetails {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string; // Short description for cards
  fullDescription: string; // Detailed description for project page
  location: string;
  mainImage: string;
  gallery: CSRProjectImage[];
}

export const csrProjectsData: CSRProjectDetails[] = [
  // Environmental Initiatives
  {
    id: 1,
    title: "Green Campus Initiative",
    category: "Environmental Initiatives",
    year: "2023",
    description: "A comprehensive program to reduce our carbon footprint and promote sustainability within our operational headquarters.",
    fullDescription: "The Green Campus Initiative, launched in early 2023, focuses on transforming our main headquarters into a model of environmental responsibility. Key activities include a campus-wide recycling program that has successfully diverted 60% of waste from landfills. We've also undertaken a significant tree plantation drive, adding over 500 native saplings to our grounds, enhancing biodiversity and green cover. Energy efficiency measures, such as LED lighting retrofits and smart thermostat installations, have reduced our energy consumption by 15%. Water conservation efforts, including rainwater harvesting and low-flow fixtures, are also integral to this initiative, aiming for a 20% reduction in water usage.",
    location: "Our Headquarters, Ahmedabad",
    mainImage: "https://picsum.photos/seed/csr1main/1200/800",
    gallery: [
      { url: "https://picsum.photos/seed/csr1gal1/1200/800", caption: "Tree Plantation Drive in Full Swing" },
      { url: "https://picsum.photos/seed/csr1gal2/1200/800", caption: "Newly Installed Recycling Bins" },
      { url: "https://picsum.photos/seed/csr1gal3/1200/800", caption: "Solar Panel Array on Rooftop" },
      { url: "https://picsum.photos/seed/csr1gal4/1200/800", caption: "Educational Workshop on Sustainability" }
    ]
  },
  {
    id: 2,
    title: "Water Conservation Project - Jal Shakti",
    category: "Environmental Initiatives",
    year: "Ongoing",
    description: "Partnering with rural communities to implement sustainable rainwater harvesting and water management systems.",
    fullDescription: "Project Jal Shakti is an ongoing commitment to address water scarcity in arid regions of Gujarat. We collaborate with local communities and NGOs to design and implement effective rainwater harvesting structures, such as check dams and percolation ponds. This initiative not only recharges groundwater levels but also provides a reliable source of water for agriculture and domestic use, significantly improving livelihoods. To date, the project has benefited over 10 villages, impacting thousands of lives. We also conduct awareness programs on water-efficient farming practices and household water management.",
    location: "Rural Gujarat (Kutch & Saurashtra regions)",
    mainImage: "https://picsum.photos/seed/csr2main/1200/800",
    gallery: [
      { url: "https://picsum.photos/seed/csr2gal1/1200/800", caption: "Community Meeting for Jal Shakti" },
      { url: "https://picsum.photos/seed/csr2gal2/1200/800", caption: "Construction of a Check Dam" },
      { url: "https://picsum.photos/seed/csr2gal3/1200/800", caption: "Farmers Benefiting from Increased Water Availability" },
      { url: "https://picsum.photos/seed/csr2gal4/1200/800", caption: "Children Learning about Water Conservation" }
    ]
  },
  // Community Outreach
  {
    id: 3,
    title: "Skills Development Program - Kaushal",
    category: "Community Outreach",
    year: "2024",
    description: "Empowering underprivileged youth with vocational training and job placement assistance in emerging sectors.",
    fullDescription: "Program Kaushal, initiated in 2024, aims to bridge the skills gap for underprivileged youth in Ahmedabad. We offer certified vocational training courses in areas like digital literacy, basic coding, electrical work, and tailoring. The program includes soft skills development and financial literacy workshops. We have partnered with local businesses to facilitate internships and job placements for successful graduates, ensuring a pathway to sustainable employment. Our goal is to train 500 youths annually, fostering economic independence and community development.",
    location: "Ahmedabad Skill Center",
    mainImage: "https://picsum.photos/seed/csr3main/1200/800",
    gallery: [
      { url: "https://picsum.photos/seed/csr3gal1/1200/800", caption: "Vocational Training Session in Progress" },
      { url: "https://picsum.photos/seed/csr3gal2/1200/800", caption: "Graduation Ceremony for Kaushal Participants" },
      { url: "https://picsum.photos/seed/csr3gal3/1200/800", caption: "Students Engaged in Practical Learning" }
    ]
  },
  {
    id: 4,
    title: "Local School Support - Vidya Sahayak",
    category: "Community Outreach",
    year: "Ongoing",
    description: "Providing essential educational materials, infrastructure upgrades, and digital learning tools to underserved local schools.",
    fullDescription: "Vidya Sahayak is our ongoing initiative to enhance the quality of education in government schools located in remote villages. We provide essential supplies such as textbooks, stationery, and school bags. Infrastructure support includes classroom renovations, construction of sanitation facilities, and provision of clean drinking water. A key component is the establishment of digital learning labs equipped with computers and educational software, along with teacher training programs to effectively utilize these resources. This holistic approach aims to create a more conducive learning environment and improve educational outcomes.",
    location: "Various Villages across Gujarat",
    mainImage: "https://picsum.photos/seed/csr4main/1200/800",
    gallery: [
      { url: "https://picsum.photos/seed/csr4gal1/1200/800", caption: "Distribution of Educational Kits" },
      { url: "https://picsum.photos/seed/csr4gal2/1200/800", caption: "Newly Renovated Classroom Block" },
      { url: "https://picsum.photos/seed/csr4gal3/1200/800", caption: "Students Using the Digital Learning Lab" },
      { url: "https://picsum.photos/seed/csr4gal4/1200/800", caption: "Teacher Training Workshop" }
    ]
  },
  // Ethical Practices
  {
    id: 5,
    title: "Supply Chain Transparency & Ethics",
    category: "Ethical Practices",
    year: "2023",
    description: "Implementing a robust framework for ethical sourcing, fair labor practices, and environmental compliance across our supply chain.",
    fullDescription: "Our commitment to ethical practices extends throughout our supply chain. In 2023, we launched a comprehensive program focused on ensuring transparency, fair labor conditions, and environmental sustainability among our suppliers. This involves regular audits, capacity building workshops for suppliers on ethical standards, and a zero-tolerance policy for child labor or forced labor. We are also working with suppliers to reduce their environmental impact by promoting resource efficiency and waste reduction. This initiative helps us build a more resilient and responsible supply chain.",
    location: "Global Operations & Supplier Network",
    mainImage: "https://picsum.photos/seed/csr5main/1200/800",
    gallery: [
      { url: "https://picsum.photos/seed/csr5gal1/1200/800", caption: "Supplier Audit and Assessment" },
      { url: "https://picsum.photos/seed/csr5gal2/1200/800", caption: "Worker Welfare Program Briefing" },
      { url: "https://picsum.photos/seed/csr5gal3/1200/800", caption: "Workshop on Ethical Sourcing Standards" }
    ]
  },
  {
    id: 6,
    title: "Employee Wellbeing & Inclusivity Drive",
    category: "Ethical Practices",
    year: "Ongoing",
    description: "Fostering a supportive, inclusive, and healthy work environment through comprehensive wellbeing programs and diversity initiatives.",
    fullDescription: "Our employees are our greatest asset. This ongoing initiative focuses on enhancing their wellbeing through various programs. We offer mental health support services, including counseling and wellness workshops. Flexible work arrangements and parental support policies are in place to promote work-life balance. We are actively working to foster a diverse and inclusive workplace through targeted hiring practices, unconscious bias training, and employee resource groups. Regular health check-ups and ergonomic assessments also contribute to a healthier work environment for all.",
    location: "All Office Locations",
    mainImage: "https://picsum.photos/seed/csr6main/1200/800",
    gallery: [
      { url: "https://picsum.photos/seed/csr6gal1/1200/800", caption: "Wellness Workshop for Employees" },
      { url: "https://picsum.photos/seed/csr6gal2/1200/800", caption: "Team Building Activity Promoting Inclusivity" },
      { url: "https://picsum.photos/seed/csr6gal3/1200/800", caption: "Diversity and Inclusion Training Session" },
      { url: "https://picsum.photos/seed/csr6gal4/1200/800", caption: "Ergonomic Workstation Setup" }
    ]
  }
];
