import bgCrew from "../assets/crew/bgCrew.jpg";
import C1 from "../assets/crew/C1.webp";
import Carousel from "./Carousel";
import C2 from '../assets/crew/C2.webp'
import C3 from '../assets/crew/C3.webp'
import C4 from '../assets/crew/C4.webp'

function Crew() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${bgCrew})` }}
      >
        <div className="carousel w-full ">
           <Carousel 
              count="01" 
              heading="FLIGHT ENGINEER" 
              name="Anousheh Ansari" 
              desc="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. " 
              img={C1} 
              href="item1" 
            />
            <Carousel 
              count="02" 
              heading="COMMANDER" 
              name="Douglas Hurley" 
              desc="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2." 
              img={C2} 
              href="item2" 
              />
              <Carousel 
                count="03" 
                heading="PILOT" 
                name="Victor Glover" 
                desc="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. " 
                img={C3} 
                href="item3" 
              />
              <Carousel 
                count="04" 
                heading="MISSION SPECIALIST" 
                name="Mark Shuttleworth" 
                desc="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist." 
                img={C4} 
                href="item4" 
              />
          

          
        </div>
       <div className="flex justify-center gap-2 mt-6">
        <a href="#item1" className="h-2 w-2 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></a>
        <a href="#item2" className="h-2 w-2 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></a>
        <a href="#item3" className="h-2 w-2 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></a>
        <a href="#item4" className="h-2 w-2 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></a>
      </div>

      </div>
    </>
  );
}

export default Crew;
