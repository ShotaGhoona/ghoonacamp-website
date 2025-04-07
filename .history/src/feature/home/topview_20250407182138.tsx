// components/feature/home/display/topview.tsx
import Image from 'next/image';

export default function TopviewSection() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/topview.jpg"
        alt="Topview Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="absolute inset-0 flex flex-col justify-between px-10 md:px-20 py-16 md:py-24">
        {/* 中央ロゴ部分 */}
        <div className="flex-1 flex items-center">
          <h1 className="text-white font-bold text-[40px] md:text-[80px] lg:text-[100px] text-center">
            Ghoona Camp
          </h1>
        </div>

        {/* 下部キャッチコピー */}
        <div className="text-white max-w-2xl mx-auto md:mx-0 md:text-left">
          <p className="text-sm md:text-base mb-1">早起きは三文の徳</p>
          <p className="text-sm md:text-base mb-1">1000年前からあるこの言葉を知らない人はません。</p>
          <p className="text-sm md:text-base mb-1">しかし、それを日々実現している人はほんの一握りです。</p>
          <p className="text-sm md:text-base mb-1">Ghoona Campでは自己実現のための絶対的な手段</p>
          <p className="text-sm md:text-base mb-1">頑張りを習慣に、成長を日常にするための環境を提供します。</p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">今日から、朝から、人生を豊かに。</p>
        </div>
      </div>
    </section>
  );
}
