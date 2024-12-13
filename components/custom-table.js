// /components/custom-table.js
class CustomTable extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      // Datos hispanos actualizados con números de teléfono de Ecuador
      const users = [
        { name: "Carlos García", email: "carlos.garcia@example.com", phone: "+593 912 345 678" },
        { name: "Ana López", email: "ana.lopez@example.com", phone: "+593 922 345 679" },
        { name: "Luis Fernández", email: "luis.fernandez@example.com", phone: "+593 932 345 680" },
        { name: "María Rodríguez", email: "maria.rodriguez@example.com", phone: "+593 942 345 681" },
        { name: "Pedro Martínez", email: "pedro.martinez@example.com", phone: "+593 952 345 682" },
        { name: "Laura Sánchez", email: "laura.sanchez@example.com", phone: "+593 962 345 683" },
        { name: "José Torres", email: "jose.torres@example.com", phone: "+593 972 345 684" },
        { name: "Isabel Pérez", email: "isabel.perez@example.com", phone: "+593 982 345 685" }
      ];
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-family: 'Arial', sans-serif;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
  
          th, td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
          }
  
          th {
            background-color: #34495e;
            color: white;
            font-size: 1.1em;
          }
  
          tr:nth-child(even) {
            background-color: #f4f4f4;
          }
  
          tr:hover {
            background-color: #f1c40f;
            cursor: pointer;
          }
  
          td {
            font-size: 1em;
            color: #2c3e50;
          }
  
          /* Responsividad para pantallas pequeñas */
          @media (max-width: 768px) {
            table {
              font-size: 0.9em;
            }
  
            th, td {
              padding: 8px;
            }
          }
        </style>
  
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            ${users.map(user => `
              <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  // Verifica que la clase no esté registrada antes de volver a definirla
  if (!customElements.get('custom-table')) {
    customElements.define('custom-table', CustomTable);
  }
  