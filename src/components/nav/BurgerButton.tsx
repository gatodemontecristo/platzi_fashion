import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { OptionsPanel } from './OptionsPanel';

export const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (newState: boolean) => {
    setIsOpen(newState);
  };

  return (
    <div className="relative block lg:hidden mt-4">
      {/* Ícono del menú burger */}
      <button
        onClick={() => toggleMenu(true)}
        className="text-black focus:outline-none z-20"
      >
        {isOpen ? (
          <XMarkIcon className="md:h-8 md:w-8 h-6 w-6 text-black" /> // Ícono de cerrar cuando está abierto
        ) : (
          <Bars3Icon className="md:h-8 md:w-8 h-6 w-6 text-black" /> // Ícono del burger cuando está cerrado
        )}
      </button>

      {/* Modal que aparece debajo del botón */}
      <OptionsPanel
        isModalOpen={isOpen}
        toggleModal={toggleMenu}
      ></OptionsPanel>
    </div>
  );
};
