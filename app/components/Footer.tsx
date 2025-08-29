import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  currentPath?: string;
}

export default function Footer({ currentPath = "/" }: FooterProps) {
  const isActive = (path: string) => currentPath === path;

  return (
    <footer className="bg-gray-800 text-gray-300 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link 
            href="/" 
            className={`${
              isActive('/') 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            } transition-colors`}
          >
            Home
          </Link>
          <Link 
            href="/support" 
            className={`${
              isActive('/support') 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            } transition-colors`}
          >
            Support
          </Link>
          <Link 
            href="/privacy" 
            className={`${
              isActive('/privacy') 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            } transition-colors`}
          >
            Privacy
          </Link>
          <Link 
            href="/terms" 
            className={`${
              isActive('/terms') 
                ? 'text-white' 
                : 'text-gray-400 hover:text-white'
            } transition-colors`}
          >
            Terms
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">By Eshalore</span>
            <Image 
              src="/eshalore.png" 
              alt="Eshalore" 
              width={80} 
              height={20}
              className="h-5 w-auto"
            />
          </div>
          <p className="text-gray-400">
            © 2025 AI Short News. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}