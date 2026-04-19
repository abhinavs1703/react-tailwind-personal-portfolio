import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Analytical Precision",
    description:
      "Building structured, data-driven pipelines and KPI frameworks engineered for accuracy and reliability.",
  },
  {
    icon: Rocket,
    title: "Business Impact",
    description:
      "Translating complex datasets into decisions — dashboards, reports, and insights that drive measurable outcomes.",
  },
  {
    icon: Users,
    title: "Stakeholder Communication",
    description: "Bridging technical analysis and business context across cross-functional teams with clarity.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Identifying patterns, gaps, and opportunities hidden within complex, high-volume operational data.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Where analytical rigour meets product thinking -
              <span className="font-serif italic font-normal text-white">
                {" "}
                building clarity from complexity.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a final-year B.Tech graduate (VIT Vellore, May 2026) working at the intersection of data analytics,
                business analysis, and product thinking. I don't just analyse data — I build the frameworks, pipelines,
                and dashboards that make it actionable.
              </p>
              <p>
                At Tata Cummins, I analysed 10K+ IIoT telemetry records to monitor equipment KPIs and detect operational anomalies
                in real time. At Indika AI, I engineered ETL pipelines across 50K+ unstructured records, improving data quality by ~30% 
                through rule-based classification logic. On the product side, I've defined success metrics, designed A/B testing frameworks,
                and built full BRDs and Figma prototypes — including a fare transparency feature concept for Uber, modelled across 5 fare components
                with a complete experiment design.
              </p>
              <p>
                Beyond analytics, I've deployed ML pipelines on AWS SageMaker, contributed to open-source projects, and continuously
                deepen my foundations in data systems, statistical reasoning, and scalable pipeline design. I was awarded a Rs25L research grant
                from VIT and won Innovation Week 2025 — both reflecting a bias toward solving real, non-trivial problems.
              </p>
              <p>
                Currently seeking Product Analyst, Data Analyst, and Business Analyst roles in Delhi NCR where structured thinking,
                analytical rigour, and cross-functional ownership are valued. Would love to hear back for such opportunities.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to transform raw, complex data into structured intelligence — building 
                analytical systems, product frameworks, and business solutions that are rigorous, 
                impactful, and engineered with clarity and purpose."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};