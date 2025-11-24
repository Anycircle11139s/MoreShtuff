import { ProductCard } from './ProductCard';
import { CartItem } from '../App';

const products = [
  {
    id: 'grass-block-4',
    name: 'Grass Block Pack',
    description: '4-piece magnetic cable clips',
    price: 24.99,
    colors: ['Grass Green', 'Dirt Brown'],
    image: 'https://images.unsplash.com/photo-1759663174469-f1e2a7a4bdcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBibG9ja3N8ZW58MXx8fHwxNzYzODg5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popular: true,
  },
  {
    id: 'stone-block-6',
    name: 'Stone Block Pack',
    description: '6-piece magnetic cable organizer',
    price: 34.99,
    colors: ['Stone Gray', 'Cobblestone'],
    image: 'https://images.unsplash.com/photo-1694919123854-24b74b376da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGRlc2t8ZW58MXx8fHwxNzYzOTAyNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popular: false,
  },
  {
    id: 'diamond-block-4',
    name: 'Diamond Block Pack',
    description: '4-piece premium magnetic clips',
    price: 39.99,
    colors: ['Diamond Blue', 'Aqua'],
    image: 'https://images.unsplash.com/photo-1760348213270-7cd00b8c3405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjB3b3Jrc3BhY2UlMjBjYWJsZXN8ZW58MXx8fHwxNzYzOTcxMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popular: true,
  },
  {
    id: 'redstone-block-8',
    name: 'Redstone Mega Pack',
    description: '8-piece ultimate cable solution',
    price: 49.99,
    colors: ['Redstone Red', 'Dark Red'],
    image: 'https://images.unsplash.com/photo-1723214263202-3f3766d919eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwY2FibGUlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2Mzk3MTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popular: false,
  },
  {
    id: 'obsidian-block-4',
    name: 'Obsidian Block Pack',
    description: '4-piece stealth black clips',
    price: 29.99,
    colors: ['Obsidian Black', 'Dark Purple'],
    image: 'https://images.unsplash.com/photo-1694919123854-24b74b376da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGRlc2t8ZW58MXx8fHwxNzYzOTAyNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popular: false,
  },
  {
    id: 'gold-block-6',
    name: 'Gold Block Deluxe',
    description: '6-piece premium gold edition',
    price: 44.99,
    colors: ['Gold', 'Yellow'],
    image: 'https://images.unsplash.com/photo-1760348213270-7cd00b8c3405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjB3b3Jrc3BhY2UlMjBjYWJsZXN8ZW58MXx8fHwxNzYzOTcxMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    popular: true,
  },
];

interface ProductGridProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

export function ProductGrid({ onAddToCart }: ProductGridProps) {
  return (
    <section id="products" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="mb-4" style={{ color: 'var(--mc-dark-border)' }}>Choose Your Block</h2>
        <p className="max-w-2xl mx-auto" style={{ color: 'var(--mc-oak-dark)' }}>
          Every pack includes strong magnetic blocks that keep your cables organized and easily accessible. 
          Mix and match to build your perfect setup!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}