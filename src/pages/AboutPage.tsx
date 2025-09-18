import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  Globe, 
  Lightbulb,
  GraduationCap,
  Building,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

const AboutPage = () => {
  const achievements = [
    {
      icon: Users,
      title: "15,000+ Students",
      description: "Active students across all programs and levels"
    },
    {
      icon: GraduationCap,
      title: "800+ Faculty",
      description: "Experienced educators and researchers"
    },
    {
      icon: Building,
      title: "50+ Programs",
      description: "Diverse academic and technical programs"
    },
    {
      icon: Award,
      title: "70+ Years",
      description: "Of excellence in technical education"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education, research, and service to our community."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new ideas, technologies, and methods to solve real-world challenges."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We prepare students for success in an interconnected world while maintaining our local roots."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive, inclusive environment that celebrates diversity and collaboration."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30 w-fit mx-auto">
              About ATU
            </Badge>
            <h1 className="font-playfair font-bold text-4xl lg:text-6xl leading-tight">
              Shaping Ghana's{' '}
              <span className="text-secondary">Technological Future</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              For over seven decades, Accra Technical University has been at the forefront 
              of technical education in Ghana, producing skilled professionals who drive 
              innovation and economic development across West Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-primary mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide excellent technical and professional education, conduct relevant 
                  research, and offer quality service to society, thereby contributing to 
                  national development and global competitiveness.
                </p>
              </div>
              
              <div>
                <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a world-class technical university that produces competent, 
                  innovative, and entrepreneurial graduates for national development and 
                  global competitiveness.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h3 className="font-playfair font-bold text-2xl text-primary">
                  Academic Excellence
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ATU offers internationally recognized programs in engineering, business, 
                applied sciences, and technology, preparing students for leadership roles 
                in their chosen fields.
              </p>
              <Button className="w-full">
                Explore Our Programs
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Accra Technical University
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-card rounded-lg shadow-card p-6 text-center group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in ATU's history of excellence
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6 bg-white rounded-lg shadow-card p-6">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1950</span>
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-xl mb-2">Foundation</h3>
                <p className="text-muted-foreground">
                  Established as Accra Technical Institute to provide technical education and training
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 bg-white rounded-lg shadow-card p-6">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1993</span>
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-xl mb-2">Polytechnic Status</h3>
                <p className="text-muted-foreground">
                  Upgraded to Accra Polytechnic, expanding programs and student capacity
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 bg-white rounded-lg shadow-card p-6">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2016</span>
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-xl mb-2">University Status</h3>
                <p className="text-muted-foreground">
                  Converted to Accra Technical University, offering degree programs and research opportunities
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 bg-white rounded-lg shadow-card p-6">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2024</span>
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-xl mb-2">Innovation Hub</h3>
                <p className="text-muted-foreground">
                  Leading Ghana's technological transformation through cutting-edge research and industry partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-4">
              Visit Our Campus
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience ATU firsthand - we welcome prospective students, partners, and visitors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-card p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-xl mb-3">Location</h3>
              <p className="text-muted-foreground">
                Barnes Road, Adabraka<br />
                Accra, Ghana<br />
                P.O. Box GP 561
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-card p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-xl mb-3">Phone</h3>
              <p className="text-muted-foreground">
                +233 302 681 681<br />
                +233 302 681 682<br />
                +233 302 681 683
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-card p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-xl mb-3">Email</h3>
              <p className="text-muted-foreground">
                info@atu.edu.gh<br />
                registrar@atu.edu.gh<br />
                admissions@atu.edu.gh
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              Visit Official Website
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;