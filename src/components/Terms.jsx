import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, delay },
});

function Section({ title, children }) {
  return (
    <motion.div {...fadeUp()} className="mb-16">
      <h2 className="serif-title text-3xl md:text-4xl text-primary mb-6 border-b border-primary/10 pb-4">
        {title}
      </h2>
      <div className="space-y-4 text-primary/65 text-sm md:text-base leading-relaxed font-light">
        {children}
      </div>
    </motion.div>
  );
}

export default function Terms() {
  return (
    <>
      <Header />
      <main className="bg-background-light min-h-screen">
        {/* Hero Banner */}
        <section className="pt-20 bg-primary text-white overflow-hidden relative">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none hidden md:block">
            <span className="serif-title text-[12rem] leading-none italic">Terms</span>
          </div>
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] font-semibold text-champagne-gold block mb-4"
            >
              Legal
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="serif-title text-5xl md:text-7xl font-light leading-tight mb-6"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/40 text-xs uppercase tracking-[0.3em]"
            >
              Last updated: February 28, 2026
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <motion.p
            {...fadeUp(0)}
            className="text-primary/70 text-base md:text-lg leading-relaxed font-light mb-16 border-l-2 border-champagne-gold pl-6"
          >
            Please read these Terms of Service carefully before using the Falzin 
            website or engaging our services. By accessing this website or entering into
            an engagement with us, you agree to be bound by these terms. If you do not agree,
            please discontinue your use of our website and do not engage our services.
          </motion.p>

          <Section title="1. About Falzin Digital Atelier">
            <p>
              Falzin Digital Atelier (&ldquo;Falzin&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
              or &ldquo;our&rdquo;) is a bespoke digital engineering consultancy headquartered in
              Dubai, UAE, with operations in Bangalore, India. We specialise in custom enterprise
              software, workflow automation, and strategic technology advisory for select clients.
            </p>
            <p>
              These Terms of Service govern your use of our publicly accessible website located
              at <span className="font-semibold text-primary">falzin.com</span> (the
              &ldquo;Site&rdquo;) and, where applicable, our professional services provided under
              a separate client engagement agreement.
            </p>
          </Section>

          <Section title="2. Use of the Website">
            <p>
              You may use this Site for lawful purposes only. You agree not to use the Site in
              any manner that:
            </p>
            <ul className="list-none space-y-3 pl-4">
              {[
                "Violates any applicable local, national, or international law or regulation.",
                "Is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.",
                "Attempts to gain unauthorised access to any part of the Site or its related systems.",
                "Involves transmitting unsolicited commercial communications or spam.",
                "Decompiles, reverses engineers, or attempts to extract source code from the Site.",
                "Scrapes, crawls, or indexes the Site without our prior written consent.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              We reserve the right to suspend or terminate access to the Site for users who
              violate these terms.
            </p>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              All content on this Site — including but not limited to text, images, logos,
              typography, design, code, and visual assets — is the exclusive intellectual property
              of Falzin Digital Atelier or its licensors, and is protected by applicable copyright,
              trademark, and intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works from, publicly
              display, or commercially exploit any part of this Site or its content without our
              prior written consent.
            </p>
            <p>
              The Falzin name, wordmark, and logo are proprietary marks of Falzin Digital Atelier.
              Unauthorised use is strictly prohibited.
            </p>
          </Section>

          <Section title="4. Services & Client Engagements">
            <p>
              Our consulting and engineering services are provided exclusively under separately
              executed client engagement agreements. Descriptions of services on this Site are
              for informational purposes only and do not constitute a binding offer or guarantee
              of availability.
            </p>
            <p>
              Falzin reserves the right to decline any engagement at its sole discretion.
              Acceptance of an inquiry does not create a contractual obligation until a formal
              engagement agreement has been signed by both parties.
            </p>
            <p>
              All deliverables, timelines, pricing, and scope are defined exclusively within the
              applicable client agreement and are not governed by these website Terms.
            </p>
          </Section>

          <Section title="5. Confidentiality">
            <p>
              Any information you share with us during an inquiry or engagement process will be
              treated with the utmost discretion. We understand that the nature of our work often
              involves sensitive business information. We do not disclose client identities,
              project details, or confidential communications without express written consent.
            </p>
            <p>
              Specific confidentiality obligations for active client engagements are governed by
              the non-disclosure provisions within the applicable client agreement.
            </p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>
              This Site and all its content are provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis without any warranties of any kind, either express or implied.
              To the fullest extent permitted by law, Falzin Digital Atelier expressly disclaims
              all warranties, including but not limited to:
            </p>
            <ul className="list-none space-y-3 pl-4">
              {[
                "Implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
                "Warranties that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.",
                "Warranties regarding the accuracy, completeness, or reliability of any content on the Site.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Falzin Digital Atelier, its
              directors, employees, and affiliates shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of,
              or inability to use, this Site or any content thereon.
            </p>
            <p>
              In no event shall our total aggregate liability to you for any claim arising out
              of or in connection with these Terms or the Site exceed the amount you have paid
              to us (if any) in the preceding twelve (12) months, or USD $100, whichever is
              greater.
            </p>
            <p>
              Some jurisdictions do not allow exclusion or limitation of certain types of
              damages. In such jurisdictions, our liability is limited to the fullest extent
              permitted by law.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              This Site may contain links to third-party websites for informational purposes.
              These links do not imply endorsement, and we have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of any third-party
              sites. We encourage you to review the terms and privacy policies of any external
              sites you visit.
            </p>
          </Section>

          <Section title="9. Modifications to the Site & Terms">
            <p>
              We reserve the right to modify, suspend, or discontinue the Site (or any part
              thereof) at any time without notice and without liability to you.
            </p>
            <p>
              We may also revise these Terms of Service at any time. Changes will be effective
              upon posting to the Site. The &ldquo;Last Updated&rdquo; date at the top of this
              page reflects the most recent revision. Your continued use of the Site following
              any changes constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="10. Governing Law & Jurisdiction">
            <p>
              These Terms of Service shall be governed by and construed in accordance with the
              laws of the <span className="font-semibold text-primary">United Arab Emirates</span>,
              specifically the Emirate of Dubai, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising from or in connection with these Terms shall be subject to
              the exclusive jurisdiction of the competent courts of Dubai, UAE, unless otherwise
              agreed in writing.
            </p>
          </Section>

          <Section title="11. Severability">
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable
              by a court of competent jurisdiction, that provision shall be limited or eliminated
              to the minimum extent necessary, and the remaining provisions of these Terms shall
              continue in full force and effect.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have any questions or concerns about these Terms of Service, please reach
              out to us:
            </p>
            <div className="bg-white border border-primary/10 p-6 rounded-sm mt-4">
              <p className="font-semibold text-primary mb-1">Falzin Digital Atelier</p>
              <p>Dubai, United Arab Emirates &amp; Bangalore, India</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:legal@falzin.com"
                  className="text-primary font-semibold hover:text-champagne-gold transition-colors"
                >
                  legal@falzin.com
                </a>
              </p>
            </div>
          </Section>

          {/* Bottom nav */}
          <motion.div
            {...fadeUp(0)}
            className="flex flex-col sm:flex-row items-center justify-between border-t border-primary/10 pt-10 gap-4"
          >
            <Link
              to="/"
              className="text-xs uppercase tracking-widest text-primary/50 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Home
            </Link>
            <Link
              to="/privacy"
              className="text-xs uppercase tracking-widest text-primary/50 hover:text-primary transition-colors flex items-center gap-2"
            >
              View Privacy Policy
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
