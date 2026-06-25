import AboutAnimation from '../components/AboutAnimation';
import Founder from '../components/Founder';

const sectionLabel = 'text-[13px] font-bold tracking-wide text-accent uppercase mb-3';
const cardClass =
  'bg-white border border-border rounded-2xl p-6 shadow-[0_2px_12px_rgba(2,172,168,0.08)] max-mobile:p-5';

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F5] to-bg pt-16 pb-12 max-tablet:pt-12 max-tablet:pb-10">
        <div className="max-w-[800px] mx-auto px-6 max-mobile:px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-pill-bg text-accent text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            About YCare
          </span>
          <p className="text-lg text-text-body leading-relaxed max-w-[640px] mx-auto">
            YCare is building a trusted platform that connects families, healthcare organizations, and nursing
            professionals — one meaningful connection at a time.
          </p>
        </div>
      </section>

      <section className="py-14 max-tablet:py-10">
        <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
          <div className="grid grid-cols-2 gap-12 items-center max-tablet:grid-cols-1 max-tablet:gap-8 max-tablet:items-start">
            <AboutAnimation variant="visual" />

            <div>
              <p className={sectionLabel}>Why we built YCare</p>
              <h2 className="text-[clamp(24px,3vw,30px)] font-extrabold text-text-heading leading-[1.15] mb-4">
                Born from experience inside the nursing ecosystem
              </h2>
              <p className="text-text-body leading-[1.75] mb-4">
                Having worked closely with nursing students, professionals, hospitals, and families, we witnessed the
                same challenges on every side.{' '}
                <strong className="text-accent font-semibold">Families</strong> struggle to find trusted healthcare
                support when they need it most.{' '}
                <strong className="text-accent font-semibold">Hospitals</strong> struggle to find qualified healthcare
                professionals and fill staffing gaps.{' '}
                <strong className="text-accent font-semibold">Healthcare Professionals</strong> struggle to find
                meaningful opportunities and build visible careers.
              </p>
              <p className="text-text-body leading-[1.75] font-semibold text-text-heading">
                We believe there is a better way — and YCare was built to connect families, healthcare organizations, and
                nursing professionals through one trusted network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 max-tablet:py-10">
        <div className="max-w-[1140px] mx-auto px-6 max-mobile:px-4">
          <div className="grid grid-cols-2 gap-6 max-tablet:grid-cols-1">
            <div className={`${cardClass} border-t-[3px] border-t-accent`}>
              <p className={sectionLabel}>Our mission</p>
              <p className="text-xl font-bold text-text-heading leading-snug">
                Empowering the Nursing Profession—One Connection at a Time.
              </p>
            </div>
            <div className={cardClass}>
              <p className={sectionLabel}>Our vision</p>
              <p className="text-lg text-text-body leading-relaxed">
                To become the trusted network for nursing professionals and the organizations and families who rely on
                them.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Founder />
    </>
  );
}
