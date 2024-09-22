import HeroImage from "@/assets/hero-image.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#cfcfcf] min-h-screen relative overflow-hidden">
      <section
        className="relative h-screen md:bg-[8em] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImage.src})`,
        }}
      >
        <div className="absolute flex flex-col top-64 md:top-4 md:py-20 px-10 z-10">
          <span className="text-5xl md:text-7xl font-bold font-sans">
            swap.
          </span>
          <span className="text-5xl md:text-7xl font-mono">style.</span>
          <span className="text-5xl md:text-7xl font-bold font-sans">
            sustain.
          </span>
        </div>
        <div className="absolute ml-10 bottom-0 md:right-0 mb-10 md:mr-10 w-80 text-center md:text-right">
          <span className="block whitespace-normal font-mono">
            Refresh your wardrobe sustainably. Join the fashion revolution and
            make every outfit count.{" "}
            <span className="font-bold">Style like never before.</span>
            <br></br>
            <span className="font-black">&copy;écolamode</span>
          </span>
        </div>
      </section>
    </div>
  );
}
