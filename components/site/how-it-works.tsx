import { howItWorksFeatures, siteConfig } from "@/content/site";

export function HowItWorksSection() {
  return (
    <section
      id={siteConfig.anchors.howItWorks}
      className="scroll-mt-32 py-28 sm:py-32"
    >
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.32em] text-text-muted">
              How it works
            </p>
            <h2 className="mt-5 max-w-[11ch] text-[clamp(2.5rem,6.2vw,4.3rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-white">
              Trade conviction without terminal noise.
            </h2>
            <p className="mt-6 max-w-140 text-lg leading-[1.8] text-text-subtle">
              DegenEZ is a web and Solana Seeker mobile app built as a clean
              wrapper on top of Flash Trade. The execution and security layer
              is managed by Flash Trade, so you get on-chain reliability and
              transparent position management. We just simplify the interface so
              trading feels effortless.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {howItWorksFeatures.map(({ title, copy, icon: Icon }) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.28)]"
              >
                <div
                  className="absolute inset-x-6 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(98,235,222,0.72), transparent)",
                  }}
                />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-[color-mix(in_srgb,var(--color-accent-magenta)_14%,transparent)] text-accent-magenta">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-16 max-w-[15ch] text-2xl font-medium leading-tight tracking-[-0.05em] text-white">
                  {title}
                </h3>
                <p className="mt-4 max-w-[30ch] text-sm leading-7 text-text-muted">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
