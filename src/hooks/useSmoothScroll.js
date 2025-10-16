import { useEffect, useRef } from "react";


export default function useSmoothScroll(offsetFallback = 80, options = {}) {
  const { closeMenuSelector = null, hashScrollDelay = 40 } = options;
  const headerHeightRef = useRef(offsetFallback);

  useEffect(() => {

    const recalcHeaderHeight = () => {
      const header = document.querySelector(".site-header"); 
      if (header) {
        headerHeightRef.current = header.offsetHeight || offsetFallback;
      } else {
        headerHeightRef.current = offsetFallback;
      }
    };

    recalcHeaderHeight();

    window.addEventListener("resize", recalcHeaderHeight);

    const header = document.querySelector(".site-header");
    let mo;
    if (header && typeof MutationObserver !== "undefined") {
      mo = new MutationObserver(recalcHeaderHeight);
      mo.observe(header, { attributes: true, childList: true, subtree: true });
    }

    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const headerHeight = headerHeightRef.current || offsetFallback;
      const targetY =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const absDistance = Math.abs(distance);

      const NUDGE_THRESHOLD = 60;
      const NUDGE_RATIO = 0.08;

      if (!prefersReducedMotion && absDistance > NUDGE_THRESHOLD) {

        const nudge = Math.round(distance * NUDGE_RATIO);
        window.scrollTo(0, startY + nudge);

        setTimeout(() => {
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }, 12);
      } else {

        if (prefersReducedMotion) {
          window.scrollTo(0, targetY);
        } else {
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }

      history.pushState(null, "", `#${id}`);

      if (closeMenuSelector) {
        const closer = document.querySelector(closeMenuSelector);
        if (closer) {
          setTimeout(() => closer.click(), 50);
        }
      }
    };

    document.addEventListener("click", handleClick);

    const handleInitialHash = () => {
      if (!location.hash) return;
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;
      setTimeout(() => {
        const headerHeight = headerHeightRef.current || offsetFallback;
        const targetY =
          target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetY });
      }, hashScrollDelay);
    };

    handleInitialHash();

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", recalcHeaderHeight);
      if (mo) mo.disconnect();
    };
  }, [offsetFallback, closeMenuSelector, hashScrollDelay]);
}
