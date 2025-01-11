interface cardInterface {
  number: number;
  paragraph: string;
  heading: string;
}
export const Card = ({ heading, paragraph, number }: cardInterface) => {
  return (
    <div className="flex gap-[0.625rem] max-w-[55rem]h">
      <div className="active-number md text-details-red">
        0{number}
      </div>
      <div className="flex flex-col gap-[0.625rem]">
        <h3 className="md text-balance">{heading}</h3>
        <p className="text-[1.375rem] leading-[1.09] tracking-[-0.0275rem]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
