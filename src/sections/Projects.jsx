import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Event Monitoring & Alerting System",
    description:
      "A scalable real-time event monitoring and alerting platform enabling low-latency ingestion, intelligent alerts, and historical analysis.",
    image: "/projects/project1.png",
    tags: ["C++", "Python", "Rest APIs", "Multithreading", "Linux", "Git"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Multi-Threaded File Search & Indexing Tool",
    description:
      "A high-performance, multi-threaded file indexing and search engine delivering rapid keyword retrieval across large-scale directory systems through optimized memory and concurrency design.",
    image: "/projects/project2.png",
    tags: ["C++", "STL", "Multithreading", "File I/O", "Linux", "Git"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Intelligent Web Scraper & Automation System",
    description:
      "An intelligent automation platform that scrapes, cleans, and structures data from multiple web sources with configurable scheduling, rule-based workflows, and scalable data pipelines.",
    image: "/projects/project3.png",
    tags: ["Python", "NLP", "API Integration", "Machine Learning", "IOT"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Data driven Crop Recommendation System",
    description:
      "A data-driven crop intelligence system that leverages machine learning and cloud APIs to deliver accurate, real-time crop recommendations.",
    image: "/projects/project4.png",
    tags: ["Python", "Machine Learning", "Random Forest", "LightGBM", "AWS Sagemaker", "EC2", "S3"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Automotive Car Sales Analytics Dashboard",
    description:
      "An interactive sales analytics dashboard that automates multi-source data processing and delivers KPI-driven insights through dynamic, drill-down visualizations.",
    image: "/projects/project5.png",
    tags: ["Power BI", "Excel", "Power Query", "DAX"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Operational KPI monitoring & Anomaly Analysis",
    description:
      "An operational analytics system that monitors KPIs at scale and detects performance anomalies using statistical analysis and interactive dashboards.",
    image: "/projects/project6.png",
    tags: ["Python", "SQL", "Power BI", "Pandas", "NumPy"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, featuring scalable backend
            systems, multithreaded applications and software solutions
            built to handle real-world data and performance challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};