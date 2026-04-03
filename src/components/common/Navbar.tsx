"use client";

import { useState } from "react"; // Added for mobile state
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/common/ThemeToggle";
import { NAV_LINKS } from "@/constants";
import { Menu, X } from "lucide-react"; // Import icons
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Menu starts closed

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo Section */}
        <Link href="/" className={styles.logo} aria-label="Home">
          <div className={styles.logoBox}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="7" height="7" rx="1" fill="currentColor" opacity="0.4"/>
              <rect x="11" y="2" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="2" y="11" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="11" y="11" width="7" height="7" rx="1" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
        </Link>

        {/* Desktop Links (Will be hidden on mobile via CSS) */}
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

        {/* Right side Actions */}
        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/contact" className={`${styles.ctaBtn} ${styles.desktopOnly}`}>
            GET IN TOUCH
          </Link>

          {/* Mobile Burger Button */}
          <button 
            className={styles.burger} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href} onClick={() => setIsOpen(false)}>
              <Link
                href={link.href}
                className={pathname === link.href ? styles.active : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li onClick={() => setIsOpen(false)}>
            <Link href="/contact" className={styles.mobileCta}>
              GET IN TOUCH
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}