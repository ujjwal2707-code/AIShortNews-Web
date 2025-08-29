import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation currentPath="/support" />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600">
            Get help with AI Short News - your intelligent news app. Find answers about app features, troubleshooting, and getting the most out of your news experience.
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Getting Started</h3>
            </div>
            <p className="text-gray-600 mb-4">
              New to AI Short News? Learn how to navigate the app and get the most out of intelligent news summaries.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Downloading and installing the mobile app</li>
              <li>• Navigating the news feed and categories</li>
              <li>• Understanding article summaries and visuals</li>
              <li>• Using bookmark and save features</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">App Features</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Discover all the smart features that make consuming news faster and more engaging.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Intelligent article summaries</li>
              <li>• Custom visuals for each article</li>
              <li>• Smart categorization and organization</li>
              <li>• Bookmarking and article saving</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Privacy & Security</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Learn about app security, data handling, and how we protect your information.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• App security features</li>
              <li>• Local bookmark storage</li>
              <li>• Data protection practices</li>
              <li>• Content delivery and updates</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.865-.833-2.635 0L4.178 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Troubleshooting</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Having issues with the app? Find solutions to common problems and technical difficulties.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• App crashes or freezing</li>
              <li>• Content loading issues</li>
              <li>• Data refresh problems</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How does AI Short News summarize articles?</h3>
              <p className="text-gray-600">
                Our intelligent system analyzes full articles and extracts the most important information to create concise summaries. 
                The AI reads the entire content, identifies key insights, and presents them in an easy-to-digest format that captures 
                the essence of each story. Articles are automatically organized into relevant categories for easy browsing.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How are the images created for each article?</h3>
              <p className="text-gray-600">
                Each article comes with custom-created visuals that help illustrate the content and make complex topics easier to understand. 
                Our system analyzes the article content and generates relevant images that enhance your reading experience and improve comprehension.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What types of news does AI Short News cover?</h3>
              <p className="text-gray-600">
                AI Short News focuses on artificial intelligence and technology news across multiple categories including AI Ethics & Governance, 
                Technology & Development, Industry Applications, Market Strategy, Key Players & Products, and Emerging Tech & Global Trends. 
                We continuously discover and process the latest stories from trusted sources.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do bookmarks work?</h3>
              <p className="text-gray-600">
                You can bookmark articles that interest you for easy access later. Your saved articles are organized in a dedicated bookmarks section, 
                making it simple to return to important stories and build your personal news library.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
            </div>
            <span className="text-xl font-medium text-red-600">
              brianna@eshalore.com
            </span>
          </div>
          <div className="text-sm text-gray-500">
            <p>Average response time: 24 hours</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer currentPath="/support" />
    </div>
  );
}