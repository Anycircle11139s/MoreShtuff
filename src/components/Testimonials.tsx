import { Star } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

const testimonials = [
  {
    name: 'Steve_Miner',
    avatar: 'SM',
    rating: 5,
    comment: 'These are amazing! My setup finally looks as clean as my builds in-game. 10/10 would recommend.',
  },
  {
    name: 'Alex_Crafter',
    avatar: 'AC',
    rating: 5,
    comment: 'Love the magnetic feature. Super easy to swap cables when needed. Plus they look awesome!',
  },
  {
    name: 'Diamond_Dave',
    avatar: 'DD',
    rating: 5,
    comment: 'Bought the Diamond pack and it\'s worth every penny. Strong magnets, quality build, perfect!',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 border-y-4" style={{ backgroundColor: 'var(--mc-sand)', borderColor: 'var(--mc-dark-border)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: 'var(--mc-dark-border)' }}>What Players Are Saying</h2>
          <p style={{ color: 'var(--mc-oak-dark)' }}>Join thousands of satisfied customers who've leveled up their desk game.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-4 p-6 space-y-4 shadow-lg"
              style={{ backgroundColor: 'var(--mc-sand-light)', borderColor: 'var(--mc-dark-border)' }}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p style={{ color: 'var(--mc-oak)' }}>{testimonial.comment}</p>
              <div className="flex items-center gap-3 pt-4">
                <Avatar className="border-2" style={{ borderColor: 'var(--mc-dirt-dark)' }}>
                  <AvatarFallback className="text-white" style={{ backgroundColor: 'var(--mc-grass-dark)' }}>
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div style={{ color: 'var(--mc-dark-border)' }}>
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}