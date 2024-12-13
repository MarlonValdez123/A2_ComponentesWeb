// /components/main-component.js
class MainComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          main {
            background-color: #ecf0f1; /* Fondo suave y claro */
            padding: 20px;
            margin: 20px auto;
            max-width: 1200px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra sutil */
            overflow: hidden; /* Para evitar que el contenido se desborde */
          }
  
          /* Espaciado adicional */
          main::slotted(*) {
            margin-bottom: 20px;
          }
  
          /* Mejorar la legibilidad en dispositivos pequeños */
          @media (max-width: 768px) {
            main {
              padding: 15px;
              margin: 15px;
            }
          }
  
          @media (max-width: 480px) {
            main {
              padding: 10px;
              margin: 10px;
            }
          }
        </style>
  
        <main>
          <slot></slot>
        </main>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('main-component', MainComponent);
  