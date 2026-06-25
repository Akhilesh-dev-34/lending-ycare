import { Link } from 'react-router-dom';
import SectionLink from './SectionLink';
import PageLink from './PageLink';

const btnPrimary =
  'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-[10px] border-2 border-accent bg-accent text-white cursor-pointer transition-all duration-200 hover:bg-accent-hover hover:border-accent-hover';

const navLink = 'text-[15px] font-medium text-logo-blue transition-opacity hover:opacity-70';

function Logo({ className = '', imgClassName = '' }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center justify-self-start ${className}`}
      aria-label="YCare home"
    >
      <img
        src={`${import.meta.env.BASE_URL}images/ycare-logo.png`}
        alt="YCare"
        className={`h-[35px] w-auto shrink-0 block object-contain bg-transparent ${imgClassName}`}
        width="122"
        height="35"
      />
    </Link>
  );
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full bg-white z-[1000] shadow-[0_1px_0_var(--color-border)]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[72px] max-w-[1140px] mx-auto px-6 max-tablet:grid-cols-[1fr_auto] max-mobile:px-4 max-mobile:h-16">
          <Logo />
          <ul className="flex items-center gap-[22px] list-none justify-self-center max-tablet:hidden">
            <li>
              <SectionLink hash="#families" className={navLink}>
                Hire Nursing Professionals
              </SectionLink>
            </li>
            <li>
              <SectionLink hash="#professionals" className={navLink}>
                Join as a Nurse
              </SectionLink>
            </li>
            <li>
              <SectionLink hash="#how-it-works" className={navLink}>
                How it works
              </SectionLink>
            </li>
            <li>
              <PageLink to="/about" className={navLink}>
                About us
              </PageLink>
            </li>
            <li>
              <SectionLink hash="#faq" className={navLink}>
                FAQ
              </SectionLink>
            </li>
          </ul>
          <div className="flex items-center gap-5 justify-self-end max-tablet:hidden">
            <SectionLink hash="#early-access" className={btnPrimary}>
              Join for free
            </SectionLink>
          </div>
          <button
            className="hidden max-tablet:block bg-transparent border-none cursor-pointer p-1 justify-self-end"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="block w-[22px] h-0.5 bg-accent my-[5px]"></span>
            <span className="block w-[22px] h-0.5 bg-accent my-[5px]"></span>
            <span className="block w-[22px] h-0.5 bg-accent my-[5px]"></span>
          </button>
        </div>
      </nav>

      <div
        className={`${mobileMenuOpen ? 'block' : 'hidden'} fixed top-[72px] max-mobile:top-16 left-0 right-0 bg-white border-b border-border px-6 max-mobile:px-4 py-5 z-[999] shadow-[0_8px_32px_rgba(2,172,168,0.12)]`}
      >
        <SectionLink hash="#families" onClick={closeMobileMenu} className="block py-3 text-[15px] font-medium text-logo-blue border-b border-border">
          For families
        </SectionLink>
        <SectionLink hash="#professionals" onClick={closeMobileMenu} className="block py-3 text-[15px] font-medium text-logo-blue border-b border-border">
          For nurses
        </SectionLink>
        <SectionLink hash="#how-it-works" onClick={closeMobileMenu} className="block py-3 text-[15px] font-medium text-logo-blue border-b border-border">
          How it works
        </SectionLink>
        <PageLink to="/about" onClick={closeMobileMenu} className="block py-3 text-[15px] font-medium text-logo-blue border-b border-border">
          About us
        </PageLink>
        <SectionLink hash="#faq" onClick={closeMobileMenu} className="block py-3 text-[15px] font-medium text-logo-blue border-b border-border">
          Resources
        </SectionLink>
        <SectionLink hash="#early-access" className={`${btnPrimary} w-full mt-4`} onClick={closeMobileMenu}>
          Join for free
        </SectionLink>
      </div>
    </>
  );
}

export { Logo };
