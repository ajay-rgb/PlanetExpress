const NewsCard = ({ article }) => {
  if (!article) return null;

  return (
    <a 
      href={article.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center w-80 h-28  backdrop-blur-md rounded-lg p-2 mb-4 mt-4 shadow-lg text-white no-underline transition-all hover:bg-white/20"
    >
      <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded-md mr-3" />
      <div className="flex flex-col h-full overflow-hidden">
        <h3 className="font-bold text-sm leading-tight truncate">{article.title}</h3>
        <p className="text-xs opacity-80 mt-1 flex-grow overflow-hidden">{article.description}</p>
      </div>
    </a>
  );
};

export default NewsCard;