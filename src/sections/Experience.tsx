const experiences = [
  {
    period: "12/2025 - Present",
    role: "Fullstack Developer Intern",
    place: "Airdata Company",
    description:
      "As a Fullstack Developer Intern at Airdata Company, I am responsible for assisting in the development and maintenance of web applications that support the company's data management solutions. My role involves collaborating with senior developers to implement new features, optimize existing code, and ensure seamless integration between front-end and back-end systems. I am gaining hands-on experience with technologies such as React, Node.js, and databases, while also learning about best practices in software development and project management within a professional setting.",
    technologies: [
      "React",
      "Nodejs",
      "TypeScript",
      "PostgreSQL",
      "GraphQL",
      "Docker",
    ],
    current: true,
  },
  {
    period: "06/2025-12/2025",
    role: "Full Stack Developer",
    place: "Mindx",
    description:
      "During my learning at Mindx, I undertook a comprehensive Full Stack Developer course that equipped me with the skills to build robust web applications. The curriculum covered both front-end and back-end development, including technologies such as React, Node.js, and databases. I completed several projects that demonstrated my ability to create dynamic user interfaces and implement server-side logic, preparing me for a career in full stack development.",
    technologies: ["React", "Nodejs", "MongoDB", "Express", "JavaScript"],
    current: false,
  },
  {
    period: "2022-2026",
    role: "Software Engineer",
    place: "FPT University",
    description:
      "As a Student at FPT University, I have been actively involved in various projects and coursework that have honed my skills in software development. My experience includes working with modern web technologies, collaborating with peers on team projects, and applying best practices in coding and design. I have also participated in internships that provided real-world experience and enhanced my understanding of the software development lifecycle.",
    technologies: [
      "C",
      "Java",
      "React",
      "Data Structures",
      "Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/50 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 animate-fade-in animation-delay-200 text-secondary-foreground">
            Experience that{" "}
            <span className="italic font-serif">speaks volumes</span>
          </h2>
          <p className="text-muted-foreground animation-delay-200 animate-fade-in">
            A timeline of my professional growth and key milestones in my career
            journey.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-libn-to-b from-primary/70 via-primary/50 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-1.25 md:left-1/2 w-3 h-3 bg-primary rounded-full border border-primary shadow-[0_0_10px_rgba(32,178,166,0.6)] md:-translate-x-1/2 mt-8 z-20">
                  <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping opacity-75"></div>
                </div>

                <div
                  className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-1`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.place}</p>
                    <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 text-xs font-medium ${i % 2 === 0 ? "justify-end" : "justify-start"}`}
                    >
                      {exp.technologies.map((tech, index) => (
                        <span
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                          key={index}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
