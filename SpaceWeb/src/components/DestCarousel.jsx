// /* eslint-disable react/prop-types */
// export default function DestCarousel({
//   count,
//   distance,
//   name,
//   desc,
//   img,
//   href,
//   time,
// }) {
//   return (
//     <div
//       id={href}
//       className="carousel-item w-full grid grid-cols-2 "
//     >
//       <div className="flex flex-col justify-center item-start ">
//         <div className="mt-20 mr-14">
//           <h2 className="tracking-widest text-white/60 text-xl font-[Barlow_Condensed] uppercase mr-30  mb-25 ">
//             <span className="font-bold text-white/30 mr-2">{count}</span>
//             PICK YOUR DESTINATION
//           </h2>
//         </div>
//         <div className="flex">
//           <img
//             src={img}
//             className="w-[350px] h-[350px] object-cover ml-30"
//             alt={name}
//           />
//         </div>
//       </div>

import { useState, useRef } from "react";

//       <div className="grid grid-rows-2 gap-2">
//         <div className="flex gap-2 justify-center ">
//           <a href="#item1" className=" ">MOON</a>
//             <a href="#item2" className=" ">MOON</a>
//             <a href="#item3" className=" ">MOON</a>
//             <a href="#item4" className=" ">MOON</a>
//         </div>
//         <div className="flex flex-col ">
//           <h1 className="text-6xl font-[Bellefair]">{name}</h1>
//           <p className="text-white/80 max-w-md">{desc}</p>

//           <h2>{distance}</h2>
//           <h2>{time}</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react/prop-types */
export default function DestCarousel({
  count,
  distance,
  name,
  desc,
  img,
  href,
  time,
}) {

    const [isActive ,setisActive] = useState('item1')
    

  return (
    <div id={href} className="carousel-item w-full grid grid-cols-2 ">
      {/* Left Column */}
      <div className="flex flex-col justify-center items-start ">
        <div className="mb-8 ml-29 mt-18">
          <h2 className="tracking-widest text-white/60 text-xl font-[Barlow_Condensed] uppercase">
            <span className="font-bold text-white/30 mr-2">{count}</span>
            PICK YOUR DESTINATION
          </h2>
        </div>

        {/* Image Wrapper */}
        <div className="mt-18 ml-30">
          <img
            src={img}
            className="w-[350px] h-[350px] object-cover "
            alt={name}
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="grid grid-rows-[2fr_3fr] gap-2">
        {/* Row 1: Links */}
        <div className="flex gap-6 justify-self-end text-white/70 tracking-widest text-sm uppercase mt-auto mr-auto mb-10">
            

          <a
            href="#item1"
            className={` border-b-2  pb-2 font-serif transition-all ${
              isActive === "item1"
                ? "border-white text-white"
                : "hover:text-white hover:border-b-white"
            } `}
            onClick={() => setisActive("item1")}
          >
            Moon
          </a>
          <a
            href="#item2"
            onClick={() => setisActive("item2")}
            className={` border-b-2  pb-2 font-serif transition-all ${
              isActive === "item2"
                ? "border-white text-white"
                : "hover:text-white hover:border-b-white"
            } `}
          >
            Mars
          </a>
          <a
            href="#item3"
            onClick={() => setisActive("item3")}
            className={` border-b-2  pb-2 font-serif transition-all ${
              isActive === "item3"
                ? "border-white text-white"
                : "hover:text-white hover:border-b-white"
            } `}
          >
            Europa
          </a>
          <a
            href="#item4"
                      onClick={(e) => {
                            e.preventDefault()
                          setisActive("item4")
                           document.querySelector("#item4")?.scrollIntoView({ behavior: "smooth" })
                      }}
            className={` border-b-2  pb-2 font-serif transition-all ${
              isActive === "item4"
                ? "border-white text-white"
                : "hover:text-white hover:border-b-white"
            } `}
          >
            Titan
          </a>
        </div>

        {/* Row 2: Destination Info */}
        <div className="flex flex-col gap-2 ">
          <h1 className="text-6xl font-[Bellefair] text-white">{name}</h1>
          <p className="text-white/80 max-w-md">{desc}</p>

          <div className="flex gap-20 border-t border-white/20 mt-5 bordet">
            <div className="mt-5">
              <p className="text-sm tracking-widest text-white/50">
                AVG. DISTANCE
              </p>
              <h2 className="text-xl text-white font-[Bellefair]">
                {distance}
              </h2>
            </div>
            <div className="mt-5">
              <p className="text-sm tracking-widest text-white/50">
                EST. TRAVEL TIME
              </p>
              <h2 className="text-xl text-white font-[Bellefair]">{time}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
