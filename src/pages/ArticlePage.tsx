import { useParams, Link, Navigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/news/NewsCard';
import { newsArticles } from '@/data/newsData';
import { categories } from '@/types/news';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  BookOpen,
  Tag,
  Eye
} from 'lucide-react';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsArticles.find(a => a.id === id);
  
  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const category = categories.find(cat => cat.id === article.category);
  const relatedArticles = newsArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Article Header */}
      <div className="bg-muted/30 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            {category && (
              <Link to={`/category/${category.id}`}>
                <Badge className={`bg-${category.color} text-white hover:bg-${category.color}/90`}>
                  {category.name}
                </Badge>
              </Link>
            )}
          </div>
          
          <h1 className="font-playfair font-bold text-3xl lg:text-5xl text-primary leading-tight mb-6">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
            
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Image */}
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="space-y-6 text-foreground leading-relaxed"
              />
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Article Info */}
            <div className="bg-card rounded-lg shadow-card p-6 sticky top-6">
              <h3 className="font-playfair font-semibold text-lg mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Article Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Published</span>
                  <span className="font-medium">{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reading time</span>
                  <span className="font-medium">{article.readTime} minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{category?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Author</span>
                  <span className="font-medium">{article.author}</span>
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="bg-card rounded-lg shadow-card p-6">
              <h3 className="font-playfair font-semibold text-lg mb-4 flex items-center">
                <Share2 className="w-5 h-5 mr-2 text-primary" />
                Share Article
              </h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Share2 className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Share on Facebook
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Share on Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-muted/30 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-8">
              <Eye className="w-5 h-5 text-primary" />
              <h2 className="font-playfair font-bold text-2xl lg:text-3xl text-primary">
                Related Articles
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <NewsCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;