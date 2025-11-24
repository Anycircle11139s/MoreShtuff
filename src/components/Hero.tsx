import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block text-white px-4 py-2 border-2 shadow-md" style={{ backgroundColor: 'var(--mc-grass-dark)', borderColor: 'var(--mc-dark-border)' }}>
            <span>NEW ARRIVAL</span>
          </div>
          
          <h2 style={{ color: 'var(--mc-dark-border)' }}>
            Keep Your Cables Organized, Minecraft Style
          </h2>
          
          <p style={{ color: 'var(--mc-oak-dark)' }}>
            Transform your desk chaos into pixel-perfect organization with BlockClip™ magnetic cable management blocks. 
            Inspired by Minecraft, built for real life.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="text-white border-2 shadow-lg"
              style={{ backgroundColor: 'var(--mc-grass-dark)', borderColor: 'var(--mc-dark-border)' }}
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2"
              style={{ borderColor: 'var(--mc-oak)', color: 'var(--mc-dark-border)', backgroundColor: 'white' }}
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>

          <div className="flex gap-8 pt-4">
            <div>
              <div style={{ color: 'var(--mc-dark-border)' }}>10,000+</div>
              <div style={{ color: 'var(--mc-oak)' }}>Happy Gamers</div>
            </div>
            <div>
              <div style={{ color: 'var(--mc-dark-border)' }}>4.9/5</div>
              <div style={{ color: 'var(--mc-oak)' }}>Customer Rating</div>
            </div>
            <div>
              <div style={{ color: 'var(--mc-dark-border)' }}>100%</div>
              <div style={{ color: 'var(--mc-oak)' }}>Magnetic Power</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 transform rotate-3 border-4" style={{ backgroundColor: 'var(--mc-dirt)', borderColor: 'var(--mc-dark-border)' }} />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1723214263202-3f3766d919eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwY2FibGUlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2Mzk3MTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Organized desk setup"
            className="relative z-10 w-full h-[400px] object-cover border-4 shadow-2xl"
            style={{ borderColor: 'var(--mc-dark-border)' }}
          />
        </div>
      </div>
    </section>
  );
}