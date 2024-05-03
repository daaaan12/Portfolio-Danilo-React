import React from 'react';
import bandeiraBrasil from '../img/bandeiraBrasil.png';
import bandeiraEua from '../img/bandeiraEua.png';
import bandeiraEspanha from '../img/bandeiraEspanha.png';
import bandeiraFranca from '../img/bandeiraFranca.png';
import bandeiraRussia from '../img/bandeiraRussia.png';
import bandeiraJapao from '../img/bandeiraJapao.png';

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
      <button onClick={() => setLocale('es')}>
        <img src={bandeiraEspanha} alt="Bandeira da Espanha" width="40px" />
      </button>
      <button onClick={() => setLocale('fr')}>
        <img src={bandeiraFranca} alt="Bandeira da França" width="40px" />
      </button>
      <button onClick={() => setLocale('ru')}>
        <img src={bandeiraRussia} alt="Bandeira da Russia" width="40px" />
      </button>
      <button onClick={() => setLocale('jp')}>
        <img src={bandeiraJapao} alt="Bandeira do Japão" width="40px" />
      </button>
    </div>
  );
}

export default LanguageSelector;
