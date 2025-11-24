import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export function Cart({ items, isOpen, onClose, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 50 ? 0 : 4.99;
  const finalTotal = total + shipping;

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md shadow-2xl z-50 border-l-4 flex flex-col" style={{ backgroundColor: 'var(--mc-sand-light)', borderColor: 'var(--mc-dark-border)' }}>
        <div className="text-white p-6 border-b-4" style={{ backgroundColor: 'var(--mc-oak)', borderColor: 'var(--mc-dark-border)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              <h2>Your Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded transition-colors"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--mc-dirt)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12" style={{ color: 'var(--mc-oak-dark)' }}>
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Your cart is empty</p>
              <p>Add some blocks to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border-2 p-4 space-y-3"
                  style={{ backgroundColor: 'var(--mc-sand)', borderColor: 'var(--mc-dirt-dark)' }}
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 style={{ color: 'var(--mc-dark-border)' }}>{item.name}</h3>
                      <p style={{ color: 'var(--mc-oak-dark)' }}>{item.color}</p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 border-2" style={{ borderColor: 'var(--mc-dirt-dark)' }}>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-2 transition-colors"
                        style={{ backgroundColor: 'transparent' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--mc-sand-light)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center" style={{ color: 'var(--mc-dark-border)' }}>{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 transition-colors"
                        style={{ backgroundColor: 'transparent' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--mc-sand-light)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div style={{ color: 'var(--mc-dark-border)' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t-4 p-6 space-y-4" style={{ borderColor: 'var(--mc-dark-border)', backgroundColor: 'var(--mc-sand)' }}>
            <div className="space-y-2">
              <div className="flex justify-between" style={{ color: 'var(--mc-oak)' }}>
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between" style={{ color: 'var(--mc-oak)' }}>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              {total < 50 && total > 0 && (
                <p style={{ color: 'var(--mc-grass-dark)' }}>Add ${(50 - total).toFixed(2)} more for free shipping!</p>
              )}
              <div className="flex justify-between pt-2 border-t-2" style={{ color: 'var(--mc-dark-border)', borderColor: 'var(--mc-dirt-dark)' }}>
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <Button
              className="w-full text-white border-2"
              size="lg"
              style={{ backgroundColor: 'var(--mc-grass-dark)', borderColor: 'var(--mc-dark-border)' }}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}