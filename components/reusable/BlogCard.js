const BlogCard = ({ id, title, date }) => {
  return (
    <div
      id={id}
      className={`group flex cursor-pointer flex-row items-center justify-between space-x-5 rounded-2xl transition duration-300 ease-out md:px-5`}
    >
      <h3 className="line-clamp-1 transition duration-300 group-hover:text-secondary">
        {title}
      </h3>
      <hr className="flex-grow origin-left transform border-t transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:animate-progress-bar  dark:border-slate-100/10 dark:group-hover:border-gray-100/30" />

      <h3 className="description line-clamp-1">{date}</h3>
    </div>
  );
};

export default BlogCard;
