// src/hooks/useHashScrollOffset.js
// (Pode ser em outra pasta, ex: /src/utils/useHashScrollOffset.js)

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Este hook ouve as mudanças no 'hash' da URL (ex: #produtos)
 * e rola a tela para o elemento correspondente, mas com um offset
 * para compensar o header fixo.
 * * @param {number} offsetFallback - A altura em pixels do seu header (ex: 80)
 */
function useHashScrollOffset(offsetFallback = 80) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1); // Remove o "#"
      const target = document.getElementById(id);
      
      if (target) {
        // Damos um pequeno delay (100ms).
        // Isso é crucial para garantir que o scroll padrão do React Router
        // já tenha acontecido, para então "corrigirmos" a posição.
        const timer = setTimeout(() => {
          // Recalcula a altura do header dinamicamente
          const header = document.querySelector(".site-header"); // O mesmo seletor do seu hook antigo
          const headerHeight = header ? header.offsetHeight : offsetFallback;

          // Calcula a posição Y correta
          const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          // Rola suavemente para a posição correta
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }, 20); 

        return () => clearTimeout(timer);
      }
    }
  }, [location.hash, offsetFallback]); // Este efeito roda toda vez que o hash mudar
}

export default useHashScrollOffset;