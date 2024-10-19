import { CardProps } from '../../types';
import { BookmarkIcon } from '@heroicons/react/24/outline';

interface DetailProductProps {
  toggleModal: () => void;
  isOpen: boolean;
  cardSelected: CardProps | undefined;
}

export const DetailProduct = ({
  toggleModal,
  isOpen,
  cardSelected,
}: DetailProductProps) => {
  return (
    <>
      <div
        className={`fixed top-20 border-gray-950 border-2 right-0 h-full w-1/4 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Contenido del modal */}
        <div className="flex flex-col gap-3 p-4">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="font-light text-[12px]">
                {cardSelected?.title.toLocaleUpperCase() || ''}{' '}
              </p>
              <button className="m-1">
                <BookmarkIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-light text-[12px]">
                PEN {cardSelected?.price || ''}
              </p>
              <span className="inline-block bg-gray-400 text-white text-[11px] font-light px-3 py-1 rounded-full">
                {cardSelected?.category || ''}
              </span>
            </div>
          </div>

          <img
            className="w-full"
            src={cardSelected?.image}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                '../default_image.png';
            }}
            alt=""
          />
          <p className="font-light text-[11px]">
            {cardSelected?.description || ''}{' '}
          </p>
          <a href="">
            <p className="font-light text-[12px] underline">See more</p>
          </a>
          <div className="flex flex-col">
            <p className="font-light text-[8px]">CHECK AVAILABILITY IN STORE</p>
            <p className="font-light text-[8px]">
              SHIPPING, EXCHANGES AND RETURNS
            </p>
          </div>
          {/* Botón para cerrar el modal */}
        </div>
      </div>

      {/* Fondo oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleModal} // Cerrar el modal al hacer clic fuera
        ></div>
      )}
    </>
  );
};
