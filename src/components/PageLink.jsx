import { Link, useLocation } from 'react-router-dom';

export default function PageLink({ to, className, children, onClick }) {
  const { pathname } = useLocation();

  const handleClick = (e) => {
    onClick?.(e);
    if (pathname === to) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
