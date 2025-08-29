import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation currentPath="/privacy" />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600">
            This Privacy Policy explains AI Short News&apos; commitment to protecting your privacy. We do not collect, store, or process any personal information when you use our mobile application.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* No Data Collection */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. No Personal Data Collection</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 font-medium mb-2">Privacy-First Approach:</p>
              <p className="text-green-700">
                AI Short News does not collect, store, or process any personal information or user data. The app operates entirely offline for your privacy and security.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">What We DON&apos;T Collect</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Device identifiers or tracking information</li>
                  <li>Usage data or reading preferences</li>
                  <li>Location data of any kind</li>
                  <li>Analytics or performance data</li>
                  <li>Cookies or similar tracking technologies</li>
                  <li>Any other personal or behavioral data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">How the App Works</h3>
                <p className="text-gray-600">
                  AI Short News displays pre-processed news content that is generated and updated on our servers. No user interaction data is transmitted back to our servers. All bookmarking and preferences are stored locally on your device only.
                </p>
              </div>
            </div>
          </section>

          {/* App Functionality */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. App Functionality</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Display AI-generated news summaries and related images</li>
              <li>Provide organized content categories for easy browsing</li>
              <li>Allow local bookmarking (stored only on your device)</li>
              <li>Deliver a seamless reading experience without data collection</li>
              <li>Operate without requiring any user registration or login</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              Our app does not integrate with any third-party analytics, tracking, or advertising services. We do not share any data with third parties because we don&apos;t collect any data to share.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium mb-2">Content Source:</p>
              <p className="text-blue-700">
                News content is processed on our servers using AI services, but no user data or device information is involved in this process.
              </p>
            </div>
          </section>

          {/* App Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. App Security</h2>
            <p className="text-gray-600 mb-4">
              Since we don&apos;t collect any personal data, there&apos;s no risk of your personal information being compromised. However, we still maintain security best practices:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Secure content delivery from our servers</li>
              <li>Regular security updates to the app</li>
              <li>No data transmission that could compromise privacy</li>
              <li>Local storage only (bookmarks remain on your device)</li>
            </ul>
          </section>

          {/* Local Data Only */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Local Data Storage</h2>
            <p className="text-gray-600 mb-4">
              The only data stored by AI Short News is kept locally on your device:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Bookmarked articles (stored locally on your device)</li>
              <li>App preferences and settings (stored locally)</li>
              <li>This local data is never transmitted to our servers</li>
              <li>Uninstalling the app removes all local data completely</li>
            </ul>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Privacy Rights</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 font-medium mb-2">Complete Privacy Control:</p>
              <p className="text-green-700">
                Since we don&apos;t collect any personal data, you have complete control over your privacy by default. There&apos;s no personal information to access, correct, or delete because none is collected.
              </p>
            </div>
            <p className="text-gray-600">
              Your only data (bookmarks and preferences) remains entirely on your device under your control. You can clear this data anytime through your device settings or by uninstalling the app.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-gray-600">
              AI Short News is suitable for users of all ages since we don&apos;t collect any personal information from anyone, including children. 
              Parents can be confident that no personal data is collected, stored, or transmitted when their children use the app.
            </p>
          </section>

          {/* International Usage */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Usage</h2>
            <p className="text-gray-600">
              Since AI Short News doesn&apos;t collect any personal data, there are no privacy concerns related to international data transfers. 
              Users worldwide can enjoy the same level of privacy protection regardless of their location.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our 
              website and updating the &ldquo;Last updated&rdquo; date. Your continued use of our services after changes become effective constitutes acceptance 
              of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> <span className="text-gray-700">brianna@eshalore.com</span></p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer currentPath="/privacy" />
    </div>
  );
}