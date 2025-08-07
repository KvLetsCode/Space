import React from "react";

export default function Techdata({ title, name, desc, img }) {
  return (
    <>
      <div className="flex flex-col justify-center pl-8 gap-4 mr-8 ">
        <h4 className="text-lg tracking-widest text-gray-400 font-serif">
          {name}
        </h4>
        <h1 className="text-5xl tracking-wide mt-2 mb-4 font-[Bellefair]">
          {title}
        </h1>
        <p className="text-gray-300 max-w-md leading-relaxed font-serif">
          {desc}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <img src={img} alt="rocket" className="max-h-[90%] " />
      </div>
    </>
  );
}
