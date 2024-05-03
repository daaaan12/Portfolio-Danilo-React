
import React from 'react';
import logoDanilo from '../img/logoDanilo.png';

import '../scss/header.scss';

function Header() {
  return (
    <header className="secao-header">
      <div className="container">
        <div className="container-logo">
        <img src={logoDanilo} alt="Danilo Logo" width="200px" />
        </div>
        <div className="container-icone">
          <a href="https://github.com/daaaan12">
            <i style={{ fontSize: '1rem', margin: '0.5rem' }}>GITHUB</i>
          </a>
          <a href="https://www.linkedin.com/in/danilo-costa-de-oliveira-66413a22b/">
            <i style={{ fontSize: '1rem', margin: '0.5rem' }}>LINKEDIN</i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
