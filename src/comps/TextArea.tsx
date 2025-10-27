type TextProps = {
  title: React.ReactNode;
  text?: string;
  mainColor: string,
};

function TextArea({ title, text, mainColor }: TextProps) {
  return (
    <>
      <div className="text-right flex flex-col items-end gap-8">
        <h1 className={`text-3xl md:text-5xl font-tajawal font-extrabold  ${mainColor}`}>{title}</h1>
        {text&&<p className="font-tajawal ">{text}</p> }
      </div>
    </>
  );
}

export default TextArea;
