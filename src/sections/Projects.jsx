import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Uber Live Fare Transparency — Product Analytics",
    description:
      "A product analytics simulation defining 6 success metrics, A/B testing framework, and high-fidelity Figma prototype validating real-time fare transparency across 5 user journey states.",
    image: "/projects/project1.png",
    tags: ["Product Analytics", "A/B Testing", "Figma", "SQL", "Python", "After Effects"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Operational KPI Monitoring & Anomaly Detection",
    description:
      "An end-to-end operational analytics pipeline processing 10K+ time-series records daily, detecting performance anomalies using Z-score and IQR methods with interactive Power BI drill-down dashboards.",
    image: "/projects/project2.png",
    tags: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "DAX"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Automotive Car Sales Analytics Dashboard",
    description:
      "An interactive business intelligence solution analysing 50K+ sales records across 12 regional markets, automating KPI reporting workflows and reducing manual effort by 40% through dynamic DAX measures.",
    image: "/projects/project3.png",
    tags: ["Power BI", "SQL", "Excel", "Power Query", "DAX"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Data-Driven Crop Recommendation System",
    description:
      "A cloud-deployed ML intelligence system benchmarking 4 classification models to 85%+ accuracy, with SHAP-based feature analysis and a scalable AWS SageMaker inference pipeline for real-time recommendations.",
    image: "/projects/project4.png",
    tags: ["Python", "Machine Learning", "LightGBM", "Random Forest", "AWS SageMaker", "EC2", "S3"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Event Monitoring & Alerting System",
    description:
      "A scalable real-time event monitoring and alerting platform enabling low-latency ingestion, threshold-based intelligent alerts, and historical performance analysis across distributed data streams.",
    image: "/projects/project5.png",
    tags: ["C++", "Python", "REST APIs", "Multithreading", "Linux", "Git"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Intelligent Web Scraper & Automation Pipeline",
    description:
      "An intelligent automation platform scraping, cleaning, and structuring multi-source data with configurable scheduling, rule-based classification workflows, and scalable downstream data pipelines.",
    image: "/projects/project6.png",
    tags: ["Python", "NLP", "API Integration", "Machine Learning", "Automation"],
    link: "https://github.com/abhinavs1703",
    github: "https://github.com/abhinavs1703",
  },
  {
    title: "Multi-Threaded File Search & Indexing Tool",
    description:
      "A high-performance file indexing and search engine delivering rapid keyword retrieval across large-scale directory systems through optimised concurrency design and efficient memory management.",
    image: "/projects/project7.png",
    tags: ["C++", "STL", "Multithreading", "File I/O", "Linux", "Git"],
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
            A selection of my recent work — spanning data analytics pipelines,
            business intelligence dashboards, product analytics simulations,
            and machine learning deployments — built to solve real operational problems
            and deliver decisions, not just outputs.
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