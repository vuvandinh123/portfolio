import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pb-12 pt-5 sm:pb-24 sm:pt-12 px-6"
      )}
    >
      {children}
      <Navbar />
    </div>
  );
}
