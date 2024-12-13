// /components/social-profile.js
class SocialProfile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .profiles-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
            justify-items: center;
          }
  
          .profile-card {
            background-color: #fff;
            border-radius: 10px;
            border: 1px solid #ddd;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            max-width: 300px;
            width: 100%;
            text-align: center;
            padding: 20px;
            transition: transform 0.3s ease-in-out;
          }
  
          .profile-card:hover {
            transform: translateY(-10px);
          }
  
          .profile-card img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-bottom: 15px;
          }
  
          .profile-card h2 {
            font-size: 1.5em;
            margin: 10px 0;
            color: #2c3e50;
          }
  
          .profile-card p {
            color: #7f8c8d;
            font-size: 1em;
            margin: 5px 0;
          }
  
          /* Mejorar la tipografía */
          .profile-card h2, .profile-card p {
            font-family: 'Arial', sans-serif;
          }
  
          /* Responsividad */
          @media (max-width: 768px) {
            .profiles-container {
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
          }
        </style>
  
        <div class="profiles-container">
          <!-- Perfil 1 -->
          <div class="profile-card">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Carlos García">
            <h2>Carlos García</h2>
            <p>Email: carlos.garcia@ejemplo.com</p>
            <p>Bio: Ingeniero de software y amante del cine y la música.</p>
          </div>
  
          <!-- Perfil 2 -->
          <div class="profile-card">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Ana López">
            <h2>Ana López</h2>
            <p>Email: ana.lopez@ejemplo.com</p>
            <p>Bio: Diseñadora gráfica y creadora de contenido en redes sociales.</p>
          </div>
  
          <!-- Perfil 3 -->
          <div class="profile-card">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Pedro Martínez">
            <h2>Pedro Martínez</h2>
            <p>Email: pedro.martinez@ejemplo.com</p>
            <p>Bio: Desarrollador web con pasión por la inteligencia artificial.</p>
          </div>
  
          <!-- Perfil 4 -->
          <div class="profile-card">
            <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Laura Rodríguez">
            <h2>Laura Rodríguez</h2>
            <p>Email: laura.rodriguez@ejemplo.com</p>
            <p>Bio: Emprendedora y coach de vida, con un enfoque en el desarrollo personal.</p>
          </div>
  
          <!-- Perfil 5 -->
          <div class="profile-card">
            <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Luis Fernández">
            <h2>Luis Fernández</h2>
            <p>Email: luis.fernandez@ejemplo.com</p>
            <p>Bio: Psicólogo y especialista en bienestar emocional.</p>
          </div>
        </div>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('social-profile', SocialProfile);
  