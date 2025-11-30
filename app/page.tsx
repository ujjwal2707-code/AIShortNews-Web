import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const iosAppStoreLink = 'https://apps.apple.com/in/app/ai-short-news/id6751584429';
const playStoreLink = 'https://play.google.com/store/apps/details?id=com.eshalore.aishortnews';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <Navigation currentPath="/" />

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/ai-news-logo-cropped.png"
              alt="AI Short News Logo"
              width={120}
              height={120}
              className="w-24 h-24 sm:w-32 sm:h-32"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">AI Short</span> News
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Get intelligent, bite-sized summaries of the latest AI and tech news. Save time with smart analysis, custom visuals, and concise summaries perfect for busy professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={iosAppStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-3"
            >
              <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-light">Download on the</span>
                <span className="text-xl font-bold">App Store</span>
              </div>
            </a>
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black transition-colors inline-flex items-center gap-3"
            >
              <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-light">GET IT ON</span>
                <span className="text-xl font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AI Short News?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save time and stay informed with intelligent features designed for busy professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Summaries</h3>
              <p className="text-gray-600">
                Get the key points from lengthy articles in seconds. Our AI extracts the most important information so you can stay informed without spending hours reading.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Storytelling</h3>
              <p className="text-gray-600">
                Every article comes with custom-created visuals that help you understand complex topics at a glance. Perfect for visual learners and quick comprehension.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 2v12a2 2 0 002 2h6a2 2 0 002-2V6M9 10h6M9 14h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Organized & Searchable</h3>
              <p className="text-gray-600">
                Find exactly what you need with smart categorization and powerful search. Articles are automatically organized by topic, making it easy to explore your interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with AI Short News in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download & Start</h3>
              <p className="text-gray-600">Download the AI Short News app from your preferred app store and start exploring immediately. Browse categories and discover news that interests you.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discover & Read</h3>
              <p className="text-gray-600">Browse through intelligent summaries, beautiful visuals, and organized categories. Find the news that matters to you without information overload.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Save & Share</h3>
              <p className="text-gray-600">Bookmark important articles for later reading, share interesting stories, and build your personal knowledge library for easy access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Smarter News Consumption?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join busy professionals who save time with AI-powered news summaries, custom visuals, and intelligent categorization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={iosAppStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
            >
              <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-light">Download on the</span>
                <span className="text-xl font-bold">App Store</span>
              </div>
            </a>
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black transition-colors inline-flex items-center gap-3 border border-white/20"
            >
              <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-light">GET IT ON</span>
                <span className="text-xl font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer currentPath="/" />
    </div>
  );
}

