import Image from 'next/image';

interface InvitationCardProps {
  number: number;
  imageUrl: string;
  subtitle: string;
  title: string;
}

export default function InvitationCard({ number, imageUrl, subtitle, title }: InvitationCardProps) {
  return (
    <div className="w-full md:w-[300px] relative bg-white rounded-xl shadow-xl mb-10 md:mb-0 p-2 md:p-8 flex flex-col items-center text-center">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 md:-top-8 md:left-1/2 transform md:-translate-x-1/2 bg-[#d5697e] shadow-md text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div className="flex md:flex-col flex-row items-center justify-center w-full ml-8">
        <div className="w-[30%] md:w-full h-[150px] md:h-[200px] flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={`/${imageUrl}`}
              alt={title}
              width={200}
              height={200}
              className="object-contain w-[50%] h-[50%]"
            />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>
        <div className="flex-1 md:w-full">
          <p className="text-medium font-bold mb-1">{subtitle}</p>
          <p className="text-xl xl:text-2xl font-bold text-gray-900">{title}</p>
        </div>
      </div>
    </div>
  );
}