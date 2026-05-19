import { Link } from 'react-router-dom';
import Button from './CustomButton';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="rounded-3xl border border-pink-200 bg-white p-4 shadow-sm"
        >
          <div className="aspect-4/3 bg-pink-100 rounded-xl flex items-center justify-center">
            <div className="h-12 w-12 bg-white border border-pink-300" />
          </div>

          <p className="mt-3 text-[11px] uppercase tracking-widest text-pink-500">
            Article {String(index + 1).padStart(2, '0')}
          </p>

          <h3 className="mt-2 font-semibold text-pink-900">
            {article.title}
          </h3>

          <p className="mt-2 text-sm text-pink-600">
            {article.content[0].substring(0, 120)}...
          </p>

          <Link to={`/articles/${article.name}`}>
            <Button className="mt-4">Read More</Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;