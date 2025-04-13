import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#9d4e5d] text-white py-10 md:py-12 px-10 md:px-20">
      <div className="flex justify-start mb-12 gap-20 mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-4">About us</h3>
          <ul className="space-y-2">
            <li><Link href="/about-us">About us</Link></li>
            <li><Link href="/tools">Tools</Link></li>
            <li><Link href="/philosophy">Philosophy</Link></li>
            <li><Link href="/activity">Activity</Link></li>
            <li><Link href="/join-us">Join Us!</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Activity</h3>
          <ul className="space-y-2">
            <li><Link href="/activity/morning">Morning</Link></li>
            <li><Link href="/activity/info-exchange">Info Exchange</Link></li>
            <li><Link href="/activity/off-meeting">Off Meeting</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/SVG/logo.svg"
          alt="Ghoona Logo"
          width={50}
          height={50}
        />
        <span className="text-3xl font-semibold ml-5">Ghoona Camp</span>
      </div>
    </footer>
  );
}
