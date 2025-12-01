import { Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">4L Law Firm</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Leading legal authority in Dubai providing exceptional services with unwavering representation and absolute confidentiality.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#practice-areas" className="text-white/70 hover:text-primary transition-colors text-sm">Practice Areas</a></li>
              <li><a href="#team" className="text-white/70 hover:text-primary transition-colors text-sm">Our Team</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Corporate Law</li>
              <li>Litigation</li>
              <li>Arbitration</li>
              <li>Real Estate</li>
              <li>Debt Collection</li>
              <li>Family Law</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Level 25, Emirates Towers<br />Sheikh Zayed Road<br />Dubai, UAE</p>
              <p>Phone: +971 4 XXX XXXX</p>
              <p>Email: info@4llawfirm.ae</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Award className="h-4 w-4" />
                <span>Dubai Chamber Member</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Award className="h-4 w-4" />
                <span>DIFC Courts Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Award className="h-4 w-4" />
                <span>International Bar Association</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60">
              © {currentYear} 4L Law Firm. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
