import moon from "../assets/destination/moon.webp";
import mars from "../assets/destination/mars.webp";
import europa from "../assets/destination/europa.webp";
import titan from "../assets/destination/titan.webp";
import DestCarousel from "./DestCarousel";
import bdDest from "../assets/destination/bdDest.jpg";
function Destination() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full relative"
      style={{ backgroundImage: `url(${bdDest})` }}
    >
      <div className="carousel w-full absolute">
        <DestCarousel
          img={moon}
          name="MOON"
          desc="Mark Richard Shuttleworth is the founder See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. "
          count="01"
          time="3 DAYS"
          distance="384,400 KM"
          href="item1"
        />
        
        <DestCarousel
          img={mars}
          name="MARS"
          desc="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
          count="02"
          time="9 MONTHS"
          distance="225 MIL. KM"
          href="item2"
        />
        <DestCarousel
          img={europa}
          name="EUROPA"
          desc="Mark Richard Shuttleworth is the founder See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. "
          count="03"
          time="3 DAYS"
          distance="628 MILe. KM"
          href="item3"
        />
        <DestCarousel
          img={titan}
          name="TITAN"
          desc="Mark Richard Shuttleworth is the founder See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. "
          count="04"
          time="3 DAYS"
          distance="384,400 KM"
          href="item4"
        />
      </div>
    </div>
  );
}

export default Destination;
