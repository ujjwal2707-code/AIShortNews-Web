import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { termsOfServiceData } from "../constants/terms-of-service";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation currentPath="/terms" />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 mb-4">Last updated: {termsOfServiceData.lastUpdated}</p>
          <p className="text-gray-600">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of AI Short News (&ldquo;Service&rdquo;) provided by AI Short News (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            By accessing or using our Service, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {termsOfServiceData.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>

              {section.content && (
                <p className="text-gray-600 whitespace-pre-line mb-4">{section.content}</p>
              )}

              {section.subSections && (
                <div className="space-y-4">
                  {section.subSections.map((subSection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{subSection.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{subSection.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer currentPath="/terms" />
    </div>
  );
}