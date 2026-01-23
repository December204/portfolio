import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import project4 from "../assets/Project4.png";
const projects = [
  {
    img: project1,
    time: "12/2025-02/2026",
    title: "TreePi",
    description:
      "Treepi is a premium discovery platform for travel and lifestyle experiences, making it easy to explore unique events, attractions, and activities across multiple locations. From immersive travel worlds and creative sky studios to curated dining and shopping options, Treepi brings everything together with clear dates, exclusive perks, and a clean, modern interface—helping you plan and enjoy memorable experiences effortlessly.",
  },
  {
    img: project2,
    time: "11/2025-12/2025",
    title: "Employee Management System",
    description:
      "An employee management system that allows staff to check in and check out daily, automatically track working hours, detect late arrivals or early departures, and calculate total working hours. The system also supports leave requests, enabling employees to submit time-off requests and managers to review and approve them easily, improving transparency and efficiency in workforce management.",
  },
  {
    img: project3,
    time: "04/2025-05/2025",
    title: "Authentication System with JWT",
    description:
      "A secure authentication system using JSON Web Tokens (JWT) for user login and session management. It includes features like token generation, validation, refresh tokens, and role-based access control to ensure secure and efficient user authentication.",
  },
  {
    img: project4,
    time: "12/2024-02/2025",
    title: "Airline Booking System",
    description:
      "An airline booking system that allows users to search for flights, view available seats, and book tickets. It includes features like flight scheduling, seat selection, payment processing, and user account management.",
  },
];

export const Project = () => {
  return (
    <section id="project" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 animate-fade-in animation-delay-200 text-secondary-foreground">
            Projects that{" "}
            <span className="italic font-serif">showcase my skills</span>
          </h2>
          <p className="text-muted-foreground animation-delay-200 animate-fade-in">
            Here are some of the projects I've worked on, demonstrating my
            expertise in software development and my commitment to delivering
            high-quality solutions.
          </p>
        </div>
        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-9">
          {projects.map((prj, i) => (
            <div
              key={i}
              className="bg-secondary/10 p-6 rounded-2xl glass glow-border animate-fade-in flex flex-col hover:shadow-[0_0_25px_rgba(32,178,166,0.6)] transition-shadow"
            >
              <img
                src={prj.img}
                alt={prj.title}
                className="w-full h-100 rounded-lg hover:scale-105 transition-transform"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-bold mt-2 text-secondary-foreground rounded-full uppercase">
                  {prj.title}
                </h3>
                <span className="text-lg text-primary font-medium">
                  {prj.time}
                </span>
                <p className="text-muted-foreground mt-2 italic">
                  {prj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
