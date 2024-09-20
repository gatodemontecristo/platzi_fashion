export const InfoSection03 = () => {
  return (
    <div className="flex flex-row justify-center p-20 -z-10">
      <div className="w-[45%] p-10 flex flex-col gap-10">
        <p className="text-lg font-light">
          Fashion where creativity becomes couture trends define eras, and
          individuality reigns supreme, dive into a world, where every stitch
          tells a story, every accessory make a statement, and every runway is a
          stage for self-expression, discover the power of style to transform
        </p>
        <button
          className="w-2/4 min-w-24 max-w-44 h-11 rounded-full text-white font-bold shadow-lg bg-primary ease-in-out
    hover:bg-white hover:text-black transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
        >
          Search
        </button>
      </div>
      <div className="w-[45%]">
        <img src="../gallery/secondary03.jpeg" alt="" />
      </div>
    </div>
  );
};
