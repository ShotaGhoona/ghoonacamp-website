'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <aside className={`w-[220px] h-screen bg-[#D87286] text-white py-8 px-4 fixed flex flex-col justify-between ${styles.dropShadow}`}>
      {/* 上部エリア */}
      <div>
        {/* ロゴ部分 */}
        <div className="mb-10 flex items-center gap-3">
          <Image src="/SVG/logo.svg" alt="logo" width={40} height={40} />
          <span className="text-[20px] font-medium">Ghoona Camp</span>
        </div>

        {/* ナビゲーション部分 */}
        <nav>
          <ul className={`space-y-8 ${styles.tree}`}>
            <li>
              <div className="flex items-center gap-5 text-[20px]">
                <FontAwesomeIcon icon={faHouse} className="w-[25px]" />
                Home
              </div>
              <ul className="ml-[30px] relative">
                {['About us', 'Tools', 'Philosophy', 'Activity', 'Join us'].map((item) => (
                  <li key={item} className="text-[14px] relative pt-2">
                    <Link href={`/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <div className="flex items-center gap-5 text-[20px]">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="w-[25px]" />
                Activity
              </div>
              <ul className="ml-[30px] relative">
                {['朝活の様子', 'モクモク会', 'エンジニア界'].map((item) => (
                  <li key={item} className="text-[14px] relative pt-2">
                    <Link href={`/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* 下部エリア（LINE公式リンク） */}
      <div className="mb-4">
        <Link href="#" className="flex items-center justify-center bg-white text-black py-2 rounded-lg shadow">
          <Image src="/SVG/line.svg" alt="LINE公式" width={30} height={30} />
          <span className="ml-2 font-semibold">公式LINE</span>
        </Link>
      </div>
    </aside>
  );
}