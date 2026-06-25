const btnPrimaryLg =
  'inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-[10px] border-2 border-accent bg-accent text-white cursor-pointer transition-all duration-200 hover:bg-accent-hover hover:border-accent-hover whitespace-nowrap mt-9';

const checkIcon = 'w-5 h-5 bg-pill-bg rounded-full flex items-center justify-center shrink-0 text-accent text-[15px] font-bold';

export default function ForProfessionals() {
  return (
    <section className="py-20 bg-bg max-tablet:py-16 max-mobile:py-12" id="professionals">
      <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
        <div className="grid grid-cols-2 gap-16 items-center max-tablet:grid-cols-1 max-tablet:gap-10 max-mobile:gap-8">
          <div className="max-tablet:order-2 ml-[54px] max-tablet:ml-0">
            <p className="text-[15px] font-bold tracking-wide text-accent mb-3">For nursing professionals</p>
            <h2 className="text-[clamp(32px,4vw,36px)] font-extrabold text-text-heading leading-[1.1] mb-5 max-mobile:text-[clamp(26px,6.5vw,32px)]">
              Work on your terms
            </h2>
            <ul className="list-none mb-8">
              <li className="flex items-center gap-2.5 py-1.5 text-base font-medium leading-[1.7]">
                <span className={checkIcon}>✓</span> Create your professional profile
              </li>
              <li className="flex items-center gap-2.5 py-1.5 text-base font-medium leading-[1.7]">
                <span className={checkIcon}>✓</span> Set your availability and rates
              </li>
              <li className="flex items-center gap-2.5 py-1.5 text-base font-medium leading-[1.7]">
                <span className={checkIcon}>✓</span> Connect directly with families and hospitals
              </li>
              <li className="flex items-center gap-2.5 py-1.5 text-base font-medium leading-[1.7]">
                <span className={checkIcon}>✓</span> Build your professional presence
              </li>
            </ul>
            <a href="#early-access" className={btnPrimaryLg}>
              Join as a nurse 
            </a>
          </div>
          <div className="-order-1 max-tablet:order-1">
            <div className="relative rounded-3xl overflow-hidden w-full bg-white shadow-[0_24px_56px_rgba(2,172,168,0.14),0_8px_20px_rgba(13,61,60,0.08)] before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-[rgba(2,172,168,0.12)] before:pointer-events-none before:z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-1 after:bg-gradient-to-r after:from-accent after:to-[#5ed4d0] after:z-[2] max-mobile:rounded-[18px]">
              <img
                src={`${import.meta.env.BASE_URL}images/professionals-photo.jpg`}
                alt="Nurse caring for elderly patient at home"
                className="w-full h-auto block aspect-[640/522] object-cover object-[center_40%]"
                width="640"
                height="522"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
