// components/common/SectionTitle.tsx
type SectionTitleProps = {
    title: string;
    subtitle?: string;
    className?: string;
  };
  
  export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
    return (
      <h2 className={`text-[25px] md:text-[35px] font-bold flex items-center gap-6 mb-10 ${className}`}>
        <div className="w-2 h-[75px] bg-[#d5697e] inline-block" />
        <div className="flex flex-col">
          <h1 className="text-[25px] md:text-[35px] font-bold">{title}</h1>
          <h2 className="text-[15px]">{subtitle}</h2>
        </div>
      </h2>
    );
  }
  