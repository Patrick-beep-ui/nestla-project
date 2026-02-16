import { useState } from "react";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/assets/NestlaLogo.svg" alt="Nestla logo" className="h-6 w-auto" />
              <h2 className="font-heading font-semibold text-xl text-white tracking-tight">
                nestla
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
              The trust-first real estate platform designed to maximize seller equity through data and concierge-led care.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-[#63C7FF] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-[#63C7FF] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-[#63C7FF] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-6">Product</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <button aria-label="Go to The Nestla Method section" onClick={() => scrollTo("#how-it-works")} className="hover:text-[#63C7FF] transition-colors">
                  The Nestla Method
                </button>
              </li>
              <li>
                <button aria-label="Go to Services section" onClick={() => scrollTo("#services")} className="hover:text-[#63C7FF] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button aria-label="Go to Projects section" onClick={() => scrollTo("#projects")} className="hover:text-[#63C7FF] transition-colors">
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <button aria-label="Go to About Us section" onClick={() => scrollTo("#about")} className="hover:text-[#63C7FF] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button aria-label="Go to Contact section" onClick={() => scrollTo("#contact")} className="hover:text-[#63C7FF] transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button aria-label="Go to Support section" onClick={() => scrollTo("#support")} className="hover:text-[#63C7FF] transition-colors">
                  Support
                </button>
              </li>
            </ul>
          </div>

          <div className="relative">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#63C7FF] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#63C7FF] transition-colors">Terms of Service</a>
              </li>
            </ul>

            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="mt-12 md:absolute md:bottom-0 md:right-0 h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#63C7FF] hover:text-[#0F0F0F] transition-all group focus:outline focus:outline-2 focus:outline-[#63C7FF]"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-300 font-medium">
          <span>
            © {new Date().getFullYear()} Nestla LLC | 4411 E. La Palma Ave, Anaheim Ca, 92807 DRE# 01329011
          </span>
          <div className="flex gap-4">
            <span>DRE# 01329011</span>
            <span className="hidden md:block">|</span>
            <p>Built for clarity. Designed for growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
