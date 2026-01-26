import { Mail, MapPin, Phone, GithubIcon } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "taipm12122004@gmail.com",
    href: "mailto:taipm12122004@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0967561611",
    href: "tel:0967561611",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ninh Binh, Vietnam",
    href: "https://www.google.com/maps/place/Ninh+Binh,+Vietnam",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/December204",
    href: "https://github.com/December204",
  },
];
export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 animation-delay-200 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-16 text-primary animate-fade-in">
          <p className="text-xl text-gray-600">Get in touch</p>
          <h2 className="text-4xl font-bold mt-4 text-primary">
            Let's build{" "}
            <span className="italic text-primary-foreground">
              something amazing together.{" "}
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-xl">
            If you'd like to get in touch, please reach out via email or social
            media.
          </p>
        </div>
        {/* Contact Info */}
        <div className="max-w-3xl mx-auto grid gap-8">
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.href}
              className="flex items-center gap-4 p-6 glass rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-1"
            >
              <div className="p-4 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  {info.label}
                </h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
