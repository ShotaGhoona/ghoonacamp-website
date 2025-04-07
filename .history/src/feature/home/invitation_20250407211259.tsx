import Link from "next/link";

type InvitationCardProps = {
    number: number;
    title: string;
    subtitle: string;
    imageUrl?: string;
  };
  
  export default function InvitationCard({ number, title, subtitle, imageUrl }: InvitationCardProps) {
    return (
      <div className="max-w-[400px] w-full p-3 xl:p-8 bg-white rounded-[20px] overflow-hidden relative shadow-md">

      </div>
    );
  }
  