export const HomePage = () => {
return (
<div className="h-full flex flex-col text-left justify-center w-full md:w-1/2 bg-gray-900 text-white p-[2rem] font-bold">
        <div className="mx-auto flex flex-col">
          <span className="text-[2rem] uppercase font-bangers text-twang">
            {" "}
            Varmt välkomna till fidimandem
          </span>
          <span className="my-[20px] font-archivo text-[1.2rem]">
            Utforska fidimandem. Utforska fidimandem.Utforska fidimandem. Utforska fidimandem.
          </span>
          <div className="flex font-archivo mt-[20px]">
            <a className="p-3 border-2 rounded-lg bg-twang hover:text-gray-900 ease-out duration-200 border-twang mr-[20px] ">
              Boka fidimandem
            </a>
            <a className="p-3 border-2 rounded-lg hover:bg-twang text-twang hover:text-gray-900 ease-out duration-200 border-twang">
              Läs mer
            </a>
          </div>
        </div>
      </div>)
}
