import Image from "next/image";
import nextButton from "@/images/icon-next.svg";
import previousButton from "@/images/icon-prev.svg";
import AvatarJohn from "@/images/image-john.jpg";
import AvatarTanya from "@/images/image-tanya.jpg";
import patternBG from "@/images/pattern-bg.svg";
import patternCurve from "@/images/pattern-curve.svg";
import patternQuotes from "@/images/pattern-quotes.svg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <div className="flex w-[56%] fixed left-10 ">
        <Image
          className="fixed w-16 h-16 ml-14 "
          src={patternQuotes}
          alt={""}
        />
        <div className="flex fixed flex-col mt- p-56">
          <p>
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”{" "}
          </p>
          <p>
            {" "}
            Tanya Sinclair <span>UX Engineer</span>
          </p>
        </div>
      </div>
      <div className=" bg-green-300 fixed w-[50%]  right-20">
        <Image className="fixed z-0  " src={patternBG} alt={""} />
        <Image
          className="fixed z-20 top-44 ml-16 shadow-lg"
          src={AvatarTanya}
          alt={""}
        />
      </div>
    </main>
  );
}
