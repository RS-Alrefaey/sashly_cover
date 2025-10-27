import logo from "../assets/logo.png";
import appstore from "../assets/app-store.png";
import playstore from "../assets/playstore.png";

function Footer() {
  return (
    <>
    
    <footer
  dir="rtl"
  className="bg-[#2A2544] text-white font-tajawal py-14 px-6 md:px-16 rounded-t-4xl"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">

    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="شعار ساشلي" className="" />
      </div>
      <p className="text-white/80 leading-relaxed text-sm">
        لا تقلق بعد اليوم بشأن الغسيل! كل ما عليك فعله هو تحميل التطبيق ودع
        ساشلي يهتم بكل شيء. لأي استفسارات أو أسئلة، فريقنا متواجد لخدمتك على
        مدار الساعة.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-4 text-violet-300">روابط ساشلي</h3>
      <ul className="space-y-2 text-white/80 text-sm">
        <li className="hover:text-white transition">الصفحة الرئيسية</li>
        <li className="hover:text-white transition">عن ساشلي</li>
        <li className="hover:text-white transition">الخدمات</li>
        <li className="hover:text-white transition">الأسئلة الشائعة</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-4 text-violet-300">معلومات التواصل</h3>
      <ul className="space-y-3 text-white/80 text-sm">
        <li className="flex items-center gap-2">
          support@sashly.co
        </li>
        <li className="flex items-center gap-2">
          +966535369626
        </li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-4 text-violet-300">حمّل التطبيق</h3>
      <div className="flex flex-col gap-3">
        <button className="bg-sky-400 text-white font-semibold rounded-full px-5 py-3 flex items-center justify-center gap-2 hover:bg-sky-300 transition">
          <img src={playstore} alt="Google Play" className="w-5" />
          Google Play
        </button>
        <button className="bg-violet-500 text-white font-semibold rounded-full px-5 py-3 flex items-center justify-center gap-2 hover:bg-violet-400 transition">
          <img src={appstore} alt="App Store" className="w-5" />
          App Store
        </button>
      </div>
    </div>
  </div>

  {/* الخط السفلي */}
  <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-sm">
    © {new Date().getFullYear()} ساشلي. جميع الحقوق محفوظة.
  </div>
</footer>

    
    
    </>
  )
}

export default Footer