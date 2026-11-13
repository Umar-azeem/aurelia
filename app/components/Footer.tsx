"use client"
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

const NAME = "NOTARYLY";

export default function Footer() {
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
    <footer className="site-footer">
      <div className="footer-top">
        {/* Brand Logo */}
        <Link
          href="/"
          className="brand"
          aria-label="Notaryly Mobile Notary"
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
            <small>MOBILE NOTARY</small>
          </span>
        </Link>

        {/* Tagline */}
        <p className="hidden md:block">Precision, presence, and a seal you can trust.</p>

        {/* Contact Info Block */}
        <div className="flex flex-col gap-2 text-xs text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>San Francisco Bay Area, CA</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <div className="flex flex-col">
              <a href="tel:4155230179" className="hover:text-[var(--burgundy)] transition-colors">(415) 523-0179</a>
              <a href="tel:6502911514" className="hover:text-[var(--burgundy)] transition-colors">(650) 291-1514</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <a href="mailto:ilazo@changemtg.com" className="hover:text-[var(--burgundy)] transition-colors">ilazo@changemtg.com</a>
          </div>
        </div>

        {/* Social Icons & Book Button */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <Link href="/place-an-order" className="footer-order">
            Book an appointment
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/change-home-mortgage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center transition-transform hover:scale-110"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/changemtg/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#c13584] text-white flex items-center justify-center transition-transform hover:scale-110"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/ChangeHomeMortgage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center transition-transform hover:scale-110"
            >
              <span className="[&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Notaryly. All rights reserved.</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}