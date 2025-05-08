import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Export setup function to be called from index.html
export function setupApp() {
  try {
    const rootElement = document.getElementById("root");
    // Create and render root
    if (rootElement) {
      // Add timestamp to force fresh rendering without URL parameters
      rootElement.setAttribute('data-render-time', new Date().getTime().toString());
      createRoot(rootElement).render(<App />);
      console.log("App successfully mounted to DOM");
    } else {
      console.error("Root element not found in the DOM");
      // Create a fallback element if root doesn't exist
      const fallbackElement = document.createElement('div');
      fallbackElement.id = 'root';
      document.body.appendChild(fallbackElement);
      createRoot(fallbackElement).render(<App />);
    }
  } catch (error) {
    console.error("Critical error during app initialization:", error);
    // Fallback rendering in case of error
    const errorElement = document.createElement('div');
    errorElement.style.padding = '20px';
    errorElement.style.margin = '20px';
    errorElement.style.backgroundColor = '#f8d7da';
    errorElement.style.color = '#721c24';
    errorElement.style.borderRadius = '4px';
    errorElement.innerHTML = `
      <h2>QiArtificial</h2>
      <p>Ocorreu um erro ao carregar a aplicação. Por favor, atualize a página ou tente novamente mais tarde.</p>
    `;
    const rootEl = document.getElementById('root') || document.body;
    rootEl.appendChild(errorElement);
  }
}
// Also call setup immediately for direct imports
setupApp();
