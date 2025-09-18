import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Menu, 
  X, 
  Search, 
  Newspaper,
  GraduationCap,
  Trophy,
  Users,
  FlaskConical,
  Megaphone
} from 'lucide-react';
import { categories } from '@/types/news';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const categoryIcons = {
    academic: GraduationCap,
    sports: Trophy,
    campus: Users,
    research: FlaskConical,
    announcements: Megaphone
  };

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-card sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl text-primary">ATU News</h1>
              <p className="text-xs text-muted-foreground -mt-1">Accra Technical University</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.id];
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`flex items-center space-x-1 font-medium transition-colors hover:text-primary ${
                    isActivePath(`/category/${category.id}`) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </Link>
              );
            })}
            
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search news articles..."
                className="w-full"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/"
              className={`block py-2 font-medium ${
                isActivePath('/') ? 'text-primary' : 'text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.id];
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`flex items-center space-x-2 py-2 font-medium ${
                    isActivePath(`/category/${category.id}`) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </Link>
              );
            })}
            
            <Link
              to="/about"
              className={`block py-2 font-medium ${
                isActivePath('/about') ? 'text-primary' : 'text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`block py-2 font-medium ${
                isActivePath('/contact') ? 'text-primary' : 'text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;