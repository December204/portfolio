import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlight = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable code following best practices and design patterns.",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description:
      "I optimize applications for speed and efficiency to ensure a smooth user experience.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "I work well in team environments, valuing communication and collaboration to achieve project goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "I bring creative ideas and innovative solutions to complex problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* left content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="amnimate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">
                About me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm TaiPM, a passionate Software Engineer specializing in React
                development. With a strong foundation in JavaScript and
                TypeScript, I create dynamic and responsive web applications
                that deliver exceptional user experiences. My expertise lies in
                building scalable front-end architectures, optimizing
                performance, and implementing best practices to ensure code
                quality. I'm dedicated to continuous learning and staying
                updated with the latest trends in web development. Let's connect
                and build something amazing together!
              </p>
              <p>
                I specialize in React, Node.js, and TypeScript, crafting
                scalable web applications with a focus on performance and user
                experience.
              </p>
              <p>
                Beyond coding, I enjoy cooking, traveling, and exploring new
                technologies.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to create digital that not only function
                flawlessly but also leave a lasting impression on users -
                products that are as enjoyable to use as they are to build.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlight.map((item, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
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
