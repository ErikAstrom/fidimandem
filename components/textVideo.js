export const TextVideo = () => {
    return (
<div className="w-full md:w-1/2 h-full oveflow-hidden flex items-center justify-center relative">
<video
  playsInline
  muted
  loop
  autoPlay
  className=" h-full w-full object-cover"
  src="https://vimeo-hp-videos.global.ssl.fastly.net/5/5-vp9.webm"
/>
<h1 className="text-[8rem] lg:text-[14rem] leading-[1] font-black absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 items-center  flex flex-col justify-center mix-blend-screen text-black">
  <span className="block"> FIDI </span>
  <span className="block">MAN</span>
  <span className="block"> DEM</span>
</h1>
</div> )
}