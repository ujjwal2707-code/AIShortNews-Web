import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <Navigation currentPath="/contact" />

      {/* Page Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            We’d love to hear from you! If you have questions about our app,
            need support, or want to share feedback, please use the details
            below:
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12l-4 4m0 0l-4-4m4 4V8m8 4a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-700 hover:underline">
                info@eshalore.com
              </span>
            </div>

            {/* Phone (optional, can remove if not needed) */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.49 4.47a1 1 0 01-.27 1.06l-2.2 2.2a16 16 0 006.59 6.59l2.2-2.2a1 1 0 011.06-.27l4.47 1.49a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+1234567890"
                className="text-gray-700 hover:underline"
              >
                ‭+1 (405) 269-1452‬
              </a>
            </div>

            {/* Website */}
            {/* <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <a
                href="https://ai-short-news-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                https://ai-short-news-web.vercel.app/
              </a>
            </div> */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer currentPath="/contact" />
    </div>
  );
}
