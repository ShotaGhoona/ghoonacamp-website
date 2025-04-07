import SectionTitle from '@/components/common/SectionTitle';
import InvitationCard from '@/components/common/InvitationCard';

const activities = [
  {
    number: 1,
    title: "公式LINEを追加",
    subtitle: "下のボタンから",
    imageUrl: "SVG/inivite_line.svg",
  },
  {
    number: 2,
    title: "Formに回答",
    subtitle: "LINE内で送られる",
    imageUrl: "SVG/inivite_form.svg",
  },
  {
    number: 3,
    title: "コミュニティ参加",
    subtitle: "次の日から早速",
    imageUrl: "SVG/inivite_comunity.svg",
  },
];

export default function ActivitySection() {
  return (
    <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
      <SectionTitle title="What we are doing" />
      <div className="text-center pt-10 pb-25">
          <p className="text-3xl font-bold">刺激し合える仲間を募集中！</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {activities.map((activity, index) => (
          <InvitationCard
            key={index}
            number={index + 1}
            title={activity.title}
            subtitle={activity.subtitle}
            imageUrl={activity.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}