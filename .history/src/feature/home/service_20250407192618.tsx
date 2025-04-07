import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/common/ServiceCard';

export default function ServiceSection() {
    return (
      <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
        <SectionTitle title="What is Ghoona Camp" />
        <div className="text-center py-10">
          <p className="text-xl font-bold">2025年、全国のわかものの朝を盛り上げるために作られた</p>
          <p className="text-medium font-bold">若者の若者による若者のための</p>
          <p className="text-4xl font-bold">オンラインコミュニティ</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <ServiceCard
            title="毎朝6:00-8:00の朝活"
            description="オンラインで毎日開催される6時〜8時の朝活では、自宅にいながら自分のやりたいことに没頭できます。勉強や読書、副業や運動など、内容は自由。日中や夜間には取りづらい集中時間を、毎朝確保することができます。規則正しい生活リズムが自然と身につき、効率的な時間の使い方を習慣化できるのも大きなメリットです。"
            imageUrl="morning.png"
            href="/service/tech"
            />
            <ServiceCard
            title="有益情報がたくさん"
            description="コミュニティ内では、日常的に使える生産性アップのテクニック、効率的な勉強方法、副業で成果を出すためのノウハウなど、実践的で役立つ情報が豊富に共有されています。参加者同士が自分の経験や知識を惜しみなくシェアする文化があり、コミュニティにいるだけで自然と最新の情報をキャッチアップできます。"
            imageUrl="information.png"
            href="/service/academy"
            />
            <ServiceCard
            title="刺激し合う仲間"
            description="毎日の参加を通じて顔見知りになった仲間と、お互いの頑張りを称えあったり、時には励ましあったりしながら切磋琢磨できる環境です。コミュニティの中にはそれぞれの夢や目標に向けて真剣に取り組んでいる人がたくさんいます。気持ちを共有する仲間と過ごす時間は非常に貴重で、毎日のモチベーションや活力が高まること間違いなしです。"
            imageUrl="team.png"
            href="/service/camp"
            />
        </div>
      </section>
    );
  }
  