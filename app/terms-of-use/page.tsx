import { LegalPage } from "@/components/site/legal-page";

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="This first-pass page exists so the site ships with a valid destination for terms navigation. Replace it with approved legal language before production launch."
    >
      <section>
        <h2 className="text-base font-semibold text-white">
          1. Product posture
        </h2>
        <p className="mt-3">
          DegenEZ is a front-end trading interface. It should not be presented
          as financial advice, and this page should be replaced with approved
          legal terms before public launch.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-white">
          2. User responsibility
        </h2>
        <p className="mt-3">
          Users are responsible for understanding leverage, liquidation,
          funding, and isolated position mechanics before trading. On-chain
          perpetuals products carry substantial risk.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-white">
          3. Temporary stub notice
        </h2>
        <p className="mt-3">
          This page is an implementation stub created so footer navigation
          resolves cleanly. It is not a substitute for formal counsel-reviewed
          terms.
        </p>
      </section>
    </LegalPage>
  );
}
