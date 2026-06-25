import { pills } from '../data/pills';

const btnPrimaryLg =
  'inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-[10px] border-2 border-accent bg-accent text-white cursor-pointer transition-all duration-200 hover:bg-accent-hover hover:border-accent-hover whitespace-nowrap mt-9 max-mobile:mt-0 max-mobile:w-full max-mobile:max-w-[360px] max-mobile:mx-auto max-mobile:px-6';

function Pill({ pill }) {
  return (
    <a
      href={pill.href}
      className={`inline-flex items-center gap-2.5 text-[15px] font-semibold py-2.5 pr-[18px] pl-2.5 rounded-full whitespace-nowrap shrink-0 border border-white/60 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] shadow-[0_2px_10px_rgba(0,0,0,0.06)] max-mobile:text-[13px] max-mobile:py-2 max-mobile:px-3.5 ${pill.className}`}
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/65 shrink-0 [&_svg]:w-[17px] [&_svg]:h-[17px] [&_svg]:block" aria-hidden="true">
        {pill.icon}
      </span>{' '}
      {pill.label}
    </a>
  );
}

export default function Hero() {
  const allPills = [...pills, ...pills];

  return (
    <section className="pt-10 pb-7 max-mobile:pt-6 max-mobile:pb-0 overflow-x-hidden overflow-y-visible bg-gradient-to-b from-[#FAF7F5] from-0% to-bg to-[55%]">
      <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
        <div className="grid grid-cols-[1.1fr_0.95fr] gap-8 items-center min-h-[520px] max-tablet:grid-cols-1 max-tablet:min-h-0 max-tablet:gap-7">
          <div className="min-w-0 text-left max-tablet:text-center">
            <h2 className="text-[clamp(22px,2.4vw,38px)] font-extrabold text-text-heading leading-[1.15] mb-5 tracking-tight max-w-full max-mobile:text-[clamp(22px,5.2vw,32px)] max-mobile:mb-3.5 max-mobile:tracking-[-0.6px] max-[380px]:text-[clamp(18px,4.8vw,22px)] max-[380px]:tracking-[-0.4px]">
              <span className="block whitespace-nowrap mb-3">Find Trusted Nursing </span>
              <span className="block whitespace-nowrap">Professionals</span>
            </h2>
            <p className="text-lg text-text-body mb-7 max-w-[460px] leading-[1.7] max-tablet:max-w-full max-tablet:mx-auto max-mobile:text-base max-mobile:mb-5">
              Connect with nursing professionals for home nursing, elder care, critical care, nursing education,
and healthcare staffing.
            </p>
            <div className="flex flex-wrap gap-3 mb-7 max-tablet:justify-center max-mobile:flex-col max-mobile:mb-5">
              <a href="#early-access" className={btnPrimaryLg}>
                Join for free
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center min-h-[520px] py-5 overflow-visible max-tablet:min-h-0 max-tablet:p-0 max-tablet:w-full">
            <div className="relative w-full max-w-[560px] min-h-[480px] pt-11 px-10 pb-[72px] overflow-visible max-tablet:flex max-tablet:flex-col max-tablet:min-h-0 max-tablet:max-w-full max-tablet:p-0 max-tablet:pb-6 max-mobile:pb-5">
              <svg className="absolute inset-0 w-full h-full pointer-events-none max-tablet:hidden" viewBox="0 0 520 420" fill="none" aria-hidden="true">
                <circle cx="260" cy="210" r="170" stroke="#D9D2C8" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.7" />
                <circle cx="260" cy="210" r="120" stroke="#C8EBEA" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
                <path d="M120 80 Q260 20 400 100" stroke="#02ACA8" strokeWidth="1.5" strokeDasharray="5 7" opacity="0.35" />
              </svg>

              <div className="relative w-full max-w-[540px] min-h-[390px] mx-auto max-tablet:max-w-full max-tablet:min-h-0 max-tablet:flex max-tablet:flex-col max-tablet:items-stretch max-tablet:gap-3.5 max-tablet:p-0 max-mobile:gap-3">
                <svg className="absolute inset-0 w-full h-full pointer-events-none max-tablet:hidden" viewBox="0 0 540 390" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
                  <path d="M 140 334 L 140 28 L 340 28" stroke="#C8EBEA" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 440 56 L 440 334 L 280 334" stroke="#D9D2C8" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                </svg>

                <div className="absolute top-0 right-0 flex items-center gap-3 bg-white rounded-2xl py-3 px-4 shadow-[0_10px_28px_rgba(2,172,168,0.12)] z-[3] border border-border select-none pointer-events-none w-fit max-tablet:relative max-tablet:top-auto max-tablet:right-auto max-tablet:self-center max-tablet:w-[calc(100%-24px)] max-tablet:max-w-[340px] max-tablet:justify-start max-tablet:order-1 max-tablet:-mb-[18px] max-tablet:z-[5] max-mobile:max-w-full max-mobile:py-2.5 max-mobile:px-3.5 max-mobile:rounded-[14px]">
                  <span className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-pill-bg text-accent shrink-0 [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:block" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <strong className="block text-[13px] font-bold text-text-heading leading-tight mb-0.5 max-[380px]:text-xs">Verified profile</strong>
                    <span className="block text-xs font-medium text-text-light leading-snug max-[380px]:text-[11px]">Background checked</span>
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] grid grid-cols-[148px_1fr] gap-4 bg-white rounded-[20px] p-4 m-0 w-[min(420px,calc(100%-40px))] max-w-[420px] shadow-[0_20px_60px_rgba(2,172,168,0.16),0_4px_16px_rgba(2,172,168,0.08)] border border-[rgba(217,210,200,0.8)] overflow-visible before:content-[''] before:absolute before:left-1 before:top-6 before:h-[calc(100%-48px)] before:w-8 before:bg-white before:rounded-full before:shadow-[0_4px_20px_rgba(2,172,168,0.1)] before:z-0 max-tablet:relative max-tablet:left-auto max-tablet:top-auto max-tablet:translate-none max-tablet:w-full max-tablet:max-w-full max-tablet:grid-cols-1 max-tablet:p-3.5 max-tablet:pt-7 max-tablet:order-2 max-tablet:mx-auto max-tablet:before:hidden max-mobile:rounded-2xl max-mobile:p-3">
                  <div className="relative rounded-[14px] overflow-hidden h-[200px] bg-[#e8e4df] z-[1] max-mobile:h-[168px]">
                    <img src={`${import.meta.env.BASE_URL}images/nursing-women.jpg`} alt="Priya Sharma, verified nurse" className="w-full h-full object-cover object-[center_15%] block" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-text-heading mb-1.5 leading-tight max-mobile:text-[17px]">Priya Sharma</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold text-[#E8A838]">
                        ★ 4.8 <small className="font-medium text-text-light">(128 reviews)</small>
                      </span>
                    </div>
                    <p className="text-[13px] font-semibold text-text-body mb-2">6 years experience</p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className="text-[11px] font-semibold text-accent bg-pill-accent py-1 px-2.5 rounded-full max-mobile:text-[10px] max-mobile:py-0.5 max-mobile:px-2">Elder care</span>
                      <span className="text-[11px] font-semibold text-accent bg-pill-accent py-1 px-2.5 rounded-full max-mobile:text-[10px] max-mobile:py-0.5 max-mobile:px-2">Post-surgery care</span>
                    </div>
                    <p className="text-xs text-text-light mb-2">English · Hindi · Tamil</p>
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-accent mb-3">
                      <span className="w-2 h-2 bg-[#4CAF50] rounded-full shadow-[0_0_0_3px_rgba(76,175,80,0.2)]"></span> Available today
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 z-[3] flex items-center gap-2.5 bg-white rounded-[14px] py-[11px] px-3.5 shadow-[0_10px_28px_rgba(2,172,168,0.12)] max-w-[280px] w-fit border border-border select-none pointer-events-none max-tablet:relative max-tablet:bottom-auto max-tablet:left-auto max-tablet:self-center max-tablet:w-full max-tablet:max-w-[340px] max-tablet:order-3 max-mobile:max-w-full">
                  <span className="flex items-center justify-center w-9 h-9 bg-pill-bg text-accent rounded-full shrink-0 [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:block" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 12l2.5 2.5L16 9" />
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <strong className="block text-xs font-bold text-text-heading leading-snug">Request sent successfully!</strong>
                    <span className="block text-[11px] font-medium text-text-light leading-snug">Priya will contact you shortly</span>
                  </div>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-pill-bg text-accent shrink-0 [&_svg]:w-3.5 [&_svg]:h-3.5 [&_svg]:block" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen ml-[calc(50%-50vw)] mt-8 pb-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] max-mobile:mt-5 max-mobile:pb-4">
        <div className="flex gap-3 w-max py-1 animate-scroll-pills hover:[animation-play-state:paused]">
          {allPills.map((pill, index) => (
            <Pill key={`${pill.label}-${index}`} pill={pill} />
          ))}
        </div>
      </div>

      <div className="py-5 pb-9">
        <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4"></div>
      </div>
    </section>
  );
}
