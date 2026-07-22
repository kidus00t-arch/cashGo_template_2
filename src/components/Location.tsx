import { MapPin, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import RevealOnScroll from '../hooks/useRevealOnScroll';

const hours = [
  { day: 'Monday – Thursday', time: '8:30 AM – 5:30 PM', status: 'open' },
  { day: 'Friday', time: '8:30 AM – 5:30 PM', status: 'open' },
  { day: 'Saturday', time: '8:30 AM – 1:30 PM', status: 'limited' },
  { day: 'Sunday', time: 'Closed', status: 'closed' },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'open': return 'text-emerald-500';
    case 'limited': return 'text-amber-500';
    case 'closed': return 'text-slate-400 dark:text-gray-500';
    default: return 'text-slate-500';
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'open': return 'Full Hours';
    case 'limited': return 'Morning Only';
    case 'closed': return 'Closed';
    default: return '';
  }
}

export default function Location() {
  const today = new Date().getDay(); // 0 = Sunday
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  let isOpen = false;
  if (today >= 1 && today <= 5) {
    isOpen = currentTime >= 510 && currentTime <= 330; // 8:30 AM - 5:30 PM
  } else if (today === 6) {
    isOpen = currentTime >= 510 && currentTime <= 210; // 8:30 AM - 1:30 PM
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-brand-cream dark:bg-brand-navy overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/30 dark:bg-amber-900/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-4">
              Visit Our Hub
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white leading-tight">
              Find Us in the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600">
                Heart of Bole
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 dark:text-gray-400 leading-relaxed font-light">
              Our flagship branch in Bole 2, Addis Ababa — positioned for seamless access from across the city and beyond.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column — Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Status */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                <span className={`text-sm font-medium ${isOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-gray-400'}`}>
                  {isOpen ? 'Currently Open' : 'Currently Closed'}
                </span>
              </div>

              {/* Hours Table */}
              <div className="space-y-3">
                {hours.map((entry, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-700/50 last:border-0">
                    <span className="text-sm text-slate-600 dark:text-gray-300">{entry.day}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium ${getStatusColor(entry.status)}`}>
                        {getStatusLabel(entry.status)}
                      </span>
                      <span className="text-sm text-slate-800 dark:text-gray-200">{entry.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">CashGo — Bole 2 Branch</p>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mt-0.5">Bole Sub-City, Bole Road<br />Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Phone</p>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mt-0.5">+251 11 668 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50">
                <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-slate-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Email</p>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mt-0.5">contact@cashgo.et</p>
                </div>
              </div>
            </div>

            {/* Navigation Button */}
            <a
              href="https://maps.google.com/?q=Bole+2+Addis+Ababa+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-medium text-white bg-slate-900 dark:bg-amber-600 rounded-xl hover:bg-slate-800 dark:hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Navigation className="w-4 h-4" />
              Navigate to Branch
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Right Column — Map Placeholder */}
          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[400px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900">
              {/* Stylized Map UI */}
              <div className="absolute inset-0">
                {/* Grid pattern simulating streets */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-700" />
                    </pattern>
                    <pattern id="mapGridLarge" width="120" height="120" patternUnits="userSpaceOnUse">
                      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-gray-600" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  <rect width="100%" height="100%" fill="url(#mapGridLarge)" />
                  
                  {/* Simulated roads */}
                  <line x1="0" y1="55%" x2="100%" y2="55%" stroke="currentColor" strokeWidth="3" className="text-gray-300 dark:text-gray-600" />
                  <line x1="35%" y1="0" x2="35%" y2="100%" stroke="currentColor" strokeWidth="3" className="text-gray-300 dark:text-gray-600" />
                  <line x1="0" y1="35%" x2="100%" y2="35%" stroke="currentColor" strokeWidth="2" className="text-gray-200 dark:text-gray-700" />
                  <line x1="65%" y1="0" x2="65%" y2="100%" stroke="currentColor" strokeWidth="2" className="text-gray-200 dark:text-gray-700" />
                  <line x1="0" y1="75%" x2="100%" y2="75%" stroke="currentColor" strokeWidth="1.5" className="text-gray-200 dark:text-gray-700" />
                  
                  {/* Diagonal road */}
                  <line x1="20%" y1="10%" x2="80%" y2="90%" stroke="currentColor" strokeWidth="2" className="text-gray-200 dark:text-gray-700" />
                </svg>

                {/* Pin marker */}
                <div className="absolute top-[45%] left-[38%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-white dark:border-gray-800 shadow-lg shadow-amber-500/30" />
                    <div className="absolute -inset-3 rounded-full bg-amber-500/20 animate-ping" />
                  </div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-gray-700 rounded-md shadow-lg">
                      CashGo — Bole 2
                    </span>
                    <div className="w-2 h-2 bg-slate-900 dark:bg-gray-700 rotate-45 -mt-1 mx-auto" />
                  </div>
                </div>

                {/* Landmark labels */}
                <div className="absolute top-[28%] left-[15%]">
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Bole Medhane Alem</span>
                </div>
                <div className="absolute top-[65%] left-[55%]">
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Edna Mall</span>
                </div>
                <div className="absolute top-[20%] right-[15%]">
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Bole Atlas</span>
                </div>

                {/* Road labels */}
                <div className="absolute top-[53%] left-[2%]">
                  <span className="text-[9px] text-gray-300 dark:text-gray-600 tracking-widest uppercase">Bole Road</span>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-1">
                <button className="w-8 h-8 rounded-lg bg-white dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-lg bg-white dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14" />
                  </svg>
                </button>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="text-[10px] text-slate-600 dark:text-gray-300 font-medium">CashGo Branch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
