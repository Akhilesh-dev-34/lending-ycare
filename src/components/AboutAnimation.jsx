import './AboutAnimation.css';

function ActorTrio() {
  return (
    <div className="about-animation__trio">
      <svg className="about-animation__connector" viewBox="0 0 560 280" fill="none" aria-hidden="true">
        <path className="about-animation__conn-glow" d="M148 160 Q200 100 280 120" />
        <path className="about-animation__conn-line" d="M148 160 Q200 100 280 120" />
        <path className="about-animation__conn-glow" d="M412 160 Q360 100 280 120" style={{ animationDelay: '0.4s' }} />
        <path className="about-animation__conn-line" d="M412 160 Q360 100 280 120" style={{ animationDelay: '0.4s' }} />
        <circle cx="148" cy="160" r="4" fill="#00b4c4" opacity="0.5" />
        <circle cx="412" cy="160" r="4" fill="#00b4c4" opacity="0.5" />
        <circle cx="280" cy="120" r="5" fill="#00b4c4" />
      </svg>

      <div className="about-animation__actor about-animation__actor--family">
        <div className="about-animation__actor-card">
          <div className="about-animation__actor-icon">
            <svg viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <circle cx="11" cy="10" r="5" fill="#00b4c4" opacity="0.7" />
              <circle cx="23" cy="10" r="4" fill="#00b4c4" opacity="0.5" />
              <ellipse cx="11" cy="22" rx="7" ry="5" fill="#00b4c4" opacity="0.6" />
              <ellipse cx="23" cy="22" rx="6" ry="5" fill="#00b4c4" opacity="0.4" />
            </svg>
          </div>
          <div className="about-animation__actor-title">Families</div>
          <div className="about-animation__actor-desc">Finding trusted care when it matters most</div>
        </div>
      </div>

      <div className="about-animation__actor about-animation__actor--nurse">
        <div className="about-animation__actor-card">
          <div className="about-animation__actor-icon">
            <svg viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <circle cx="17" cy="11" r="7" fill="#fff" opacity="0.9" />
              <rect x="13" y="5" width="8" height="5" rx="2" fill="#00b4c4" />
              <line x1="17" y1="5" x2="17" y2="10" stroke="#fff" strokeWidth="1.5" />
              <rect x="15.5" y="6" width="3" height="6" rx="0.5" fill="#E24B4A" />
              <rect x="14" y="7.5" width="6" height="3" rx="0.5" fill="#E24B4A" />
              <rect x="10" y="20" width="14" height="10" rx="5" fill="#fff" opacity="0.25" />
            </svg>
          </div>
          <div className="about-animation__actor-title">Nursing professionals</div>
          <div className="about-animation__actor-desc">Build presence · Find opportunities</div>
        </div>
      </div>

      <div className="about-animation__actor about-animation__actor--org">
        <div className="about-animation__actor-card">
          <div className="about-animation__actor-icon">
            <svg viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <rect x="5" y="14" width="24" height="16" rx="3" fill="#00b4c4" opacity="0.3" />
              <rect x="12" y="5" width="10" height="10" rx="2" fill="#00b4c4" opacity="0.5" />
              <rect x="8" y="18" width="5" height="5" rx="1" fill="#00b4c4" opacity="0.7" />
              <rect x="20" y="18" width="5" height="5" rx="1" fill="#00b4c4" opacity="0.7" />
              <rect x="14" y="20" width="6" height="10" rx="1" fill="#00b4c4" />
              <rect x="15" y="8" width="4" height="6" rx="0.5" fill="#fff" />
              <line x1="17" y1="8" x2="17" y2="14" stroke="#00b4c4" strokeWidth="1.2" />
              <line x1="15" y1="11" x2="19" y2="11" stroke="#00b4c4" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="about-animation__actor-title">Healthcare orgs</div>
          <div className="about-animation__actor-desc">Staffing gaps · Limited talent visibility</div>
        </div>
      </div>
    </div>
  );
}

export default function AboutAnimation({ variant = 'full' }) {
  const visualOnly = variant === 'visual';

  return (
    <div className={`about-animation${visualOnly ? ' about-animation--visual' : ''}`}>
      {!visualOnly && (
        <div className="about-animation__title-area">
          <div className="about-animation__label">
            <span className="about-animation__label-dot" />
            Our story
          </div>
          <h2 className="about-animation__heading">
            Why we built <span>YCare</span>
          </h2>
          <p className="about-animation__sub">
            Born from firsthand experience inside the nursing ecosystem — we witnessed the challenges on every side.
          </p>
        </div>
      )}

      <ActorTrio />

      {!visualOnly && (
        <>
          <div className="about-animation__stats">
            <div className="about-animation__stat">
              <div className="about-animation__stat-icon" style={{ background: '#E0F7FA' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2a6 6 0 110 12A6 6 0 0110 2zm0 14c-4 0-8 2-8 3h16c0-1-4-3-8-3z" fill="#00b4c4" />
                </svg>
              </div>
              <div>
                <div className="about-animation__stat-num">10k+</div>
                <div className="about-animation__stat-label">Verified nurses</div>
              </div>
            </div>
            <div className="about-animation__stat">
              <div className="about-animation__stat-icon" style={{ background: '#E5F5EC' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 10h14M10 3v14" stroke="#3A9E6E" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="10" cy="10" r="7" stroke="#3A9E6E" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div>
                <div className="about-animation__stat-num" style={{ color: '#3A9E6E' }}>
                  500+
                </div>
                <div className="about-animation__stat-label">Healthcare orgs</div>
              </div>
            </div>
            <div className="about-animation__stat">
              <div className="about-animation__stat-icon" style={{ background: '#FFF6E0' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2l2.4 5H18l-4.4 3.2 1.7 5.3L10 12.5l-5.3 3 1.7-5.3L2 7h5.6z" fill="#C9920A" />
                </svg>
              </div>
              <div>
                <div className="about-animation__stat-num" style={{ color: '#C9920A' }}>
                  4.9★
                </div>
                <div className="about-animation__stat-label">Avg nurse rating</div>
              </div>
            </div>
          </div>

          <div className="about-animation__stories">
            <div className="about-animation__story">
              <div className="about-animation__story-icon" style={{ background: '#E0F7FA' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <circle cx="11" cy="8" r="4" stroke="#00b4c4" strokeWidth="1.5" fill="none" />
                  <path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#00b4c4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div>
                <div className="about-animation__story-title">For nursing professionals</div>
                <div className="about-animation__story-body">
                  Build your professional presence and connect directly with opportunities.
                </div>
              </div>
            </div>
            <div className="about-animation__story">
              <div className="about-animation__story-icon" style={{ background: '#F0EBFA' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="16" height="13" rx="3" stroke="#7C5CBF" strokeWidth="1.5" fill="none" />
                  <path d="M7 9h8M7 13h5" stroke="#7C5CBF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="about-animation__story-title">For families</div>
                <div className="about-animation__story-body">Discover verified, trusted nursing support when you need it most.</div>
              </div>
            </div>
            <div className="about-animation__story">
              <div className="about-animation__story-icon" style={{ background: '#E5F5EC' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <rect x="3" y="8" width="16" height="11" rx="3" stroke="#3A9E6E" strokeWidth="1.5" fill="none" />
                  <path d="M7 3h8M11 3v5" stroke="#3A9E6E" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M7 13h8" stroke="#3A9E6E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="about-animation__story-title">For healthcare organisations</div>
                <div className="about-animation__story-body">Gain visibility into available nursing talent and reduce staffing gaps.</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
