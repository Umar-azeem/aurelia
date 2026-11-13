import { Eyebrow } from "@/components/site-shell";
import { ArrowUpRight, ShieldCheck, Sparkles, Stamp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Wehelp() {
  return (
    <>
      <section className="section services-section" id="services">
        <div className="section-heading reveal">
          <div>
            <Eyebrow>HOW WE CAN HELP</Eyebrow>
            <h2>
              Good work, <em>made simpler.</em>
            </h2>
          </div>
          <p>
            Clear guidance and personal service for the moments that call for a
            little more care.
          </p>
        </div>

        <div className="service-grid anim-stagger">
          <Link href="/mobile-notary" className="service-card">
            <span className="card-index">01 / PERSONAL SERVICE</span>
            <span className="service-icon">
              <Sparkles />
            </span>
            <h3>Mobile Notary</h3>
            <p>
              Professional notarization, right where you need it. Same-day
              visits available from 6 AM to midnight.
            </p>
            <span className="card-bottom">
              <b>From $100</b>
              <i>
                <ArrowUpRight size={17} />
              </i>
            </span>
          </Link>

          <Link href="/apostille" className="service-card service-card-accent">
            <span className="card-index">02 / INTERNATIONAL</span>
            <span className="service-icon">
              <ShieldCheck />
            </span>
            <h3>Apostille Services</h3>
            <p>
              Document authentication made clear—from eligibility review to a
              careful handoff.
            </p>
            <span className="card-bottom">
              <b>From $400</b>
              <i>
                <ArrowUpRight size={17} />
              </i>
            </span>
          </Link>

          <Link
            href="/service-times"
            className="service-card !flex-row !p-0 overflow-hidden"
          >
            <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
              <div>
                <span className="card-index">03 / SCHEDULING</span>
                <span className="service-icon">
                  <Stamp />
                </span>
                <h3>Service Times</h3>
                <p>
                  Early mornings, evenings, and weekends — appointments that fit
                  your day, not ours.
                </p>
              </div>
              <span className="card-bottom">
                <b>6 AM — Midnight</b>
                <i>
                  <ArrowUpRight size={17} />
                </i>
              </span>
            </div>

            <div className="relative w-2/5 min-h-[260px] hidden md:block">
              <Image
                src="/img/cp5.png"
                alt="Notary seal, fountain pen and burgundy wax on warm ivory paper"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </Link>
        </div>

        {/* ---------- IMAGE SECTION (3rd block, editorial) ---------- */}
        <div className="wehelp-image-band reveal">
          <div className="wehelp-image-media">
            <Image
              src="/img/cp2.png"
              alt="Notary seal, fountain pen and burgundy wax on warm ivory paper"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              className="wehelp-image"
            />
            <span className="wehelp-image-tag">CARE, IN EVERY DETAIL</span>

            {/* Motion graphic: floating seal badge */}
            <div className="wehelp-seal-badge" aria-hidden="true">
              <svg viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#b6975b"
                  strokeWidth="0.6"
                  strokeDasharray="3 4"
                />
                <text
                  fontFamily="Inter, sans-serif"
                  fontSize="6.5"
                  letterSpacing="1.6"
                  fill="#702d38"
                >
                  <textPath href="#circlePath">
                    AURELIA · DOCUMENT CONCIERGE · SAN FRANCISCO ·&nbsp;
                  </textPath>
                </text>
                <text
                  x="50"
                  y="58"
                  textAnchor="middle"
                  fontFamily="Cormorant Garamond, serif"
                  fontSize="30"
                  fontStyle="italic"
                  fill="#702d38"
                >
                  A
                </text>
              </svg>
            </div>
          </div>

          <div className="wehelp-image-copy">
            <Eyebrow>WHY IT FEELS DIFFERENT</Eyebrow>
            <h2>
              Paperwork, <em>with presence.</em>
            </h2>
            <p>
              We treat every document like it matters — because to you, it does.
              From the first handshake to the final seal, care is in every
              detail.
            </p>

            <ul className="wehelp-image-list">
              <li>
                <i>01</i>
                <span>Seal, journal and stamp — brought to you</span>
              </li>
              <li>
                <i>02</i>
                <span>Identity verified with dual-check precision</span>
              </li>
              <li>
                <i>03</i>
                <span>Every act logged, every signature witnessed</span>
              </li>
            </ul>

            <Link href="/mobile-notary" className="text-link">
              Learn about our service <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wehelp;
