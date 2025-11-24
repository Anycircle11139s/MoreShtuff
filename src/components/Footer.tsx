import { Package, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t-4" style={{ backgroundColor: 'var(--mc-oak-dark)', borderColor: 'var(--mc-dark-border)', color: 'var(--mc-sand-light)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2" style={{ backgroundColor: 'var(--mc-grass-top)', borderColor: 'var(--mc-grass-dark)' }}>
                <div className="w-full h-full" style={{ background: 'linear-gradient(to bottom right, var(--mc-grass-top), var(--mc-grass-dark))' }} />
              </div>
              <h3 className="text-white">BlockClip™</h3>
            </div>
            <p style={{ color: 'var(--mc-sand)' }}>
              Cable management, crafted with pixel-perfect precision.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Shop</h4>
            <ul className="space-y-2" style={{ color: 'var(--mc-sand)' }}>
              <li><a href="#products" className="hover:text-[var(--mc-grass-top)] transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-[var(--mc-grass-top)] transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-[var(--mc-grass-top)] transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-[var(--mc-grass-top)] transition-colors">Bundle Deals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Support</h4>
            <ul className="space-y-2" style={{ color: 'var(--mc-sand)' }}>
              <li><a href="#" className="hover:text-[var(--mc-grass-top)] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[var(--mc-grass-top)] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-[var(--mc-grass-top)] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[var(--mc-grass-top)] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-3" style={{ color: 'var(--mc-sand)' }}>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@blockclip.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Live Chat 24/7</span>
              </li>
              <li className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span>Free Shipping Over $50</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: 'var(--mc-dirt-dark)', color: 'var(--mc-sand)' }}>
          <p>&copy; 2025 BlockClip™. All rights reserved. Not affiliated with Minecraft or Mojang.</p>
        </div>
      </div>
    </footer>
  );
}