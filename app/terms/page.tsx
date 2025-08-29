import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation currentPath="/terms" />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of AI Short News (&ldquo;Service&rdquo;) provided by AI Short News (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). 
            By accessing or using our Service, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By downloading, accessing, or using AI Short News, you acknowledge that you have read, understood, and agree to be bound by these Terms 
              and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Service.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
            <p className="text-gray-600 mb-4">You must meet the following requirements to use our Service:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {/* <li>Be at least 13 years of age (or the minimum age required in your jurisdiction)</li> */}
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Comply with all local, state, national, and international laws and regulations</li>
            </ul>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Description of Service</h2>
            <p className="text-gray-600 mb-4">AI Short News provides:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>AI-powered news curation and personalization</li>
              <li>Access to news articles from various sources</li>
              <li>Bookmarking and saving functionality</li>
              <li>Personalized news recommendations</li>
              <li>Mobile application and related services</li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Permitted Uses</h3>
                <p className="text-gray-600">You may use our Service for personal, non-commercial purposes in accordance with these Terms.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Prohibited Activities</h3>
                <p className="text-gray-600 mb-2">You agree not to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Violate any international, federal, provincial, or state laws or regulations</li>
                  <li>Transmit or distribute malicious software or code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Create accounts through automated means or under false pretenses</li>
                  <li>Sell, license, or exploit the Service for commercial purposes without authorization</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Our Rights</h3>
                <p className="text-gray-600">
                  The Service, including its original content, features, and functionality, is owned by AI Short News and is protected by 
                  international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your Rights</h3>
                <p className="text-gray-600">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use 
                  the Service for your personal, non-commercial use.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Third-Party Content</h3>
                <p className="text-gray-600">
                  News articles and content are provided by third-party sources. We do not claim ownership of third-party content, 
                  and such content remains subject to the intellectual property rights of the original publishers.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy and Data</h2>
            <p className="text-gray-600">
              AI Short News does not collect, store, or process any personal information. Our Privacy Policy, incorporated into these Terms by reference, 
              explains our commitment to your privacy. By using the Service, you acknowledge that no personal data is collected or processed.
            </p>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Availability</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>We strive to provide continuous service but cannot guarantee 100% uptime</li>
              <li>We may modify, suspend, or discontinue the Service at any time without notice</li>
              <li>We may impose limits on certain features or restrict access to parts of the Service</li>
              <li>System maintenance may temporarily interrupt service availability</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 font-medium mb-2">IMPORTANT DISCLAIMERS:</p>
              <ul className="list-disc pl-6 text-yellow-700 space-y-1 text-sm">
                <li>THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;</li>
                <li>WE MAKE NO WARRANTIES ABOUT THE ACCURACY, COMPLETENESS, OR RELIABILITY OF NEWS CONTENT</li>
                <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>WE ARE NOT RESPONSIBLE FOR THE CONTENT OF THIRD-PARTY NEWS SOURCES</li>
              </ul>
            </div>
            <p className="text-gray-600">
              News content is provided by third-party sources and may contain opinions, errors, or outdated information. 
              Users should verify information through primary sources before making decisions based on news content.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 font-medium mb-2">LIABILITY LIMITATIONS:</p>
              <p className="text-red-700 text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI NEWS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF 
                OR RELATING TO THESE TERMS OR THE SERVICE.
              </p>
            </div>
            <p className="text-gray-600">
              Our total liability to you for all claims arising out of or relating to these Terms or the Service shall not exceed 
              the amount you paid us, if any, in the twelve (12) months preceding the claim.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify, defend, and hold harmless AI Short News and its officers, directors, employees, and agents from and against 
              any and all claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or 
              violation of these Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your Rights</h3>
                <p className="text-gray-600">You may stop using the service at any time by uninstalling the app.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Our Rights</h3>
                <p className="text-gray-600">
                  We may terminate or suspend your access immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Effect of Termination</h3>
                <p className="text-gray-600">
                  Upon termination, your right to use the Service will cease immediately, and we may delete any stored app data.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law and Disputes</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its 
              conflict of law provisions.
            </p>
            <p className="text-gray-600">
              Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in 
              accordance with the rules of [Arbitration Organization].
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated 
              Terms and updating the &ldquo;Last updated&rdquo; date. Your continued use of the Service after changes become effective constitutes 
              acceptance of the updated Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> <span className="text-gray-700">brianna@eshalore.com</span></p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer currentPath="/terms" />
    </div>
  );
}