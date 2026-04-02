"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/common/ThemeToggle";
import { NAV_LINKS } from "@/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Home">
          <div className={styles.logoBox}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="2"  y="2"  width="7" height="7" rx="1" fill="currentColor" opacity="0.4"/>
              <rect x="11" y="2"  width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="2"  y="11" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="11" y="11" width="7" height="7" rx="1" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
        </Link>

        {/* Nav links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + CTA */}
        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/contact" className={styles.ctaBtn}>GET IN TOUCH</Link>
        </div>

      </div>
    </nav>
  );
}