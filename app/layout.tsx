import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Balaji N - Full Stack Java Developer',
  description: 'Portfolio of Balaji N - Full Stack Developer specializing in Java, Spring Boot, React.js, and scalable web applications.',
  keywords: [
    'Balaji N',
    'Full Stack Developer',
    'Java Developer',
    'Spring Boot',
    'React.js',
    'MongoDB',
    'portfolio',
    'web development',
    'backend developer',
    'frontend developer',
    'MERN stack',
    'REST API',
    'Docker',
    'CI/CD',
  ],
  icons: {
    icon: '/assets/bn-logo.svg',
  },
  authors: [{ name: 'Balaji N' }],
  viewport: 'width=device-width, initial-scale=1',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}