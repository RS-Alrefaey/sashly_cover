type DownloadBtnProps = {
  icon: string;
};

function DownloadAppBtn({ icon }: DownloadBtnProps) {
  return (
    <>
      <div className="text-right flex gap-2 bg-slate-100/60 hover:shadow hover:shadow-amber-50 hover:cursor-pointer font-tajawal p-3 rounded-lg items-center justify-center">
        <span className="font-semibold text-white text-sm">حمل التطبيق الآن</span>
        <img src={icon} className="w-8 h-8" />
      </div>
    </>
  );
}

export default DownloadAppBtn;
