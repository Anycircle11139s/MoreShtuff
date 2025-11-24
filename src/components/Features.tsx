import { Magnet, Blocks, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Magnet,
    title: 'Super Strong Magnets',
    description: 'Industrial-grade neodymium magnets keep your cables secure and easily detachable.',
  },
  {
    icon: Blocks,
    title: 'Modular Design',
    description: 'Stack, combine, and arrange blocks however you want. Build your perfect cable management system.',
  },
  {
    icon: Zap,
    title: 'Quick Access',
    description: 'Grab the cable you need instantly. No more digging through tangled messes.',
  },
  {
    icon: Shield,
    title: 'Durable Build',
    description: 'Made from premium ABS plastic with a textured finish. Built to last like the real blocks.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 border-y-4" style={{ backgroundColor: 'var(--mc-dirt)', borderColor: 'var(--mc-dark-border)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Why BlockClip™?</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--mc-sand-light)' }}>
            Designed for gamers, creators, and anyone who wants their workspace to be as organized as their inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-4 p-6 space-y-4 hover:transform hover:-translate-y-1 transition-all"
              style={{ backgroundColor: 'var(--mc-sand-light)', borderColor: 'var(--mc-dark-border)' }}
            >
              <div className="w-12 h-12 border-2 flex items-center justify-center" style={{ backgroundColor: 'var(--mc-grass-dark)', borderColor: 'var(--mc-dark-border)' }}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 style={{ color: 'var(--mc-dark-border)' }}>{feature.title}</h3>
              <p style={{ color: 'var(--mc-oak-dark)' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}