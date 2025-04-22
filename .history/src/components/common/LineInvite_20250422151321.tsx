import Image from 'next/image';
import Link from 'next/link';

interface LINEInviteProps {
  text?: string;
}

export default function LINEInvite({ text = "早速参加する！" }: LINEInviteProps) {
  return (
    <Link href="https://lin.ee/uhMzpqE" className="inline-flex items-center bg-[#3f77a4] text-white font-bold py-3 px-10 rounded-full shadow-lg hover:opacity-80 transition-opacity">
        <Image src="/SVG/line.svg" alt="LINE" width={50} height={50} />
        <span className="ml-2 text-medium md:text-2xl">{text}</span>
    </Link>
  );
}