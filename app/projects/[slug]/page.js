import { projectsData } from "@/utils/data/projects-data";
import Image from "next/image";
import Link from "next/link";
import {
  BiChevronLeft,
  BiBrain,
  BiCodeAlt,
  BiNetworkChart,
  BiBarChartAlt,
  BiCube,
  BiLayer,
  BiSearch,
  BiBot,
  BiCamera,
  BiData,
  BiChip,
  BiRocket,
  BiPalette,
  BiGlobe,
  BiMobile,
  BiServer,
  BiLockAlt,
  BiStar,
  BiLinkExternal,
  BiCodeBlock,
  BiLineChart,
} from "react-icons/bi";

const iconMap = {
  brain: BiBrain,
  code: BiCodeAlt,
  network: BiNetworkChart,
  chart: BiBarChartAlt,
  cube: BiCube,
  layer: BiLayer,
  search: BiSearch,
  bot: BiBot,
  camera: BiCamera,
  data: BiData,
  chip: BiChip,
  rocket: BiRocket,
  palette: BiPalette,
  globe: BiGlobe,
  mobile: BiMobile,
  server: BiServer,
  lock: BiLockAlt,
  star: BiStar,
  codeblock: BiCodeBlock,
  linechart: BiLineChart,
};

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

  const FeatureIcon = ({ iconName }) => {
    const Icon = iconMap[iconName] || BiStar;
    return <Icon size={28} className="text-[#16f2b3]" />;
  };

  return (
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

        {/* TITLE + ROLE */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl font-bold text-[#FFD700]">
            {project.name}
          </h1>
          {project.role && (
            <span className="text-lg text-[#16f2b3]/80 font-medium">
              {project.role}
            </span>
          )}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">

            {/* IMPACT / HIGHLIGHTS */}
            <div className="border border-[#1b2c68a0] bg-[#0d1224]/50 backdrop-blur-md rounded-xl p-6 flex-1">
              <h2 className="text-xl font-bold text-[#16f2b3] mb-4 flex items-center gap-2">
                <BiRocket />
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
              <h2 className="text-xl font-bold text-[#16f2b3] mb-4 flex items-center gap-2">
                <BiCodeBlock />
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

        {/* ABSTRACT / DESCRIPTION */}
        <div className="border border-[#1b2c68a0] bg-[#0d1224]/50 backdrop-blur-md rounded-xl p-6 lg:p-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#1b2c68a0] pb-3">
            Project Abstract & Details
          </h2>
          <p className="text-gray-200 text-lg leading-loose whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* KEY FEATURES */}
        {project.features?.length > 0 && (
          <div className="border border-[#1b2c68a0] bg-[#0d1224]/50 backdrop-blur-md rounded-xl p-6 lg:p-10">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-[#1b2c68a0] pb-3 flex items-center gap-2">
              <BiStar />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-lg bg-[#1b2c68]/30 border border-[#1b2c68a0] hover:bg-[#1b2c68]/50 transition-colors"
                >
                  <div className="mt-1 flex-shrink-0">
                    <FeatureIcon iconName={feature.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ARCHITECTURE */}
        {project.architecture && (
          <div className="border border-[#1b2c68a0] bg-[#0d1224]/50 backdrop-blur-md rounded-xl p-6 lg:p-10">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#1b2c68a0] pb-3 flex items-center gap-2">
              <BiNetworkChart />
              Architecture
            </h2>
            <p className="text-gray-200 text-lg leading-loose whitespace-pre-line">
              {project.architecture}
            </p>
            <div className="mt-6 p-12 border-2 border-dashed border-[#1b2c68a0] rounded-xl bg-[#0d1224]/30 flex items-center justify-center">
              <p className="text-gray-500 text-sm italic">
                Architecture diagram placeholder
              </p>
            </div>
          </div>
        )}

        {/* OUTCOMES */}
        {project.outcomes?.length > 0 && (
          <div className="border border-[#1b2c68a0] bg-[#0d1224]/50 backdrop-blur-md rounded-xl p-6 lg:p-10">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-[#1b2c68a0] pb-3 flex items-center gap-2">
              <BiLineChart />
              Outcomes & Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl bg-[#1b2c68]/30 border border-[#1b2c68a0]"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#16f2b3] mb-2">
                    {outcome.value}
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">
                    {outcome.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LINKS */}
        <div className="flex flex-wrap gap-4 justify-center">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1b2c68] text-white rounded-full border border-[#2a3e84] hover:bg-[#2a3e84] hover:scale-105 transition-all font-medium"
            >
              <BiLinkExternal size={20} />
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#16f2b3] text-[#0d1224] rounded-full hover:bg-[#16f2b3]/90 hover:scale-105 transition-all font-medium"
            >
              <BiLinkExternal size={20} />
              Live Demo
            </a>
          )}
        </div>
      </div>

    </section>
  );
}

export default ProjectDetails;
