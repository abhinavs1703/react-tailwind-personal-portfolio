import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Building maintainable, scalable code designed for long term sustainability.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
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
              Building the systems of tomorrow,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a software engineer in the making with a strong interest in building scalable,
                performance-driven systems.I enjoy working close to the core of Software-where
                concurrency, data flow, and system behaviour matter-turning complex requirements
                into clean, reliable solutions that perform under real-world constraints.
              </p>
              <p>
                My work focuses on backend and system-level development using C++ and Python,
                with hands-on experience in multithreading, RESTful API design, Linux environments,
                and distributed workflows. I've built real-time event monitoring and alerting systems, 
                multi-threaded file search and indexing tools, and intelligent automation pipelines,
                emphasizing low latency, efficient resource usage, and fault-tolerant design.
                I'm particularly interested in how well-architected systems scale, handle failures,
                and remain maintainable over time.
              </p>
              <p>
                Beyond projects, I continuously strengthen my foundations through problem solving,
                open-source contributions, and deepening my understanding of core computer science 
                concepts such as data structures, operating systems, networking, and system design. 
                When I'm not coding, I enjoy exploring how software systems behave at scale and 
                refining my approach to writing clear, purposeful code. I'm actively seeking entry-level
                Software Development Engineer roles where strong fundamentals, ownership, and 
                engineering rigor are valued.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build scalable, reliable software systems that 
                perform under real-world constraints — solutions that are efficient,
                maintainable, and engineered with clarity, precision, and purpose."
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