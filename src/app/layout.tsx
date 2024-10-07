import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
const fontSans = FontSans({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        <Script id="add-copy-buttons" strategy="afterInteractive">
          {`
    function addCopyButtons() {
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((codeBlock) => {
        const container = codeBlock.parentNode;
        if (!container.querySelector('.copy-button')) {
          const button = document.createElement('button');
          button.className = 'copy-button px-2 py-[1px] top-[5px] text-sm right-[5px] absolute bg-[#4a4a4a] text-white border-[1px] border-[#4a4a4a] border-solid rounded-[3px] cursor-pointer opacity-0 transition-opacity ease-in-out';
          button.textContent = 'Copy';
          button.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.textContent).then(() => {
              button.textContent = 'Copied!';
              setTimeout(() => {
                button.textContent = 'Copy';
              }, 2000);
            }).catch(err => {
              console.error('Failed to copy: ', err);
              button.textContent = 'Error!';
            });
          });

          container.style.position = 'relative';
          container.appendChild(button);

          container.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
          });
          container.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
          });
        }
      });
    }

    addCopyButtons();
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          addCopyButtons();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  `}
        </Script>
      </body>
    </html>
  );
}
