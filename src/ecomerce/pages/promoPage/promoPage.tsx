import { Pagination, ShopCard } from '../../components/cards';
import { CardProps } from '../../types';
import {
  InfoSection01,
  InfoSection02,
  InfoSection03,
} from '../../components/info';
import {
  BlackWhiteCover,
  DetailProduct,
  VideoBackground,
} from '../../components';
import { Spinner } from '../../../components/general';
import { useEffect, useRef, useState } from 'react';
import { useShopCarStore, useShopFilterStore } from '../../../stores';
import { Notyf } from 'notyf';

export const PromoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const onClickCard = (card: CardProps) => {
    setCardSelected(card);
    setIsOpen(true);
  };
  const [cardSelected, setCardSelected] = useState<CardProps>();

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    shopCollection,
    isLoading,
    getListItems,
    categoryValue,
  } = useShopFilterStore();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    getListItems();
  }, [currentPage]);
  useEffect(() => {
    onScrollToItems();
  }, [categoryValue]);

  const sectionRef = useRef<HTMLDivElement>(null);

  const { addItem } = useShopCarStore();
  const notyf = new Notyf();

  const addItemFunction = (product: CardProps) => {
    addItem(product);
    notyf.success('The product has been added to your shopping cart.');
  };

  const onScrollToItems = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <VideoBackground {...{ onScrollToItems }}></VideoBackground>

      <div className="relative mt-[110vh] flex items-center justify-center flex-col box-border overflow-x-hidden mb-10">
        <InfoSection01></InfoSection01>
        <InfoSection02></InfoSection02>
        <InfoSection03></InfoSection03>
        <BlackWhiteCover></BlackWhiteCover>

        <h1
          ref={sectionRef}
          className="text-3xl font-light   text-black justify-center mb-10 mt-20"
        >
          Exclusive Products
        </h1>

        <div className="flex flex-row gap-x-4 gap-y-12 flex-wrap px-[10%] justify-center mt-10 z-10">
          {isLoading ? (
            <Spinner></Spinner>
          ) : (
            shopCollection.map((card: CardProps) => (
              <ShopCard
                key={card.id}
                card={card}
                setCardSelected={onClickCard}
                addItem={addItemFunction}
              ></ShopCard>
            ))
          )}
        </div>
        <Pagination
          {...{
            currentPage,
            totalPages,
            handleNextPage,
            handlePrevPage,
            handleCurrentPage,
          }}
        ></Pagination>
      </div>
      <DetailProduct {...{ isOpen, toggleModal, cardSelected }}></DetailProduct>
    </>
  );
};
