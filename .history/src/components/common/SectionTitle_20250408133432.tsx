// components/common/SectionTitle.tsx
type SectionTitleProps = {
    title: string;
    subtitle?: string;
    className?: string;
  };
  
  export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
    return (
      <h2 className={`text-[25px] md:text-[35px] font-bold flex items-center gap-6 mb-10 ${className}`}>
        <span className="w-2 h-[50px] bg-[#d5697e] inline-block" />
        {title}
        {subtitle && <span className="text-[15px]">{subtitle}</span>}
      </h2>
    );
  }
  