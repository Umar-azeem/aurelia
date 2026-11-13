import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Languages, Clock3 } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/site-shell";

export default function MobileNotary() {
  return (
    <PageFrame>
      <main>
        {/* =========================================
            1. HERO SECTION (With Image)
            ========================================= */}
        <section className="subpage-hero relative reveal overflow-hidden">
          <div className="relative z-10 max-w-[65%] md:max-w-[55%]">
            <Eyebrow>PERSONAL SERVICE, RIGHT WHERE YOU ARE</Eyebrow>
            <h1>
              Professional mobile notary services. <em>We come to you.</em>
            </h1>
            <p>
              On-demand, reliable, and multilingual notary public services at your
              doorstep.
            </p>
          </div>

          {/* Floating Image in Hero */}
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[38%] aspect-[3/2] hidden md:block z-10 anim-fade-right overflow-hidden border border-[var(--line)] shadow-2xl">
            <Image
              src="/img/cp6.png"
              alt="Mobile notary meeting a client"
              fill
              priority
              
              className=""
            />
          </div>
        </section>

        {/* =========================================
            2. FEATURES SECTION (Image Left, Text Right)
            ========================================= */}
        <section className="detail-section reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Image */}
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-[var(--line)] anim-fade-left">
              <Image
                src="/img/cp7.png"
                alt="Fountain pen signing a document"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="anim-fade-right">
              <Eyebrow>NOTARIZATION, MADE CONVENIENT</Eyebrow>
              <h2 className="mb-6">
                Your place.
                <br />
                <em>Your schedule.</em>
              </h2>
              <p className="mb-10 text-[var(--muted)] text-sm leading-relaxed max-w-[480px]">
                Skip the extra trip. Our mobile notary meets you at home, at work,
                or somewhere convenient—bringing professional, careful service to
                your day. Same-day appointments may be available, subject to
                provider availability.
              </p>

              <div className="feature-grid !mt-0">
                <article className="feature-card">
                  <span><MapPin /></span>
                  <div>
                    <h3>Convenience first</h3>
                    <p>We travel to you throughout San Francisco and San Mateo Counties.</p>
                  </div>
                </article>
                <article className="feature-card">
                  <span><Languages /></span>
                  <div>
                    <h3>No language barriers</h3>
                    <p>Service available in English, Español, and Русский.</p>
                  </div>
                </article>
                <article className="feature-card">
                  <span><Clock3 /></span>
                  <div>
                    <h3>Flexible scheduling</h3>
                    <p>Appointments from 6 AM until midnight, subject to availability.</p>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            3. PROCESS SECTION (Image Right, Timeline Below)
            ========================================= */}
        <section className="detail-section reveal" style={{ background: "#eee8dd" }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="md:w-1/2">
              <Eyebrow>HOW IT WORKS</Eyebrow>
              <h2 className="m-0">Three simple steps.</h2>
            </div>
            
            {/* Right Header Image */}
            <div className="relative w-full md:w-2/3 h-60 overflow-hidden border border-[var(--line)] anim-fade-up">
              <Image
                src="/img/cp5.png"
                alt="Notary wax seal"
                fill
                sizes="(max-width: 768px) 100vw, 43vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="process-timeline anim-stagger">
            <article>
              <span>01 — GET IN TOUCH</span>
              <h3>Tell us what you need</h3>
              <p>Share your location, timing, and the number of signatures.</p>
            </article>
            <article>
              <span>02 — WE COME TO YOU</span>
              <h3>Choose a convenient place</h3>
              <p>We confirm availability and meet you at your chosen location.</p>
            </article>
            <article>
              <span>03 — DONE ON THE SPOT</span>
              <h3>Leave it to us</h3>
              <p>We complete the notarization with care and attention to detail.</p>
            </article>
          </div>
        </section>

        {/* =========================================
            4. PRICING SECTION (Image Top, Cards Below)
            ========================================= */}
        <section className="detail-section reveal">
          <div className="detail-two">
            <div>
              <Eyebrow>UPFRONT PRICING</Eyebrow>
              <h2>
                Simple, <em>straightforward.</em>
              </h2>
            </div>
 <div className="relative w-full aspect-[3/2] overflow-hidden border border-[var(--line)]  anim-fade-up">
                <Image
                  src="/img/cp8.png"
                  alt="Document signing stationary"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-bottom"
                />
              </div>
            <div>
              {/* Top Image */}
             
              {/* Price Cards */}
              <div className="price-cards !mt-0 anim-stagger">
                <article className="price-card">
                  <span>ESSENTIAL</span>
                  <strong>
                    $100 <small>/ up to 8 signatures</small>
                  </strong>
                  <ul>
                    <li>Travel included</li>
                    <li>Up to 8 signatures notarized</li>
                  </ul>
                  <Link href="/place-an-order" className="text-link">
                    Book this service <ArrowRight size={15} />
                  </Link>
                </article>
                <article className="price-card">
                  <span>EXTENDED</span>
                  <strong>
                    $200 <small>/ up to 15 signatures</small>
                  </strong>
                  <ul>
                    <li>Travel included</li>
                    <li>Up to 15 signatures notarized</li>
                  </ul>
                  <Link href="/place-an-order" className="text-link">
                    Book this service <ArrowRight size={15} />
                  </Link>
                </article>
              </div>
            
            </div>
          </div>
          
          <div className="callout anim-fade-up" style={{ marginTop: 25 }}>
            Appointments are subject to provider availability. Notary fees and
            travel are included in the prices above for the stated signature
            limits; additional services may require a separate quote.
          </div>
        </section>

        {/* =========================================
            CLOSING CTA
            ========================================= */}
        <section className="closing-cta reveal">
          <Eyebrow>READY WHEN YOU ARE</Eyebrow>
          <h2>
            Let&apos;s make this
            <br />
            <em>the easy part.</em>
          </h2>
          <Link href="/place-an-order" className="button button-cream">
            Book Your Mobile Notary <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </PageFrame>
  );
}