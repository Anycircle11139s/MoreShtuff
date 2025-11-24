export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Peel & Stick',
      description: 'Remove the adhesive backing and stick BlockClip™ to any clean surface.',
    },
    {
      number: 2,
      title: 'Clip Your Cables',
      description: 'Snap your cables into the magnetic groove. They stay put until you need them.',
    },
    {
      number: 3,
      title: 'Stay Organized',
      description: 'Enjoy a clutter-free desk that looks as good as it functions.',
    },
  ];

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="mb-4" style={{ color: 'var(--mc-dark-border)' }}>How It Works</h2>
        <p className="max-w-2xl mx-auto" style={{ color: 'var(--mc-oak-dark)' }}>
          Get organized in three simple steps. No tools required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 border-4 flex items-center justify-center shadow-lg" style={{ backgroundColor: 'var(--mc-grass-dark)', borderColor: 'var(--mc-dark-border)' }}>
                <span className="text-white">
                  {step.number}
                </span>
              </div>
              <h3 style={{ color: 'var(--mc-dark-border)' }}>{step.title}</h3>
              <p style={{ color: 'var(--mc-oak-dark)' }}>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-1 border-t-2" style={{ backgroundColor: 'var(--mc-sand)', borderColor: 'var(--mc-dirt)' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}