"use client";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import "./header-animations.css";

const NAME = "AURELIA";
const LINKS = [
  { href: "/mobile-notary", label: "Mobile Notary" },
  { href: "/apostille", label: "Apostille" },
  { href: "/pricing", label: "Pricing" },
  { href: "/service-times", label: "Service Times" },
  { href: "/terms", label: "Terms of Service" },
];

function Roll({ children }: { children: string }) {
  return (
    <span className="roll" data-text={children}>
      <span>{children}</span>
    </span>
  );
}

export default function Header() {
  const ringId = useId();
  const wordRef = useRef<HTMLSpanElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [wave, setWave] = useState(false);

  // Condense header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Occasional letter wave across the wordmark
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let off: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setWave(true);
      off = setTimeout(() => setWave(false), 1600);
    }, 8000);
    return () => {
      clearInterval(id);
      clearTimeout(off);
    };
  }, []);

  // 3D tilt that follows the pointer over the brand
  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = wordRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${x * 22}deg`);
    el.style.setProperty("--rx", `${-y * 16}deg`);
  };
  const onLeave = () => {
    const el = wordRef.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  };

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <Link
        href="/"
        className="brand"
        aria-label="Aurelia Document Concierge"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <span className="brand-mark" aria-hidden="true">
          <svg className="brand-ring" viewBox="0 0 100 100">
            <defs>
              <path
                id={ringId}
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
              />
            </defs>
            <text>
              <textPath href={`#${ringId}`} startOffset="0">
                MOBILE NOTARY • MOBILE NOTARY • MOBILE NOTARY •
              </textPath>
            </text>
          </svg>
          <svg
            className="brand-seal"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <circle
              className="seal-circle"
              cx="12"
              cy="12"
              r="9"
              pathLength={1}
            />
            <path className="seal-check" d="M8 12l3 3 5-6" pathLength={1} />
          </svg>
        </span>

        <span className="brand-text">
          <strong
            ref={wordRef}
            className="wordmark"
            data-wave={wave}
            aria-hidden="true"
          >
            {NAME.split("").map((ch, i) => (
              <span key={i} className="letter" style={{ ["--i" as string]: i }}>
                <span className="face front">{ch}</span>
                <span className="face back">{ch}</span>
              </span>
            ))}
          </strong>
          <small>DOCUMENT CONCIERGE</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            <Roll>{l.label}</Roll>
          </Link>
        ))}
      </nav>

      <Link href="/place-an-order" className="button button-dark header-cta">
        <span>Place an Order</span>
        <svg
          className="cta-arrow"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>

      <details className="mobile-nav">
        <summary aria-label="Open menu">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path className="bar b1" d="M4 7h16" />
            <path className="bar b2" d="M4 12h16" />
            <path className="bar b3" d="M4 17h16" />
          </svg>
        </summary>
        <nav aria-label="Mobile">
          {LINKS.map((l, i) => (
            <Link key={l.href} href={l.href} style={{ ["--i" as string]: i }}>
              {l.label}
            </Link>
          ))}
          <Link href="/place-an-order" style={{ ["--i" as string]: LINKS.length }}>
            Place an Order
          </Link>
        </nav>
      </details>
    </header>
  );
}