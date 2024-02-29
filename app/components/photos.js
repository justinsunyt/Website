import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useNav } from "../context/navProvider";
import Image from "next/image";
import akihabara1 from "../../images/Akihabara-1.jpg";
import arashiyama4 from "../../images/Arashiyama-4.jpg";
import citywalk3 from "../../images/Citywalk-3.jpg";
import citywalk7 from "../../images/Citywalk-7.jpg";
import citywalk8 from "../../images/Citywalk-8.jpg";
import fujiyoshida1 from "../../images/Fujiyoshida-1.jpg";
import izu1 from "../../images/Izu-1.jpg";
import izu8 from "../../images/Izu-8.jpg";
import kyoto1 from "../../images/Kyoto-1.jpg";
import shimokitazawa1 from "../../images/Shimokitazawa-1.jpg";
import tokyo7 from "../../images/Tokyo-7.jpg";
import tokyo10 from "../../images/Tokyo-10.jpg";

export default function Photos() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
  });
  const { setCurrentSection } = useNav();

  useEffect(() => {
    if (isInView) {
      setCurrentSection("photos");
    }
  }, [isInView]);

  return (
    <div
      id="photos"
      className="pt-16 md:pt-24 container mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-start text-white"
      ref={ref}
    >
      <div className="text-6xl md:text-8xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d78dea] to-[#2d84c8]">
          Photos
        </span>{" "}
        📸
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        <Image src={arashiyama4} alt="Arashiyama" layout="responsive" />
        <Image src={fujiyoshida1} alt="Fujiyoshida" layout="responsive" />
        <Image src={izu1} alt="Izu" layout="responsive" />
        <div className="h-full relative">
          <Image
            src={shimokitazawa1}
            alt="Shimokitazawa"
            fill={true}
            style={{
              objectFit: "cover",
              overflow: "hidden",
            }}
          />
        </div>
        <Image
          src={kyoto1}
          alt="Kyoto"
          layout="responsive"
          className="col-span-2"
        />
        <Image
          src={tokyo7}
          alt="Tokyo"
          layout="responsive"
          className="col-span-2"
        />
        <div className="hidden md:block h-full relative">
          <Image
            src={tokyo10}
            alt="Tokyo"
            fill={true}
            style={{
              objectFit: "cover",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="hidden md:block h-full relative">
          <Image
            src={izu8}
            alt="Izu"
            fill={true}
            style={{
              objectFit: "cover",
              overflow: "hidden",
            }}
          />
        </div>
        <Image
          src={tokyo10}
          alt="Tokyo"
          layout="responsive"
          className="block md:hidden"
        />
        <Image
          src={izu8}
          alt="Izu"
          layout="responsive"
          className="block md:hidden"
        />
        <Image
          src={akihabara1}
          alt="Akihabara"
          layout="responsive"
          className="col-span-2"
        />
        <Image src={citywalk7} alt="Shanghai" layout="responsive" />
        <Image
          src={citywalk3}
          alt="Shanghai"
          layout="responsive"
          className="hidden md:block"
        />
        <Image src={citywalk8} alt="Shanghai" layout="responsive" />
        <Image
          src={citywalk3}
          alt="Shanghai"
          layout="responsive"
          className="col-span-full block md:hidden"
        />
      </div>
    </div>
  );
}
