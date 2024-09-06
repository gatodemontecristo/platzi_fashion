import { Pagination, ShopCard } from "../../components/cards";
import { useFetchMovieDetail } from "../../hooks";
import { CardProps } from "../../types";
import {
  InfoSection01,
  InfoSection02,
  InfoSection03,
} from "../../components/info";
import { BlackWhiteCover, VideoBackground } from "../../components";

export const PromoPage = () => {
  const {
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    handleCurrentPage,
    shopCollection,
  } = useFetchMovieDetail();

  return (
    <>
      <VideoBackground></VideoBackground>

      <div className="relative mt-[100vh] flex items-center justify-center flex-col box-border">
        <InfoSection01></InfoSection01>
        <InfoSection02></InfoSection02>
        <InfoSection03></InfoSection03>
        <BlackWhiteCover></BlackWhiteCover>

        <div className="flex flex-row gap-x-4 gap-y-12 flex-wrap px-[10%] justify-center mt-10">
          {shopCollection.map((card: CardProps) => (
            <ShopCard card={card}></ShopCard>
          ))}
        </div>
        <Pagination
          {...{ currentPage, totalPages, handleNextPage, handlePrevPage,handleCurrentPage }}
        ></Pagination>
      </div>
    </>
  );
};
