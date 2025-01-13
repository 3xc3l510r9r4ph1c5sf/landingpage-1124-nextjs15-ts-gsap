interface cardInterface {
  number: number;
  paragraph: string;
  heading: string;
}
export const Card = ({ heading, paragraph, number }: cardInterface) => {
  return (
    <div className="flex gap-[0.625rem] max-w-[55rem]h">
      <div className="active-number md text-details-red">0{number}</div>
      <div className="flex flex-col gap-[0.625rem]">
        <h3 className="md text-balance">{heading}</h3>
        <p className="card-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};
