import React, { useState } from 'react';
import { MessageSquare, Send, Check, Phone, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../config';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [plan, setPlan] = useState('Developer Pro ($29/mo)');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const targetUrl = createWhatsAppUrl({
      name,
      emailOrPhone,
      plan,
      message: message || 'I want to request access for MEERA AI.'
    });

    setLastWhatsAppUrl(targetUrl);
    setIsSent(true);

    // Directly open WhatsApp in new tab/window
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="uppercase tracking-wider">Direct WhatsApp Access</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Request Access Instantly
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Fill the form below and it will send your request directly to our team on WhatsApp (<span className="text-emerald-400 font-mono font-medium">{CONFIG.whatsappDisplay}</span>).
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="agent-glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.1] shadow-2xl">
          
          {isSent ? (
            <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-white">
                  Opening WhatsApp...
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Your request has been prepared for <strong className="text-emerald-300">{CONFIG.whatsappDisplay}</strong>. Click below if WhatsApp did not open automatically.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={lastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Directly</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white text-xs transition-colors"
                >
                  Send another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#070b13] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Phone Number or Email
                  </label>
                  <input
                    type="text"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="+91 98765 43210 or name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#070b13] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                  Select Desired Plan
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#070b13] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="Developer Pro ($29/mo)">Developer Pro ($29/mo)</option>
                  <option value="Engineering Team ($199/mo)">Engineering Team ($199/mo)</option>
                  <option value="Enterprise Swarm (Custom)">Enterprise Swarm (Custom Quote)</option>
                  <option value="Custom Requirement">Custom Requirement / Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                  What would you like MEERA to build or solve?
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project, tasks to automate, or specific requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-[#070b13] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send Directly to WhatsApp ({CONFIG.whatsappDisplay})</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono text-center">
                <span>Direct WhatsApp contact:</span>
                <a
                  href={`https://wa.me/${CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  {CONFIG.whatsappDisplay}
                </a>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
