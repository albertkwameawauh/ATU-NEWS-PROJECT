import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@atu.edu.gh",
      phone: "+233 302 681 684",
      description: "For prospective students and application inquiries"
    },
    {
      name: "Academic Affairs",
      email: "academic@atu.edu.gh",
      phone: "+233 302 681 685",
      description: "Academic programs, courses, and student services"
    },
    {
      name: "Research Office",
      email: "research@atu.edu.gh",
      phone: "+233 302 681 686",
      description: "Research collaborations and innovation partnerships"
    },
    {
      name: "Public Relations",
      email: "pr@atu.edu.gh",
      phone: "+233 302 681 687",
      description: "Media inquiries and university communications"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30 w-fit mx-auto">
              Contact ATU
            </Badge>
            <h1 className="font-playfair font-bold text-4xl lg:text-6xl leading-tight">
              Get in{' '}
              <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Have questions about ATU? We're here to help. Reach out to us through 
              any of the channels below and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-card p-8">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="w-8 h-8 text-primary" />
                <h2 className="font-playfair font-bold text-2xl lg:text-3xl text-primary">
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Main Contact Info */}
              <div className="bg-card rounded-2xl shadow-card p-8">
                <h3 className="font-playfair font-bold text-2xl text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Campus Address</h4>
                      <p className="text-muted-foreground">
                        Barnes Road, Adabraka<br />
                        Accra, Ghana<br />
                        P.O. Box GP 561
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground">
                        Main Line: +233 302 681 681<br />
                        Switchboard: +233 302 681 682<br />
                        Fax: +233 302 681 683
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Addresses</h4>
                      <p className="text-muted-foreground">
                        General: info@atu.edu.gh<br />
                        Admissions: admissions@atu.edu.gh<br />
                        Registrar: registrar@atu.edu.gh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                          aria-label={social.label}
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-card rounded-2xl shadow-card p-8">
                <h3 className="font-playfair font-bold text-xl text-primary mb-6">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="w-4 h-4 mr-3" />
                    Student Portal
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Building className="w-4 h-4 mr-3" />
                    Campus Tour Request
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="w-4 h-4 mr-3" />
                    Official ATU Website
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-muted-foreground">
              For specific inquiries, contact the relevant department directly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-card rounded-lg shadow-card p-6">
                <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                  {dept.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-4">
              Find Our Campus
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Accra, easily accessible by public transport
            </p>
          </div>
          
          <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-xl text-muted-foreground mb-2">
                Interactive Campus Map
              </h3>
              <p className="text-muted-foreground">
                Use Google Maps or your preferred navigation app to find us
              </p>
              <Button className="mt-4">
                Open in Maps
                <Globe className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;