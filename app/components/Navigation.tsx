import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath = "/" }: NavigationProps) {
  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/ai-news-logo-cropped.png" 
                alt="AI Short News Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-gray-900">AI Short News</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/support" 
              className={`${
                isActive('/support') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Support
            </Link>
            <Link 
              href="/privacy" 
              className={`${
                isActive('/privacy') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className={`${
                isActive('/terms') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}