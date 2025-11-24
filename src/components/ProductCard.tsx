import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { CartItem } from '../App';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  colors: string[];
  image: string;
  popular: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({
      id: `${product.id}-${selectedColor}`,
      name: product.name,
      price: product.price,
      color: selectedColor,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="border-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden" style={{ backgroundColor: 'var(--mc-sand-light)', borderColor: 'var(--mc-dark-border)' }}>
      <div className="relative">
        {product.popular && (
          <Badge className="absolute top-4 right-4 z-10 bg-yellow-500 text-yellow-950 border-2 border-yellow-700">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Popular
          </Badge>
        )}
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="mb-2" style={{ color: 'var(--mc-dark-border)' }}>{product.name}</h3>
          <p style={{ color: 'var(--mc-oak-dark)' }}>{product.description}</p>
        </div>

        <div className="space-y-2">
          <p style={{ color: 'var(--mc-oak)' }}>Color:</p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 border-2 transition-all ${
                  selectedColor === color
                    ? 'bg-white'
                    : 'bg-white hover:opacity-80'
                }`}
                style={{ 
                  borderColor: selectedColor === color ? 'var(--mc-dark-border)' : 'var(--mc-dirt)',
                  color: 'var(--mc-dark-border)'
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div style={{ color: 'var(--mc-dark-border)' }}>${product.price}</div>
          <Button
            onClick={handleAddToCart}
            className={`border-2 text-white ${
              isAdded ? '' : ''
            }`}
            style={{ 
              backgroundColor: isAdded ? 'var(--mc-grass-top)' : 'var(--mc-grass-dark)',
              borderColor: 'var(--mc-dark-border)'
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isAdded ? 'Added!' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
}