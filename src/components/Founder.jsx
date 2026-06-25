import { CONTACT } from '../data/site';
import { SocialIconsLight } from './SocialIcons';

const tags = ['Nursing Education', 'Healthcare Leadership', 'Hospital Collaboration', 'Nursing Institution'];

const emailBtn =
  'w-10 h-10 rounded-xl bg-pill-bg flex items-center justify-center text-accent hover:bg-pill-accent transition-colors';

export default function Founder() {
  return (
    <section className="py-20 bg-bg-separator max-tablet:py-14" id="founder">
      <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
        <div className="grid grid-cols-[minmax(260px,320px)_1fr] gap-8 items-start max-tablet:grid-cols-1 max-tablet:gap-7">
          <div>
            <div className="aspect-square rounded-[28px] overflow-hidden border-2 border-pill-bg bg-[#e8e4df] shadow-[0_8px_32px_rgba(2,172,168,0.1)] max-tablet:max-w-[320px] max-tablet:mx-auto">
              <img
                src={`${import.meta.env.BASE_URL}images/founder.png`}
                alt="Yasin Nadaf, Founder of YCare"
                className="w-full h-full object-cover object-center"
                width="320"
                height="320"
              />
            </div>
          </div>
          <div className="bg-white rounded-[28px] border border-border p-6 shadow-[0_8px_32px_rgba(2,172,168,0.12)] max-mobile:p-6">
            <h2 className="text-[clamp(26px,3.5vw,34px)] font-extrabold text-text-heading leading-tight mb-1">
              Yasin Nadaf
            </h2>
            <p className="text-accent font-semibold text-[15px] mb-0.5">Founder, YCare</p>
            <p className="text-text-light text-[15px] mb-6">Founder of a Nursing Institution · 17+ years in healthcare</p>

            <div className="text-text-body text-[15px] leading-[1.75] space-y-4 mb-6">
              <p>
                For over 17 years, I&apos;ve worked across nursing education, hospital collaboration, and healthcare
                leadership — alongside students, professionals, families, and hospital administrators.
              </p>
              <p>Thank you for being part of our journey.</p>
            </div>

           

            
          </div>
        </div>
      </div>
    </section>
  );
}
