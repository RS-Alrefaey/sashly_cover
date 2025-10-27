import Button from "./comps/Button";
import TextArea from "./comps/TextArea";
import DownloadAppBtn from "./comps/DownloadAppBtn";
import HowCard from "./comps/HowCard";
import ServiceCard from "./comps/ServiceCard";
import RatingCard from "./comps/RatingCard";
import NavBar from "./comps/NavBar";
import Footer from "./comps/Footer";

import appstore from "./assets/app-store.png";
import playstore from "./assets/playstore.png";
import bg from "./assets/bg.png";
import heroimg from "./assets/herosimg.png";
import laundry1 from "./assets/laundryimg1.png";
import laundry2 from "./assets/laundryimg2.png";
import laundry3 from "./assets/laundryimg3.png";
import ctaImg from "./assets/ctaImg.png";
import serviceImg from "./assets/serviceImg.png";
import car from "./assets/sashlyCar.png";
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";

function App() {
  return (
    <>
      <div
        className="bg-cover bg-center min-w-screen flex flex-col items-center justify-center text-white pb-10 overflow-x-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <NavBar />
        <section className="w-[80%] flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
          <div className="flex flex-col gap-6 items-center lg:items-end text-center lg:text-right w-full">
            <TextArea
              title={
                <>
                  الزين يوصلك <span className="text-white">لبابك</span>
                </>
              }
              text="زهب ملابسك وخليها تلق وتبرق بكل سهولة وراحة وأنت في مكانك. نحن نقدم لك خدمة غسيل وكي الملابس بأعلى مستويات الدقة والاحترافية، لتضمن أن ملابسك تبدو بأفضل حالاتها دائمًا. باستخدام تقنيات متطورة ومواد آمنة تحافظ على جودة القماش، نهتم بكل قطعة كما لو كانت لنا."
              mainColor="text-black"
            />

            <div className="hidden lg:flex items-center gap-4 mt-4">
              <DownloadAppBtn icon={appstore} />
              <DownloadAppBtn icon={playstore} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:block">
            <img
              src={heroimg}
              alt="Hero"
              className="h-[180px] sm:h-[250px] md:h-[350px] lg:h-[550px] object-contain"
            />
            <div className="flex sm:flex-col lg:hidden gap-4 mt-4 sm:mt-0 sm:ml-4">
              <DownloadAppBtn icon={appstore} />
              <DownloadAppBtn icon={playstore} />
            </div>
          </div>
        </section>
      </div>

      <section className="flex flex-col items-center justify-center w-full bg-slate-100 gap-6 py-20 bg-linear-to-br from-violet-400/80 via-white/30 to-sky-400/50">
        <TextArea title="كيف نعمل ؟" mainColor="text-sky-400" />
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <HowCard
            title="التوصيل لبابك"
            subtitle="توصيل سريع في الوقت المحدد، لتصلك ملابسك جاهزة و أنت في مكانك"
            icon={laundry3}
          />
          <HowCard
            title="جهز ملابسك"
            subtitle="نستلم ملابسك ونجهزها لك بعناية وبالطريقة التي تحبها"
            icon={laundry2}
          />
          <HowCard
            title="طلب غسيل الملابس"
            subtitle=" حدد الوقت المناسب لاستلام وتسليم الطلب وانت في مكانك"
            icon={laundry1}
          />
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center w-full bg-sky-100 gap-6 py-15 ">
        <div className="w-[80%] flex flex-col lg:flex-row items-center justify-center">
          <img src={ctaImg} alt="" className="h-[250px] lg:h-[600px]" />
          <div className="flex flex-col gap-6">
            <TextArea
              title={
                <>
                  التنظيف<span className="text-sky-400"> الأسهل</span> بلمسة حمل
                  التطبيق الآن
                </>
              }
              text="زهب  ملابسك وخليها تلق وتبرق بكل سهولة وراحة وأنت في مكانك. نحن نقدم لك خدمة غسيل وكي الملابس بأعلى مستويات الدقة والاحترافية، لتضمن أن ملابسك تبدو بأفضل حالاتها دائمًا.
باستخدام تقنيات متطورة ومواد آمنة تحافظ على جودة القماش، نهتم بكل قطعة كما لو كانت لنا.
"
              mainColor="text-black"
            />
            <Button
              text="حمل التطبيق"
              bg="bg-violet-400"
              hover="hover:bg-sky-400"
            ></Button>
          </div>
        </div>
      </section>

      <section
        id="services"
        className=" flex flex-col lg:flex-row items-center justify-around w-full bg-violet-100 gap-6 pt-10 lg:py-15 "
      >
        <img src={serviceImg} alt="" className="h-[200px] lg:h-[400px]" />
        <div className="lg:hidden">
                  <TextArea
          title={
            <>
              خدماتنا
              <span className="text-violet-400"> المميزة</span>
            </>
          }
          mainColor="text-black"
        />
        </div>


        <div className="flex flex-col gap-8 items-end justify-center">
          <div className="hidden lg:block">
            <TextArea
              title={
                <>
                  خدماتنا
                  <span className="text-violet-400"> المميزة</span>
                </>
              }
              mainColor="text-black"
            />
          </div>

          <ServiceCard
            title="غسيل الملابس"
            text="خدمة غسيل احترافية لجميع أنواع الملابس"
          />
          <ServiceCard
            title="التنظيف الجاف "
            text="عناية خاصة للملابس الحساسة والرسمية"
          />
          <ServiceCard
            title="كيّ الملابس"
            text="ملابس مكوية بدقة لتوفير وقتك"
          />
          <ServiceCard
            title="التوصيل والاستلام"
            text="خدمة استلام وتوصيل مريحة إلى باب منزلك"
          />
          <ServiceCard
            title="عناية خاصة بالأقمشة"
            text="تنظيف احترافي للأقمشة الحساسة مثل الحرير والصوف وغيرهما"
          />
          <ServiceCard
            title="تنظيف السجاد والمفروشات"
            text="تنظيف عميق للسجاد والمفروشات المنزلية"
          />
        </div>
      </section>

      <section className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-[60vh] bg-linear-to-b from-violet-100 to-sky-100 overflow-hidden">
        <div className="relative z-10 w-[90%] md:w-1/2 text-center md:text-right flex flex-col gap-6 md:gap-8 font-tajawal">
          <TextArea
            title={
              <>
                خدمة سريعة وسهلة
                <span className="text-violet-500 font-bold"> بنقرة زر </span>
              </>
            }
            mainColor="text-black"
            text="تقدم ساشلي تجربة غسيل ملابس سلسة مع خدمة استلام وتوصيل مريحة. ببساطة حدد الوقت عبر التطبيق وسيقوم فريقنا الموثوق بالتعامل مع غسيلك، لضمان عودة ملابسك نظيفة وجاهزة. استمتع بخدمة توصيل إلى باب منزلك، مصممة لأسلوب حياتك المزدحم."
          />

          <div className="flex flex-row gap-4 justify-center md:justify-end">
            <button className="bg-white text-violet-500 border border-violet-400 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition hover:cursor-pointer">
              ابدأ الآن
            </button>
            <Button
              text="حمل التطبيق"
              bg="bg-violet-400"
              hover="hover:bg-sky-400"
            />
          </div>
        </div>

        <img
          src={car}
          alt="Sashly delivery car"
          className="hidden md:block bottom-0 md:bottom-auto right-0 md:w-1/2 w-[80%] max-w-[700px] object-contain translate-y-8 md:translate-y-0"
        />
      </section>

      <section
        id="conditions"
        className=" w-[90%] mx-auto my-20 overflow-hidden rounded-3xl bg-linear-to-l from-violet-600 via-violet-500 to-sky-500 px-6 py-16 md:px-12 md:py-20 text-white  flex flex-col gap-10 items-center justify-between"
      >
        <TextArea
          title="ساشلي"
          text="لا تشغل بالك بالغسيل بعد اليوم! حمل تطبيق  ودعنا
      نتكفل بكل شيء اختر وقت الاستلام والتوصيل بكل سهولة، وإن احتجت أي مساعدة فنحن معك على مدار الساعة"
          mainColor=""
        />
        <div className="w-full flex flex-col gap-4">
          <RatingCard
            img={user1}
            comment="طاقم عمل ودود، أسعار معقولة، وتنظيف لا يعلى عليه"
            name="فاطمة"
            rating={5}
          />
          <RatingCard img={user2} comment="خدمة ممتازة" name="عمر" rating={4} />
          <RatingCard
            img={user3}
            comment="تجربة جيدة بشكل عام"
            name="مريم"
            rating={4}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
