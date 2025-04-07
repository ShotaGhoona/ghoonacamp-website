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
    number: 1,
    title: "公式LINEを追加",
    subtitle: "下のボタンから",
    imageUrl: "information.png",
  },
  {
    number: 1,
    title: "公式LINEを追加",
    subtitle: "下のボタンから",
    imageUrl: "information.png",
  },
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