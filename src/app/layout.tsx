import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 font-sans">
        <div className="min-h-screen flex flex-col items-center">
          <header className="w-full border-b border-neutral-200 py-6 mb-10">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-6">
              <a
                href="/"
                className="text-xl font-semibold text-accent hover:text-accent-dark"
              >
                Nikhil Devisetty
              </a>
              <nav className="flex gap-6 text-sm text-neutral-600">
                <a href="/projects" className="hover:text-accent">
                  Projects
                </a>
                <a
                  href="https://nikhildevisetty.mypixieset.com/"
                  target="_blank"
                  className="hover:text-accent"
                >
                  Photos
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1 w-full max-w-4xl px-6">{children}</main>

          <footer className="w-full border-t border-neutral-200 mt-10 py-6 text-sm text-neutral-500 text-center">
            © {new Date().getFullYear()} Nikhil Devisetty
          </footer>
        </div>
      </body>
    </html>
  );
}
