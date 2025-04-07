// page.tsx
import TopviewSection from '@/feature/home/topview';
import ServiceSection from '@/feature/home/service';
import ToolsSection from '@/feature/home/tools';
import PhilosophySection from '@/feature/home/philosophy';
import ActivitySection from '@/feature/home/activity';
import InvitationSection from '@/feature/home/invitation';
import MemberSection from '@/feature/home/member';

export default function HomePage() {
  return (
    <div className="">
      <TopviewSection />
      <ServiceSection />
      <ToolsSection />
      <PhilosophySection />
      <ActivitySection />
      <InvitationSection />
      <MemberSection />
    </div>
  );
}