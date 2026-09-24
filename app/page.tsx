import Link from "next/link";

export default function RootPage() {
  return (
    <main style={{ padding: "48px", fontFamily: "system-ui, sans-serif" }}>
      <meta httpEquiv="refresh" content="0; url=/ko" />
      <p>Redirecting to the Korean portfolio…</p>
      <Link href="/ko">Continue to /ko</Link>
    </main>
  );
}
