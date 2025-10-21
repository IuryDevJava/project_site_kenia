import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Este hook ouve as mudanças no 'hash' da URL (ex: #produtos)
 * e rola a tela para o elemento correspondente, mas com um offset
 * para compensar o header fixo.
 * * @param {number} offsetFallback
 */
function useHashScrollOffset(offsetFallback = 80) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const target = document.getElementById(id);
      
      if (target) {
        const timer = setTimeout(() => {
          const header = document.querySelector(".site-header");
          const headerHeight = header ? header.offsetHeight : offsetFallback;
          const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }, 20); 

        return () => clearTimeout(timer);
      }
    }
  }, [location.hash, offsetFallback]);
}

export default useHashScrollOffset;