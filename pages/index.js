export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row bg-white mx-auto ">
      <div className="w-full md:w-1/2 h-full oveflow-hidden flex items-center justify-center relative">
        <video
          playsInline
          muted
          loop
          autoPlay
          className=" h-full w-full object-cover"
          src="/Simoni.MOV"
        />
        <h1 className="text-[8rem] lg:text-[14rem] leading-[1] font-black absolute inset-0 w-full h-full bg-white items-center  flex flex-col justify-center mix-blend-screen text-black">
          <span className="block"> FIDI </span>
          <span className="block">MAN</span>
          <span className="block"> DEM</span>
        </h1>
      </div>
      <div className="h-full flex flex-col text-left justify-center w-full md:w-1/2 bg-gray-900 text-white p-[2rem] font-bold">
        <div className="mx-auto flex flex-col">
          <span className="text-[2rem] uppercase">
            {" "}
            Varmt välkomna till fidimandem
          </span>
          <span className="my-[20px]">
            Utforska fidimandem nedan genom "Läs mer" eller gå till bokning.
          </span>
          <div className="flex  mt-[20px]">
            <a className="p-3 border-2 rounded-lg hover:bg-white hover:text-gray-900 ease-out duration-200 border-white mr-[20px] ">
              Boka fidimandem
            </a>
            <a className="p-3 border-2 rounded-lg hover:bg-white hover:text-gray-900 ease-out duration-200 border-white">
              Läs mer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
