import { useState } from 'react';
import { Send, ChevronRight, Phone, Mail } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Agency Banking', href: '#services' },
    { label: 'Fund Transfers', href: '#services' },
  ],
  company: [
    { label: 'About CashGo', href: '#about' },
    { label: 'Leadership', href: '#services' },
    { label: 'Careers', href: '#about' },
    { label: 'Partners', href: '#network' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#security' },
    { label: 'Terms of Service', href: '#security' },
    { label: 'Cookie Policy', href: '#security' },
    { label: 'Data Protection', href: '#security' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer id="about" className="relative bg-slate-900 dark:bg-[#060c18] text-gray-400">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <span className="font-serif text-white font-bold text-sm">C</span>
              </div>
              <span className="font-serif text-xl font-semibold text-white tracking-tight">
                Cash<span className="text-amber-400">Go</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              The premier business and financial services hub in Bole, Addis Ababa. Driving capital mobility and operational excellence across East Africa since 2018.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-medium text-gray-300 uppercase tracking-wider mb-3">Business Market Updates</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 text-sm bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  {submitted ? (
                    <span className="text-xs font-medium">✓</span>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>
              {submitted && (
                <p className="mt-2 text-xs text-emerald-400">
                  Thank you! You'll receive our next update.
                </p>
              )}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 inline-flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 inline-flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 inline-flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-5">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+251116680000" className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 inline-flex items-center gap-2 group">
                  <Phone className="w-3.5 h-3.5 text-amber-500/70 group-hover:text-amber-400 transition-colors duration-200" />
                  +251 11 668 0000
                </a>
              </li>
              <li>
                <a href="mailto:contact@cashgo.et" className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 inline-flex items-center gap-2 group">
                  <Mail className="w-3.5 h-3.5 text-amber-500/70 group-hover:text-amber-400 transition-colors duration-200" />
                  contact@cashgo.et
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CashGo Financial Services. All rights reserved. Licensed & regulated by the National Bank of Ethiopia.
          </p>
          <p className="text-xs text-gray-600">
            Designed with precision. Built for trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
