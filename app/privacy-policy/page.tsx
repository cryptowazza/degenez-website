import { LegalPage } from "@/components/site/legal-page";
import { siteConfig } from "@/content/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="DegenEZ is a personal project. This Privacy Policy outlines how we handle information when you use our web and mobile applications."
    >
      <section>
        <h2 className="text-base font-semibold text-white">
          1. Information We Do Not Collect
        </h2>
        <p className="mt-3">
          As a decentralized interface, DegenEZ does not require user accounts.
          We do not collect, store, or process personally identifiable
          information (PII) such as names, email addresses, physical addresses,
          or phone numbers.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">
          2. Blockchain Data and Subaccounts
        </h2>
        <p className="mt-3">
          When you connect your wallet, the applications read public data from
          the Solana blockchain. To safely manage your trading positions,
          DegenEZ tracks your open Drift subaccounts and their associated wallet
          public keys. This information is shared server-side via our API solely
          to prevent subaccount reuse and maintain trading safety constraints.
          Blockchains are inherently public; any transactions or public keys you
          use will be visible on-chain.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">3. Local Storage</h2>
        <p className="mt-3">
          Our web and Android applications use local browser storage and secure
          device storage to save your app preferences (e.g., UI settings,
          preferred RPC endpoints, and connection state). This data remains on
          your device and is not transmitted to us for tracking or marketing
          purposes.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">
          4. Third-Party Services and Protocols
        </h2>
        <p className="mt-3">
          DegenEZ interacts with third-party infrastructure and decentralized
          protocols:
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-2">
          <li>
            <strong>RPC Providers:</strong> Your transactions are routed through
            Solana RPC nodes (such as Helius, Triton, or custom nodes you
            provide). These providers may log basic network data, including IP
            addresses, in accordance with their own privacy policies.
          </li>
          <li>
            <strong>Drift & Jupiter Protocols:</strong> Trading and swap actions
            occur via smart contracts built by Drift Protocol and Jupiter. By
            using DegenEZ, you interact with these protocols directly. We
            encourage you to review their respective documentation and risk
            policies, including{" "}
            <a
              href={siteConfig.driftDocs.riskSafety}
              target="_blank"
              rel={siteConfig.externalRel}
              className="text-accent-cyan underline underline-offset-4 hover:text-white"
            >
              Drift risk and safety
            </a>
            .
          </li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">
          5. No Corporate Entity
        </h2>
        <p className="mt-3">
          DegenEZ is a personal project provided &quot;as is&quot; without a
          corporate entity or registered company behind it. By using the
          software, you acknowledge this structure and agree that no entity is
          liable for data handling beyond what is described here.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">6. Contact</h2>
        <p className="mt-3">
          If you have questions regarding this Privacy Policy or how your public
          data is handled, please reach out via the official DegenEZ community
          and support channels listed in the footer.
        </p>
      </section>
    </LegalPage>
  );
}
