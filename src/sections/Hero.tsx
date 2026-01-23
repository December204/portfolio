import heroBg from "../assets/hero-bg.png";
import profile from "../assets/profile-photo.jpg";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Facebook,
  GithubIcon,
  Instagram,
} from "lucide-react";

const skills = [
  "React",
  "Typescript",
  "Nodejs",
  "Graphql",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "TailwindCSS",
  "Git",
  "Github",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Hero img"
          src={heroBg}
          className="h-full w-full opacity-40 object-cover"
        />
        <div
          className="absolute inset-0  from-background/20 via-background/80
       to-background"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12  items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary glass">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer + React Specialist
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text "> digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif font-normal italic text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Dec12th - a software engineer specializing in React,
                Nodejs, and TypeScript. I build scalable, performant web
                application that users love
              </p>
            </div>
            {/* Contact/CV */}
            <div className="flex gap-2 animation-delay-300 animate-fade-in">
              <button className="cursor-pointer w-35 h-15  rounded-full flex items-center justify-center font-medium focus:outline-none focus-visible:ring-2 focus-visible : ring-primary text-primary-foreground hover: bg-primary/90 shadow-lg shadow-primary/90">
                Contact me <ArrowRight size={24} />
              </button>
              <button className="cursor-pointer bg-secondary w-40 h-15 rounded-full ">
                <span className="flex items-center justify-center gap-1">
                  <Download className="mb-1" />
                  Download CV
                </span>
              </button>
            </div>
            {/* Social media */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: GithubIcon, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all "
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right content */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile photo */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border ">
                <img
                  src={profile}
                  alt="Taipham"
                  className="w-full object-cover rounded-2xl aspect-auto"
                />

                {/* Floading Badge */}
                <div className="absolute -bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Avaliable for work
                    </span>
                  </div>
                </div>
                {/* Stat Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">Year Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Teachnologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="flex shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
