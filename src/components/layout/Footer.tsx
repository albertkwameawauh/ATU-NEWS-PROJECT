import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Newspaper
} from 'lucide-react';
import { categories } from '@/types/news';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">ATU News</h3>
                <p className="text-sm opacity-80">Accra Technical University</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Stay informed with the latest news, events, and updates from Accra Technical University. 
              Your source for academic excellence and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* News Categories */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">News Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-white transition-colors"
                >
                  About ATU
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://atu.edu.gh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-white transition-colors"
                >
                  Official ATU Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                <div className="text-sm opacity-90">
                  <p>Accra Technical University</p>
                  <p>Barnes Road, Adabraka</p>
                  <p>Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-90">+233 302 681 681</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-90">info@atu.edu.gh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm opacity-80">
            © 2024 Accra Technical University. All rights reserved. | 
            <span className="ml-1">Built with ❤️ for ATU Community</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;