import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/common/ServiceCard';

export default function ServiceSection() {
    return (
      <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
        <SectionTitle title="What is Ghoona Camp" />
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <ServiceCard
            title="毎朝6:00-8:00の朝活"
            description="オンラインで毎日開催される6時〜8時の朝活では、自宅にいながら自分のやりたいことに没頭できます。勉強や読書、副業や運動など、内容は自由。日中や夜間には取りづらい集中時間を、毎朝確保することができます。規則正しい生活リズムが自然と身につき、効率的な時間の使い方を習慣化できるのも大きなメリットです。"
            imageUrl="service_tech.jpg"
            href="/service/tech"
            />
            <ServiceCard
            title="有益情報がたくさん"
            description="コミュニティ内では、日常的に使える生産性アップのテクニック、効率的な勉強方法、副業で成果を出すためのノウハウなど、実践的で役立つ情報が豊富に共有されています。参加者同士が自分の経験や知識を惜しみなくシェアする文化があり、コミュニティにいるだけで自然と最新の情報をキャッチアップできます。"
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
  