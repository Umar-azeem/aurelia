import { Eyebrow } from "@/components/site-shell"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Straightforward() {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full p-10">

        {/* LEFT — Image */}
        <div className="relative w-full md:w-1/3 aspect-[4/5] overflow-hidden border-2 border-[var(--line)]">
          <Image
            src="/notary-editorial.png"
            alt="Fountain pen and burgundy wax seal on warm ivory stationery"
            fill
            priority
            sizes="(max-width: 300px) 30vw, 20vw"
            className="object-cover"
          />
          <div className="image-caption">
            <span>01 / 03</span>
            <span>AUTHENTIC. PERSONAL. PRECISE.</span>
          </div>
        </div>

        {/* RIGHT — Copy */}
        <div className="w-full md:w-1/2">
          <Eyebrow>STRAIGHTFORWARD PRICING</Eyebrow>
          <h2>
            Clear from the <em>start.</em>
          </h2>
          <p>
            No guessing games. Your provider confirms availability and any
            applicable fees before your appointment.
          </p>
          <Link href="/pricing" className="text-link">
            View all pricing <ArrowRight size={16} />
          </Link>

          <div className="py-6">
            <div className="price-mini">
              <span>MOBILE NOTARY</span>
              <strong>
                $100 <small>/ up to 8 signatures</small>
              </strong>
              <span>APOSTILLE</span>
              <strong>
                $400 <small>/ up to 2 documents</small>
              </strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Straightforward