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
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white text-black relative">
      <div className="flex  w-[70%] fixed left-0  top-48 px-36 z-40">
        <Image
          className="fixed w-24 h-16 left-52 top-36 "
          src={patternQuotes}
          alt={""}
        />
        <div className="flex  flex-col   ">
          <p className="text-2xl ">
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”{" "}
          </p>
          <p className="font-bold">
            {" "}
            Tanya Sinclair{" "}
            <span className="font-bold text-gray">UX Engineer</span>
          </p>
        </div>
      </div>
      <div className=" fixed    right-32   top-10 ">
        <Image className=" z-0 w-[450px] h-[450px] " src={patternBG} alt={""} />
        <Image
          className="fixed z-20 top-[85px]  shadow-lg w-[375px] h-[375px] right-44"
          src={AvatarTanya}
          alt={""}
        />
        {/* <div className=" bg-green-300 fixed w-[50%]  right-0 flex  p-14 ">
    
        </div> */}
      </div>
      <Image
        className="fixed z-20 bottom-0 left-0 shadow-lg w-[35%] h-20 "
        src={patternCurve}
        alt={""}
      />
    </main>
  );
}
