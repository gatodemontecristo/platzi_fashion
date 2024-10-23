export const InfoSection03 = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center lg:p-20 p-20 pt-0 z-10">
      <div className="lg:w-[45%] w-full p-10 flex lg:flex-col flex-row gap-10">
        <p className="text-lg font-light">
          Fashion where creativity becomes couture trends define eras, and
          individuality reigns supreme, dive into a world, where every stitch
          tells a story, every accessory make a statement, and every runway is a
          stage for self-expression, discover the power of style to transform
        </p>
        <button
          className="w-2/4 min-w-24 h-11 rounded-full text-white font-bold shadow-lg bg-primary ease-in-out
    hover:bg-white hover:text-black transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
        >
          Search
        </button>
      </div>
      <div className="lg:w-[45%] w-full">
        <img src="../gallery/secondary03.jpeg" alt="" />
      </div>
    </div>
  );
};
