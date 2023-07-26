import Image, { StaticImageData } from "next/image";
import nextButton from "@/images/icon-next.svg";
import previousButton from "@/images/icon-prev.svg";
import AvatarJohn from "@/images/image-john.jpg";
import AvatarTanya from "@/images/image-tanya.jpg";
import patternBG from "@/images/pattern-bg.svg";
import patternCurve from "@/images/pattern-curve.svg";
import patternQuotes from "@/images/pattern-quotes.svg";
type sliderType = {
  name: string;
  position: string;
  image: StaticImageData;
  discription: string;
};

export default function Slider(props: sliderType) {
  return (
    <div className="flex">
      <div className="flex  w-[64%] fixed left-0  top-48 px-36 z-40">
        <Image
          className="fixed w-24 h-16 left-52 top-36 "
          src={patternQuotes}
          alt={""}
        />
        <div className="flex  flex-col   ">
          <p className="text-2xl ">{props.discription}</p>
          <p className="font-bold">
            {props.name}
            {/* {" "} */}
            <span className="font-bold text-gray-400">
              {props.position}
              {/* UX Engineer */}
            </span>
          </p>
        </div>
      </div>
      <div className=" fixed    right-52   top-10 ">
        <Image className=" z-0 w-[480px] h-[460px] " src={patternBG} alt={""} />
        <Image
          className="fixed z-20 top-[85px]  shadow-lg w-[380px] h-[380px] right-64 rounded-md"
          src={props.image}
          alt={""}
        />
        <div className="flex bg-white w-20 h-10 justify-between p-2 rounded-3xl bg fixed top-[440px] right-[510px] z-50 shadow-lg">
          <button>
            <Image src={previousButton} alt={""} />{" "}
          </button>
          <button>
            <Image src={nextButton} alt={""} />{" "}
          </button>
        </div>
      </div>
      <Image
        className="fixed z-20 bottom-0 left-0 shadow-lg w-[35%] h-20 "
        src={patternCurve}
        alt={""}
      />
    </div>
  );
}
