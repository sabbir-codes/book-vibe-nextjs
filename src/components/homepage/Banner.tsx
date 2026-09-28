import Image from "next/image";
import banner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="mx-auto container px-5 pt-7">
      <div className="flex min-h-109.5 items-center justify-between rounded-2xl bg-[#f3f3f3] px-24">
        
        {/* Left Content */}
        <div className="max-w-130">
          <h1 className="font-serif text-[48px] font-bold leading-[1.35] text-[#111]">
            Books to freshen up
            <br />
            your bookshelf
          </h1>

          <button className="mt-8 rounded-md bg-[#12c20b] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#0eaa08]">
            View The List
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-82.5 w-75">
          <Image
            src={banner}
            alt="Featured book"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;