import { LegalPage } from "@/components/site/legal-page";
import { siteConfig } from "@/content/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This first-pass page exists so the site ships with a valid destination for privacy navigation. Replace it with approved legal language before production launch."
    >
      <section>
        <h2 className="text-base font-semibold text-white">
          1. Information handled
        </h2>
        <p className="mt-3">
          DegenEZ may handle standard website telemetry, support communications,
          and any account identifiers needed to provide product access or
          troubleshoot user issues. Replace this section with approved legal
          language before launch.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-white">
          2. External protocol surfaces
        </h2>
        <p className="mt-3">
          Trading activity may also interact with external protocol surfaces
          such as Drift. Users should review protocol-specific documentation and
          risk disclosures directly, including{" "}
          <a
            href={siteConfig.driftDocs.riskSafety}
            target="_blank"
            rel={siteConfig.externalRel}
            className="text-[color:var(--color-accent-cyan)] underline underline-offset-4 hover:text-white"
          >
            Drift risk and safety
          </a>
          .
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-white">
          3. Support and contact
        </h2>
        <p className="mt-3">
          Until formal legal copy is supplied, direct privacy questions through
          the official DegenEZ support and community channels listed on the
          homepage footer.
        </p>
      </section>
    </LegalPage>
  );
}
