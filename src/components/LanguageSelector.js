import React from 'react';
import bandeiraBrasil from '../img/bandeiraBrasil.png';
import bandeiraEua from '../img/bandeiraEua.png';

import '../scss/languageselector.scss';

function LanguageSelector({ setLocale }) {
  return (
    <div className='top'>
      <button onClick={() => setLocale('pt')}>
        <img src={bandeiraBrasil} alt="Bandeira do Brasil" width="40px" />
      </button>
      <button onClick={() => setLocale('en')}>
        <img src={bandeiraEua} alt="Bandeira dos EUA" width="40px" />
      </button>
    </div>
  );
}

export default LanguageSelector;
