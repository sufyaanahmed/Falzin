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

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="bg-background-light min-h-screen">
        {/* Hero Banner */}
        <section className="pt-20 bg-primary text-white overflow-hidden relative">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none hidden md:block">
            <span className="serif-title text-[12rem] leading-none italic">Privacy</span>
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
              Privacy Policy
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
            At <span className="font-semibold text-primary">Falzin</span>, the
            privacy of our clients and visitors is not an afterthought — it is a cornerstone of
            how we operate. This Privacy Policy explains what information we collect, how we use
            it, and the choices you have over your personal data.
          </motion.p>

          <Section title="1. Information We Collect">
            <p>
              We collect information you provide directly to us, including when you submit an
              inquiry through our contact form, request an invitation, or communicate with us by
              email or other means. This may include your name, email address, company name,
              phone number, and the nature of your business inquiry.
            </p>
            <p>
              We also collect certain information automatically when you visit our website, such
              as your IP address, browser type, operating system, referring URLs, pages viewed,
              and the date and time of your visit. This data is collected through cookies and
              similar tracking technologies.
            </p>
            <p>
              We do not collect sensitive personal information (such as government identification
              numbers, payment card data, or health data) through our public-facing website.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-none space-y-3 pl-4">
              {[
                "To respond to your inquiries and evaluate whether our services are a mutual fit.",
                "To communicate with you about our services, engagements, and updates — only with your consent.",
                "To improve and optimise the performance and content of our website.",
                "To comply with applicable legal obligations and protect our legal rights.",
                "To prevent fraud, abuse, and other harmful or unlawful activities.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              We will never sell, rent, or share your personal information with third parties
              for their own marketing purposes.
            </p>
          </Section>

          <Section title="3. Legal Basis for Processing">
            <p>
              Where applicable (including for visitors in the European Economic Area, United
              Kingdom, and similar jurisdictions), we process your personal data on the
              following legal bases:
            </p>
            <ul className="list-none space-y-3 pl-4">
              {[
                "Consent — where you have explicitly provided it (e.g., opting into communications).",
                "Legitimate interests — to respond to business inquiries and operate our website.",
                "Legal obligation — where we are required to process data to comply with law.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="4. Cookies & Tracking Technologies">
            <p>
              Our website uses cookies and similar technologies to enhance your browsing
              experience and collect analytical data. Cookies are small text files stored on
              your device that help us understand how visitors interact with our site.
            </p>
            <p>
              We use strictly necessary cookies to operate core website functions, and
              analytics cookies (including Google Analytics) to understand traffic patterns and
              improve our content. Analytics cookies are only set with your consent where
              required by law.
            </p>
            <p>
              You may disable cookies at any time via your browser settings. Please note that
              disabling certain cookies may affect the functionality of the website.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain personal information only as long as necessary to fulfil the purposes
              described in this policy, or as required by applicable law. Inquiry data is
              retained for up to 24 months unless an active client relationship is established,
              in which case retention periods are governed by our client engagement agreement.
            </p>
            <p>
              Analytical and technical data (e.g., server logs) is typically retained for no
              more than 90 days.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>
              We may use trusted third-party service providers to help us operate our business
              and website. These parties are contractually obligated to protect your information
              and may only use it in ways consistent with this policy. Current categories of
              third-party processors include:
            </p>
            <ul className="list-none space-y-3 pl-4">
              {[
                "Website hosting and infrastructure (e.g., Vercel)",
                "Website analytics (e.g., Google Analytics, with IP anonymisation enabled)",
                "Email communications platforms",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              We do not permit these service providers to use your personal data for any purpose
              beyond what is strictly necessary to provide their services to us.
            </p>
          </Section>

          <Section title="7. International Data Transfers">
            <p>
              Falzin operates across Dubai (UAE) and Bangalore (India). Your
              personal data may be processed in either jurisdiction. Where data is transferred
              internationally, we ensure appropriate safeguards are in place in accordance with
              applicable data protection regulations.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the following rights regarding your
              personal data:
            </p>
            <ul className="list-none space-y-3 pl-4">
              {[
                "Right to access — request a copy of the personal data we hold about you.",
                "Right to rectification — request correction of inaccurate or incomplete data.",
                "Right to erasure — request deletion of your personal data where no longer necessary.",
                "Right to restriction — request that we limit how we process your data.",
                "Right to data portability — receive your data in a structured, machine-readable format.",
                "Right to object — object to processing based on legitimate interests or for direct marketing.",
                "Right to withdraw consent — at any time, without affecting prior lawful processing.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              To exercise any of these rights, please contact us at the address below. We will
              respond within 30 days.
            </p>
          </Section>

          <Section title="9. Data Security">
            <p>
              We take the security of your personal information seriously. We implement
              industry-standard technical and organisational measures to protect your data
              against unauthorised access, disclosure, alteration, or destruction.
            </p>
            <p>
              However, no method of transmission over the internet or electronic storage is
              completely secure. While we strive to protect your data, we cannot guarantee
              absolute security.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              Our website and services are intended solely for professionals and business
              entities. We do not knowingly collect personal data from individuals under the
              age of 18. If we become aware that we have inadvertently collected such data,
              we will delete it promptly.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technology, or applicable laws. When we do, we will revise the "Last
              Updated" date at the top of this page. We encourage you to review this policy
              periodically.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              the handling of your personal data, please contact us:
            </p>
            <div className="bg-white border border-primary/10 p-6 rounded-sm mt-4">
              <p className="font-semibold text-primary mb-1">Falzin</p>
              <p>Dubai, United Arab Emirates &amp; Bangalore, India</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:privacy@falzin.com"
                  className="text-primary font-semibold hover:text-champagne-gold transition-colors"
                >
                  privacy@falzin.com
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
              to="/terms"
              onClick={() => window.scrollTo(0, 0)}
              className="text-xs uppercase tracking-widest text-primary/50 hover:text-primary transition-colors flex items-center gap-2"
            >
              View Terms of Service
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
