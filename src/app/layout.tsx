import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nunchi.ai - 눈치',
  description: 'AI가 읽어주는 상대방의 속마음',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gradient-to-b from-pink-50 to-purple-50 text-gray-700">
        {/* 헤더 */}
        <header className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-pink-500">
                Nunchi.ai
              </Link>
              <nav className="flex gap-2">
                <Link href="/consult" className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 text-sm font-medium transition">
                  상담하기
                </Link>
                <Link href="/convert" className="px-4 py-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 text-sm font-medium transition">
                  메시지변환
                </Link>
                <Link href="/login" className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-medium transition">
                  로그인
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* 메인 */}
        <main className="min-h-screen max-w-4xl mx-auto py-8 px-4 w-full">
          {children}
        </main>

        {/* 푸터 */}
        <footer className="bg-white/50 py-6 mt-auto">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-400">
            <p>2024 Nunchi.ai</p>
          </div>
        </footer>
      </body>
    </html>
  );
}