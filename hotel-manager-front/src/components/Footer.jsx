import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Esta es para icono estaticos fa
import {faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons'
//Esta es para iconos de marcas fab
import {faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css';

export default function Footer () {

    return (
      <footer>
      <div className="content">
          <div className="left box">
              <div className="upper">
                      <div className="topic">Sobre nosotros</div>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, id modi. Dolorum, quia
                          deserunt vitae cum aperiam suscipit sapiente porro repellat facilis illum at fugiat alias eos
                          quod quibusdam! Vel.</p>
              </div>
              <div className="lower">
                      <div className="topic">Contáctanos</div>
                      <div className="phone">
                          <a href="/">
                              <div className="icono-footer">
                                  <FontAwesomeIcon icon={faPhoneVolume} label="&nbsp; &nbsp; +1 76484377"/>
                                  &nbsp; +1 76484377
                              </div>
                          </a>
                      </div>
                      <div className="email">
                          <a href="mailto:contacto@etecno.com">
                              <div className="icono-footer">
                                  <FontAwesomeIcon icon={faEnvelope}/>
                                  &nbsp; contacto@etecno.com
                              </div>
                          </a>
                      </div>
              </div>
          </div>

          <div className="middle box">
              <div><a href="/">Home</a></div>
              <div><a href="/">Tienda</a></div>
              <div><a href="/">Carrito</a></div>
              <div><a href="/">Contáctenos</a></div>
              <div className="media-icons">
                      <a href="/">
                          <div className="icono-footer">
                              <FontAwesomeIcon icon={faFacebook}/>
                          </div>
                      </a>
                      <a href="/">
                          <div className="icono-footer">
                              <FontAwesomeIcon icon={faInstagram}/>
                          </div>
                      </a>
                      <a href="/">
                          <div className="icono-footer">
                              <FontAwesomeIcon icon={faTwitter}/>
                          </div>
                      </a>
                      <a href="/">
                          <div className="icono-footer">
                              <FontAwesomeIcon icon={faYoutube}/>
                          </div>
                      </a>
                      <a href="/">
                          <div className="icono-footer">
                              <FontAwesomeIcon icon={faLinkedin}/>
                          </div>
                      </a>
                      <p>eTecno© 2021 All rights reserved</p>
              </div>
          </div>
      </div>
  </footer>

    )
}
