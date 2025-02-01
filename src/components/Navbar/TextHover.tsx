// src/components/Navbar/TextHover.tsx

'use client';

interface TtextHoverProps {
  titile1: string;
  titile2: string;
}

export default function TextHover({ titile1, titile2 }: TtextHoverProps) {
  return (
    <div className="group relative inline-block overflow-hidden cursor-pointer">
      <div className="relative">
        <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          {titile1}
        </span>
        <span className="block absolute left-0 top-0 transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
          {titile2}
        </span>
      </div>
      <div className="mt-1 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
    </div>
  );
}
