import { useState } from 'react';

interface BlogPost {
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    tags: string[];
    category: string;
  };
}

interface BlogFilterProps {
  posts: BlogPost[];
}

export default function BlogFilter({ posts }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract unique categories and tags
  const categories = ['All', ...Array.from(new Set(posts.map(p => p.data.category)))];
  const allTags = ['All', ...Array.from(new Set(posts.flatMap(p => p.data.tags)))];

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.data.category === selectedCategory;
    const tagMatch = selectedTag === 'All' || post.data.tags.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

  return (
    <div>
      {/* Filter Controls */}
      <div className="mb-10 space-y-6">
        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            分类
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            标签
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        找到 <span className="font-bold text-blue-600">{filteredPosts.length}</span> 篇文章
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded">
                  {post.data.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
                {post.data.title}
              </h2>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.data.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.data.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {new Date(post.data.pubDate).toLocaleDateString('zh-CN')}
                </span>
                <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-block">
                  阅读 →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-xl text-gray-500">没有找到匹配的文章</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedTag('All');
            }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            重置筛选
          </button>
        </div>
      )}
    </div>
  );
}
