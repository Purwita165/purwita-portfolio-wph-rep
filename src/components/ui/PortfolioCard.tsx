type PortfolioCardProps = {
  title: string;
  description: string;
  image?: string;   // optional dulu, aman
  tech: string[];
  link: string;
};

export default function PortfolioCard({
  title,
  description,
  image,
  tech,
  link,
}: PortfolioCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 flex flex-col gap-4 shadow-sm">
      
      {/* Image placeholder */}
      <div className="h-40 w-full bg-neutral-100 rounded-lg flex items-center justify-center text-sm text-neutral-400">
        Image
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-neutral-500">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-2 py-1 rounded-full bg-neutral-100"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={link}
          className="text-sm font-medium text-blue-600 mt-2"
        >
          Visit ↗
        </a>
      </div>
    </div>
  );
}