import { Menu, UserSearch, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={`sticky top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : " bg-transparent py-5"} bg-transparent py-5 z-index-9999`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          TaiPM<span className="hover:text-primary">.</span>
        </a>
        {/* Desktop nav*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block ">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-35 h-15 rounded-full bg-primary flex items-center justify-center gap-2"
          >
            {" "}
            Contact me
            <UserSearch />
          </button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpenMenu((prev) => !prev)}
        >
          {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpenMenu && (
        <div className="md:hidden glass-strong">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsOpenMenu(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setIsOpenMenu(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full h-15 rounded-full bg-primary flex items-center justify-center gap-2"
            >
              {" "}
              Contact me
              <UserSearch />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
