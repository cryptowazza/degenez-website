import { LegalPage } from "@/components/site/legal-page";
import { siteConfig } from "@/content/site";

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Welcome to DegenEZ. By accessing or using our web and mobile applications, you agree to these Terms of Use. DegenEZ is a personal, open-source interface to decentralized protocols and is provided 'as is'."
    >
      <section>
        <h2 className="text-base font-semibold text-white">
          1. Interface to Decentralized Protocols
        </h2>
        <p className="mt-3">
          DegenEZ provides a front-end interface (the &quot;Interface&quot;) that facilitates interaction with decentralized protocols on the Solana blockchain, specifically the Drift Protocol and Jupiter. DegenEZ does not have access to your funds, does not hold custody of your assets, and does not execute trades on your behalf. All transactions are initiated by your self-custodial wallet and executed directly by independent smart contracts.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">
          2. Assumption of Risk
        </h2>
        <p className="mt-3">
          Trading digital assets, particularly highly leveraged perpetual futures, involves substantial risk of loss. You are solely responsible for understanding the mechanics of leverage, liquidations, funding rates, and isolated margin subaccounts. We strongly encourage reviewing the{" "}
          <a
            href={siteConfig.driftDocs.riskSafety}
            target="_blank"
            rel={siteConfig.externalRel}
            className="text-accent-cyan underline underline-offset-4 hover:text-white"
          >
            Drift risk and safety documentation
          </a>{" "}
          before trading. By using the Interface, you acknowledge and assume all risks associated with on-chain trading and smart contract vulnerabilities.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">
          3. No Financial Advice
        </h2>
        <p className="mt-3">
          The Information provided on the Interface does not constitute investment, financial, legal, or tax advice. You should not take, or refrain from taking, any action based on any information contained in the Interface. You alone are responsible for determining whether any investment, trading strategy, or related transaction is appropriate for you.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">
          4. No Warranties and Limitation of Liability
        </h2>
        <p className="mt-3">
          DegenEZ is a personal project provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. There is no corporate entity backing this software. To the fullest extent permitted by law, the creators and contributors of DegenEZ shall not be held liable for any damages, losses, or liabilities arising out of or in connection with your use of the Interface, including but not limited to smart contract failures, network congestion, or market volatility.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-base font-semibold text-white">
          5. Modifications to the Service
        </h2>
        <p className="mt-3">
          We reserve the right to modify, suspend, or discontinue the Interface at any time, with or without notice, at our sole discretion. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Interface.
        </p>
      </section>
    </LegalPage>
  );
}
