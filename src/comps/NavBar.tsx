import Button from "./Button";
import logo from "../assets/logo.png";
function NavBar() {
  return (
    <>
      <div className="flex justify-center md:justify-between w-[80%] bg-slate-100/50 px-10 py-4 my-6 items-center rounded-lg font-tajawal">
        <div className="hidden md:flex">
          <Button
            text="حمل التطبيق الآن"
            bg="bg-violet-400"
            hover="hover:bg-sky-400"
          />
        </div>

        <div className="hidden lg:flex text-lg w-[50%] justify-around ">
          <a href="#conditions">الأحكام والشروط</a>
          <a href="#services"> خدماتنا </a>
          <a href=""> الصفحة الرئيسية</a>
        </div>

        <img src={logo} alt="" className="h-15" />
      </div>
    </>
  );
}

export default NavBar;
