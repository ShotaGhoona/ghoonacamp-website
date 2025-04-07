import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';

export default function ToolsSection() {
  return (
    <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
      <SectionTitle title="How we Communicate" />
      <div className="flex flex-col md:flex-row justify-center items-center">

        <div className="flex flex-col items-center text-center">
          <div className="py-[10%] px-[10%]">
            <Image src="/SVG/tools_discord.svg" alt="Discord" width={300} height={300} />
          </div>
          <div className="mt-4 text-sm xl:text-xl font-bold">
            <p>朝6:00-8:00に集まる</p>
            <p>Discordコミュニティ</p>
          </div>
        </div>
        <p className="hidden md:block text-5xl font-bold">×</p>
        <div className="flex flex-col items-center text-center">
          <div className="py-[10%] px-[10%]">
            <Image src="/SVG/tools_slack.svg" alt="Slack" width={300} height={300} />
          </div>
          <div className="mt-4 text-sm xl:text-xl font-bold">
            <p>全国の若者と情報が集まる</p>
            <p>Slackコミュニティ</p>
          </div>
        </div>
        <p className="hidden md:block text-5xl font-bold">×</p>
        <div className="flex flex-col items-center text-center">
          <div className="py-[10%] px-[10%]">
            <Image src="/SVG/tools_ghoona.svg" alt="Slack" width={300} height={300} />
          </div>
          <div className="mt-4 text-sm xl:text-xl font-bold">
            <p>個人の頑張りが見える</p>
            <p>オリジナルダッシュボード(開発中)</p>
          </div>
        </div>

      </div>
    </section>
  );
}