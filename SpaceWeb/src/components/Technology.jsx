// import rocket from "../assets/technology/rocket.jpg";
// import bgTech from "../assets/technology/bgTech.jpg";
// import Techdata from "./techdata";
// import spaceport from "../assets/technology/spaceport.jpg";
// import LV from "../assets/technology/spacelaunch.jpg";
// import { useState } from "react";

// function Technology() {
//   const [active, setActive] = useState("item1");

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat w-full relative"
//       style={{ backgroundImage: `url(${bgTech})` }}
//     >
//       <div className="flex  h-screen items-center  ">
//         <div className="w-[1150px]  h-[450px]  flex justify-end  px-8   text-white gap-8 mt-12">
//           <div className="flex flex-col items-center justify-center gap-6">
//             <button
//               className={`w-12 h-12 rounded-full border  flex items-center justify-center text-xl ${
//                 active === "item1"
//                   ? "text-black bg-white"
//                   : "border-white text-white"
//               }`}
//               onClick={() => {
//                 setActive("item1");
//               }}
//             >
//               1
//             </button>
//             <button
//               className={`w-12 h-12 rounded-full border  flex items-center justify-center text-xl ${
//                 active === "item2"
//                   ? "text-black bg-white"
//                   : "border-white text-white"
//               }`}
//               onClick={() => {
//                 setActive("item2");
//               }}
//             >
//               2
//             </button>
//             <button
//               className={`w-12 h-12 rounded-full border  flex items-center justify-center text-xl ${
//                 active === "item3"
//                   ? "text-black bg-white"
//                   : "border-white text-white"
//               }`}
//               onClick={() => {
//                 setActive("item3");
//               }}
//             >
//               3
//             </button>
//           </div>

          

//           {active === "item1" && (
//             <Techdata
//               name="THE TERMINOLOGY..."
//               title="LAUNCH VEHICLE"
//               desc="A launch vehicle or carrier rocket is a rocket-propelled vehicle
//               used to carry a payload from Earth's surface to space, usually to
//               Earth orbit or beyond. Our WEB-X carrier rocket is the most
//               powerful in operation. Standing 150 metres tall, it's quite an
//               awe-inspiring sight on the launch pad!"
//               img={rocket}
//             />)}

//           {active === "item2" && ( 
//           <Techdata
//               name="THE TERMINOLOGY..."
//               title="SPACE CAPSULE"
//               desc="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.."
//               img={spaceport}
//             />)}
//           {active === "item3" && (
//             <Techdata
//               name="THE TERMINOLOGY..."
//               title="SPACEPORT"
//               desc="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
//               img={LV}
//             />)}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Technology;
import rocket from "../assets/technology/rocket.jpg";
import bgTech from "../assets/technology/bgTech.jpg";
import Techdata from "./techdata";
import spaceport from "../assets/technology/spaceport.jpg";
import LV from "../assets/technology/spacelaunch.jpg";
import { useState, useEffect } from "react";


function Technology() {
  const [active, setActive] = useState("item1");
  const [fadeClass, setFadeClass] = useState("opacity-100");

  const handleClick = (item) => {
    setFadeClass("opacity-0"); // fade out
    setTimeout(() => {
      setActive(item);
      setFadeClass("opacity-100"); // fade in
    }, 200); // matches transition duration
  };



  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full relative"
      style={{ backgroundImage: `url(${bgTech})` }}
    >
      <div className="flex h-screen justify-end items-center">
        <div className="w-[1150px] h-[450px] flex px-8 text-white gap-8 mt-18">
          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-6">
            {["item1", "item2", "item3"].map((item, index) => (
              <button
                key={item}
                 className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold transition-all duration-300 border
                  ${
                    active === item
                      ? "bg-white text-black shadow-lg scale-105"
                      : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                  }
                  hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white`}
                onClick={() => handleClick(item)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Animated Techdata */}
          <div
            className={`flex-1 flex transition-opacity duration-500 ease-in-out ${fadeClass}`}
          >
            {active === "item1" && (
            <Techdata
              name="THE TERMINOLOGY..."
              title="LAUNCH VEHICLE"
              desc="A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!"
              img={rocket}
            />)}

          {active === "item2" && ( 
          <Techdata
              name="THE TERMINOLOGY..."
              title="SPACE CAPSULE"
              desc="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.."
              img={spaceport}
            />)}
          {active === "item3" && (
            <Techdata
              name="THE TERMINOLOGY..."
              title="SPACEPORT"
              desc="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
              img={LV}
            />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;


