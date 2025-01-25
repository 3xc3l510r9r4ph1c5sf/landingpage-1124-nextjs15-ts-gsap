//src/components/Navbar/TextHover.tsx

'use client';

interface TextHoverProps {
  title1: string;
  title2: string;
}

const TextHover: React.FC<TextHoverProps> = ({ title1, title2 }) => {
  return (
    <div className="group overflow-hidden cursor-pointer transition-all ease-in-out duration-200 inline-block">
      <div className="relative transition-all ease-in-out duration-500">
        <div>
          {/* First line slides up on hover */}
          <h1 className="translate-y-[0%] group-hover:translate-y-[-100%] absolute left-0 transition-all ease-in-out duration-500">
            <div className="translate-y-[0%] group-hover:translate-y-[-100%] transition-all ease-in-out duration-500">
              {title1}
            </div>
          </h1>

          {/* Second line slides in from below on hover */}
          <h1 className="relative transition-all ease-in-out duration-500">
            <div className="translate-y-[100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500">
              {title2}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TextHover;
