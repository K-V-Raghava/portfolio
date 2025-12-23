import { projectsData } from "@/utils/data/projects-data";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

// Helper function to handle names if no manual slug is provided
const getSlug = (name) => name.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-");

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug || getSlug(project.name),
  }));
}

async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projectsData.find((p) => {
    const manualSlug = p.slug;
    const generatedSlug = getSlug(p.name);
    return manualSlug === slug || generatedSlug === slug;
  });

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white gap-4 bg-[#0d1224]">
        <h2 className="text-3xl font-bold text-[#FFD700]">Project not found</h2>
        <Link href="/#projects" className="px-8 py-3 bg-[#1b2c68] rounded-full text-white hover:scale-105 transition-transform">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    // PT-32: Huge top padding to clear the Navbar
    // WIDER LAYOUT: Using 'px-5' instead of 'px-20' to stretch content to edges
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-32 pb-12 bg-[#0d1224]">
      
      {/* TOP BAR */}
      <div className="max-w-[1250px] mx-auto px-4 lg:px-6 mb-0">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-[#16f2b3] font-semibold hover:text-white transition"
        >
          <BiChevronLeft size={26} />
          Back to Projects
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1250px] mx-auto px-4 lg:px-8 flex flex-col gap-10">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#FFD700]">
          {project.name}
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">

            {/* CONTRIBUTIONS */}
            <div className="border border-[#1b2c68a0] bg-[#0d1224]/50 backdrop-blur-md rounded-xl p-6 flex-1">
              <h2 className="text-xl font-bold text-[#16f2b3] mb-4">
                Impact
              </h2>

              {project.highlights?.length ? (
                <ul className="list-disc ml-5 space-y-2 text-gray-200">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 italic">No highlights available.</p>
              )}
            </div>

            {/* SKILLS */}
            <div className="border border-[#1b2c68a0] bg-[#0d1224]/50 backdrop-blur-md rounded-xl p-6 flex-1">
              <h2 className="text-xl font-bold text-[#16f2b3] mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#1b2c68] text-white rounded-full border border-[#2a3e84]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – FULL VISUAL IMPACT */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-[#FFD700]/30 bg-black">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              className="object-contain hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* ABSTRACT */}
        <div className="border border-[#1b2c68a0] bg-[#0d1224]/50 backdrop-blur-md rounded-xl p-6 lg:p-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#1b2c68a0] pb-3">
            Project Abstract & Details
          </h2>
          <p className="text-gray-200 text-lg leading-loose whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </div>
      
    </section>

  );
}

export default ProjectDetails;
