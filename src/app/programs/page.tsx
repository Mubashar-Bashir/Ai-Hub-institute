
//Here's the updated ProgramsPage code:

// src/app/programs/page.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { remark } from 'remark';
import html from 'remark-html';

// Markdown Rendering Function
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Sample program data (replace with your actual data source)
const programs = [
  {
    id: 1,
    name: "AI-201",
    descriptionMarkdown: `
      This program provides a foundational understanding of Artificial Intelligence.
      You'll learn about basic algorithms, problem-solving techniques, and ethical considerations.
    `,
    imageUrl: "/images/program1.jpg", // Replace with actual image URL
    syllabusLink: "https://docs.google.com/document/d/15usu1hkrrRLRjcq_3nCTT-0ljEcgiC44iSdvdqrCprk/edit?usp=sharing", // Replace with actual link
  },
  {
    id: 2,
    name: "AI-202",
    descriptionMarkdown: `
      Dive deep into the world of machine learning.
      This specialization covers supervised and unsupervised learning, deep learning, and model evaluation.
    `,
    imageUrl: "/images/program2.jpg", // Replace with actual image URL
    syllabusLink: "https://github.com/AI-HUB-Institute/machine-learning-syllabus", // Replace with actual link
  },
  {
    id: 3,
    name: "Agentic-AI",
    descriptionMarkdown: `
      An intensive program to become a data science expert.
      You'll learn data analysis, visualization, statistical modeling, and machine learning techniques.
    `,
    imageUrl: "/images/program3.jpg", // Replace with actual image URL
    syllabusLink: "https://github.com/AI-HUB-Institute/data-science-syllabus", // Replace with actual link
  },
];

const ProgramsPage = async () => {
  // Pre-render the markdown descriptions
  const processedPrograms = await Promise.all(
    programs.map(async (program) => ({
      ...program,
      descriptionHtml: await markdownToHtml(program.descriptionMarkdown),
    }))
  );

  return (
    // Parallax container (adjust image and styling as needed)
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed py-20"
      style={{
        backgroundImage: `url('/images/ai-background.jpg')`, // Replace with your image
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="container relative mx-auto z-10 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Programs</h1>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedPrograms.map((program) => (
            <motion.div
              key={program.id}
              className="bg-white/10 rounded-lg shadow-md overflow-hidden backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <Image
                src={program.imageUrl}
                alt={program.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-100">{program.name}</h2>
                {/* Render the Markdown description as HTML */}
                <div
                  className="text-gray-300 mb-3"
                  dangerouslySetInnerHTML={{ __html: program.descriptionHtml }}
                />

                {/* Syllabus Link */}
                <a
                  href={program.syllabusLink}
                  target="https://docs.google.com/document/d/15usu1hkrrRLRjcq_3nCTT-0ljEcgiC44iSdvdqrCprk/edit?usp=sharing"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Program Syllabus (GitHub)
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
