// /components/header-component.js
class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Estilos generales del encabezado */
          header {
            background-color: #2c3e50; /* Usamos el mismo color oscuro que el footer */
            color: #ecf0f1; /* Texto claro como en el footer */
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
            border-bottom: 2px solid #2980b9; /* Borde inferior con color similar */
            font-family: 'Roboto', sans-serif;
          }
  
          /* Estilo del título */
          header h1 {
            margin: 0;
            font-size: 2.5em;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
  
          /* Responsividad para pantallas pequeñas */
          @media (max-width: 600px) {
            header h1 {
              font-size: 1.8em; /* Reducir tamaño de fuente */
            }
          }
        </style>
  
        <header>
          <h1>Mi Aplicación Web</h1>
        </header>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('header-component', HeaderComponent);
  