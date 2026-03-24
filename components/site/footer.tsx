import Link from 'next/link';
import { Send } from 'lucide-react';

import { Logo } from '@/components/assets/logo';
import { footerLegalLinks, footerSocialLinks, siteConfig } from '@/content/site';

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M17.42 3H20.5l-6.72 7.68L21.7 21h-6.2l-4.85-6.28L5.16 21H2.08l7.18-8.2L1.7 3h6.35l4.38 5.78L17.42 3Zm-1.08 16.13h1.7L7.14 4.78H5.3l11.04 14.35Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/8 pb-10 pt-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-6 items-center">
              <Logo className="h-4 w-auto" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {footerSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel={siteConfig.externalRel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[color:var(--color-text-muted)] transition hover:border-white/16 hover:bg-white/8 hover:text-white"
                aria-label={link.label}
              >
                <span className="sr-only">{link.label}</span>
                {link.label === 'X' ? <XIcon /> : <Send className="h-4 w-4" />}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-[color:var(--color-text-muted)]">
          {footerLegalLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
