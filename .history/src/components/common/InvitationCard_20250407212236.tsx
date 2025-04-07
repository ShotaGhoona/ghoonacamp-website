import Image from 'next/image';

interface InvitationCardProps {
  number: number;
  imageUrl: string;
  subtitle: string;
  title: string;
}

export default function InvitationCard({ number, imageUrl, subtitle, title }: InvitationCardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-400 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <Image src={imageUrl} alt={title} width={80} height={80} className="mb-4" />
      <p className="text-sm text-gray-500 mb-1">{subtitle}</p>
      <p className="text-lg font-bold text-gray-900">{title}</p>
    </div>
  );
}