type ButtonProps = {
  text: string;
  bg: string;
  hover: string
};

function Button({ text, bg, hover}: ButtonProps) {
  return (
    <>
      <button className={`${bg} px-6 py-1 text-white rounded-lg font-tajawal font-medium ${hover} hover:cursor-pointer `} >
        {text}
      </button>
    </>
  );
}

export default Button;
