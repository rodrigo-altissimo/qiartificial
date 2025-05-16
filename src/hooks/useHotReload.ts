import { useEffect } from 'react';

export function useHotReload() {
  useEffect(() => {
    if (import.meta.env.DEV) {
      const sse = new EventSource('/esbuild');
      sse.addEventListener('change', () => {
        console.log('Detectada alteração no código, recarregando...');
        location.reload();
      });
      return () => sse.close();
    }
  }, []);
} 