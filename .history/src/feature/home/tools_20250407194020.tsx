import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';

export default function ToolsSection() {
  return (
    <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
      <SectionTitle title="How we Communicate" />
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">

        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-xl shadow-xl py-10 px-16">
            <Image src="/SVG/discord.svg" alt="Discord" width={300} height={300} />
          </div>
          <div className="mt-4 text-xl font-bold">
            <p>朝6:00-8:00に集まる</p>
            <p>Discordコミュニティ</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-xl shadow-xl py-10 px-16">
            <Image src="/SVG/slack.svg" alt="Slack" width={300} height={300} />
          </div>
          <div className="mt-4 text-xl font-bold">
            <p>全国の若者と情報が集まる</p>
            <p>Slackコミュニティ</p>
          </div>
        </div>

      </div>
    </section>
  );
}