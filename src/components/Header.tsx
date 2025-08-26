import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { CartModal } from './CartModal';

export const Header: React.FC = () => {
  const { getItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = getItemCount();

  console.log('Header rendered, cart items:', itemCount);

  return (
    <>
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🦈</div>
              <h1 className="text-2xl font-bold">SharkStore</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">Inicio</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Productos</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Sobre Nosotros</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Contacto</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-blue-800 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-blue-800">
              <div className="flex flex-col space-y-2 pt-4">
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Inicio</a>
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Productos</a>
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Sobre Nosotros</a>
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Contacto</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};