/* eslint-disable react/prop-types */
export default function Carousel({ count, heading, name, desc, img, href }) {
  return (
    <div id={href} className="carousel-item w-full grid grid-cols-2 place-item-center ">
      {/* Left side */}
      <div className="flex flex-col gap-4 mt-20 ml-30">
        <h2 className="tracking-widest text-white/60 text-xl font-[Barlow_Condensed] uppercase">
          <span className="font-bold text-white/30 mr-2">{count}</span>
          MEET YOUR CREW
        </h2>
        <h2 className="text-white/80 tracking-widest font-[Bellefair] text-xl mt-20">
          {heading}
        </h2>
        <h1 className="text-6xl font-[Bellefair]">{name}</h1>
        <p className="text-white/80 max-w-md">{desc}</p>
      </div>

      {/* Right side */}
      <div className="mt-40 ml-10">
        <img
          src={img}
          className="w-[350px] h-[350px]"
          alt={name}
        />
      </div>
    </div>
  );
}
