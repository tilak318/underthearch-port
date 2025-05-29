import { Helmet } from 'react-helmet';
import { FiEye, FiDownload } from 'react-icons/fi'; // Import icons

interface ResearchPaper {
  title: string;
  description: string;
  fileName: string; // e.g., 'research_paper_1.pdf'
}

// Updated data - PLEASE REPLACE PLACEHOLDER TITLES AND DESCRIPTIONS
const researchPapers: ResearchPaper[] = [
  {
    title: "Cities' Identity through Planning and Architecture",
    description: "Exploring urban identity shaped by architectural planning and design.",
    fileName: "''Cities ' Identity through its Planning and Architecture''.pdf"
  },
  {
    title: "Comparative Analysis of World Best Smart Cities",
    description: "An analytical look at leading smart cities globally.",
    fileName: "A Comparative Analysis of World Best Smart Cities (1) (1).pdf"
  },
  {
    title: "Indigenous Houseform of Lepcha Community, Sikkim",
    description: "Study of high-altitude indigenous housing in Rinchenpong, Sikkim.",
    fileName: "High attitude Indigenous houseform of Lepcha community of Rinchenpong, Sikkim, India.pdf"
  },
  {
    title: "Climate Control via Vernacular Architecture in Kutch",
    description: "How vernacular design in Bidada village, Kutch, addresses climate.",
    fileName: "How to control climatic conditions by vernacular Architecture in Bidada village, Kutch, Gujarat.pdf"
  },
  {
    title: "Learning from Past: Vernacular Architecture & Sustainability",
    description: "The role of vernacular architecture in sustainable practices.",
    fileName: "Learning from Past - Vernacular Architecture in context of Sustainability.pdf"
  },
  {
    title: "Parking Policy for Vadodara City, Gujarat",
    description: "Analysis and recommendations for parking policies in Vadodara.",
    fileName: "Parking_Policy_for_Vadodara_City_Gujarat.pdf"
  },
  {
    title: "Smart City Mission: Challenges & Opportunities (Surat)",
    description: "A case study of Surat's Smart City Mission, its hurdles and potential.",
    fileName: "Smart City Mission Challenges and Opportunities A case of Surat city.pdf"
  },
  {
    title: "Sustainable Municipal Solid Waste Management in Mega Cities",
    description: "Strategies for managing solid waste sustainably in large urban centers.",
    fileName: "Sustainable Municipal Solid Waste Management in Emerging Mega Cities.pdf"
  },
  {
    title: "Sustainable Slum Development: Surat Case Study",
    description: "Converting slums into housing stock, a case study from Surat, Gujarat.",
    fileName: "Sustainable Slum Development converting the slum as Housing Stock - A Case study of Surat, Gujarat,India.pdf"
  },
  {
    title: "Sustainable Slum Development Insights",
    description: "Further insights into developing slums sustainably.",
    fileName: "Sustainble slum development.pdf"
  },
  {
    title: "Traditional Architecture of Kutch Region, Gujarat",
    description: "An overview of the traditional architectural styles in Kutch.",
    fileName: "Tradition Architecture of Kutch Region of Gujarat.pdf"
  },
  {
    title: "Women and Transportation: Global Case Studies",
    description: "Challenges and opportunities for women in urban transportation, with global examples.",
    fileName: "Women and Transpotation - Challenges and Opportunities in Urban Areas - A overview of various global case studies..pdf"
  },
  {
    title: "House Form and Settlement Pattern of Vadnagar, Gujarat",
    description: "A study on the housing forms and settlement patterns in Vadnagar.",
    fileName: "study-of-house-form-and-settlement-pattern-of-vadnagar-gujarat-IJERTCONV10IS03009.pdf"
  }
];

const ResearchPage = () => {
  const handleViewPdf = (fileName: string) => {
    window.open(`/research/${fileName}`, '_blank');
  };

  const handleDownloadPdf = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/research/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>Research - UnderTheArch</title>
        <meta name="description" content="Explore insightful research papers from UnderTheArch on architecture, design, and urban development." />
      </Helmet>
      
      {/* Title Section */}
      <section className="bg-black pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Research
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Delve into our studies and findings that drive innovation in architecture and design.
          </p>
        </div>
      </section>

      {/* Papers Section */}
      <div className="bg-black text-white pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {researchPapers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchPapers.map((paper, index) => (
                <div 
                  key={index} 
                  className="bg-secondary p-6 rounded-lg shadow-lg border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-3">{paper.title}</h2>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">{paper.description}</p>
                  </div>
                  <div className="flex space-x-3 mt-auto">
                    <button 
                      onClick={() => handleViewPdf(paper.fileName)}
                      className="flex-1 bg-white hover:bg-gray-200 text-black font-medium py-2.5 px-5 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <FiEye size={18} />
                      <span>View</span>
                    </button>
                    <button 
                      onClick={() => handleDownloadPdf(paper.fileName)}
                      className="flex-1 border border-white/30 bg-transparent text-white hover:bg-white hover:text-black hover:border-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 text-sm sm:text-base transform hover:scale-105"
                    >
                      <FiDownload size={18} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No research papers available at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
