'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Logo } from '@/components/assets/logo';
import { navItems, siteConfig } from '@/content/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const visibleActiveSection = pathname === '/' ? activeSection : '';

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const syncUrl = (sectionId: string) => {
      const nextUrl = sectionId
        ? `${window.location.pathname}${window.location.search}#${sectionId}`
        : `${window.location.pathname}${window.location.search}`;
      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

      if (currentUrl !== nextUrl) {
        window.history.replaceState(window.history.state, '', nextUrl);
      }
    };

    const updateActiveSection = () => {
      const marker = 160;
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });
      const nextSection = current?.id ?? '';

      setActiveSection((prevSection) => {
        if (prevSection !== nextSection) {
          syncUrl(nextSection);
          return nextSection;
        }

        if (window.location.hash !== (nextSection ? `#${nextSection}` : '')) {
          syncUrl(nextSection);
        }

        return prevSection;
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [pathname, sectionIds]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full border border-white/10 bg-[color:color-mix(in_srgb,var(--color-surface-header)_70%,transparent)] px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_80px_rgba(2,7,13,0.55)] backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-white transition hover:text-[color:var(--color-accent-cyan)]">
          <span className="flex h-9 items-center">
            <Logo className="h-5 w-auto" />
          </span>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-white/6 bg-black/10 p-1 text-sm text-[color:var(--color-text-muted)]">
          {navItems.map((item) => {
            const active = visibleActiveSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'relative rounded-full px-3 py-2 transition sm:px-4',
                  active
                    ? 'text-white'
                    : 'text-[color:var(--color-text-muted)] hover:text-white'
                )}
              >
                {active ? (
                  <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(98,235,222,0.18),rgba(241,107,183,0.14))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
                ) : null}
                <span
                  className={cn(
                    'absolute inset-px rounded-full border',
                    active
                      ? 'border-[color:color-mix(in_srgb,var(--color-accent-cyan)_65%,var(--color-accent-magenta)_35%)]'
                      : 'border-transparent'
                  )}
                />
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}

          <a
            href={siteConfig.ctas.startTrading}
            target="_blank"
            rel={siteConfig.externalRel}
            className="relative rounded-full px-3 py-2 font-medium text-white transition hover:text-white sm:px-4"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(98,235,222,0.18),rgba(98,235,222,0.1))] shadow-[0_0_28px_rgba(98,235,222,0.14),inset_0_0_0_1px_rgba(255,255,255,0.05)]" />
            <span className="absolute inset-px rounded-full border border-[color:color-mix(in_srgb,var(--color-accent-cyan)_58%,white_10%)]" />
            <span className="relative">Start Trading</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
