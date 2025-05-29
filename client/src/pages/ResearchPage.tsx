import { Helmet } from 'react-helmet';
import { FiEye, FiDownload } from 'react-icons/fi'; // Import icons

interface ResearchPaper {
  title: string;
  description: string;
  fileName: string; // e.g., 'research_paper_1.pdf'
}

// Placeholder data - replace with your actual research papers
const researchPapers: ResearchPaper[] = [
  {
    title: 'The Future of Sustainable Urban Development',
    description: 'An in-depth analysis of green building practices and their impact on urban ecosystems.',
    fileName: 'research_paper_1.pdf',
  },
  {
    title: 'Innovative Materials in Modern Architecture',
    description: 'Exploring the use of cutting-edge materials to enhance structural integrity and aesthetic appeal.',
    fileName: 'research_paper_2.pdf',
  },
  {
    title: 'Community-Centric Design: A Case Study Approach',
    description: 'Examining successful architectural projects that prioritize community engagement and social well-being.',
    fileName: 'research_paper_3.pdf',
  },
];

const ResearchPage = () => {
  const handleViewPdf = (fileName: string) => {
    window.open(`/research_papers/${fileName}`, '_blank');
  };

  const handleDownloadPdf = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/research_papers/${fileName}`;
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
