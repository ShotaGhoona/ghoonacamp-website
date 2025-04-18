import Image from 'next/image';
import Link from 'next/link';

interface LINEInviteProps {
  href: string;
  text?: string;
}

export default function LINEInvite({ href = "https://lin.ee/uhMzpqE", text = "LINE公式アカウントはこちら" }: LINEInviteProps) {
  return (
    <Link href={href} className="inline-flex items-center bg-[#3f77a4] text-white font-bold py-3 px-10 rounded-full shadow-lg hover:opacity-80 transition-opacity">
        <Image src="/SVG/line.svg" alt="LINE" width={50} height={50} />
        <span className="ml-2 text-medium md:text-2xl">{text}</span>
    </Link>
  );
}