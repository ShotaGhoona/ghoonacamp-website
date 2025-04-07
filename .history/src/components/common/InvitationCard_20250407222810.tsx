import Image from 'next/image';

interface InvitationCardProps {
  number: number;
  imageUrl: string;
  subtitle: string;
  title: string;
}

export default function InvitationCard({ number, imageUrl, subtitle, title }: InvitationCardProps) {
  return (
    <div className="w-full md:w-[300px] relative bg-white rounded-xl shadow-xl p-2 md:p-8 flex flex-col items-center text-center">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#d5697e] shadow-md text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div className="flex md:flex-col flex-row items-center">
        <div className="w-[30%] md:w-full h-[150px] md:h-[200px] flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="object-contain w-[100%] h-[100%]" />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>
        <div className="w-[70%] md:w-full">
          <p className="text-medium font-bold mb-1">{subtitle}</p>
          <p className="text-xl xl:text-2xl font-bold text-gray-900">{title}</p>
        </div>
      </div>
    </div>
  );
}