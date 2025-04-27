import './index.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Accordion from './Accordion';


function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which div is hovered
  const [expanded, setExpanded] = useState(false);
  const accordionIds = [
    { title: "Generating Inquiry", description: "Students will be able to generate and explore genuine lines of inquiry related to writing, language, literacy, and/or rhetoric.", paperimg1: "Screenshot 2025-04-26 214457.png", paperlink1: "assets/pdfs/first-draft-research-paper.pdf",paper1title:"title for this", paperimg2: "Screenshot 2025-04-26 215336.png", paperlink2: "assets/pdfs/rough-draft-research-paper.pdf", paper2title:"title for that", reflection:"gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb" },
    { title: "Multiple ways of writing", description: "Students will be able to purposefully integrate multimodality, multiple languages, and/or multiliteracies into writing products to support their goals." , paperimg1: "assets/images/Screenshot 2025-04-26 214457.png", paperlink1: "assets/pdfs/first-draft-research-paper.pdf",paper1title:"title for this",paperimg2: "assets/images/Screenshot 2025-04-26 215336.png", paperlink2: "assets/pdfs/rough-draft-research-paper.pdf", paper2title:"title for that", reflection:"gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb"},
    { title: "Information Literacy", description: " Students will be able to evaluate and act on criteria for relevance, credibility, and ethics when gathering, analyzing, and presenting primary and secondary source materials.", paperimg1: "assets/images/Screenshot 2025-04-26 214457.png", paperlink1: "assets/pdfs/first-draft-research-paper.pdf",paper1title:"title for this",paperimg2: "assets/images/Screenshot 2025-04-26 215336.png", paperlink2: "assets/pdfs/rough-draft-research-paper.pdf", paper2title:"title for that", reflection:"gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb" },
    { title: "Research Genre Production", description: "Students will be able to produce writing that demonstrates their ability to navigate choices and constraints in a variety of public and/or academic research genres that matter to specific communities.", paperimg1: "assets/images/Screenshot 2025-04-26 214457.png", paperlink1: "assets/pdfs/first-draft-research-paper.pdf",paper1title:"title for this",paperimg2: "assets/images/Screenshot 2025-04-26 215336.png", paperlink2: "assets/pdfs/rough-draft-research-paper.pdf", paper2title:"title for that", reflection:"gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb" },
    { title: "Contributing Knowledge", description: "Students will be able to draw conclusions based on analysis and interpretation of primary evidence and place that work in conversation with other source materials.", paperimg1: "assets/images/Screenshot 2025-04-26 214457.png", paperlink1: "assets/pdfs/first-draft-research-paper.pdf",paper1title:"title for this",paperimg2: "assets/images/Screenshot 2025-04-26 215336.png", paperlink2: "assets/pdfs/rough-draft-research-paper.pdf", paper2title:"title for that", reflection:"gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb" },
    { title: "Revision", description: " Students will be able to negotiate differences in and act with intention on feedback from readers when drafting, revising, and editing their writing.", paperimg1: "assets/images/Screenshot 2025-04-26 214457.png", paperlink1: "assets/pdfs/first-draft-research-paper.pdf",paper1title:"title for this",paperimg2: "assets/images/Screenshot 2025-04-26 215336.png", paperlink2: "assets/pdfs/rough-draft-research-paper.pdf", paper2title:"title for that", reflection:"gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <section className="w-full flex flex-col items-center justify-center bg-gray-800 rounded-b-4xl">
        <div
          className="w-[90%] text-white font-sans flex flex-row items-center justify-between py-7 bg-cover bg-center"
          style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}
        >
          <h2 className="text-2xl font-bold pl-4">ePortfolio</h2>
          <div className="flex flex-row items-center justify-center gap-5 pr-5">
            <a className="font-bold">Home</a>
            <a className="font-bold">Outcomes</a>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="w-full flex justify-center items-center h-full">
        <div className="w-[90%] font-sans flex flex-col pt-5 pb-5 h-full">
          <h1
            className="text-5xl pl-4 pb-5 font-bold underline bg-clip-text text-transparent"
            style={{
              backgroundImage: "url('/blurry-gradient-haikei.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Path of Revision
          </h1>
          <div className="w-full min-h-[500px] h-1/2 bg-gray-800 rounded-4xl text-white">
            <h2 className="mx-auto font-bold text-2xl text-center py-4">Research Paper</h2>
            <div className="flex flex-row items-center justify-evenly gap-5 w-full h-full">
              {/* First Div */}
              <a
              href="assets/pdfs/first-draft-research-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <motion.div
                className="w-[200px] h-[350px] relative flex flex-col items-center justify-center text-white font-bold overflow-hidden"
                style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(0)} // Trigger arrow animation
                onHoverEnd={() => setHoveredIndex(null)} // Reset arrow animation
              >
                {/* Gray Cover */}
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.9 }} // Shrink the gray cover to reveal the gradient border
                  transition={{ duration: 0.3 }}
                >
                {/* Cover Photo */}
                
                  <img
                    src="assets/images/Screenshot 2025-04-26 214457.png"
                    alt="Paper 1 Cover"
                    className="w-full h-[70%] object-cover pointer-events-none z-20" // Prevents hover interruption
                  />
                  <p className="relative z-30 text-center mt-2 pointer-events-none justify-baseline">First Draft of Research Paper</p>
                </motion.div>
                {/* Title */}
                
              </motion.div>
              </a>

              {/* Arrow Between First and Second Div */}
              <motion.div
                className="text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: hoveredIndex === 0 ? 1 : 0, // Show arrow only when the first div is hovered
                  x: hoveredIndex === 0 ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 24" // Adjusted viewBox to fit the tail
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12" // Increased size for better visibility
                >
                  <path 
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M3 12h12M9 5l7 7-7 7" // Added "M3 12h12" to create the tail
                 />
                </svg>
              </motion.div>

        
              <a
              href="assets/pdfs/rough-draft-research-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <motion.div
                className="w-[200px] h-[350px] relative flex flex-col items-center justify-center text-white font-bold overflow-hidden"
                style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(1)} // Trigger arrow animation
                onHoverEnd={() => setHoveredIndex(null)} // Reset arrow animation
              >
                {/* Gray Cover */}
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.9 }} // Shrink the gray cover to reveal the gradient border
                  transition={{ duration: 0.3 }}
                >
                {/* Cover Photo */}
                
                  <img
                    src="assets/images/Screenshot 2025-04-26 215336.png"
                    alt="Paper 1 Cover"
                    className="w-full h-[70%] object-cover pointer-events-none z-20" // Prevents hover interruption
                  />
                  <p className="relative z-30 text-center mt-2 pointer-events-none justify-baseline">Peer Review of Research Paper</p>
                </motion.div>
                {/* Title */}
                
              </motion.div>
              </a>

              {/* Arrow Between Second and Third Div */}
              <motion.div
                className="text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: hoveredIndex === 1 ? 1 : 0, // Show arrow only when the second div is hovered
                  x: hoveredIndex === 1 ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 24" // Adjusted viewBox to fit the tail
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12" // Increased size for better visibility
                >
                  <path 
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M3 12h12M9 5l7 7-7 7" // Added "M3 12h12" to create the tail
                 />
                </svg>
              </motion.div>

              {/* Third Div */}
              <a
              href="assets/pdfs/final-Research-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <motion.div
                className="w-[200px] h-[350px] relative flex flex-col items-center justify-center text-white font-bold overflow-hidden"
                style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(2)} // Trigger arrow animation
                onHoverEnd={() => setHoveredIndex(null)} // Reset arrow animation
              >
                {/* Gray Cover */}
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.9 }} // Shrink the gray cover to reveal the gradient border
                  transition={{ duration: 0.3 }}
                >
                {/* Cover Photo */}
                
                  <img
                    src="assets/images/Screenshot 2025-04-23 070505.png"
                    alt="Paper 1 Cover"
                    className="w-full h-[70%] object-cover pointer-events-none z-20" // Prevents hover interruption
                  />
                  <p className="relative z-30 text-center mt-2 pointer-events-none justify-baseline">Final Draft of Research Paper</p>
                </motion.div>
                {/* Title */}
                
              </motion.div>
              </a>
            </div>
            <h3 className='px-4 font-bold text-2xl'>Reflection</h3>
            <p className='px-4'>
              gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb
              bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb
            </p>
            <h2 className="mx-auto font-bold text-2xl text-center py-4">Research Paper</h2>
            <div className="flex flex-row items-center justify-evenly gap-5 w-full h-full">
              {/* First Div */}
              <a
              href="/final-Research-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <motion.div
                className="w-[200px] h-[350px] relative flex flex-col items-center justify-center text-white font-bold overflow-hidden"
                style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(3)} // Trigger arrow animation
                onHoverEnd={() => setHoveredIndex(null)} // Reset arrow animation
              >
                {/* Gray Cover */}
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.9 }} // Shrink the gray cover to reveal the gradient border
                  transition={{ duration: 0.3 }}
                >
                {/* Cover Photo */}
                
                  <img
                    src="/Screenshot 2025-04-23 070505.png"
                    alt="Paper 1 Cover"
                    className="w-full h-[70%] object-cover pointer-events-none z-20" // Prevents hover interruption
                  />
                  <p className="relative z-30 text-center mt-2 pointer-events-none justify-baseline">Paper 1 Title</p>
                </motion.div>
                {/* Title */}
                
              </motion.div>
              </a>

              {/* Arrow Between First and Second Div */}
              <motion.div
                className="text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: hoveredIndex === 3 ? 1 : 0, // Show arrow only when the first div is hovered
                  x: hoveredIndex === 3 ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 24" // Adjusted viewBox to fit the tail
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12" // Increased size for better visibility
                >
                  <path 
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M3 12h12M9 5l7 7-7 7" // Added "M3 12h12" to create the tail
                 />
                </svg>
              </motion.div>

        
              <a
              href="/final-Research-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <motion.div
                className="w-[200px] h-[350px] relative flex flex-col items-center justify-center text-white font-bold overflow-hidden"
                style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(4)} // Trigger arrow animation
                onHoverEnd={() => setHoveredIndex(null)} // Reset arrow animation
              >
                {/* Gray Cover */}
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.9 }} // Shrink the gray cover to reveal the gradient border
                  transition={{ duration: 0.3 }}
                >
                {/* Cover Photo */}
                
                  <img
                    src="/Screenshot 2025-04-23 070505.png"
                    alt="Paper 1 Cover"
                    className="w-full h-[70%] object-cover pointer-events-none z-20" // Prevents hover interruption
                  />
                  <p className="relative z-30 text-center mt-2 pointer-events-none justify-baseline">Paper 1 Title</p>
                </motion.div>
                {/* Title */}
                
              </motion.div>
              </a>

              {/* Arrow Between Second and Third Div */}
              <motion.div
                className="text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: hoveredIndex === 4 ? 1 : 0, // Show arrow only when the second div is hovered
                  x: hoveredIndex === 4 ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 24" // Adjusted viewBox to fit the tail
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12" // Increased size for better visibility
                >
                  <path 
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M3 12h12M9 5l7 7-7 7" // Added "M3 12h12" to create the tail
                 />
                </svg>
              </motion.div>

              {/* Third Div */}
              <a
              href="/final-Research-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <motion.div
                className="w-[200px] h-[350px] relative flex flex-col items-center justify-center text-white font-bold overflow-hidden"
                style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(5)} // Trigger arrow animation
                onHoverEnd={() => setHoveredIndex(null)} // Reset arrow animation
              >
                {/* Gray Cover */}
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.9 }} // Shrink the gray cover to reveal the gradient border
                  transition={{ duration: 0.3 }}
                >
                {/* Cover Photo */}
                
                  <img
                    src="/Screenshot 2025-04-23 070505.png"
                    alt="Paper 1 Cover"
                    className="w-full h-[70%] object-cover pointer-events-none z-20" // Prevents hover interruption
                  />
                  <p className="relative z-30 text-center mt-2 pointer-events-none justify-baseline">Paper 1 Title</p>
                </motion.div>
                {/* Title */}
                
              </motion.div>
              </a>
            </div>
            <h3  className='px-4 font-bold text-2xl'>Reflection</h3>
            <p className='px-4 pb-6'>
              gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb
              bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb
            </p>
          </div>
          
        </div>
      </section>

      {/* accordion */}
      <section className='w-full flex justify-center items-center h-full'>
        <div className='w-[90%] font-sans flex flex-col pt-5 pb-5 h-full rounded-4xl'>
        <h1
            className="text-5xl pl-4 pb-5 font-bold underline bg-clip-text text-transparent"
            style={{
              backgroundImage: "url('/blurry-gradient-haikei.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Course Outcomes
          </h1>
            <div className="w-full first:rounded-t-4xl last:rounded-b-4xl ">
              {accordionIds.map((item, i) => (
                <Accordion
                  key={i}
                  i={i}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  title={item.title}
                  description={item.description}
                  paperimg1={item.paperimg1}
                  paperlink1={item.paperlink1}
                  paper1title={item.paper1title}
                  paperimg2={item.paperimg2}
                  paperlink2={item.paperlink2}
                  paper2title={item.paper2title}
                  reflection={item.reflection}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;