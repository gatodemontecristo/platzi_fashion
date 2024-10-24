export const InfoSection02 = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center  md:px-20 px-0 py-20 z-10">
      <div className="lg:w-[45%] w-full">
        <img src="../gallery/secondary02.jpeg" alt="" />
      </div>
      <div className="w-[45%] p-10  lg:block hidden ">
        <h2 className="text-[80px] font-bold">A FASHION</h2>
        <h2 className="text-[80px] font-bold">STYLE</h2>
        <h2 className="text-[80px] font-bold">ELEGANCE</h2>
      </div>
      <div className="flex flex-row w-full lg:hidden md:gap-4 gap-2 justify-between">
        <h2 className="md:text-[30px] text-[20px] font-bold">A FASHION</h2>
        <h2 className="md:text-[30px] text-[20px] font-bold">◍</h2>
        <h2 className="md:text-[30px] text-[20px] font-bold">STYLE</h2>
        <h2 className="md:text-[30px] text-[20px] font-bold">◍</h2>
        <h2 className="md:text-[30px] text-[20px] font-bold">ELEGANCE</h2>
      </div>
    </div>
  );
};
