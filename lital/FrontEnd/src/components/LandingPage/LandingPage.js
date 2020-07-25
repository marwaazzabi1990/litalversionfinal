import React from "react";
import logo from "./logo.png";
import "./LandingPage.css";

import LandingPageModal from "./LandingPageModal";
class LandingPage extends React.Component {
  render() {
    return (
      <div className="LandingPageAll">
        <div className="logo-btn">
          <img src={logo} className="logo" alt="team-picture" />
          <LandingPageModal />
        </div>
        <div className="text">
          <p className="p-everyone">Hello everyone!</p>
          <p className="p-atelier">
            L’Atelier Lital c’est aujourd’hui plus de 20 ans d’expérience dans
            la maroquinerie. <br />
            En 2015, L’Atelier Lital a rejoint le Groupe Meninx Holding.
          </p>
        </div>
        <div class="social">
          <ul>
            <a href="http://latelierlital.com/" target="_blank">
              <i>Web</i>
            </a>
            <a href="https://fr-fr.facebook.com/Latelierlital/" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/atelierlital/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href = "https://www.linkedin.com/company/latelierlital" target="_blank">
            <i class="fab fa-linkedin-in"></i>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}
export default LandingPage;
