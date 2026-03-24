import type { LucideIcon } from "lucide-react";
import { Layers3, Radar, ShieldCheck, SplitSquareVertical } from "lucide-react";
import type { ReactNode } from "react";

export const siteConfig = {
  name: "DegenEZ",
  title: "DegenEZ | Easy Degen Trading on Solana",
  description:
    "A sharper way into Solana perps. DegenEZ wraps Drift Protocol in a cleaner, isolated trading experience built for fast conviction and clearer risk separation.",
  externalRel: "nofollow noopener noreferrer",
  driftIconUrl: "https://app.drift.trade/assets/icons/driftIcon.svg",
  anchors: {
    howItWorks: "how-it-works",
    faq: "faq",
  },
  ctas: {
    startTrading: "https://app.degenez.com",
    seekerDownload: "https://example.com/degenez-solana-seeker",
  },
  socials: {
    x: "https://x.com/DegenEzApp",
    telegram: "https://t.me/degenez",
  },
  driftDocs: {
    riskSafety: "https://docs.drift.trade/protocol/risk-and-safety",
    fundingRates:
      "https://docs.drift.trade/protocol/trading/perpetuals-trading/funding-rates",
    liquidations: "https://docs.drift.trade/protocol/trading/liquidations",
    subaccounts: "https://docs.drift.trade/getting-started/managing-subaccount",
    withdrawClose:
      "https://docs.drift.trade/protocol/getting-started/withdraw-and-close-account",
  },
} as const;

export const navItems = [
  {
    label: "How it works",
    href: `/#${siteConfig.anchors.howItWorks}`,
    id: siteConfig.anchors.howItWorks,
  },
  {
    label: "FAQ",
    href: `/#${siteConfig.anchors.faq}`,
    id: siteConfig.anchors.faq,
  },
] as const;

export const heroContent = {
  eyebrow: "Powered by Drift Protocol",
  title: "Degen trading made easy.",
  description:
    "DegenEZ rides on top of Drift Protocol so trades settle into a battle-tested Solana perp stack. The result is fast execution, transparent custody, and the liquidity depth serious leverage trading needs.",
  subcopy:
    "Open isolated positions without dragging every trade into the same risk bucket. Stay sharp, size quickly, and manage more than one conviction at a time.",
} as const;

type Feature = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

export const howItWorksFeatures: Feature[] = [
  {
    title: "A cleaner, faster trading surface",
    copy: "We stripped away the overwhelming charts, menus, and jargon. DegenEZ focuses only on what matters: quick setup, clear prices, and instant execution.",
    icon: Radar,
  },
  {
    title: "Every position stays isolated",
    copy: "Each trade lives in its own subaccount, so one idea doesn’t affect another. Risk stays crystal clear when rotating fast.",
    icon: ShieldCheck,
  },
  {
    title: "Long and short at the same time",
    copy: "Open both directions on the same market without merging exposures. Pure independent bets.",
    icon: SplitSquareVertical,
  },
  {
    title: "Real leverage without the clutter",
    copy: "Full perp trading power with margin, packed into a simple, readable screen.",
    icon: Layers3,
  },
];

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const linkClass =
  "font-medium text-[color:var(--color-accent-cyan)] underline decoration-[color:color-mix(in_srgb,var(--color-accent-cyan)_45%,transparent)] underline-offset-4 transition hover:text-white";

export const faqItems: FaqItem[] = [
  {
    question: "How can I trust DegenEZ?",
    answer: (
      <>
        <p>
          DegenEZ is powered by Drift Protocol, so positions are not trapped
          inside a private black box. You can inspect and manage those positions
          directly in Drift as well.
        </p>
        <p>
          For protocol-level risk details, read{" "}
          <a
            className={linkClass}
            href={siteConfig.driftDocs.riskSafety}
            target="_blank"
            rel={siteConfig.externalRel}
          >
            Drift risk and safety
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "Why do I have to sign so many transactions?",
    answer: (
      <>
        <p>
          That is a consequence of how perpetuals trading works on-chain and how
          DegenEZ uses subaccounts for true isolated positions.
        </p>
        <p>
          Opening a trade can involve creating a subaccount, depositing SOL as
          collateral, and then opening the position. Closing can require
          unwinding the position, settling balances, withdrawing remaining
          funds, and closing the account cleanly.
        </p>
      </>
    ),
  },
  {
    question:
      "I can’t see my position anymore, but haven’t received my funds back.",
    answer: (
      <>
        <p>
          In rare cases the DegenEZ interface may lose track of the subaccount
          state before the full closeout flow has finished, but that does not
          mean funds are gone.
        </p>
        <p>
          You can go to{" "}
          <a
            className={linkClass}
            href="https://app.drift.trade"
            target="_blank"
            rel={siteConfig.externalRel}
          >
            app.drift.trade
          </a>{" "}
          to manage the position directly, settle balances, and withdraw from
          the relevant account.
        </p>
      </>
    ),
  },
  {
    question: "Why is my collateral decreasing and/or leverage changing?",
    answer: (
      <>
        <p>
          Perp positions move with price, funding, and account health. That
          means your effective leverage and collateral profile can drift even
          when you have not touched the position.
        </p>
        <p>
          Drift explains this in more detail in their docs on{" "}
          <a
            className={linkClass}
            href={siteConfig.driftDocs.fundingRates}
            target="_blank"
            rel={siteConfig.externalRel}
          >
            funding rates
          </a>{" "}
          and liquidation mechanics.
        </p>
      </>
    ),
  },
  {
    question: "I got liquidated, is my money gone?",
    answer: (
      <>
        <p>
          Most of the value may be gone after liquidation, but there can still
          be leftover balance in the subaccount.
        </p>
        <p>
          Check the account on{" "}
          <a
            className={linkClass}
            href="https://app.drift.trade"
            target="_blank"
            rel={siteConfig.externalRel}
          >
            app.drift.trade
          </a>{" "}
          and close it properly to recover anything that remains. Drift’s
          documentation on{" "}
          <a
            className={linkClass}
            href={siteConfig.driftDocs.liquidations}
            target="_blank"
            rel={siteConfig.externalRel}
          >
            liquidations
          </a>{" "}
          and{" "}
          <a
            className={linkClass}
            href={siteConfig.driftDocs.withdrawClose}
            target="_blank"
            rel={siteConfig.externalRel}
          >
            withdrawing and closing accounts
          </a>{" "}
          covers the mechanics.
        </p>
      </>
    ),
  },
  {
    question: "Where can I learn more?",
    answer: (
      <p>
        Follow DegenEZ on{" "}
        <a
          className={linkClass}
          href={siteConfig.socials.x}
          target="_blank"
          rel={siteConfig.externalRel}
        >
          X
        </a>{" "}
        and join the{" "}
        <a
          className={linkClass}
          href={siteConfig.socials.telegram}
          target="_blank"
          rel={siteConfig.externalRel}
        >
          Telegram
        </a>{" "}
        for product updates and support.
      </p>
    ),
  },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
] as const;

export const footerSocialLinks = [
  { label: "X", href: siteConfig.socials.x },
  { label: "Telegram", href: siteConfig.socials.telegram },
] as const;
