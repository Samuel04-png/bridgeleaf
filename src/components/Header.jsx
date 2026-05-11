import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/siteData";

const logoSrc = `${import.meta.env.BASE_URL}assets/bridgeleaf-logo.png`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navigation.map((item) => document.querySelector(item.href)).filter(Boolean);
      let current = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) {
          current = section;
        }
      }

      if (current) {
        setActive(`#${current.id}`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-xl" : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center" aria-label="Bridge Leaf Equity Holdings Ltd home" onClick={closeMenu}>
          <img className="h-9 w-auto sm:h-10" src={logoSrc} alt="Bridge Leaf Equity Holdings Ltd logo" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active === item.href ? "text-red after:scale-x-100" : "text-slate-700 after:scale-x-0"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="btn-primary">
            Invest With Us
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 text-navy lg:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "max-h-[520px] border-t border-slate-200" : "max-h-0"}`}>
        <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-5 sm:px-6" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`mobile-link ${active === item.href ? "bg-soft text-red" : "text-navy"}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="btn-primary mt-3 justify-center">
            Invest With Us
          </a>
        </nav>
      </div>
    </header>
  );
}
