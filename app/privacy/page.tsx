import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { privacyPolicyData } from "../constants/privacy-policies";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation currentPath="/privacy" />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-4">Last updated: {privacyPolicyData.lastUpdated}</p>
          <p className="text-gray-600">
            This Privacy Policy explains AI Short News&apos; commitment to protecting your privacy. We do not collect, store, or process any personal information when you use our mobile application.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* Highlights */}
          {privacyPolicyData.highlights && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <p className="text-green-800 font-medium mb-2">Privacy Highlights:</p>
              <ul className="list-disc pl-6 text-green-700 space-y-1">
                {privacyPolicyData.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Sections */}
          {privacyPolicyData.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-600 whitespace-pre-line mb-4">{section.content}</p>

              {section.subSection && (
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="font-medium text-gray-900 mb-2">{section.subSection.title}</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    {section.subSection.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer currentPath="/privacy" />
    </div>
  );
}