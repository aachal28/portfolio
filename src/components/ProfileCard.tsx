import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Email', href: '#' },
];

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-portrait">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-500 flex items-center justify-center text-6xl font-black text-white">
          JD
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <h1 className="profile-name">
          John Doe
        </h1>
        <p className="profile-role">
          Creative Developer & Designer
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              className="social-icon"
              aria-label={social.label}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <button className="cta-button primary">
          Hire Me
        </button>
        <button className="cta-button secondary">
          Download CV
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-800 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">Location</span>
          <span className="text-zinc-300">San Francisco, CA</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Experience</span>
          <span className="text-zinc-300">8+ Years</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Availability</span>
          <span className="text-yellow-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Open to offers
          </span>
        </div>
      </div>
    </div>
  );
}
