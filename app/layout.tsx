import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youhyun Kim | AI Agent Developer",
  description: "AI Agent developer portfolio focused on RAG, GraphRAG, and Multi-Agent Architecture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
