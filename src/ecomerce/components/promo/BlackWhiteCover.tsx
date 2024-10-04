export const BlackWhiteCover = () => {
  return (
    <div className="relative w-full z-10">
      <img
        className="w-full filter grayscale object-cover"
        src="../gallery/secondary01.jpg"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white opacity-20 leading-none font-bold text-[170px] overflow-hidden">
        <div className="grid grid-cols-3 gap-4 text-center">
          {Array.from({ length: 15 }).map((_, index) => (
            <p key={index}>PLATZI</p>
          ))}
        </div>
      </div>
    </div>
  );
};
