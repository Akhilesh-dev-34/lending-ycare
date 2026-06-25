import { useState } from 'react';
import { submitWaitlist } from '../api/submitWaitlist';

const inputClass =
  'w-full py-3.5 px-4 border border-border/60 rounded-xl text-base font-inherit text-text-heading bg-white transition-all leading-normal placeholder:text-text-light focus:outline-none focus:border-accent focus:ring-[3px] focus:ring-accent/15 disabled:opacity-60';

const perks = [
  'Early platform access',
  'Launch updates',
  'Priority onboarding',
];

export default function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitWaitlist({
        name: formData.get('name'),
        email: formData.get('email'),
        role: formData.get('role'),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-surface-mint via-white to-surface-mint-deep max-tablet:py-16 max-mobile:py-14"
      id="early-access"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,110vw)] h-[360px] rounded-full bg-pill-bg/60 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent/8 blur-[80px] translate-x-1/4 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[640px] mx-auto px-6 max-mobile:px-4 text-center">
        <h2 className="text-[clamp(30px,5vw,40px)] font-extrabold text-text-heading leading-[1.1] mb-4">
          Join the Waitlist
        </h2>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {perks.map((perk) => (
            <span
              key={perk}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text-body bg-white border border-border rounded-full px-3.5 py-1.5 shadow-[0_2px_8px_rgba(2,172,168,0.06)]"
            >
              <span className="text-accent text-xs font-bold">✓</span>
              {perk}
            </span>
          ))}
        </div>

        <div
          className="relative bg-white border border-border border-t-[3px] border-t-accent rounded-[28px] p-8 shadow-[0_8px_32px_rgba(2,172,168,0.12)] text-left max-mobile:p-6"
          id="waitlist-form"
        >
          {!submitted ? (
            <form id="waitlistForm" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4 max-mobile:grid-cols-1">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-heading mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={loading}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-heading mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    disabled={loading}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="role" className="block text-sm font-semibold text-text-heading mb-2">
                  I am a...
                </label>
                <select id="role" name="role" defaultValue="" required disabled={loading} className={inputClass}>
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="family">Family member</option>
                  <option value="hospital">Hospital / clinic</option>
                  <option value="nurse">Registered nurse</option>
                  <option value="student">Nursing student</option>
                  <option value="educator">Nursing educator</option>
                </select>
              </div>
              {error ? (
                <p className="text-[#c0392b] text-sm font-medium mb-4 leading-normal">{error}</p>
              ) : null}
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full py-3.5 px-6 text-base font-semibold rounded-xl border-2 border-accent bg-accent text-white cursor-pointer transition-all duration-200 hover:bg-accent-hover hover:border-accent-hover disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(0,180,196,0.35)]"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Join waitlist'}
              </button>
            </form>
          ) : (
            <div className="text-center py-10" id="formSuccess">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pill-bg text-accent text-2xl font-bold mb-5">
                ✓
              </span>
              <p className="text-xl font-bold text-text-heading mb-2">You&apos;re on the list!</p>
              <p className="text-[15px] text-text-body leading-relaxed">
                We&apos;ll be in touch soon with early access updates.
              </p>
            </div>
          )}
        </div>

        <p className="mt-6 text-sm text-text-light">Free to join. No spam — we&apos;ll only email you about YCare.</p>
      </div>
    </section>
  );
}
