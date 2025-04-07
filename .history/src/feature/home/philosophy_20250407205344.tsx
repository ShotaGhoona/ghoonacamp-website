import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';

export default function PhilosophySection() {
  return (
    <section className="relative w-full px-5 md:px-20 py-20 overflow-hidden">
      <SectionTitle title="Philosophy" />
      <div className="relative mt-8 flex items-center justify-between gap-8">
        <div className="relative w-full h-[500px] md:h-[600px] inset-0 md:rounded-2xl overflow-hidden">
          <Image 
            src="/philosophy.jpg" 
            alt="Philosophy Background" 
            fill
            className="rounded-2xl object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent rounded-2xl"></div>
          <div className="absolute z-10 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-900 font-bold flex flex-col gap-4 p-8">
            <p>
                早起きは三文の徳<br />
                1000年前からあるこの言葉を知らない人はいません。<br />
                しかし、それを日々実現している人はほんの一握りです。
            </p>
            <p>
                理想への道は、今日という一日の積み重ねから始まります。
            </p>
            <ul className="list-disc list-inside">
                <li>未来を変えるためには今日を変える</li>
                <li>今日を変えるためには行動を変える</li>
                <li>行動を変えるためには環境を変える</li>
            </ul>
            <p>
                Ghoona Campでは自己実現のための絶対的な手段<br />
                「頑張りを習慣に。成長を日常に。」するための環境を提供します。
            </p>
            <p>
                Ghoona Campは、ただの朝活コミュニティではありません。<br />
                「刺激ある伴走力」「多様な人材」「フレッシュな情報」が集まる環境です。
            </p>
            <p>
                変化のきっかけは、意外なほど小さい。<br />
                だがその影響は、想像を超えて大きい。
            </p>
            <p>
                私たちは約束します。<br />
                朝日を人生の灯火にして、「理想の自分」になる旅を、あなたと共に最後まで歩み続けることを。<br />
                朝から、今日から、人生を豊かに。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
