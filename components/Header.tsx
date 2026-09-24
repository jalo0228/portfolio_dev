import Link from "next/link";
import type { Locale } from "@/lib/content";

export default function Header({ locale, suffix = "" }: { locale: Locale; suffix?: string }) {
  const other = locale === "ko" ? "en" : "ko";
  const isDetail = Boolean(suffix);

  return (
    <header className={`site-header ${isDetail ? "site-header-detail" : "site-header-home"}`}>
      <Link className="brand" href={`/${locale}`}>YOUHYUN KIM</Link>

      {isDetail && (
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href={`/${locale}#experience`}>Experience</Link>
          <Link href={`/${locale}#projects`}>Projects</Link>
          <Link href={`/${locale}#skills`}>Skills</Link>
        </nav>
      )}

      <Link
        className="lang-switch"
        href={`/${other}${suffix}`}
        aria-label={`Switch to ${other === "ko" ? "Korean" : "English"}`}
      >
        {locale === "ko" ? "KO / EN" : "EN / KO"}
      </Link>
    </header>
  );
}
