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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const renderLink = (item: (typeof navItems)[number], compact = false) => {
    const active = visibleActiveSection === item.id;

    return (
      <Link
        key={item.id}
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          'relative transition',
          compact
            ? 'block rounded-2xl px-4 py-3 text-[15px]'
            : 'rounded-full px-3 py-2 sm:px-4',
          active
            ? 'text-white'
            : 'text-[color:var(--color-text-muted)] hover:text-white'
        )}
      >
        {active ? (
          <span
            className={cn(
              'absolute inset-0',
              compact
                ? 'rounded-2xl bg-[linear-gradient(135deg,rgba(98,235,222,0.16),rgba(241,107,183,0.14))]'
                : 'rounded-full bg-[linear-gradient(135deg,rgba(98,235,222,0.18),rgba(241,107,183,0.14))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
            )}
          />
        ) : null}
        <span
          className={cn(
            'absolute inset-px border',
            compact ? 'rounded-2xl' : 'rounded-full',
            active
              ? 'border-[color:color-mix(in_srgb,var(--color-accent-cyan)_65%,var(--color-accent-magenta)_35%)]'
              : 'border-transparent'
          )}
        />
        <span className="relative">{item.label}</span>
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[color:color-mix(in_srgb,var(--color-surface-header)_70%,transparent)] px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_80px_rgba(2,7,13,0.55)] backdrop-blur-xl sm:px-6">
          <Link href="/" className="flex items-center gap-3 text-white transition hover:text-[color:var(--color-accent-cyan)]">
            <span className="flex h-9 items-center">
              <Logo className="h-5 w-auto" />
            </span>
          </Link>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="site-nav-mobile"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/20 transition sm:hidden"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(98,235,222,0.14),rgba(241,107,183,0.12))] opacity-0 transition group-hover:opacity-100" />
            <span className="relative flex h-3.5 w-5 flex-col justify-between">
              <span
                className={cn(
                  'h-[2px] w-full rounded-full bg-[color:var(--color-text-subtle)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white',
                  mobileMenuOpen ? 'translate-y-[6px] rotate-45 bg-white' : ''
                )}
              />
              <span
                className={cn(
                  'h-[2px] w-full rounded-full bg-[color:var(--color-text-subtle)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white',
                  mobileMenuOpen ? '-translate-y-[6px] -rotate-45 bg-white' : ''
                )}
              />
            </span>
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>

          <nav className="hidden items-center gap-2 rounded-full border border-white/6 bg-black/10 p-1 text-sm text-[color:var(--color-text-muted)] sm:flex">
            {navItems.map((item) => renderLink(item))}

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

        <div
          className={cn(
            'mt-2 grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:hidden',
            mobileMenuOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'pointer-events-none grid-rows-[0fr] opacity-0'
          )}
        >
          <nav
            id="site-nav-mobile"
            className="min-h-0 rounded-3xl border border-white/10 bg-[color:color-mix(in_srgb,var(--color-surface-header)_86%,transparent)] p-2 text-[color:var(--color-text-muted)] shadow-[0_18px_56px_rgba(2,7,13,0.45)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => renderLink(item, true))}
              <a
                href={siteConfig.ctas.startTrading}
                target="_blank"
                rel={siteConfig.externalRel}
                onClick={() => setMobileMenuOpen(false)}
                className="relative mt-1 block rounded-2xl px-4 py-3 font-medium text-white transition hover:text-white"
              >
                <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(98,235,222,0.2),rgba(98,235,222,0.1))] shadow-[0_0_28px_rgba(98,235,222,0.12),inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
                <span className="absolute inset-px rounded-2xl border border-[color:color-mix(in_srgb,var(--color-accent-cyan)_58%,white_10%)]" />
                <span className="relative">Start Trading</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
