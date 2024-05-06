import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <div className="Footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer_links">
          <div className="sb__footer-links-div">
            <h4>Employeur</h4>
            <a href="/Publier une annonce">
              <p>Publier une annonce</p>
            </a>
            <a href="/Trouver un CV ">
              <p>Trouver un CV</p>
            </a>
            <a href="/Connexion">
              <p>Connexion</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Chercheur d'emploi</h4>
            <a href="/Trouver un emploi">
              <p>Trouver un emploi</p>
            </a>
            <a href="/Connexion">
              <p>Connexion</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
