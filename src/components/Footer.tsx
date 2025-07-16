import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-course-gradient-start to-course-gradient-end flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-primary">Laura Tek</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering careers through quality education and industry-relevant courses.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-base">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@learnhub.com" className="hover:text-primary transition-colors break-all">
                  info@learnhub.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="leading-relaxed">123 Learning Street, Education City</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-base">Partners</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>TechCorp Industries</li>
              <li>DataViz Solutions</li>
              <li>Marketing Pro</li>
              <li>Future Skills Institute</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Laura Tek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;