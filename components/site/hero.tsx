'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { heroContent, siteConfig } from '@/content/site';
import { RevealGroup, RevealItem } from './reveal';

function DesktopShot() {
  return (
    <motion.div
      className="relative mr-[4.5rem] sm:mr-[5.5rem] lg:mr-12 xl:mr-16"
      initial={{ opacity: 0, x: 22, y: 16 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,20,31,0.98),rgba(6,11,18,0.94))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_50px_120px_rgba(0,0,0,0.48)]">
        <div className="pointer-events-none absolute inset-x-8 top-8 h-28 rounded-full bg-[radial-gradient(circle,rgba(98,235,222,0.12),transparent_68%)] blur-3xl" />
        <div className="relative flex items-center justify-between border-b border-white/8 bg-[linear-gradient(180deg,rgba(16,25,36,0.96),rgba(10,17,27,0.94))] px-5 py-2.5">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6259]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f7be4a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#44cb58]" />
          </div>
          <div className="h-7 w-[38%] rounded-full border border-white/8 bg-white/4" />
          <div className="h-7 w-11 rounded-full bg-white/4" />
        </div>
        <Image
          src="/hero/web.png"
          alt="DegenEZ web trading dashboard"
          width={2298}
          height={1692}
          className="relative h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 58vw"
          priority
        />
      </div>
    </motion.div>
  );
}

function MobileShot({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      className="absolute right-0 top-[4%] w-full max-w-[178px] sm:top-[5%] sm:max-w-[218px] md:max-w-[238px] lg:top-[8%] lg:max-w-[278px] xl:max-w-[292px]"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, x: 12 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.72, delay: reduceMotion ? 0 : 0.38, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="relative rounded-[2.95rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,25,36,0.98),rgba(9,15,24,0.98))] p-[0.5rem] shadow-[0_22px_100px_rgba(0,0,0,0.5)]">
        <div className="pointer-events-none absolute inset-x-10 top-10 h-20 rounded-full bg-[radial-gradient(circle,rgba(241,107,183,0.12),transparent_68%)] blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-[7.5rem] h-14 w-[3px] rounded-full bg-white/12" />
        <div className="pointer-events-none absolute left-0 top-[10.8rem] h-10 w-[3px] rounded-full bg-white/12" />
        <div className="pointer-events-none absolute right-0 top-[9.2rem] h-20 w-[3px] rounded-full bg-white/12" />
        <div className="relative overflow-hidden rounded-[2.55rem] bg-[linear-gradient(180deg,rgba(5,9,14,0.98),rgba(8,12,18,0.98))]">
          <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
            <div className="h-2 w-24 rounded-full bg-white/12" />
          </div>
          <Image
            src="/hero/mobile.png"
            alt="DegenEZ mobile trade ticket"
            width={1200}
            height={2044}
            className="relative h-auto w-full"
            sizes="(max-width: 640px) 62vw, (max-width: 1024px) 38vw, 22vw"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:px-10">
        <RevealGroup className="relative z-10 max-w-[42rem]">
          <RevealItem>
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--color-accent-cyan)_22%,transparent)] bg-[color:color-mix(in_srgb,var(--color-surface-card)_72%,transparent)] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--color-text-subtle)] shadow-[0_12px_40px_rgba(2,7,13,0.36)]">
              <Image
                src={siteConfig.driftIconUrl}
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
              {heroContent.eyebrow}
            </div>
          </RevealItem>

          <RevealItem className="mt-8">
            <h1 className="max-w-[11ch] text-[clamp(3.5rem,9vw,5rem)] font-semibold leading-[0.92] tracking-[-0.08em] text-white">
              {heroContent.title}
            </h1>
          </RevealItem>

          <RevealItem className="mt-6 max-w-[38rem]">
            <p className="text-balance text-[clamp(1rem,1.7vw,1.16rem)] leading-[1.75] text-[color:var(--color-text-subtle)]">
              {heroContent.description}
            </p>
            <p className="mt-4 max-w-[34rem] text-balance text-[clamp(0.98rem,1.45vw,1.05rem)] leading-[1.8] text-[color:var(--color-text-muted)]">
              {heroContent.subcopy}
            </p>
          </RevealItem>

          <RevealItem className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }} whileTap={reduceMotion ? undefined : { scale: 0.99 }}>
              <a
                href={siteConfig.ctas.startTrading}
                target="_blank"
                rel={siteConfig.externalRel}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#62EBDE,#8FF3E8)] px-6 py-3 text-sm font-semibold text-[color:var(--color-cyan-ink)] shadow-[0_12px_40px_rgba(98,235,222,0.26)] transition hover:shadow-[0_18px_58px_rgba(98,235,222,0.34)]"
              >
                Start Trading
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </motion.div>
            <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.99 }}>
              <a
                href={siteConfig.ctas.seekerDownload}
                target="_blank"
                rel={siteConfig.externalRel}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_32px_rgba(2,7,13,0.34)] backdrop-blur-xl transition hover:border-[color:color-mix(in_srgb,var(--color-accent-magenta)_28%,white_18%)] hover:bg-white/9"
              >
                Download for Solana Seeker
              </a>
            </motion.div>
          </RevealItem>

        </RevealGroup>

        <div className="relative w-full lg:ml-auto lg:max-w-[640px]">
          <div className="pointer-events-none absolute inset-x-[6%] top-[10%] h-[34%] rounded-full bg-[radial-gradient(circle,rgba(98,235,222,0.14),transparent_70%)] blur-3xl" />
          <div className="pointer-events-none absolute right-[6%] top-[18%] h-[26%] w-[28%] rounded-full bg-[radial-gradient(circle,rgba(241,107,183,0.1),transparent_72%)] blur-3xl" />
          <div className="relative min-h-[15rem] sm:min-h-[18.5rem] md:min-h-[22rem] lg:min-h-[38rem] xl:min-h-[42rem]">
            <DesktopShot />
            <MobileShot reduceMotion={reduceMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}
