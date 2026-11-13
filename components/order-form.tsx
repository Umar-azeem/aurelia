"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  ShieldCheck,
  Upload,
  X,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Eyebrow } from "@/components/site-shell";

const steps = ["Service", "Your details", "Service details", "Documents", "Review"];

type FormValues = {
  service: string;
  name: string;
  email: string;
  phone: string;
  language: string;
  location: string;
  date: string;
  time: string;
  signatures: string;
  documents: string;
  country: string;
  docType: string;
  pickup: string;
  delivery: string;
  notes: string;
};

const initial: FormValues = {
  service: "",
  name: "",
  email: "",
  phone: "",
  language: "English",
  location: "",
  date: "",
  time: "",
  signatures: "1",
  documents: "1",
  country: "",
  docType: "",
  pickup: "",
  delivery: "",
  notes: "",
};

export function OrderForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initial);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormValues, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  const updateFiles = (list: FileList | null) => {
    if (!list) return;
    const next = Array.from(list);
    const valid = next.filter(
      (file) =>
        ["application/pdf", "image/jpeg", "image/png", "image/webp"].includes(
          file.type,
        ) && file.size <= 10 * 1024 * 1024,
    );
    if (valid.length !== next.length)
      setError("Choose PDF, JPG, PNG, or WEBP files up to 10 MB each.");
    else {
      setError("");
      setFiles((current) => [...current, ...valid].slice(0, 5));
    }
  };

  const canContinue = () => {
    if (step === 0 && !form.service) return false;
    if (
      step === 1 &&
      (!form.name || !form.email || !form.phone || !form.location)
    )
      return false;
    if (
      step === 2 &&
      (form.service === "Mobile Notary"
        ? !form.date || !form.time
        : !form.country || !form.docType || !form.pickup || !form.delivery)
    )
      return false;
    return true;
  };

  const next = () => {
    if (!canContinue()) {
      setError("Please complete the required fields before continuing.");
      return;
    }
    setError("");
    setStep((value) => Math.min(4, value + 1));
  };

  const price =
    form.service === "Apostille"
      ? 400 + Math.max(0, Number(form.documents) - 2) * 20
      : Number(form.signatures) > 8
        ? 200
        : 100;

  const submit = () => {
    const emailBody = `
New Order Request
---------------------------------
Service: ${form.service}
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Language: ${form.language}

Location: ${form.service === "Apostille" ? form.pickup : form.location}
${
  form.service === "Mobile Notary"
    ? `Date: ${form.date} at ${form.time}\nSignatures: ${form.signatures}`
    : `Documents: ${form.documents} (${form.docType})\nDestination: ${form.country}\nDelivery: ${form.delivery}`
}

Notes: ${form.notes || "None"}
Attachments: ${
      files.length
        ? `${files.length} file(s) selected (Note: User must manually attach these in their email client)`
        : "None"
    }

Estimated Price: $${price}
---------------------------------
    `.trim();

    const mailtoLink = `mailto:ilazo@changemtg.com?subject=New Order: ${
      form.service
    } for ${form.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  if (submitted)
    return (
      <section className="order-card success-card reveal">
        <div className="success-icon">
          <Check />
        </div>
        <p className="eyebrow">
          <span /> REQUEST PREPARED
        </p>
        <h2>Thank you, {form.name.split(" ")[0]}.</h2>
        <p>
          Your email client has been opened with your order details addressed to{" "}
          <strong>ilazo@changemtg.com</strong>.
          <br />
          <br />
          If it did not open automatically, please send your request to{" "}
          <a href="mailto:ilazo@changemtg.com" className="underline font-bold">
            ilazo@changemtg.com
          </a>
          .
        </p>
        <div className="notice mt-6">
          <ShieldCheck size={18} />
          <span>
            <strong>Reminder:</strong> Because this is a web form, you must
            manually attach your documents to the email before sending it.
          </span>
        </div>
        <Link className="button button-dark mt-6" href="/">
          Return home <ArrowRight size={16} />
        </Link>
      </section>
    );

  return (
    <>
      <section className="order-layout reveal">
        <aside className="order-aside">
          <p className="eyebrow">
            <span /> A MORE CONSIDERED WAY
          </p>
          <h2>Clarity, from the very first step.</h2>
          <p>
            Tell us what you need. We&apos;ll help you understand the next steps
            and confirm availability.
          </p>
          <div className="order-aside-note">
            <ShieldCheck size={18} />
            <span>
              Your information will be compiled into an email draft sent
              securely to our team.
            </span>
          </div>
          <p className="aside-contact">
            Questions? <a href="mailto:ilazo@changemtg.com">Get in touch</a>
          </p>
        </aside>

        <div className="order-card">
          <div className="stepper" aria-label={`Step ${step + 1} of 5`}>
            {steps.map((label, index) => (
              <div
                className={`step ${index <= step ? "active" : ""}`}
                key={label}
              >
                <span>
                  {index < step ? <Check size={13} /> : `0${index + 1}`}
                </span>
                <small>{label}</small>
              </div>
            ))}
          </div>
          <div className="progress-track">
            <i style={{ width: `${(step + 1) * 20}%` }} />
          </div>

          {/* STEP 0 */}
          {step === 0 && (
            <div className="form-step">
              <p className="eyebrow">
                <span /> STEP 01
              </p>
              <h2>How can we help?</h2>
              <p className="form-intro">
                Choose the service that best fits your needs.
              </p>
              <div className="choice-grid">
                <button
                  type="button"
                  className={`choice-card ${
                    form.service === "Mobile Notary" ? "selected" : ""
                  }`}
                  onClick={() => set("service", "Mobile Notary")}
                >
                  <span className="choice-icon">
                    <FileText />
                  </span>
                  <strong>Mobile Notary</strong>
                  <small>We meet you, wherever you are.</small>
                  <b>From $100</b>
                </button>
                <button
                  type="button"
                  className={`choice-card ${
                    form.service === "Apostille" ? "selected" : ""
                  }`}
                  onClick={() => set("service", "Apostille")}
                >
                  <span className="choice-icon">
                    <ShieldCheck />
                  </span>
                  <strong>Apostille</strong>
                  <small>Document authentication, handled.</small>
                  <b>From $400</b>
                </button>
              </div>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="form-step">
              <p className="eyebrow">
                <span /> STEP 02
              </p>
              <h2>First, a little about you.</h2>
              <p className="form-intro">
                We use these details to coordinate your service.
              </p>
              <div className="field-grid">
                <Field label="Full name" required>
                  <input
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Email address" required>
                  <input
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Phone number" required>
                  <input
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="(415) 555-0123"
                  />
                </Field>
                <Field label="Preferred language">
                  <select
                    value={form.language}
                    onChange={(e) => set("language", e.target.value)}
                  >
                    <option>English</option>
                    <option>Español</option>
                    <option>Русский</option>
                  </select>
                </Field>
                <Field label="Service location" required wide>
                  <input
                    autoComplete="street-address"
                    value={form.location}
                    onChange={(e) => set("location", e.target.value)}
                    placeholder="City or service address"
                  />
                </Field>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="form-step">
              <p className="eyebrow">
                <span /> STEP 03
              </p>
              <h2>
                {form.service === "Mobile Notary"
                  ? "Let’s find a time."
                  : "Tell us about your documents."}
              </h2>
              <p className="form-intro">
                A few details help us prepare for your service.
              </p>
              {form.service === "Mobile Notary" ? (
                <div className="field-grid">
                  <Field label="Preferred date" required>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                    />
                  </Field>
                  <Field label="Preferred time" required>
                    <select
                      value={form.time}
                      onChange={(e) => set("time", e.target.value)}
                    >
                      <option value="">Select a time</option>
                      {[
                        "6:00 AM",
                        "8:00 AM",
                        "10:00 AM",
                        "12:00 PM",
                        "2:00 PM",
                        "4:00 PM",
                        "6:00 PM",
                        "8:00 PM",
                        "10:00 PM",
                      ].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Number of signatures">
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={form.signatures}
                      onChange={(e) => set("signatures", e.target.value)}
                    />
                  </Field>
                  <Field label="Service address">
                    <input
                      value={form.location}
                      onChange={(e) => set("location", e.target.value)}
                      placeholder="Address for appointment"
                    />
                  </Field>
                  <Field label="Additional instructions" wide>
                    <textarea
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      placeholder="Anything we should know?"
                      rows={3}
                    />
                  </Field>
                </div>
              ) : (
                <div className="field-grid">
                  <Field label="Number of documents" required>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={form.documents}
                      onChange={(e) => set("documents", e.target.value)}
                    />
                  </Field>
                  <Field label="Destination country" required>
                    <input
                      value={form.country}
                      onChange={(e) => set("country", e.target.value)}
                      placeholder="Country of use"
                    />
                  </Field>
                  <Field label="Document type" required>
                    <select
                      value={form.docType}
                      onChange={(e) => set("docType", e.target.value)}
                    >
                      <option value="">Select a document</option>
                      {[
                        "Birth certificate",
                        "Marriage certificate",
                        "Power of attorney",
                        "Diploma or transcript",
                        "Business document",
                        "Other",
                      ].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Pickup address" required>
                    <input
                      value={form.pickup}
                      onChange={(e) => set("pickup", e.target.value)}
                      placeholder="Street address"
                    />
                  </Field>
                  <Field label="Delivery address" required>
                    <input
                      value={form.delivery}
                      onChange={(e) => set("delivery", e.target.value)}
                      placeholder="Street address"
                    />
                  </Field>
                  <Field label="Additional instructions" wide>
                    <textarea
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      placeholder="Anything we should know?"
                      rows={3}
                    />
                  </Field>
                </div>
              )}
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="form-step">
              <p className="eyebrow">
                <span /> STEP 04
              </p>
              <h2>A note about your documents.</h2>
              <p className="upload-copy">
                Please upload image of the signature page only to ensure
                Apostille can be properly processed.
                <br />
                <br />
                If you want to omit personal information for privacy reasons,
                you can upload just the part of the document with the signature
                line that requires notarization.
              </p>
              <label className="upload-box">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  multiple
                  onChange={(e) => updateFiles(e.target.files)}
                />
                <span className="upload-icon">
                  <Upload />
                </span>
                <strong>Choose files or drag them here</strong>
                <small>
                  PDF, JPG, PNG, WEBP · up to 10 MB each · 5 files max
                </small>
              </label>
              {files.length > 0 && (
                <ul className="file-list">
                  {files.map((file, index) => (
                    <li key={`${file.name}-${index}`}>
                      <FileText size={16} />
                      <span>{file.name}</span>
                      <small>{(file.size / 1024 / 1024).toFixed(1)} MB</small>
                      <button
                        type="button"
                        aria-label={`Remove ${file.name}`}
                        onClick={() =>
                          setFiles((current) =>
                            current.filter((_, i) => i !== index),
                          )
                        }
                      >
                        <X size={15} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <div className="notice">
                <ShieldCheck size={18} />
                <span>
                  <strong>Note:</strong> Because this form opens your email app,
                  you will need to manually attach these files to the email
                  before sending.
                </span>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="form-step">
              <p className="eyebrow">
                <span /> STEP 05
              </p>
              <h2>Review your request.</h2>
              <p className="form-intro">
                Please check the details before preparing your request.
              </p>
              <div className="review-list">
                <Review label="Service" value={form.service} />
                <Review label="Name" value={form.name} />
                <Review label="Email" value={form.email} />
                <Review label="Phone" value={form.phone} />
                <Review label="Language" value={form.language} />
                <Review
                  label="Location"
                  value={
                    form.service === "Apostille" ? form.pickup : form.location
                  }
                />
                <Review
                  label={
                    form.service === "Apostille" ? "Documents" : "Signatures"
                  }
                  value={
                    form.service === "Apostille"
                      ? `${form.documents} · ${form.country}`
                      : `${form.signatures} signatures · ${form.date} at ${form.time}`
                  }
                />
                <Review
                  label="Attachments"
                  value={files.length ? `${files.length} file(s)` : "None"}
                />
                <div className="review-total">
                  <span>Estimated service price</span>
                  <strong>${price}</strong>
                </div>
              </div>
              <p className="fine-print">
                Final availability and pricing are confirmed by the provider.
                Apostille processing times depend on document eligibility and
                public agency processing.
              </p>
            </div>
          )}

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <div className="form-actions">
            {step > 0 && (
              <button
                type="button"
                className="button button-light"
                onClick={() => {
                  setError("");
                  setStep((value) => value - 1);
                }}
              >
                <ArrowLeft size={15} /> Back
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                className="button button-dark"
                onClick={next}
              >
                Continue <ArrowRight size={15} />
              </button>
            ) : (
              <button
                type="button"
                className="button button-dark"
                onClick={submit}
              >
                Prepare My Request <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION SECTION */}
      <section className="max-w-[1080px] mx-auto mt-20 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#fdfbf7] border border-[#e9e2d7] p-8 md:p-12">
          {/* Left: Details */}
          <div>
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <h2 className="mb-6 font-serif text-3xl">San Francisco</h2>

            <ul className="space-y-4 text-sm text-[var(--muted)]">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[var(--burgundy)]" />
                <span>San Francisco Bay Area, CA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--burgundy)]" />
                <div className="flex flex-col">
                  <a
                    href="tel:4155230179"
                    className="hover:text-[var(--burgundy)] transition-colors"
                  >
                    (415) 523-0179
                  </a>
                  <a
                    href="tel:6502911514"
                    className="hover:text-[var(--burgundy)] transition-colors"
                  >
                    (650) 291-1514
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--burgundy)]" />
                <a
                  href="mailto:ilazo@changemtg.com"
                  className="hover:text-[var(--burgundy)] transition-colors"
                >
                  ilazo@changemtg.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/company/change-home-mortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center transition-transform hover:scale-110"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.instagram.com/changemtg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#c13584] text-white flex items-center justify-center transition-transform hover:scale-110"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.facebook.com/ChangeHomeMortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center transition-transform hover:scale-110"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right: Visual / Map placeholder */}
          <div className="bg-[var(--paper-deep)] border border-[var(--line)] flex flex-col items-center justify-center p-8 text-center min-h-[250px] anim-fade-left">
            <MapPin size={32} className="text-[var(--gold)] mb-4" />
            <h3 className="text-xl mb-2">Serving the Bay Area</h3>
            <p className="text-xs text-[var(--muted)] max-w-[200px]">
              Mobile notary services available across San Francisco, San Mateo,
              and nearby counties.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  wide,
  children,
}: {
  label: string;
  required?: boolean;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`field ${wide ? "field-wide" : ""}`}>
      <span>
        {label}
        {required && <i> *</i>}
      </span>
      {children}
    </label>
  );
}

function Review({ label, value }: { label: string; value: string }) {
  return (
    <div className="review-row">
      <span>{label}</span>
      <strong>{value || "—"}</strong>
    </div>
  );
}