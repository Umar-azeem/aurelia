import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck2, Stamp, Truck } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/site-shell";

export default function Apostille() {
  return (
    <PageFrame>
      <main>
        {/* =========================================
            1. HERO SECTION (With Image)
            ========================================= */}
        <section className="subpage-hero relative reveal overflow-hidden">
          <div className="relative z-10 max-w-[65%] md:max-w-[55%]">
            <Eyebrow>INTERNATIONAL DOCUMENT AUTHENTICATION</Eyebrow>
            <h1>
              Professional apostille services in the{" "}
              <em>San Francisco Bay Area.</em>
            </h1>
            <p>
              Clear guidance and careful coordination for documents headed abroad.
            </p>
          </div>

          {/* Floating Image in Hero */}
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[28%] aspect-[4/5] hidden md:block z-10 anim-fade-right overflow-hidden border border-[var(--line)] shadow-2xl">
            <Image
              src="/img/cp1.png"
              alt="Apostille stamp and wax seal"
              fill
              priority
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* =========================================
            2. WHAT IT DOES (Image Left, Text Right)
            ========================================= */}
        <section className="detail-section reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--line)] anim-fade-left">
              <Image
                src="/img/cp16.png"
                alt="International document preparation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="anim-fade-right">
              <Eyebrow>WHAT AN APOSTILLE DOES</Eyebrow>
              <h2 className="mb-6">
                One document.
                <br />
                <em>Recognized abroad.</em>
              </h2>
              
              <p className="mb-4 text-[var(--muted)] text-sm leading-relaxed">
                An apostille is a certificate issued by a designated government
                authority that authenticates the origin of a public document for
                use in another country that is party to the 1961 Hague Apostille
                Convention.
              </p>
              <p className="mb-6 text-[var(--muted)] text-sm leading-relaxed">
                It verifies the authenticity of a signature, the capacity in
                which the person signing acted, and—where applicable—the
                identity of the seal or stamp.
              </p>
              
              <div className="callout">
                An apostille does not validate the contents of a document,
                replace a translation, or guarantee acceptance for every
                purpose. Requirements vary by destination country and receiving
                authority; confirm requirements before ordering.
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
              <Eyebrow>A CLEARER PROCESS</Eyebrow>
              <h2 className="m-0">
                Care at <em>every handoff.</em>
              </h2>
            </div>
            
            {/* Right Header Image */}
            <div className="relative w-full md:w-1/3 h-40 overflow-hidden border border-[var(--line)] anim-fade-up">
              <Image
                src="/img/cp14.png"
                alt="Document verification"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="process-timeline anim-stagger">
            <article>
              <span><FileCheck2 size={17} /></span>
              <h3>Document review</h3>
              <p>
                We review the document type and destination requirements before
                processing. Eligibility and any notarization needs are confirmed
                with you.
              </p>
            </article>
            <article>
              <span><Stamp size={17} /></span>
              <h3>Authentication</h3>
              <p>
                We coordinate necessary notarization and apostille processing
                through the appropriate public authority.
              </p>
            </article>
            <article>
              <span><Truck size={17} /></span>
              <h3>Pickup &amp; delivery</h3>
              <p>
                We arrange document pickup and delivery as part of the service,
                with timing confirmed based on eligibility and agency
                processing.
              </p>
            </article>
          </div>
          
          <div className="callout anim-fade-up" style={{ marginTop: 22 }}>
            Advertised 24-hour turnaround is subject to document eligibility,
            complete and accurate paperwork, appointment availability, and
            public agency processing times. Agency delays or additional
            requirements may affect timing.
          </div>
        </section>

        {/* =========================================
            4. PRICING SECTION (Image Top, Cards Below)
            ========================================= */}
        <section className="detail-section reveal">
          <div className="detail-two">
            <div>
              <Eyebrow>BAY AREA COVERAGE</Eyebrow>
              <h2>
                Local reach,
                <br />
                <em>global purpose.</em>
              </h2>
              <p className="mt-6 mb-4">
                Apostille coordination is available in five Bay Area counties:
              </p>
              <div className="service-area-tags">
                {[
                  "San Francisco",
                  "San Mateo",
                  "Contra Costa",
                  "Alameda",
                  "Marin",
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
               <div className="relative w-full my-25 aspect-[3/2] overflow-hidden border border-[var(--line)] mb-8 anim-fade-up">
                <Image
                  src="/img/cp11.png"
                  alt="Official stamps and seals"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div>
              {/* Top Image */}
              <div className="relative w-full aspect-[3/2] overflow-hidden border border-[var(--line)] mb-8 anim-fade-up">
                <Image
                  src="/img/cp10.png"
                  alt="Official stamps and seals"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Price Cards */}
              <div className="price-cards !mt-0 anim-stagger">                <article className="price-card">
                  <span>DOCUMENT CONCIERGE</span>
                  <strong>
                    $400 <small>/ up to 2 documents</small>
                  </strong>
                  <ul>
                    <li>Necessary notarization</li>
                    <li>Document pickup and delivery</li>
                    <li>Apostille processing fees</li>
                  </ul>
                  <Link href="/place-an-order" className="text-link">
                    Place an apostille order <ArrowRight size={15} />
                  </Link>
                </article>
                <article className="price-card">
                  <span>ADDITIONAL DOCUMENTS</span>
                  <strong>
                    $20 <small>/ each additional apostille</small>
                  </strong>
                  <ul>
                    <li>Added to the base service</li>
                    <li>Eligibility confirmed before processing</li>
                    <li>Timing depends on agency processing</li>
                  </ul>
                  <Link href="/pricing" className="text-link">
                    See all pricing <ArrowRight size={15} />
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CLOSING CTA
            ========================================= */}
        <section className="closing-cta reveal">
          <Eyebrow>LET&apos;S GET STARTED</Eyebrow>
          <h2>
            We&apos;ll help make
            <br />
            <em>the next step clear.</em>
          </h2>
          <Link href="/place-an-order" className="button button-cream">
            Place an Apostille Order <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </PageFrame>
  );
}