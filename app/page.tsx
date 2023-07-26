import Image from "next/image";
import nextButton from "@/images/icon-next.svg";
import previousButton from "@/images/icon-prev.svg";
import AvatarJohn from "@/images/image-john.jpg";
import AvatarTanya from "@/images/image-tanya.jpg";
import patternBG from "@/images/pattern-bg.svg";
import patternCurve from "@/images/pattern-curve.svg";
import patternQuotes from "@/images/pattern-quotes.svg";
import Slider from "@/components/slider";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white text-black relative">
      <Slider
        name={"Tanya Sinclair"}
        position={"UX Engineer"}
        image={AvatarTanya}
        discription={`“ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”`}
      />
      {/* <Slider
        name={"John Tarkpor"}
        position={"Junior Front-end Developer"}
        image={AvatarJohn}
        discription={`“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`}
      /> */}
    </main>
  );
}
