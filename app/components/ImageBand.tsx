import Link from 'next/link';

export default function ImageBand() {
  return (
    <section className="image-band reveal">
      <div className="image-band-media">
        <img
          src="/images/notary-signing.jpg"
          alt="Notary sealing a document at a wooden desk"
          loading="lazy"
        />
        <span className="image-band-tag">Verified · In Person</span>
      </div>

      <div className="image-band-copy">
        <p className="eyebrow"><span></span> Our Standard</p>
        <h2>Precision in every <em>signature</em>.</h2>
        <p>
          Every document is reviewed, sealed, and logged with the same care a
          craftsman gives a final stroke — no shortcuts, no ambiguity.
        </p>
        <ul className="image-band-list">
          <li><i>01</i> State-commissioned notaries</li>
          <li><i>02</i> Dual-verification of identity</li>
          <li><i>03</i> Same-day appointment windows</li>
        </ul>
        <Link href="/process" className="text-link">
          See the process <span>→</span>
        </Link>
      </div>
    </section>
  );
}