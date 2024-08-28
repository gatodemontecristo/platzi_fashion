import { useFetchMovieDetail } from "../../hooks";
import { CardProps } from "../../types";
import { ShopCard } from "../cards";

export const PromoSection = () => {
  const {
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    shopCollection,
  } = useFetchMovieDetail();

  return (
    <div className="relative mt-[100vh] flex items-center justify-center flex-col box-border">
      <div className="border-8 border-black w-3/4 box-border relative mb-[220px]">
        <img src="../gallery/banner.jpg" alt="" />
        <div className=" absolute bottom-[-200px] flex flex-col items-end w-[100%] ">
          <p className="text-[150px] font-bold">PLATZI</p>
          <p className="text-lg font-light">platzi girl studio collection</p>
          <p className="text-lg font-light">shot in lima by erick dejo</p>
        </div>
      </div>

      <div className="flex flex-row justify-center p-20">
        <div className="w-[45%]">
          <img src="../gallery/secondary02.jpeg" alt="" />
        </div>
        <div className="w-[45%] p-10">
          <h2 className="text-[80px] font-bold">A FASHION</h2>
          <h2 className="text-[80px] font-bold">STYLE</h2>
          <h2 className="text-[80px] font-bold">ELEGANCE</h2>
        </div>
      </div>
      <div className="flex flex-row justify-center p-20">
        <div className="w-[45%] p-10 flex flex-col gap-10">
          <p className="text-lg font-light">
            Fashion where creativity becomes couture trends define eras, and
            individuality reigns supreme, dive into a world, where every stitch
            tells a story, every accessory make a statement, and every runway is
            a stage for self-expression, discover the power of style to
            transform
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
      <div className="w-full">
        <img
          className="w-full filter grayscale"
          src="../gallery/secondary01.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-row gap-x-4 gap-y-12 flex-wrap px-[10%] justify-center">
        {shopCollection.map((card: CardProps) => (
          <ShopCard card={card}></ShopCard>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
