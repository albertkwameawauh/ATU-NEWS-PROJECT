import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar } from 'lucide-react';
import { NewsArticle } from '@/types/news';
import { categories } from '@/types/news';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'featured' | 'compact';
}

const NewsCard = ({ article, variant = 'default' }: NewsCardProps) => {
  const category = categories.find(cat => cat.id === article.category);
  
  if (variant === 'featured') {
    return (
      <Link to={`/article/${article.id}`} className="group block">
        <article className="relative overflow-hidden rounded-lg shadow-news-card group-hover:shadow-card-hover transition-all duration-300 transform group-hover:-translate-y-1">
          <div className="aspect-[16/9] bg-muted overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 news-card-overlay opacity-60"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div className="space-y-3">
              {category && (
                <Badge 
                  className={`bg-${category.color} text-white hover:bg-${category.color}/90 w-fit`}
                >
                  {category.name}
                </Badge>
              )}
              <h2 className="font-playfair font-bold text-2xl lg:text-3xl leading-tight">
                {article.title}
              </h2>
              <p className="text-gray-100 line-clamp-2 text-lg">
                {article.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-200">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.id}`} className="group block">
        <article className="flex space-x-4 p-4 bg-card rounded-lg shadow-card group-hover:shadow-card-hover transition-all duration-300 group-hover:bg-card-hover">
          <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 space-y-2">
            {category && (
              <Badge 
                variant="secondary" 
                className={`bg-${category.color}/10 text-${category.color} hover:bg-${category.color}/20 text-xs`}
              >
                {category.name}
              </Badge>
            )}
            <h3 className="font-playfair font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.id}`} className="group block">
      <article className="bg-card rounded-lg shadow-card overflow-hidden group-hover:shadow-card-hover transition-all duration-300 transform group-hover:-translate-y-1">
        <div className="aspect-[16/9] bg-muted overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            {category && (
              <Badge 
                className={`bg-${category.color} text-white hover:bg-${category.color}/90`}
              >
                {category.name}
              </Badge>
            )}
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          
          <h3 className="font-playfair font-bold text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;