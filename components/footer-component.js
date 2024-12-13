// /components/footer-component.js
class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Estilos generales del pie de página */
          footer {
            background-color: #2c3e50; /* Color más moderno */
            color: #ecf0f1; /* Texto claro */
            padding: 20px 0;
            text-align: center;
            position: relative;
            width: 100%;
            font-family: 'Arial', sans-serif;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
          }
  
          footer p {
            margin: 0;
            font-size: 1.1em;
          }
  
          footer a {
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
          }
  
          footer a:hover {
            text-decoration: underline;
          }
  
          /* Enlaces de contacto o términos */
          .footer-links {
            margin-top: 10px;
          }
  
          .footer-links a {
            margin: 0 10px;
            font-size: 0.9em;
          }
  
          /* Responsividad */
          @media (max-width: 600px) {
            footer p {
              font-size: 1em;
            }
  
            .footer-links a {
              font-size: 0.85em;
              margin: 0 5px;
            }
          }
        </style>
  
        <footer>
          <p>&copy; 2024 Mi Aplicación Web</p>
          <div class="footer-links">
            <a href="#privacy-policy">Política de privacidad</a> | 
            <a href="#terms-of-service">Términos de servicio</a>
          </div>
        </footer>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('footer-component', FooterComponent);
  