// /components/gallery-component.js
class GalleryComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      const url = 'https://picsum.photos/v2/list?page=1&limit=10'; // Obtén 10 imágenes aleatorias de Lorem Picsum
  
      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
  
        // Convierte la respuesta en formato JSON
        const data = await response.json();
  
        const template = document.createElement('template');
        template.innerHTML = `
          <style>
            /* Contenedor principal de la galería */
            .gallery-container {
              padding: 20px;
              text-align: center;
              background-color: #f7f7f7;
              border-radius: 12px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              max-width: 1200px;
              margin: auto;
            }
  
            /* Título de la galería */
            .gallery-container h2 {
              font-size: 2.5em;
              color: #333;
              font-weight: 600;
              margin-bottom: 20px;
            }
  
            /* Galería en cuadrícula */
            .gallery {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 15px;
              padding: 0;
              margin: 0;
            }
  
            /* Estilo de las imágenes */
            .gallery img {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-radius: 12px;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
  
            /* Efecto hover para las imágenes */
            .gallery img:hover {
              transform: scale(1.05);
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
  
            /* Responsividad: imágenes de 100% en pantallas pequeñas */
            @media (max-width: 600px) {
              .gallery img {
                height: 150px;
              }
            }
          </style>
  
          <!-- Contenedor principal de la galería -->
          <div class="gallery-container">
            <h2>Galería de Imágenes Aleatorias</h2>
            <div class="gallery">
              ${data.map(image => `
                <img src="https://picsum.photos/id/${image.id}/400/300" alt="${image.author}" />
              `).join('')}
            </div>
          </div>
        `;
        
        this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      } catch (error) {
        console.error('Error al cargar las imágenes de la galería:', error);
        this.shadowRoot.innerHTML = `<p>Ocurrió un error al cargar las imágenes: ${error.message}</p>`;
      }
    }
  }
  
  customElements.define('gallery-component', GalleryComponent);
  