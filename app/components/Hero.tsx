import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/site-shell";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <Eyebrow>YOUR DOCUMENTS, IN GOOD HANDS</Eyebrow>
        <h1>
          Professional notary &amp; apostille services,{" "}
          <em>wherever you are.</em>
        </h1>
        <p>
          Reliable, convenient, and multilingual document services delivered
          with care throughout the San Francisco Bay Area.
        </p>
        <div className="hero-actions">
          <Link href="/mobile-notary" className="button button-dark">
            Explore our services <ArrowRight size={16} />
          </Link>
          <Link href="/place-an-order" className="text-link">
            Place an order <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="hero-trust">
          <span>
            <ShieldCheck size={15} /> Care in every detail
          </span>
          <span>
            <MapPin size={15} /> San Francisco Bay Area
          </span>
        </div>
      </div>

      <div className="hero-image-wrap border border-2 border-cream">
        <Image
          src="/notary-editorial.png"
          alt="Fountain pen and burgundy wax seal on warm ivory stationery"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          className="hero-image"
        />
        <div className="image-caption">
          <span>01 / 03</span>
          <span>AUTHENTIC. PERSONAL. PRECISE.</span>
        </div>
      </div>

      <a href="#services" className="scroll-cue" aria-label="Scroll to services">
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
export default Hero;