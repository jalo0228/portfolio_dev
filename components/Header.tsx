import Link from "next/link";
import type { Locale } from "@/lib/content";

export default function Header({ locale, suffix = "" }: { locale: Locale; suffix?: string }) {
  const other = locale === "ko" ? "en" : "ko";
  return (
    <header className="site-header">
      <Link className="brand" href={`/${locale}`}>KIM YOUHYUN</Link>
      <nav className="nav-links" aria-label="Primary navigation">
        <Link href={`/${locale}#about`}>About</Link>
        <Link href={`/${locale}#projects`}>Projects</Link>
        <Link href={`/${locale}#skills`}>Skills</Link>
        <Link href={`/${locale}#experience`}>Experience</Link>
        <Link href={`/${locale}#contact`}>Contact</Link>
      </nav>
      <Link className="lang-switch" href={`/${other}${suffix}`} aria-label={`Switch to ${other === "ko" ? "Korean" : "English"}`}>
        {locale === "ko" ? "KO / EN" : "EN / KO"}
      </Link>
    </header>
  );
}
