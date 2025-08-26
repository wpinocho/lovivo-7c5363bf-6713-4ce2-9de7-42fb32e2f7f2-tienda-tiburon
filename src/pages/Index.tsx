import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { ProductFilters } from '../components/ProductFilters';
import { CartProvider } from '../contexts/CartContext';
import { sharkProducts } from '../data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('name');

  console.log('Index page rendered with', sharkProducts.length, 'products');

  const categories = useMemo(() => {
    return Array.from(new Set(sharkProducts.map(product => product.category)));
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = sharkProducts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    console.log('Filtered and sorted products:', sorted.length);
    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-8 mb-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🦈 Bienvenido a SharkStore
              </h1>
              <p className="text-xl mb-6">
                La tienda más increíble de tiburones del mundo. Encuentra tu compañero perfecto del océano.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Envío gratis en compras mayores a $10,000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Garantía de 30 días</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Cuidado especializado incluido</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* Products Grid */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Nuestros Tiburones
            </h2>
            <p className="text-gray-600">
              Mostrando {filteredAndSortedProducts.length} productos
              {selectedCategory && ` en la categoría "${selectedCategory}"`}
            </p>
          </div>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🦈</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-600">
                Intenta cambiar los filtros para ver más opciones.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Footer */}
          <footer className="mt-16 bg-blue-900 text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">🦈 SharkStore</h3>
                <p className="text-blue-200">
                  Tu tienda de confianza para los mejores tiburones del océano.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2 text-blue-200">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Política de Envíos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <div className="space-y-2 text-blue-200">
                  <p>📧 info@sharkstore.com</p>
                  <p>📞 +52 55 1234 5678</p>
                  <p>📍 Ciudad de México, México</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
              <p>&copy; 2024 SharkStore. Todos los derechos reservados.</p>
            </div>
          </footer>
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;