'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear, faBullhorn, faCircleUser, faBuilding  } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <aside className={`w-[220px] h-screen bg-[#4E7796] text-white py-8 px-4 fixed ${styles.dropShadow}`}>
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/SVG/logo.svg" alt="logo" width={40} height={40} />
        <span className="text-[20px] font-medium">ghoona Camp</span>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className={`space-y-8 ${styles.tree}`}>
          <li>
            <div className="flex items-center gap-5 text-[25px]">
              <FontAwesomeIcon icon={faHouse} className="w-[30px]" />
              Home
            </div>
            <ul className="ml-13 relative">
              {['About us', 'Tools', 'Philosophy', 'Activity', 'Join Us!'].map((item) => (
                <li key={item} className="text-[15px] relative pt-2">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <div className="flex items-center gap-5 text-[25px]">
              <FontAwesomeIcon icon={faGear} className="w-[30px]" />
              Activity
            </div>
            <ul className="ml-13 relative">
              {['朝活の様子', '情報交換', 'オフ会'].map((item) => (
                <li key={item} className="text-[15px] relative pt-2">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <div className="flex items-center gap-5 text-[25px]">
              <FontAwesomeIcon icon={faCircleUser} className="w-[30px]" />
              <Link href="/member">Member</Link>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-5 text-[25px]">
              <FontAwesomeIcon icon={faBullhorn} className="w-[30px]" />
              <Link href="/news">News</Link>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-5 text-[25px]">
              <FontAwesomeIcon icon={faBuilding} className="w-[30px]" />
              <Link href="/company">Company</Link>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
