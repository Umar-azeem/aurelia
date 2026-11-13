import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/site-shell";

export default function Pricing() {
  return (
    <PageFrame>
      <main>
        {/* =========================================
            1. HERO SECTION (With Image)
            ========================================= */}
        <section className="subpage-hero relative reveal overflow-hidden">
          <div className="relative z-10 max-w-[65%] md:max-w-[55%]">
            <Eyebrow>STRAIGHTFORWARD, UPFRONT</Eyebrow>
            <h1>
              Thoughtful service.
              <br />
              <em>Clear pricing.</em>
            </h1>
            <p>
              We believe you should know what to expect before you get started.
              Final availability and details are confirmed by your provider.
            </p>
          </div>

          {/* Floating Image in Hero */}
          <div className="absolute right-[5%] -translate-y-1/2 w-[28%] aspect-[4/5] hidden md:block z-10 anim-fade-right overflow-hidden border border-[var(--line)] shadow-2xl">
            <Image
              src="/img/cp21.png"
              alt="Notary pricing and documentation"
              fill
              priority
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* =========================================
            2. MOBILE NOTARY PRICING
            ========================================= */}
        <section className="detail-section reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <Eyebrow>PERSONAL, MOBILE NOTARIZATION</Eyebrow>
              <h2 className="m-0">Mobile notary</h2>
            </div>
            
            {/* Editorial Banner Image */}
            <div className="relative w-full md:w-[350px] h-52 overflow-hidden border border-[var(--line)] anim-fade-up hidden md:block">
              <Image
                src="/img/cp22.png"
                alt="Client signing a document"
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="price-cards anim-stagger">
            <article className="price-card">
              <span>ESSENTIAL</span>
              <h3>Up to 8 signatures</h3>
              <strong>
                $100 <small>/ travel included</small>
              </strong>
              <ul>
                <li>Travel within service area included</li>
                <li>Up to 8 signatures notarized</li>
                <li>Same-day appointments may be available</li>
              </ul>
              <Link href="/place-an-order" className="text-link">
                Book mobile notary <ArrowRight size={15} />
              </Link>
            </article>
            <article className="price-card">
              <span>EXTENDED</span>
              <h3>Up to 15 signatures</h3>
              <strong>
                $200 <small>/ travel included</small>
              </strong>
              <ul>
                <li>Travel within service area included</li>
                <li>Up to 15 signatures notarized</li>
                <li>Advance scheduling available</li>
              </ul>
              <Link href="/place-an-order" className="text-link">
                Book mobile notary <ArrowRight size={15} />
              </Link>
            </article>
          </div>
          <p className="fine-print anim-fade-up">
            Appointments are subject to provider availability. The listed price
            includes travel and the stated signature count. Confirm any
            additional requirements with your provider.
          </p>
        </section>

        {/* =========================================
            3. APOSTILLE PRICING
            ========================================= */}
        <section className="detail-section reveal" style={{ background: "#eee8dd" }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <Eyebrow>DOCUMENT AUTHENTICATION</Eyebrow>
              <h2 className="m-0">Apostille services</h2>
            </div>

            {/* Editorial Banner Image */}
            <div className="relative w-full md:w-[350px] h-52 overflow-hidden border border-[var(--line)] anim-fade-up hidden md:block">
              <Image
                src="/img/cp23.png"
                alt="Official wax seal"
                fill
                sizes="300px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="price-cards anim-stagger">
            <article className="price-card">
              <span>CONCIERGE SERVICE</span>
              <h3>Up to 2 documents</h3>
              <strong>
                $400 <small>/ base service</small>
              </strong>
              <ul>
                <li>Necessary notarization</li>
                <li>Document pickup and delivery</li>
                <li>Apostille processing fees included</li>
              </ul>
              <Link href="/place-an-order" className="text-link">
                Place an apostille order <ArrowRight size={15} />
              </Link>
            </article>
            <article className="price-card">
              <span>ADDITIONAL APOSTILLES</span>
              <h3>Each additional document</h3>
              <strong>
                $20 <small>/ each</small>
              </strong>
              <ul>
                <li>Added to the $400 base service</li>
                <li>Document eligibility reviewed</li>
                <li>Processing time subject to public agency</li>
              </ul>
              <Link href="/apostille" className="text-link">
                Learn about apostilles <ArrowRight size={15} />
              </Link>
            </article>
          </div>
          
          <div className="callout anim-fade-up" style={{ marginTop: 24 }}>
            Advertised 24-hour turnaround is conditional on eligible documents,
            complete paperwork, provider availability, and agency processing.
            Public agency delays, corrections, or additional requirements may
            extend the timeline.
          </div>
        </section>
      </main>
    </PageFrame>
  );
}