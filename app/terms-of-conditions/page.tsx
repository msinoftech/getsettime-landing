import type { Metadata } from "next";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";

const { email } = contactInfo;

export const metadata: Metadata = {
  title: `Terms & Conditions | ${APP_NAME}`,
  description: `Read the terms and conditions for using ${APP_NAME}. Understand our policies on billing, refunds, and service usage.`,
  alternates: {
    canonical: `${BASE_URL}terms-of-conditions`,
  },
  openGraph: {
    title: `Terms & Conditions | ${APP_NAME}`,
    description: `Read the terms and conditions for using ${APP_NAME}.`,
    url: `${BASE_URL}terms-of-conditions`,
    type: "website",
    siteName: APP_NAME,
  },
};

export default function TermsOfConditions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-12">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Terms &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                Conditions
              </span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Please read these terms carefully before using our service. By accessing or using GetSetTime, 
              you agree to be bound by these terms.
            </p>
          </div>

          {/* Info Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-neutral-100">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-neutral-600">Your rights are protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-24">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 sm:p-12">
            <div className="prose prose-neutral max-w-none">
              
              {/* Introduction */}
              <div className="mb-10 p-6 bg-gradient-to-br from-neutral-50 to-slate-50 rounded-xl border border-neutral-100">
                <p className="text-neutral-600 mb-3">
                  Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) carefully before using the{" "}
                  <a href={BASE_URL} className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline">{`${BASE_URL}`}</a>
                  website (the &quot;Service&quot;) operated by GetSetTime (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
                </p>
                <p className="text-neutral-600 mb-3">
                  Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
                <p className="text-neutral-600">
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-red-600 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </span>
                  Termination
                </h2>
                <div className="space-y-4 text-neutral-600 pl-11">
                  <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</p>
                  <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                </div>
              </div>

              {/* Links To Other Websites */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </span>
                  Links To Other Websites
                </h2>
                <div className="space-y-4 text-neutral-600 pl-11">
                  <p>Our Service may contain links to third-party websites or services that are not owned or controlled by GetSetTime.</p>
                  <p>GetSetTime has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that GetSetTime shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
                  <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 text-purple-600 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </span>
                  Governing Law
                </h2>
                <div className="space-y-4 text-neutral-600 pl-11">
                  <p>These Terms shall be governed and construed in accordance with the General Data Protection Regulation (EU) 2016/679 (GDPR), relevant Indian data protection laws, and other international regulations, without regard to any conflict-of-laws principles.</p>
                  <p>Our failure to enforce any right or provision of these Terms will not constitute a waiver of that right or provision. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede any prior agreements we may have had regarding the Service.</p>
                </div>
              </div>

              {/* Billing */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </span>
                  Billing
                </h2>
                <div className="space-y-4 text-neutral-600 pl-11">
                  <p className="font-semibold text-neutral-900">Paid Subscription Cancellation Policy</p>
                  <p>Paid subscriptions will automatically renew for the same subscription period unless the account owner cancels them before the end of the current subscription period. You can cancel your paid subscription at any time via the in-app billing modal. Alternatively, you can contact customer support in the app or by email (<a href={`mailto:${email}`} className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline">{email}</a>) with your cancellation request.</p>
                  <p>When a cancellation is issued, the downgrade from premium to free is scheduled for the time of subscription renewal. Until the end of the cycle, all premium features will remain active for the organization.</p>
                </div>
              </div>

              {/* Refund Policy */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                  </span>
                  Refund Policy
                </h2>
                <div className="space-y-4 text-neutral-600 pl-11">
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p>Organizations are eligible for a full refund for monthly or annual premium paid subscriptions, provided that no bookings have been made since the subscription began and the account owner makes the request within 7 days of the current subscription cycle. For annual payment cycles, a 10% cancellation fee will be assessed, after which the remaining refund will be processed within 1-10 business days.</p>
                  </div>
                </div>
              </div>

              {/* Legacy Plans */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  Legacy Plans
                </h2>
                <div className="space-y-4 text-neutral-600 pl-11">
                  <p>As pricing models change at GetSetTime, existing customers will retain their existing subscription cost until they request to move to the current plan or until GetSetTime eliminates that plan. If a plan is eliminated, organization owners will receive at least 30 days&apos; advanced notice with details regarding the new pricing structure.</p>
                </div>
              </div>

              {/* Changes */}
              <div className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </span>
                  Changes
                </h2>
                <div className="space-y-4 text-neutral-600 pl-11">
                  <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                  <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
                </div>
              </div>

              {/* Contact Us */}
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  Contact Us
                </h2>
                <div className="pl-11">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6">
                    <p className="text-neutral-600 mb-4">If you have any questions about these Terms, please get in touch with us:</p>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${email}`} className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline">{email}</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}