import SectionTitle from '@/components/common/SectionTitle';
import MemberCard from '@/components/common/MemberCard';

export default function MemberSection() {
  const members = [
    {
      image1Url: '/member/shotayamashita1.jpg',
      image2Url: '/member/shotayamashita2.jpg',
      name: '山下翔大',
      nameEn: 'Shota Yamashita',
      description: '2020年京都大学京都大入学。インド留学中に3時間半の時差を利用して朝活を開始。朝の無限の可能性に感化され、朝活コミュニティを立ち上げる。全国に仲間を求めて奮闘中。',
      dream: 'AIの力で世界を変える。',
    }
    // 追加のメンバーデータを記載
  ];

  return (
    <section id="member" className="w-full py-10">
      <SectionTitle title="Member" subtitle="メンバー" className="w-full px-5 md:px-20"/>
      <div className="mt-8 overflow-x-auto px-5 md:px-20">
        <div className="flex gap-10 overflow-x-scroll no-scrollbar py-5">
          {members.map((member, idx) => (
            <MemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
