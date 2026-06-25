import PageLink from './PageLink';
import { Logo } from './Navbar';
import SectionLink from './SectionLink';
import { SocialIconsLight } from './SocialIcons';
import { CONTACT } from '../data/site';

const footerLink = 'text-[15px] text-text-body transition-colors leading-[1.7] hover:text-accent';
const footerText = 'text-[15px] text-text-light leading-[1.7]';

function FooterLink({ to, children }) {
  return (
    <PageLink to={to} className={footerLink}>
      {children}
    </PageLink>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-bg via-bg-separator to-[#e4ddd3] pt-[60px] pb-8 text-text-body border-t border-border">
      <div className="relative max-w-[1140px] mx-auto px-6 max-mobile:px-4">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10 max-tablet:grid-cols-2 max-tablet:gap-8 max-mobile:grid-cols-1 max-mobile:gap-7">
          <div className="max-tablet:col-span-2 max-mobile:col-span-1">
            <Logo className="mb-3" />
            <p className={`${footerText} mb-4 max-w-[300px]`}>
              Empowering the Nursing Profession—One Connection at a Time.
            </p>
            <a href={`mailto:${CONTACT.email}`} className={`${footerLink} block mb-6`}>
              {CONTACT.email}
            </a>
            <SocialIconsLight className="mb-6" />
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-text-heading mb-4 tracking-wide">Product</h4>
            <ul className="list-none">
              <li className="mb-2.5">
                <SectionLink hash="#families" className={footerLink}>Hire Nursing Professionals</SectionLink>
              </li>
              <li className="mb-2.5">
                <SectionLink hash="#professionals" className={footerLink}>Join as a Nurse</SectionLink>
              </li>
              <li className="mb-2.5">
                <SectionLink hash="#how-it-works" className={footerLink}>How It Works</SectionLink>
              </li>
              <li className="mb-2.5">
                <SectionLink hash="#faq" className={footerLink}>FAQ</SectionLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-text-heading mb-4 tracking-wide">Services</h4>
            <ul className="list-none">
              <li className="mb-2.5">
                <SectionLink hash="#families" className={footerLink}>Home Nursing</SectionLink>
              </li>
              <li className="mb-2.5">
                <SectionLink hash="#families" className={footerLink}>Elder Care</SectionLink>
              </li>
              <li className="mb-2.5">
                <SectionLink hash="#families" className={footerLink}>ICU Care</SectionLink>
              </li>
              <li className="mb-2.5">
                <SectionLink hash="#families" className={footerLink}>Hospital Staffing</SectionLink>
              </li>
              <li className="mb-2.5">
                <SectionLink hash="#professionals" className={footerLink}>Nursing Tutor</SectionLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-text-heading mb-4 tracking-wide">Company</h4>
            <ul className="list-none">
              <li className="mb-2.5">
                <FooterLink to="/about">About Us</FooterLink>
              </li>
              <li className="mb-2.5">
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
              </li>
              <li className="mb-2.5">
                <FooterLink to="/terms">Terms of Use</FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-[15px] text-text-light leading-[1.7] pt-8 border-t border-border">
          © 2026 YACHII PVT LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
