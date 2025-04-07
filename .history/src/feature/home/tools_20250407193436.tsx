import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';

export default function ToolsSection() {
    return (
      <section className="relative w-full bg-no-repeat bg-cover px-5 md:px-20 py-20">
        <SectionTitle title="How we Connect?" />
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="w-full md:w-1/2">
                <Image src="/SVG/line.svg" alt="LINE" width={100} height={100} />
            </div>
        </div>
      </section>
    );
  }
  