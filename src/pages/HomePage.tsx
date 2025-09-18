import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NewsCard from '@/components/news/NewsCard';
import { newsArticles } from '@/data/newsData';
import { categories } from '@/types/news';
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  FlaskConical, 
  Megaphone,
  ArrowRight,
  TrendingUp,
  Calendar,
  Eye
} from 'lucide-react';

const HomePage = () => {
  const featuredArticles = newsArticles.filter(article => article.featured);
  const latestArticles = newsArticles.slice(0, 6);
  const heroArticle = featuredArticles[0];
  const secondaryFeatured = featuredArticles.slice(1, 3);

  const categoryIcons = {
    academic: GraduationCap,
    sports: Trophy,
    campus: Users,
    research: FlaskConical,
    announcements: Megaphone
  };

  const stats = [
    { label: 'Students', value: '15,000+', icon: Users },
    { label: 'Faculty', value: '800+', icon: GraduationCap },
    { label: 'Programs', value: '50+', icon: FlaskConical },
    { label: 'Research Projects', value: '100+', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <Badge className="bg-white/20 text-white hover:bg-white/30 w-fit">
                  Welcome to ATU News
                </Badge>
                <h1 className="font-playfair font-bold text-4xl lg:text-6xl leading-tight">
                  Your Gateway to{' '}
                  <span className="text-secondary">Academic Excellence</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Stay connected with the latest news, achievements, and innovations 
                  from Accra Technical University. Discover stories that shape our 
                  academic community and drive technological advancement in Ghana.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Explore Latest News
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    About ATU
                  </Button>
                </div>
              </div>
              <div className="relative">
                {heroArticle && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <Badge className="bg-secondary text-secondary-foreground mb-4">
                      Featured Story
                    </Badge>
                    <h3 className="font-playfair font-bold text-2xl text-white mb-3 leading-tight">
                      {heroArticle.title}
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-2">
                      {heroArticle.excerpt}
                    </p>
                    <Link to={`/article/${heroArticle.id}`}>
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white shadow-card border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="font-playfair font-bold text-2xl text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-2">
                Featured Stories
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover the most important news and updates from ATU
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All News
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Featured Article */}
            {heroArticle && (
              <div className="lg:col-span-2">
                <NewsCard article={heroArticle} variant="featured" />
              </div>
            )}

            {/* Secondary Featured Articles */}
            <div className="space-y-6">
              {secondaryFeatured.map((article) => (
                <NewsCard key={article.id} article={article} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-4">
              News Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore news by category to find exactly what interests you most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.id];
              const categoryArticles = newsArticles.filter(article => article.category === category.id);
              
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group block"
                >
                  <div className="bg-card rounded-lg shadow-card p-6 text-center group-hover:shadow-card-hover transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className={`w-16 h-16 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${category.color}/20 transition-colors`}>
                      <IconComponent className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                      <Eye className="w-3 h-3" />
                      <span>{categoryArticles.length} articles</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-primary mb-2">
                Latest Updates
              </h2>
              <p className="text-muted-foreground text-lg">
                Stay up to date with recent news and announcements
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Updated daily</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;