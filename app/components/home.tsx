import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Languages,
  MapPin,
} from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/site-shell";
import Hero from "./Hero";
import Wehelp from "./wehelp";
import Fewstep from "./fewstep";
import Straightforward from "./straightforward";

export default function Home() {
  return (
    <PageFrame>
      <main>
        <Hero />
        <section className="intro-strip">
          <p>
            DOCUMENTS DESERVE A<br />
            <em>PERSONAL TOUCH.</em>
          </p>
          <span className="intro-rule" />
          <p>
            From a single signature to international document authentication, we
            make every step feel considered.
          </p>
          <span className="intro-number">01 — 06</span>
        </section>
        <Wehelp />

        <section className="why-section">
          <div className="why-title">
            <Eyebrow>THE AURELIA DIFFERENCE</Eyebrow>
            <h2>
              Professional care.
              <br/>
              <em>Personal by nature.</em>
            </h2>
            <p>
              Because important paperwork should feel less complicated, and a
              lot more human.
            </p>
          </div>
          <div className="why-list">
            <article>
              <span>01</span>
              <div>
                <h3>We come to you</h3>
                <p>
                  Your home, office, or a convenient meeting point across San
                  Francisco and San Mateo Counties.
                </p>
              </div>
              <MapPin />
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>We speak your language</h3>
                <p>
                  Friendly service in English, Español, and Русский—so the
                  details are always clear.
                </p>
              </div>
              <Languages />
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Your time matters</h3>
                <p>
                  Same-day appointments and flexible scheduling, from early
                  morning through late evening.
                </p>
              </div>
              <Clock3 />
            </article>
          </div>
        </section>

      
        <Fewstep/>

        <section className="areas-band">
          <div>
            <Eyebrow>ROOTED IN THE BAY</Eyebrow>
            <h2>
              Close by, <em>wherever you are.</em>
            </h2>
            <p>
              Mobile notary service across San Francisco and San Mateo.
              Apostille coordination in five Bay Area counties.
            </p>
          </div>
          <div className="area-list">
            <span>San Francisco</span>
            <span>San Mateo</span>
            <span>Alameda</span>
            <span>Marin</span>
            <span>Contra Costa</span>
          </div>
        </section>

        <Straightforward />

        <section className="closing-cta">
          <span className="seal-mark">A</span>
          <Eyebrow>HERE WHEN YOU NEED US</Eyebrow>
          <h2>
            Let&apos;s take care
            <br />
            of <em>the details.</em>
          </h2>
          <Link href="/place-an-order" className="button button-cream">
            Place an Order <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </PageFrame>
  );
}