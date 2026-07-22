import { Shield, EyeOff, AlertTriangle, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../hooks/useRevealOnScroll';

const securityFeatures = [
  {
    icon: EyeOff,
    title: 'Absolute Privacy Safeguards',
    description: 'Your information stays private — always. We handle every detail with strict confidentiality, so your business stays your business.',
  },
  {
    icon: Shield,
    title: 'Multi-Layer Access Control',
    description: 'Only the right people get access. Multiple layers of verification protect every part of our operations, keeping your transactions safe.',
  },
  {
    icon: AlertTriangle,
    title: 'Fraud Prevention Systems',
    description: 'Smart systems watch for unusual activity around the clock. Anything suspicious is caught and stopped before it becomes a problem.',
  },
];

export default function Security() {
  return (
    <section id="security" className="relative py-24 lg:py-32 bg-slate-900 dark:bg-[#080e1a] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium tracking-wider uppercase mb-6">
              <Shield className="w-3.5 h-3.5" />
              Enterprise Security
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Uncompromising{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Security Standards
              </span>
            </h2>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed font-light">
              In the world of financial services, trust is earned through infrastructure. Our security architecture is designed to eliminate operational risks and digital fraud at every layer.
            </p>
          </div>
        </RevealOnScroll>

        {/* Security Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {securityFeatures.map((feature, index) => (
            <SecurityCard key={index} feature={feature} delay={index * 0.1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-amber-400 border border-amber-500/30 rounded-full hover:bg-amber-500/10 transition-all duration-300"
            >
              Request Security Whitepaper
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function SecurityCard({ feature, delay }: { feature: typeof securityFeatures[number]; delay: number }) {
  const Icon = feature.icon;
  return (
    <RevealOnScroll delay={delay}>
      <div className="group relative p-6 lg:p-8 rounded-2xl border border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-500">
        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-500">
          <Icon className="w-5 h-5 text-amber-400" />
        </div>
        <h3 className="font-serif text-lg font-semibold text-white mb-2.5">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </RevealOnScroll>
  );
}
