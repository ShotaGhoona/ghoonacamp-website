'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <aside className={`w-[220px] h-screen bg-[#d5697e] text-white py-8 px-4 fixed flex flex-col justify-between ${styles.dropShadow}`}>
      <div>
        <div className="mb-10 flex items-center gap-3">
          <Image src="/SVG/logo.svg" alt="logo" width={40} height={40} />
          <span className="text-[20px] font-medium">ghoona Camp</span>
        </div>

        <nav>
          <ul className={`space-y-8 ${styles.tree}`}>
            <li>
              <Link href="/" className="flex items-center gap-5 text-[25px]">
                <FontAwesomeIcon icon={faHouse} className="w-[30px]" />
                Home
              </Link>
              <ul className="ml-13 relative">
                <li className="text-[15px] relative pt-2">
                  <Link href="/#about">About us</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/#tools">Tools</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/#philosophy">Philosophy</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/#activity">Activity</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/#joinus">Join Us!</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/#member">Member</Link>
                </li>
              </ul>
            </li>

            <li>
              <div className="flex items-center gap-5 text-[25px]">
                <FontAwesomeIcon icon={faGear} className="w-[30px]" />
                Activity
              </div>
              <ul className="ml-13 relative">
                <li className="text-[15px] relative pt-2">
                  <Link href="/activity/morning">朝活の様子</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/activity/information">情報交換</Link>
                </li>
                <li className="text-[15px] relative pt-2">
                  <Link href="/activity/offmeeting">オフ会</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mb-4">
        <Link href="https://lin.ee/uhMzpqE" className="flex items-center justify-center bg-white text-black py-2 rounded-lg shadow">
          <Image src="/SVG/line.svg" alt="LINE公式" width={30} height={30} />
          <span className="ml-2 font-semibold">LINE公式アカウント</span>
        </Link>
      </div>
    </aside>
  );
}