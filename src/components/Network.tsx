import { Globe, Building2, Users } from 'lucide-react';
import RevealOnScroll from '../hooks/useRevealOnScroll';

const networkStats = [
  { icon: Globe, value: '120+', label: 'Banking Partners' },
  { icon: Building2, value: '35', label: 'Corporate Clients' },
  { icon: Users, value: '1K', label: 'Active Users' },
];

const partners = [
  { name: 'Commercial Bank of Ethiopia', tier: 'Strategic' },
  { name: 'Dashen Bank', tier: 'Premium' },
  { name: 'Awash Bank', tier: 'Premium' },
  { name: 'Abay Bank', tier: 'Standard' },
  { name: 'Zemen Bank', tier: 'Standard' },
  { name: 'Ethiopia Telecom', tier: 'Strategic' },
  { name: 'Safaricom Ethiopia', tier: 'Premium' },
  { name: 'Addis Ababa University', tier: 'Standard' },
];

export default function Network() {
  return (
    <section id="network" className="relative py-24 lg:py-32 bg-white dark:bg-brand-navy overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-amber-50/50 dark:bg-amber-900/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-4">
              Our Network
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white leading-tight">
              Connected to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
                What Matters
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 dark:text-gray-400 leading-relaxed font-light">
              A robust ecosystem of banking partners, telecommunications providers, and institutional clients powering seamless financial flows across East Africa.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {networkStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="group p-6 rounded-2xl bg-brand-cream dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 text-center hover:border-amber-200 dark:hover:border-amber-700/50 transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Partner Logos */}
        <RevealOnScroll delay={0.3}>
          <div className="p-8 lg:p-10 rounded-2xl bg-brand-cream dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-gray-500 text-center mb-8">
              Trusted by Leading Institutions
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 hover:border-amber-200 dark:hover:border-amber-700/50 transition-all duration-300 group"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    partner.tier === 'Strategic' ? 'bg-amber-100 dark:bg-amber-900/30' :
                    partner.tier === 'Premium' ? 'bg-blue-50 dark:bg-blue-900/20' :
                    'bg-slate-50 dark:bg-gray-700/50'
                  }`}>
                    <span className={`text-xs font-bold ${
                      partner.tier === 'Strategic' ? 'text-amber-600 dark:text-amber-400' :
                      partner.tier === 'Premium' ? 'text-blue-600 dark:text-blue-400' :
                      'text-slate-500 dark:text-gray-400'
                    }`}>
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-700 dark:text-gray-300 leading-tight">{partner.name}</p>
                    <p className={`text-[10px] font-medium ${
                      partner.tier === 'Strategic' ? 'text-amber-500' :
                      partner.tier === 'Premium' ? 'text-blue-500' :
                      'text-slate-400'
                    }`}>{partner.tier}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
