'use client';

import { useState } from 'react';
import Image from 'next/image';
export type SNSLink = { name: string; url: string };

export type MemberCardProps = {
  image1Url: string;
  image2Url: string;
  name: string;
  nameEn: string;
  description: string;
  dream: string;
};


export default function MemberCard({
  image1Url,
  image2Url,
  name,
  nameEn,
  dream,
  description,
}: MemberCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[200px] md:w-[300px] h-[300px] md:h-[400px] shadow-md rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={hovered ? image2Url : image1Url}
        alt={name}
        width={300}
        height={400}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent flex flex-col justify-end px-4 py-5">
        <div className="flex gap-2 items-baseline">
          <h2 className="text-[15px] md:text-xl font-bold">{name}</h2>
          <h3 className="text-[8px] md:text-sm">{nameEn}</h3>
        </div>
        <p className="text-[12px] md:text-[16px] font-bold text-gray-800 my-2 overflow-hidden">「{dream}」</p>
        <p className="text-[10px] md:text-sm text-gray-800 mb-2 line-clamp-5">{description}</p>
      </div>
    </div>
  );
}