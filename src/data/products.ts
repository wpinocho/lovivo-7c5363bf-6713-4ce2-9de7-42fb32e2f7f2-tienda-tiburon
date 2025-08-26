import { Product } from '../types/product';

export const sharkProducts: Product[] = [
  {
    id: 1,
    name: "Tiburón Blanco Premium",
    price: 15999,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    description: "Majestuoso tiburón blanco, perfecto para acuarios grandes. Incluye certificado de autenticidad.",
    category: "Tiburones Grandes",
    inStock: true
  },
  {
    id: 2,
    name: "Tiburón Martillo Juvenil",
    price: 8999,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "Tiburón martillo joven, ideal para principiantes. Muy dócil y fácil de cuidar.",
    category: "Tiburones Medianos",
    inStock: true
  },
  {
    id: 3,
    name: "Tiburón Tigre Adulto",
    price: 12999,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
    description: "Impresionante tiburón tigre con patrones únicos. Requiere cuidados especializados.",
    category: "Tiburones Grandes",
    inStock: false
  },
  {
    id: 4,
    name: "Tiburón Bambú",
    price: 3999,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "Pequeño y adorable tiburón bambú, perfecto para acuarios domésticos.",
    category: "Tiburones Pequeños",
    inStock: true
  },
  {
    id: 5,
    name: "Tiburón Azul Oceánico",
    price: 11999,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "Elegante tiburón azul con colores vibrantes del océano profundo.",
    category: "Tiburones Medianos",
    inStock: true
  },
  {
    id: 6,
    name: "Tiburón Nodriza",
    price: 6999,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
    description: "Tiburón nodriza tranquilo y pacífico, excelente para familias.",
    category: "Tiburones Medianos",
    inStock: true
  }
];