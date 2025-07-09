import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-course-gradient-start to-course-gradient-end flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-primary">Laura Tek</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering careers through quality education and industry-relevant courses.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@learnhub.com" className="hover:text-primary transition-colors">
                  info@learnhub.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>123 Learning Street, Education City</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
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
          <div>
            <h4 className="font-semibold text-foreground mb-4">Partners</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>TechCorp Industries</li>
              <li>DataViz Solutions</li>
              <li>Marketing Pro</li>
              <li>Future Skills Institute</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;