import Link from "next/link";

type ActivityCardProps = {
    title: string;
    description: string;
    imageUrl?: string;
    linkUrl?: string;
  };
  
  export default function ActivityCard({ title, description, imageUrl, linkUrl }: ActivityCardProps) {
    return (
      <div className="max-w-[400px] w-full p-3 xl:p-8 bg-white rounded-[20px] overflow-hidden relative shadow-md">
        {/* 画像部分 */}
        <div className="w-full h-[150px] md:h-[200px] bg-gray-200 flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>
  
        {/* タイトル */}
        <h3 className="text-lg md:text-xl font-bold my-3 md:my-5 text-center">{title}</h3>
  
        {/* 説明文 + グラデーションオーバーレイ */}
        <div className="relative h-[80px] md:h-[100px] overflow-hidden">
          <p className="text-xs xl:text-sm text-gray-600 leading-relaxed z-10 relative">
            {description}
          </p>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
        </div>
  
        {/* ボタン（上に重ねる） */}
        <div className="absolute bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 z-20">
            <Link href={linkUrl ?? ""}>
            <button className="bg-[#d5697e]] text-white text-xs xl:text-sm px-4 md:px-6 py-1.5 md:py-2 rounded-full shadow hover:opacity-80">
                read more
            </button>
            </Link>
        </div>
      </div>
    );
  }
  