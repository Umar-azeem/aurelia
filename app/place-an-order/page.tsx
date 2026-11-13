import { PageFrame, Eyebrow } from "@/components/site-shell";
import { OrderForm } from "@/components/order-form";

export default function PlaceAnOrder() {
  return (
    <PageFrame>
      <main className="order-page">
        <div className="order-page-head reveal">
          <Eyebrow>A PERSONAL DOCUMENT CONCIERGE</Eyebrow>
          <h1>
            Place an <em>order.</em>
          </h1>
          <p>Five simple steps to help us understand what you need.</p>
        </div>
        
        {/* The form component handles everything */}
        <OrderForm />
        
      </main>
    </PageFrame>
  );
}