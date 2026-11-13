import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/site-shell";
import Image from "next/image";
export default function ServiceTimes() {
  return (
    <PageFrame>
      <main>
        <section className="subpage-hero">
          <Eyebrow>TIME THAT WORKS FOR YOU</Eyebrow>
          <h1>
            Availability with <em>room to breathe.</em>
          </h1>
          <p>
            Early, late, same-day—we work around your schedule whenever
            availability allows.
          </p>
        </section>

        <section className="detail-section reveal">
          {/* Header Area with Image */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <Eyebrow>APPOINTMENT WINDOWS</Eyebrow>
              <h2 className="m-0">
                Two services.
                <br />
                <em>Clear next steps.</em>
              </h2>
            </div>

            {/* Editorial Banner Image */}
            <div className="relative w-full md:w-[400px] h-62 overflow-hidden border border-[var(--line)] anim-fade-up hidden md:block">
              <Image
                src="/notary-editorial.png"
                alt="Notary appointment scheduling"
                fill
                sizes="320px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Time Cards */}
          <div className="time-grid anim-stagger">
            <article className="time-card">
              <span>
                <Clock3 size={16} /> &nbsp; MOBILE NOTARY
              </span>
              <h3>At your convenience</h3>
              <strong>6 AM — Midnight</strong>
              <p>
                Same-day appointments may be available. Advance scheduling is
                welcome. All appointments are subject to provider availability.
              </p>
            </article>

            <article className="time-card">
              <span>
                <CalendarDays size={16} /> &nbsp; APOSTILLE
              </span>
              <h3>Carefully coordinated</h3>
              <strong>Advertised 24-hour turnaround</strong>
              <p>
                Timing includes document review, pickup, processing, and
                delivery. Turnaround depends on eligibility, complete paperwork,
                and public agency processing times.
              </p>
            </article>
          </div>
        </section>

        <section className="detail-section" style={{ background: "#eee8dd" }}>
          <div className="detail-two">
            <div>
              <Eyebrow>WHAT HAPPENS NEXT</Eyebrow>
              <h2>
                We&apos;ll confirm
                <br />
                <em>the details.</em>
              </h2>
            </div>
            <div>
              <p>
                Share your preferred date, time, and location in your request.
                We&apos;ll review the details and confirm availability before an
                appointment is finalized.
              </p>
              <div className="callout">
                Submitting an inquiry does not reserve an appointment or
                guarantee a particular processing time.
              </div>
            </div>
          </div>
        </section>
        <section className="closing-cta">
          <Eyebrow>A TIME THAT WORKS FOR YOU</Eyebrow>
          <h2>
            Start with a<br />
            <em>simple request.</em>
          </h2>
          <Link href="/place-an-order" className="button button-cream">
            Place an Order <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </PageFrame>
  );
}
