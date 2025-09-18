export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: NewsCategory;
  imageUrl: string;
  featured: boolean;
  readTime: number;
  tags: string[];
}

export type NewsCategory = 'academic' | 'sports' | 'campus' | 'research' | 'announcements';

export interface CategoryInfo {
  id: NewsCategory;
  name: string;
  description: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'academic',
    name: 'Academic',
    description: 'Academic programs, courses, and educational updates',
    color: 'academic'
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'University sports, teams, and athletic achievements',
    color: 'sports'
  },
  {
    id: 'campus',
    name: 'Campus Life',
    description: 'Student activities, events, and campus culture',
    color: 'campus'
  },
  {
    id: 'research',
    name: 'Research',
    description: 'Research projects, publications, and innovations',
    color: 'research'
  },
  {
    id: 'announcements',
    name: 'Announcements',
    description: 'Important university announcements and notices',
    color: 'announcements'
  }
];