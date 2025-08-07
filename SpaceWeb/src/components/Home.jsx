import BgHome from '../assets/home/bgHome.jpg'

export default function Home() {
  return (
    <div
      className=" relative min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${BgHome})`}}
    >
          <div className='flex flex-col gap-4 absolute inset-0 mt-65 ml-20 '>
              
              <h2 className='text-white/80 tracking-widest font-[Bellefair]'>SO, YOU WANT TO TRAVEL TO </h2>
              <h1 className='text-8xl font-[Bellefair]'>SPACE</h1>
              <p className='text-white/80 max-w-md'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
              
      </div>
    </div>
  );
}
