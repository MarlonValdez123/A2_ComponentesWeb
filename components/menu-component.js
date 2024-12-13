// /components/menu-component.js
class MenuComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Estilos generales del menú */
          nav {
            background-color: #2c3e50; /* Usamos el mismo color oscuro que el footer y header */
            padding: 15px 0;
            display: flex;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
          }
  
          /* Estilos de los enlaces */
          nav a {
            color: #ecf0f1; /* Texto claro */
            text-decoration: none;
            margin: 0 15px;
            font-size: 1.2em;
            text-transform: uppercase;
            font-weight: 500;
          }
  
          /* Efecto hover */
          nav a:hover {
            text-decoration: underline;
            color: #3498db; /* Color de enlace al pasar el cursor */
          }
  
          /* Responsividad */
          @media (max-width: 600px) {
            nav a {
              font-size: 1em; /* Reducir el tamaño de la fuente en pantallas pequeñas */
              margin: 0 10px;
            }
          }
        </style>
  
        <nav>
          <a href="#home">Inicio</a>
          <a href="#profile">Perfil</a>
          <a href="#gallery">Galería</a>
          <a href="#table">Tabla</a>
        </nav>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('menu-component', MenuComponent);
  