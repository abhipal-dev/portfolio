import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  Phone,
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { currentTheme } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [template, setTemplate] = useState('job');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'React Native Mobile Engineer Opportunity — Abhishek Pal',
    message: `Hi Abhishek,\n\nI reviewed your portfolio and production work in React Native, real-time GPS telemetry, and mobility ecosystems. We would love to discuss a mobile engineering opportunity with you.\n\nBest regards,\n[Your Name]`,
  });

  const templates = [
    {
      id: 'job',
      label: '💼 Full-Time Role',
      subject: 'React Native Mobile Engineer Opportunity — Abhishek Pal',
      body: `Hi Abhishek,\n\nI reviewed your portfolio and production work in React Native, real-time GPS telemetry, and mobility ecosystems. We would love to discuss a mobile engineering opportunity with you.\n\nBest regards,\n[Your Name]`,
    },
    {
      id: 'consulting',
      label: '⚡ Mobility / Fleet Consulting',
      subject: 'Consulting Inquiry — GPS & React Native Mobility Architecture',
      body: `Hi Abhishek,\n\nWe have an upcoming mobile project requiring real-time maps, GPS tracking, and multi-app architectures, and would like to discuss consulting with you.\n\nBest regards,\n[Your Name]`,
    },
    {
      id: 'sayhi',
      label: '☕ Connect & Tech Chat',
      subject: 'Connecting from your portfolio — Abhishek Pal',
      body: `Hi Abhishek,\n\nGreat work on your React Native mobility and WebView platforms! Reaching out to connect.\n\nBest regards,\n[Your Name]`,
    },
  ];

  const handleSelectTemplate = (t) => {
    setTemplate(t.id);
    setFormData((prev) => ({
      ...prev,
      subject: t.subject,
      message: t.body,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Direct Mailto URI
  const getMailtoUri = () => {
    const subject = encodeURIComponent(formData.subject || 'Mobile Engineer Inquiry');
    const body = encodeURIComponent(
      formData.message
        ? `${formData.message}\n\nSender: ${formData.name || 'Visitor'} (${formData.email || 'Email not provided'})`
        : 'Hi Abhishek, I would love to connect with you regarding mobile engineering.'
    );
    return `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  // Direct Gmail Web Composer URL
  const getGmailWebUri = () => {
    const subject = encodeURIComponent(formData.subject || 'Mobile Engineer Inquiry');
    const body = encodeURIComponent(
      formData.message
        ? `${formData.message}\n\nSender: ${formData.name || 'Visitor'} (${formData.email || 'Email not provided'})`
        : 'Hi Abhishek, I would love to connect with you regarding mobile engineering.'
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = getMailtoUri();
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${currentTheme.badge}`}>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT INBOX ACCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Start A Conversation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No contact form friction. Launch directly in Gmail, trigger your native mail app via <code className="text-sky-400 font-mono">mailto:</code>, or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Instant Launchers */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-4 sm:p-8 rounded-2xl bg-[#0c111e] border border-slate-800 shadow-xl space-y-5">
              
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Direct Communication Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Available for full-time React Native positions, remote mobile engineering, and immediate relocation.
                </p>
              </div>

              {/* Instant Gmail Web Button */}
              <a
                href={getGmailWebUri()}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full p-4 rounded-xl ${currentTheme.button} flex items-center justify-between font-bold text-sm shadow-lg transition-all active:scale-95 group`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-black/20 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold">Open in Gmail Web</div>
                    <div className="text-[11px] font-normal opacity-90">Instant composer in browser</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Direct Mailto Native Client Button */}
              <a
                href={getMailtoUri()}
                className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-slate-200 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-sky-400 border border-blue-500/20">
                    <Send className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Open Default Mail Client</div>
                    <div className="text-[10px] font-mono text-slate-400">mailto:{portfolioData.personal.email}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              {/* 1-Click Copy Email Pill */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono">Personal Email:</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate font-mono">
                    {portfolioData.personal.email}
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Phone / WhatsApp Card */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400 font-mono">Phone / WhatsApp:</div>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 truncate block transition-colors font-mono"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <a
                    href="https://wa.me/919870962636"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Social Links Bar */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>@abhipal-dev</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Pre-filled Email Composer Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-8 rounded-2xl bg-[#0c111e] border border-slate-800 shadow-xl space-y-5">
              
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  1-Click Pre-filled Email Composer
                </h3>
                <p className="text-xs text-slate-400">
                  Select a template to prefill the email, review it, and send directly via your preferred platform:
                </p>
              </div>

              {/* Template Quick Selection Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {templates.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTemplate(t)}
                    className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium transition-all ${
                      template === t.id
                        ? `${currentTheme.badge} font-bold scale-105 shadow-sm`
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 text-xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 text-xs transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Email Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Message Body
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 text-xs transition-colors resize-none leading-relaxed font-mono"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={getGmailWebUri()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold ${currentTheme.button} shadow-lg active:scale-95 transition-all text-center`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Gmail Web</span>
                  </a>

                  <a
                    href={getMailtoUri()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-slate-950 hover:bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all active:scale-95 text-center"
                  >
                    <Send className="w-4 h-4 text-sky-400" />
                    <span>Send via Mail Client (mailto:)</span>
                  </a>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
