import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/common/ServiceCard';

export default function ServiceSection() {
    return (
      <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
        <SectionTitle title="What is Ghoona Camp" />
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <ServiceCard
            title="毎朝6:00-8:00の朝活"
            description="オンラインで毎日開催される6時〜8時の朝活では、自宅にいながら自分のやりたいことに没頭できます。勉強や読書、副業や運動など、内容は自由。日中や夜間には取りづらい集中時間を、毎朝確保することができます。規則正しい生活リズムが自然と身につき、効率的な時間の使い方を習慣化できるのも大きなメリットです。日々の小さな積み重ねが、未来の大きな成果へと繋がることを実感できるでしょう。"
            imageUrl="service_tech.jpg"
            href="/service/tech"
            />
            <ServiceCard
            title="有益情報がたくさん"
            description="生成AI時代に特化した新しいスタイルのプログラミングスクール。従来のプログラミング学習を超えて、AIを味方につけて最短で結果を出す方法を教えます。エンジニアとしての市場価値を高めたい方へ、効率的で実践的な学びの場を提供します。"
            imageUrl="service_academy.jpg"
            href="/service/academy"
            />
            <ServiceCard
            title="刺激し合う仲間"
            description="意識の高い仲間が集う朝活オンラインサロン。自分をアップデートしたい人のために、質の高い情報交換とコミュニティづくりをサポートします。一緒に朝の時間を活用し、成長と学びの習慣をつくりましょう。"
            imageUrl="service_camp.jpg"
            href="/service/camp"
            />
        </div>
      </section>
    );
  }
  