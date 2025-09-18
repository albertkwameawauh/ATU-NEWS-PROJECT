import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/news/NewsCard';
import { newsArticles } from '@/data/newsData';
import { categories } from '@/types/news';
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  FlaskConical, 
  Megaphone,
  Filter,
  Calendar,
  TrendingUp
} from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');
  
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return <Navigate to="/404" replace />;
  }

  const categoryIcons = {
    academic: GraduationCap,
    sports: Trophy,
    campus: Users,
    research: FlaskConical,
    announcements: Megaphone
  };

  const IconComponent = categoryIcons[category.id];
  
  let categoryArticles = newsArticles.filter(article => article.category === category.id);
  
  // Sort articles
  categoryArticles = categoryArticles.sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    } else {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    }
  });

  const featuredArticle = categoryArticles.find(article => article.featured);
  const otherArticles = categoryArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Category Header */}
      <section className={`gradient-primary py-16 lg:py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="font-playfair font-bold text-4xl lg:text-6xl">
              {category.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {category.description}
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{categoryArticles.length} articles</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Updated regularly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-playfair font-bold text-2xl lg:text-3xl text-primary mb-2">
                Latest in {category.name}
              </h2>
              <p className="text-muted-foreground">
                Showing {categoryArticles.length} articles
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Sort by:</span>
              </div>
              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={sortBy === 'latest' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSortBy('latest')}
                  className="rounded-none"
                >
                  Latest
                </Button>
                <Button
                  variant={sortBy === 'oldest' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSortBy('oldest')}
                  className="rounded-none"
                >
                  Oldest
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-16">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-playfair font-semibold text-xl text-primary">
                  Featured Story
                </h3>
              </div>
              <NewsCard article={featuredArticle} variant="featured" />
            </div>
          )}

          {/* Other Articles Grid */}
          {otherArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <IconComponent className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                No articles yet
              </h3>
              <p className="text-muted-foreground">
                Check back soon for more {category.name.toLowerCase()} news and updates.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {otherArticles.length > 0 && (
            <div className="text-center mt-16">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-playfair font-semibold text-xl text-center mb-8">
            Explore Other Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.filter(cat => cat.id !== category.id).map((otherCategory) => {
              const OtherIconComponent = categoryIcons[otherCategory.id];
              const otherCategoryCount = newsArticles.filter(
                article => article.category === otherCategory.id
              ).length;
              
              return (
                <a
                  key={otherCategory.id}
                  href={`/category/${otherCategory.id}`}
                  className="group block bg-card rounded-lg shadow-card p-6 text-center hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-${otherCategory.color}/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-${otherCategory.color}/20 transition-colors`}>
                    <OtherIconComponent className={`w-6 h-6 text-${otherCategory.color}`} />
                  </div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {otherCategory.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {otherCategoryCount} articles
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
