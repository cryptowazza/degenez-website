"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqItems, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id={siteConfig.anchors.faq}
      className="scroll-mt-32 py-28 sm:py-32"
    >
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-136">
            <p className="text-xs uppercase tracking-[0.32em] text-text-muted">
              FAQ
            </p>
            <h2 className="mt-5 max-w-[10ch] text-[clamp(2.4rem,5.8vw,4rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-white">
              Frequently asked questions.
            </h2>
            <p className="mt-6 text-lg leading-[1.8] text-text-subtle">
              What our users ask most, and where to step in if you need to
              intervene directly. Got other questions? Reach out anytime.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className={cn(
                    "rounded-[1.55rem] border bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))] transition",
                    isOpen
                      ? "border-[color-mix(in_srgb,var(--color-accent-cyan)_18%,white_10%)] shadow-[0_26px_70px_rgba(0,0,0,0.22)]"
                      : "border-white/8",
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? -1 : index,
                      )
                    }
                  >
                    <span className="text-lg font-medium leading-snug text-white">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/15 text-text-subtle transition",
                        isOpen && "rotate-180 text-accent-cyan",
                      )}
                    >
                      <ChevronDown className="h-4.5 w-4.5" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-70",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4 px-6 pb-6 text-sm leading-7 text-text-muted sm:px-7">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
