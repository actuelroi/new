import React from "react";


interface HeadProps {
  title: string;
  subtitle?: string;
  center?: boolean;

}

const Head: React.FC<HeadProps> = ({
  title,
  subtitle,
  center,

}) => {
  return (
    <div className="flex items-center justify-between">
      <div className={center ? "text-center" : "text-start"}>
        <h3 className="text-3xl font-bold leading-[1.25] text-[#2b1c50]">{title}</h3>
        <p className="font-light text-neutral-500 md:mt-1 mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Head;
