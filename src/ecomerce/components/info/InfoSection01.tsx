export const InfoSection01 = () => {
  return (
    <div className="lg:border-8 border-4  border-black md:w-3/4 w-5/6 box-border relative lg:mb-[220px] md:mb-[120px] mb-[70px] z-10">
      <img src="../gallery/banner.jpg" alt="" />
      <div className=" absolute lg:bottom-[-200px] md:bottom-[-150px] bottom-[-100px] flex flex-col items-end w-[100%] ">
        <p className="lg:text-[150px] md:text-[100px] text-[60px] font-bold">
          PLATZI
        </p>
        <p className="md:text-lg text-base font-light">
          platzi girl studio collection
        </p>
        <p className="md:text-lg text-base font-light">
          shot in lima by erick dejo
        </p>
      </div>
    </div>
  );
};
