// components/common/ServiceCard.tsx
import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  href: string; // 新しくhrefプロパティを追加
};

export default function ServiceCard({ title, description, imageUrl, href }: ServiceCardProps) {
  return (
    <div className="max-w-[400px] min-w-[200px] w-full bg-white rounded-md overflow-hidden relative">
      <div className="w-full h-[150px] md:h-[200px] bg-gray-200 flex items-center justify-center shadow-md">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mt-10 mb-5">
        <div className="flex-1 h-[1px] bg-gray-400" />
        <h3 className="text-2xl font-bold whitespace-nowrap">{title}</h3>
        <div className="flex-1 h-[1px] bg-gray-400" />
      </div>

      <div className="relative h-[100px] overflow-hidden">
        <p className="text-sm text-gray-600 leading-relaxed z-10 relative">
          {description}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        <Link href={href}>
          <button className="bg-[#266594] text-white text-[10px] md:text-[12px] lg:text-[15px] px-6 py-2 rounded-full shadow hover:opacity-80">
            read more
          </button>
        </Link>
      </div>
    </div>
  );
}
