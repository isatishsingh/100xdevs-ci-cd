import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Congratulations, Preeti Rai!",
  description: "Celebrating Preeti Rai's Master of Computer Application achievement.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
