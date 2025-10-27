import check from "../assets/accept.png";

type CardProps = {
  title: string;
  text: string;
};

function ServiceCard({ text, title }: CardProps) {
  return (
    <>
      <div className="flex gap-3  font-tajawal text-right px-3">
        <div className="flex flex-col gap-3 justify-end items-end ">
          <h2 className="font-bold">{title}</h2>
          <p className="font-medium text-gray-400">{text}</p>
        </div>
          <img src={check} className="h-4 w-4 mt-1" />
      </div>
    </>
  );
}

export default ServiceCard;
