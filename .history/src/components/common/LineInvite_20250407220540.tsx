import Image from 'next/image';
import Link from 'next/link';

interface LINEInviteProps {
  href: string;
  text?: string;
}

export default function LINEInvite({ href, text = "LINE公式アカウントはこちら" }: LINEInviteProps) {
  return (
    <Link href={href} className="inline-flex items-center bg-[#d5697e] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:opacity-80 transition-opacity">
        <Image src="/SVG/line.svg" alt="LINE" width={24} height={24} />
        <span className="ml-2 text-2xl">{text}</span>
    </Link>
  );
}