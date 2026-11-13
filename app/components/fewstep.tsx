import { Eyebrow } from "@/components/site-shell";
import Image from "next/image";
import React from "react";

function Fewstep() {
  return (
    <section className="process-section">
      <Eyebrow>A FEW SIMPLE STEPS</Eyebrow>

      <div className="p-4 flex flex-col md:flex-row items-center gap-8">
       <div>
         <h2>
          From first hello
          <br />
          to <em>all taken care of.</em>
        </h2>
        </div>
        

        <div className="relative w-2/4 aspect-[4/2] hidden md:block overflow-hidden">
          <Image
            src="/img/cp5.png"
            alt="Notary seal, fountain pen and burgundy wax on warm ivory paper"
            fill
            sizes="40vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="process-grid">
        <article>
          <span>01</span>
          <h3>Tell us what you need</h3>
          <p>
            Choose your service and share a few details. We&apos;ll help
            clarify what comes next.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>We confirm the details</h3>
          <p>
            We&apos;ll be in touch to review timing, location, and any
            document requirements.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Consider it handled</h3>
          <p>
            We meet you or guide your documents through the next step with
            care.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Fewstep;