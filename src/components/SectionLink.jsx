import { Link } from 'react-router-dom';

export default function SectionLink({ hash, className, children, onClick }) {
  return (
    <Link to={{ pathname: '/', hash }} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
