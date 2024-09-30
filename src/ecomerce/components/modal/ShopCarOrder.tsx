interface ShopCarOrderProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const ShopCarOrder = ({
  isModalOpen,
  toggleModal,
}: ShopCarOrderProps) => {
  return (
    <div>
      <div
        className={`fixed right-0 top-16 w-1/4 h-full p-4 shadow-lg bg-white border-gray-950 border-2   transform transition-transform duration-500 ease-in-out z-50
          ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div>
          <p className="font-light text-[20px]">MY ORDER</p>
          <p>No hay artículos en el carrito.</p>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Ir al checkout
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleModal} // Cerrar el modal al hacer clic fuera
        ></div>
      )}
    </div>
  );
};
