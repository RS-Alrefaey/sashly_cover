import Rating from "@mui/material/Rating";

type RatingProps = {
  img: string;
  name: string;
  comment: string;
  rating: number;
};

function RatingCard({ img, name, comment, rating }: RatingProps) {
  return (
    <>
      <div className="text-right flex flex-col-reverse md:flex-row gap-5 w-full bg-slate-100 rounded-lg p-3 justify-between font-tajawal items-center">
        <Rating name="text-feedback" value={rating} readOnly precision={0.5} size="small"/>
        <div className="flex flex-col items-end flex-1 font-semibold text-violet-400 ">
          <span>{name}</span>
          <span>"{comment}"</span>
        </div>
        <div className="shrink-0 w-12 h-12">
          <img
            src={img}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>{" "}
      </div>
    </>
  );
}

export default RatingCard;
