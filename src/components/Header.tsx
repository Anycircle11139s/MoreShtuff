import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b-4 shadow-lg" style={{ backgroundColor: 'var(--mc-oak)', borderColor: 'var(--mc-dark-border)' }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2" style={{ backgroundColor: 'var(--mc-grass-top)', borderColor: 'var(--mc-grass-dark)', imageRendering: 'pixelated' }}>
            <div className="w-full h-full" style={{ background: 'linear-gradient(to bottom right, var(--mc-grass-top), var(--mc-grass-dark))' }} />
          </div>
          <h1 className="text-white">
            BlockClip™
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-white hover:text-[var(--mc-grass-top)] transition-colors">
            Products
          </a>
          <a href="#features" className="text-white hover:text-[var(--mc-grass-top)] transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-white hover:text-[var(--mc-grass-top)] transition-colors">
            How It Works
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={onCartClick}
            variant="secondary"
            className="relative text-white border-2"
            style={{ backgroundColor: 'var(--mc-grass-dark)', borderColor: 'var(--mc-dark-border)' }}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </Button>
          <Button variant="ghost" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}