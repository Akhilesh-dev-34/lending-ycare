const bookingCards = [
  {
    image: `${import.meta.env.BASE_URL}images/nursing-women.jpg`,
    alt: 'Priya Sharma',
    name: 'Priya Sharma',
    role: 'Home nursing · Verified · 8 yrs',
    time: '10:30am',
  },
  {
    image: `${import.meta.env.BASE_URL}images/nurse-profile.jpg`,
    alt: 'Maria L.',
    name: 'Maria L.',
    role: 'ICU & critical care · Verified · 12 yrs',
    time: '11:00am',
  },
  {
    image: `${import.meta.env.BASE_URL}images/doctor-profile.jpg`,
    alt: 'Dr. James O.',
    name: 'Dr. James O.',
    role: 'Post-surgery care · Verified · 6 yrs',
    time: '1:30pm',
  },
  {
    image: `${import.meta.env.BASE_URL}images/nurse-priya.jpg`,
    alt: 'Priya S.',
    name: 'Priya S.',
    role: 'Elder care · Verified · 10 yrs',
    time: '3:00pm',
  },
];

const btnPrimaryLg =
  'inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-[10px] border-2 border-accent bg-accent text-white cursor-pointer transition-all duration-200 hover:bg-accent-hover hover:border-accent-hover whitespace-nowrap mt-9';

const checkIcon = 'w-5 h-5 bg-pill-bg rounded-full flex items-center justify-center shrink-0 text-accent text-[15px] font-bold';

export default function ForFamilies() {
  return (
    <section className="py-20 bg-bg max-tablet:py-16 max-mobile:py-12" id="families">
      <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
        <div className="grid grid-cols-2 gap-16 items-center max-tablet:grid-cols-1 max-tablet:gap-10 max-mobile:gap-8">
          <div>
            <p className="text-[15px] font-bold tracking-wide text-accent mb-3">For families and healthcare organizations</p>
            <h2 className="text-[clamp(32px,4vw,36px)] font-extrabold text-text-heading leading-[1.1] mb-5 max-mobile:text-[clamp(26px,6.5vw,32px)]">
              Hire with confidence
            </h2>
            <ul className="list-none mb-8">
              <li className="flex items-center gap-2.5 py-1.5 text-base font-medium leading-[1.7]">
                <span className={checkIcon}>✓</span> Browse verified nursing professionals
              </li>
              <li className="flex items-center gap-2.5 py-1.5 text-base font-medium leading-[1.7]">
                <span className={checkIcon}>✓</span> Review qualifications and experience
              </li>
              <li className="flex items-center gap-2.5 py-1.5 text-base font-medium leading-[1.7]">
                <span className={checkIcon}>✓</span> Connect directly with nursing professionals 
              </li>
              <li className="flex items-center gap-2.5 py-1.5 text-base font-medium leading-[1.7]">
                <span className={checkIcon}>✓</span> Find the right support for your needs
              </li>
            </ul>
            <a href="#early-access" className={btnPrimaryLg}>
              Hire Nursing Professionals
            </a>
          </div>
          <div>
            <div className="bg-white border border-border border-t-[3px] border-t-accent rounded-2xl shadow-[0_8px_32px_rgba(2,172,168,0.12)] p-5 max-mobile:p-4">
              <h4 className="text-base font-bold text-text-heading mb-4 leading-[1.1]">Discover Nursing Professionals</h4>
              {bookingCards.map((card) => (
                <div
                  className="flex items-center justify-between py-3 px-4 border border-border rounded-[10px] mb-2 transition-colors hover:border-accent max-mobile:py-2.5 max-mobile:px-3 max-mobile:gap-2"
                  key={card.name + card.time}
                >
                  <div className="flex items-center gap-3 min-w-0 max-[380px]:gap-2">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-12 h-12 rounded-full object-cover object-top shrink-0 border-2 border-white shadow-[0_0_0_2px_var(--color-pill-bg)] bg-pill-bg max-[380px]:w-10 max-[380px]:h-10"
                    />
                    <div>
                      <div className="text-[15px] font-semibold text-text-body leading-[1.7]">{card.name}</div>
                      <div className="text-[15px] text-text-light mt-0.5 leading-[1.7] max-mobile:text-xs">{card.role}</div>
                    </div>
                  </div>
                  <span className="text-[15px] font-semibold text-accent bg-pill-bg py-1 px-3 rounded-full shrink-0 max-mobile:text-xs">{card.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
