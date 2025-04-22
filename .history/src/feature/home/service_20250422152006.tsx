import SectionTitle from '@/components/common/SectionTitle';
import ServiceCard from '@/components/common/ServiceCard';
import LINEInvite from '@/components/common/LineInvite';
export default function ServiceSection() {
    return (
      <section id="about" className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
        <SectionTitle title="What is Ghoona Camp" subtitle="グーナキャンプとは" />
        <div className="text-center py-10">
          <p className="text-sm md:text-xl font-bold">2025年、全国のわかものの朝を盛り上げるために作られた</p>
          <p className="text-sm md:text-medium font-bold">若者の若者による若者のための</p>
          <p className="text-2xl md:text-4xl font-bold">オンラインコミュニティ</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <ServiceCard
            title="毎朝6:00-8:00の朝活"
            description="毎朝6時〜8時、オンラインでひらかれる朝活。自宅から気軽に参加できて、勉強・読書・副業・運動…やりたいことにどっぷり集中できます。日中や夜にはなかなか取れない“自分のための時間”を、毎朝の習慣にできるのが魅力。続けるうちに自然と生活リズムも整い、時間を上手に使える自分に出会えるはずです。"
            imageUrl="morning.png"
            href="/service/tech"
            />
            <ServiceCard
            title="有益情報がたくさん"
            description="コミュニティの中では、普段の生活にすぐ取り入れられる生産性アップのコツや、効率よく勉強を進める工夫、副業で結果を出すためのリアルなノウハウが、日々飛び交っています。みんなが自分の経験や気づきを惜しみなくシェアしてくれるから、ただ参加しているだけでも自然と最新の知識が手に入る。そんな空気感が、このコミュニティにはあります。"
            imageUrl="information.png"
            href="/service/academy"
            />
            <ServiceCard
            title="刺激し合う仲間"
            description="毎日顔を合わせるうちに自然と仲良くなった仲間たちと、励まし合ったり、ちょっとした進捗を称え合ったり。そんな温かいやり取りが日常的にあるのが、このコミュニティの魅力です。それぞれが夢や目標に本気で向き合っているからこそ、交わす言葉ひとつにも力がこもっていて、自分も「よし、今日もがんばろう」って思える。同じ気持ちを共有できる仲間がいる時間は、毎日の原動力になります。"
            imageUrl="team.png"
            href="/service/camp"
            />
        </div>
        <div className="flex justify-center mt-30">
          <LINEInvite/>
        </div>
      </section>
    );
  }
  