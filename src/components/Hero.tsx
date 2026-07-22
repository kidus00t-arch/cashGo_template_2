import { ArrowRight, Shield, Clock, TrendingUp, Building2, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-cream dark:bg-brand-navy pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-200/20 dark:bg-amber-500/5 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-slate-200/30 dark:bg-slate-700/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-amber-100/40 dark:bg-amber-900/5 blur-2xl" />
      </div>

      {/* Grid lines decorative */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in-up opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300/50 dark:border-amber-600/30 bg-amber-50/80 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-medium tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Bole, Addis Ababa
              </span>
            </div>

            {/* Heading */}
            <h1 className="animate-fade-in-up opacity-0 delay-100 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Seamless Capital.{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
                Rooted in Trust.
              </span>
            </h1>

            {/* Subheading */}
            <p className="animate-fade-in-up opacity-0 delay-200 text-lg lg:text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-xl font-light">
              The premier business and financial center in the heart of Bole, optimizing capital mobility, transactional security, and operational excellence for East Africa's most ambitious enterprises.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up opacity-0 delay-300 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-slate-900 dark:bg-amber-600 rounded-full hover:bg-slate-800 dark:hover:bg-amber-700 transition-all duration-300 shadow-lg shadow-slate-900/20 dark:shadow-amber-600/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
              >
                <Clock className="w-4 h-4" />
                View Opening Hours
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up opacity-0 delay-400 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="font-serif text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white">7+</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400 mt-1">Years of Service</div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white">1K+</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400 mt-1">Active Customers</div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white">90%</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400 mt-1">Uptime Record</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual — Dashboard Mock */}
          <div className="animate-scale-in opacity-0 delay-300 relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 p-8 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 dark:text-gray-500 uppercase tracking-wider font-medium">Dashboard Overview</p>
                    <p className="font-serif text-xl font-semibold text-slate-900 dark:text-white mt-1">Transaction Flow</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Live</span>
                  </div>
                </div>

                {/* Chart Bars */}
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 50, 80, 60, 90, 75, 85, 70, 95, 80, 90].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-amber-500 to-amber-300 dark:from-amber-600 dark:to-amber-400 opacity-80 hover:opacity-100 transition-opacity duration-200"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                    <Shield className="w-4 h-4 text-emerald-500 mb-1.5" />
                    <p className="text-xs text-slate-500 dark:text-gray-400">Secure</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">256-bit</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                    <TrendingUp className="w-4 h-4 text-amber-500 mb-1.5" />
                    <p className="text-xs text-slate-500 dark:text-gray-400">Volume</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">+23.4%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                    <Building2 className="w-4 h-4 text-blue-500 mb-1.5" />
                    <p className="text-xs text-slate-500 dark:text-gray-400">Partners</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">120+</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -top-4 -left-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-900 dark:text-white">Verified</p>
                    <p className="text-[10px] text-slate-400">Compliance A+</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                    <Headphones className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-900 dark:text-white">24/7 Support</p>
                    <p className="text-[10px] text-slate-400">Premium clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-gray-500">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-slate-300 dark:to-gray-600" />
      </div>
    </section>
  );
}
