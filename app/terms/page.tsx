import { PageFrame, Eyebrow } from "@/components/site-shell";
export default function Terms() {
  return (
    <PageFrame>
      <main>
        <section className="subpage-hero">
          <Eyebrow>IMPORTANT DETAILS</Eyebrow>
          <h1>
            Terms of <em>service.</em>
          </h1>
          <p>
            Service details and availability are confirmed directly with your
            provider.
          </p>
        </section>
        <article className="info-section">
          <div className="callout">
            This prototype does not accept or confirm real bookings. No payment
            is collected, appointment reserved, file transmitted, or email sent.
          </div>
          <h2>Appointments and availability</h2>
          <p>
            Mobile notary appointments are subject to provider availability.
            Submitting an order inquiry is not a confirmed appointment.
          </p>
          <h2>Apostille processing</h2>
          <p>
            Document eligibility and destination-country requirements vary.
            Apostille certification authenticates the origin of a public
            document; it does not certify its contents or guarantee acceptance.
            Advertised turnaround is conditional on document eligibility,
            complete paperwork, and public agency processing time.
          </p>
          <h2>Pricing</h2>
          <p>
            Prices shown are service estimates as described on this site. Final
            scope, timing, and any applicable charges should be confirmed with
            the provider before service begins.
          </p>
          <h2>Use of the demo</h2>
          <p>
            Do not submit real personal or confidential information through this
            prototype. It is provided for design demonstration only and does not
            create a provider-customer relationship.
          </p>
        </article>
      </main>
    </PageFrame>
  );
}
