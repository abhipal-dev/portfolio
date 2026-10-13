import React, { useState } from 'react';
import {
  Mail,
  Send,
  Check,
  Copy,
  ArrowUpRight,
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
      label: '💼 Full-Time Opportunity',
      subject: 'React Native Mobile Engineer Opportunity — Abhishek Pal',
      body: `Hi Abhishek,\n\nI reviewed your portfolio and production work in React Native, real-time GPS telemetry, and mobility ecosystems. We would love to discuss a mobile engineering opportunity with you.\n\nBest regards,\n[Your Name]`,
    },
    {
      id: 'consulting',
      label: '⚡ Fleet / GPS Consulting',
      subject: 'Consulting Inquiry — GPS & React Native Mobility Architecture',
      body: `Hi Abhishek,\n\nWe have an upcoming mobile project requiring real-time maps, GPS tracking, and multi-app architectures, and would like to discuss consulting with you.\n\nBest regards,\n[Your Name]`,
    },
    {
      id: 'sayhi',
      label: '☕ Engineering Connect',
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

  const getMailtoUri = () => {
    const subject = encodeURIComponent(formData.subject || 'Mobile Engineer Inquiry');
    const body = encodeURIComponent(
      formData.message
        ? `${formData.message}\n\nSender: ${formData.name || 'Visitor'} (${formData.email || 'Email not provided'})`
        : 'Hi Abhishek, I would love to connect with you regarding mobile engineering.'
    );
    return `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  const getGmailWebUri = () => {
    const subject = encodeURIComponent(formData.subject || 'Mobile Engineer Inquiry');
    const body = encodeURIComponent(
      formData.message
        ? `${formData.message}\n\nSender: ${formData.name || 'Visitor'} (${formData.email || 'Email not provided'})`
        : 'Hi Abhishek, I would love to connect with you regarding mobile engineering.'
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">07 //</span>
            <span>DIRECT INBOX & DISPATCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            Let's Discuss Mobile Systems
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Zero contact form friction. Launch directly in Gmail, open your default mail client via <code className="text-zinc-200 font-mono">mailto:</code>, or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates & One-Tap Launchers */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status & Availability Block */}
            <div className="p-6 rounded border border-zinc-800/80 bg-zinc-950/60 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Availability Status
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>30 Days Notice Period (Negotiable)</span>
                </div>
                <div className="text-xs text-zinc-400 pt-0.5">
                  Open to full-time remote roles and immediate relocation.
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-zinc-900 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded border border-zinc-850 bg-zinc-900/40">
                  <span className="text-zinc-400">EMAIL:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-200">{portfolioData.personal.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 text-zinc-400 hover:text-white"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded border border-zinc-850 bg-zinc-900/40">
                  <span className="text-zinc-400">PHONE:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-200">{portfolioData.personal.phone}</span>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1 text-zinc-400 hover:text-white"
                      title="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded border border-zinc-850 bg-zinc-900/40">
                  <span className="text-zinc-400">LOCATION:</span>
                  <span className="text-zinc-200">Agra, India</span>
                </div>
              </div>

              {/* Direct Mail Launchers */}
              <div className="pt-2 space-y-2">
                <a
                  href={getGmailWebUri()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full p-3 rounded font-mono text-xs font-bold tracking-wider ${currentTheme.button} flex items-center justify-between transition-all`}
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>LAUNCH IN GMAIL WEB</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={getMailtoUri()}
                  className="w-full p-2.5 rounded border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-850 text-zinc-200 font-mono text-xs flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Send className="w-3.5 h-3.5 text-zinc-400" />
                    <span>DEFAULT MAIL CLIENT (MAILTO)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 border-t border-zinc-900 flex items-center gap-3">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2 rounded border border-zinc-850 bg-zinc-900/30 hover:bg-zinc-900 text-xs font-mono text-zinc-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2 rounded border border-zinc-855 bg-zinc-900/30 hover:bg-zinc-900 text-xs font-mono text-zinc-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-Configured Message Composer */}
          <div className="lg:col-span-7 rounded border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 space-y-5">
            <div className="space-y-1">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Pre-Filled Message Generator
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                Compose Inquiry
              </h3>
              <p className="text-xs text-zinc-400">
                Pick a discussion topic or customize below. Clicking Send opens your selected email composer with message intact.
              </p>
            </div>

            {/* Template Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {templates.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleSelectTemplate(t)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                    template === t.id
                      ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                      : 'border border-zinc-850 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = getMailtoUri(); }} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400 uppercase">Your Name (Optional)</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 rounded bg-[#06080e] border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-zinc-600 font-sans"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400 uppercase">Your Email (Optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. s.jenkins@company.com"
                    className="w-full px-3 py-2 rounded bg-[#06080e] border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-zinc-600 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400 uppercase">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-[#06080e] border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-zinc-600 font-sans"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400 uppercase">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded bg-[#06080e] border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-zinc-600 font-mono leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getGmailWebUri()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-bold tracking-wider ${currentTheme.button} transition-all`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>OPEN IN GMAIL</span>
                </a>

                <a
                  href={getMailtoUri()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-mono border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-850 text-zinc-300 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-zinc-400" />
                  <span>OPEN IN DEFAULT MAIL</span>
                </a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
