import SectionTitle from '@/components/common/SectionTitle';
import InvitationCard from '@/components/common/InvitationCard';

const activities = [
  {
    number: 1,
    title: "公式LINEを追加",
    subtitle: "下のボタンから",
    imageUrl: "information.png",
  },
  {
    title: "有益情報がたくさん",
    description: "コミュニティ内では、日常的に使える生産性アップのテクニック、効率的な勉強方法、副業で成果を出すためのノウハウなど、実践的で役立つ情報が豊富に共有されています。参加者同士が自分の経験や知識を惜しみなくシェアする文化があり、コミュニティにいるだけで自然と最新の情報をキャッチアップできます。",
    imageUrl: "information.png",
    linkUrl: "/service/academy",
  },
  {
    title: "刺激し合う仲間",
    description: "毎日の参加を通じて顔見知りになった仲間と、お互いの頑張りを称えあったり、時には励ましあったりしながら切磋琢磨できる環境です。コミュニティの中にはそれぞれの夢や目標に向けて真剣に取り組んでいる人がたくさんいます。気持ちを共有する仲間と過ごす時間は非常に貴重で、毎日のモチベーションや活力が高まること間違いなしです。",
    imageUrl: "team.png",
    linkUrl: "/service/camp",
  }
];

export default function ActivitySection() {
  return (
    <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
      <SectionTitle title="What we are doing" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {activities.map((activity, index) => (
          <InvitationCard
            key={index}
            number={index + 1}
            title={activity.title}
            subtitle={activity.description}
            imageUrl={activity.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}