import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NAV_OFFSET = 72;

function scrollToHash(hash) {
  if (!hash) return;
  const id = hash.replace('#', '');
  const target = document.getElementById(id);
  if (!target) return;

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
    behavior: 'smooth',
  });
}

export function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    requestAnimationFrame(() => scrollToHash(hash));
  }, [pathname, hash]);
}

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);
}

export function useSmoothScroll() {
  useHashScroll();
  useScrollToTop();

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      scrollToHash(href);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}
