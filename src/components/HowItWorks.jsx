const sectionLabel = 'text-[15px] font-bold tracking-wide text-accent mb-3';
const sectionTitle = 'text-[clamp(32px,4vw,36px)] font-extrabold text-text-heading leading-[1.1] mb-4 max-mobile:text-[clamp(26px,6.5vw,32px)]';
const stepLine =
  'flex-1 h-0.5 mt-7 min-w-5 bg-[repeating-linear-gradient(to_right,var(--color-border)_0,var(--color-border)_4px,transparent_4px,transparent_10px)] max-tablet:w-0.5 max-tablet:h-6 max-tablet:mt-0 max-tablet:min-w-0 max-tablet:bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0,var(--color-border)_4px,transparent_4px,transparent_10px)]';

const stepIcons = {
  blue: 'bg-[#E8F1FA] text-[#3B82C4]',
  purple: 'bg-[#F0EBFA] text-[#7C5CBF]',
  green: 'bg-[#E5F5EC] text-[#3A9E6E]',
  rose: 'bg-[#FCE8F2] text-[#D45B8A]',
  amber: 'bg-[#FFF6E0] text-[#C9920A]',
  orange: 'bg-[#FFF0E5] text-[#E07B4A]',
};

function StepsCard({ steps }) {
  return (
    <div className="bg-white border border-border border-t-[3px] border-t-accent rounded-2xl py-10 px-8 shadow-[0_8px_32px_rgba(2,172,168,0.12)]">
      <div className="flex items-start justify-between gap-2 max-tablet:flex-col max-tablet:items-center max-tablet:gap-6">
        {steps.map((step, i) => (
          <div key={step.label} className="contents">
            <div className="flex-1 text-center flex flex-col items-center gap-3.5">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${step.color}`}>{step.icon}</div>
              <p className="text-[15px] font-semibold text-text-body leading-[1.7] max-w-[120px]">{step.label}</p>
            </div>
            {i < steps.length - 1 && <div className={stepLine}></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const familySteps = [
    {
      label: 'Search ',
      color: stepIcons.blue,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
    },
    {
      label: 'Connect ',
      color: stepIcons.purple,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      label: 'Hire ',
      color: stepIcons.green,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5L20 7" />
        </svg>
      ),
    },
  ];

  const proSteps = [
    {
      label: 'Build your profile',
      color: stepIcons.rose,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      label: 'Set availability',
      color: stepIcons.amber,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
    },
    {
      label: 'Get opportunities',
      color: stepIcons.orange,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="py-20 bg-bg-separator max-tablet:py-16" id="how-it-works">
        <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
          <div className="grid grid-cols-2 gap-16 items-center max-tablet:grid-cols-1 max-tablet:gap-10 max-mobile:gap-8">
            <div className="text-left">
              <p className={sectionLabel}>FOR THOSE HIRING</p>
              <h2 className={sectionTitle}>Hire Nursing Professionals in 3 Simple Steps.</h2>
              <p className="text-base text-text-body leading-[1.7] mb-6 max-w-[420px]">
                Browse verified profiles, connect directly, and find the right nursing professional for your needs.              </p>
            </div>
            <StepsCard steps={familySteps} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-separator max-tablet:py-16">
        <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
          <div className="grid grid-cols-2 gap-16 items-center max-tablet:grid-cols-1 max-tablet:gap-10 max-mobile:gap-8">
            <div className="text-left max-tablet:order-2">
              <p className={sectionLabel}>FOR NURSING PROFESSIONALS</p>
              <h2 className={sectionTitle}>Join YCare in 3 Simple Steps</h2>
              <p className="text-base text-text-body leading-[1.7] mb-6 max-w-[420px]">
                Build your professional presence and connect directly with families and healthcare organizations.
              </p>
            </div>
            <div className="-order-1 max-tablet:order-1">
              <StepsCard steps={proSteps} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
