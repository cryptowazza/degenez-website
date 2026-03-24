import Link from 'next/link';
import type { ReactNode } from 'react';

import { siteConfig } from '@/content/site';

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto min-h-screen max-w-225 px-4 pb-24 pt-36 text-white sm:px-6 lg:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-text-muted">Legal</p>
      <h1 className="mt-5 text-[clamp(2.8rem,6vw,4.5rem)] font-semibold tracking-[-0.08em]">{title}</h1>
      <p className="mt-6 max-w-[62ch] text-base leading-8 text-text-subtle">{intro}</p>

      <div className="mt-10 space-y-8 rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))] p-6 text-sm leading-7 text-text-muted sm:p-8">
        {children}
      </div>

      <div className="mt-10">
        <Link
          href={`/#${siteConfig.anchors.faq}`}
          className="text-sm text-accent-cyan underline decoration-[color-mix(in_srgb,var(--color-accent-cyan)_38%,transparent)] underline-offset-4 hover:text-white"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
