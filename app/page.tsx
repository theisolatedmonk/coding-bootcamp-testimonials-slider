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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
        <div className="flex flex-col">
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
        <div className="">
          <Image src={AvatarTanya} alt={""}></Image>
        </div>
      </div>
    </main>
  );
}
