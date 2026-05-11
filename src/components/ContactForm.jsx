import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span>Name</span>
          <input required name="name" type="text" autoComplete="name" />
        </label>
        <label>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label>
          <span>Email</span>
          <input required name="email" type="email" autoComplete="email" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        <span>Nature of Inquiry</span>
        <select name="inquiry" defaultValue="Investment Opportunity">
          <option>Investment Opportunity</option>
          <option>Business Partnership</option>
          <option>Portfolio Company Inquiry</option>
          <option>General Inquiry</option>
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea required name="message" rows="5" />
      </label>
      <button className="btn-primary w-full justify-center" type="submit">
        Send Inquiry
      </button>
      {sent ? (
        <p className="rounded-none border-l-4 border-red bg-soft px-4 py-3 text-sm font-semibold text-navy">
          Thank you. Please email info@bridgeleafequity.com if you need an immediate response.
        </p>
      ) : null}
    </form>
  );
}
