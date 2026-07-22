import { Landmark, Briefcase, MessageSquare, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from '../hooks/useRevealOnScroll';

const services = [
  {
    icon: Landmark,
    title: 'Financial & Transactional Services',
    description: 'Secure processing infrastructure with fast liquidity handling and premium agency banking support. Every transaction executed with institutional-grade security and real-time verification.',
    features: ['Instant transfers & settlements', 'Multi-currency processing', 'Agency banking networks', 'Premium liquidity management'],
    accent: 'from-amber-500 to-amber-700',
    accentBg: 'bg-amber-50 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    dotColor: 'bg-amber-500',
  },
  {
    icon: Briefcase,
    title: 'Corporate & Business Solutions',
    description: 'State-of-the-art office infrastructure, courier and document coordination, and essential corporate logistical support designed for scaling enterprises.',
    features: ['Corporate workspace access', 'Document & courier services', 'Business registration support', 'Logistical coordination'],
    accent: 'from-slate-600 to-slate-800',
    accentBg: 'bg-slate-50 dark:bg-slate-800/50',
    iconColor: 'text-slate-700 dark:text-gray-300',
    dotColor: 'bg-slate-400',
  },
  {
    icon: MessageSquare,
    title: 'Client Relations & Advisory',
    description: 'A dedicated desk environment optimized for seamless, confidential business transactions. Personal advisory tailored to your operational landscape.',
    features: ['Private consultation rooms', 'Financial advisory services', 'Regulatory compliance support', 'Dedicated relationship managers'],
    accent: 'from-emerald-500 to-emerald-700',
    accentBg: 'bg-emerald-50 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    dotColor: 'bg-emerald-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white dark:bg-brand-navy overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-50/50 dark:bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-4">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white leading-tight">
              Services Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-amber-200 dark:to-amber-500">
                Modern Enterprise
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 dark:text-gray-400 leading-relaxed font-light">
              Three pillars of operational excellence, each engineered to serve your business with precision, confidentiality, and uncompromising quality.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <RevealOnScroll key={index} delay={index * 0.15}>
                <ServiceCard service={service} Icon={Icon} />
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, Icon }: {
  service: typeof services[number];
  Icon: React.ComponentType<{ className: string }>;
}) {
  return (
    <div className="group relative bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-8 lg:p-10 hover:border-amber-200 dark:hover:border-amber-700/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1">
      <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className={`w-12 h-12 rounded-xl ${service.accentBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
        <Icon className={`w-6 h-6 ${service.iconColor}`} />
      </div>

      <h3 className="font-serif text-xl lg:text-2xl font-semibold text-slate-900 dark:text-white mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="text-slate-500 dark:text-gray-400 leading-relaxed text-sm mb-6">
        {service.description}
      </p>

      <ul className="space-y-2.5">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-gray-300">
            <div className={`w-1 h-1 rounded-full flex-shrink-0 ${service.dotColor}`} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700/50">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-gray-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300"
        >
          Learn more
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}
