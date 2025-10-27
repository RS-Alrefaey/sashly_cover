type HowProps = {
  title: string,
  subtitle:string,
  icon: string
}

function HowCard({title, subtitle, icon}:HowProps) {
  return (
    <>
      <div className="p-px rounded-2xl">
        <div className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 shadow-lg p-6 flex flex-col items-center text-center">
          <div className="max-w-xs mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-violet-200/50">

<img src={icon} alt="" />
            <h3 className="font-tajawal text-lg font-bold text-gray-900">
{title}            </h3>

            <p className="font-tajwal text-sm text-gray-700 mt-2">
{subtitle}            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowCard;
