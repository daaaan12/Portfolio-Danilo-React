import React from 'react';
import bandeiraBrasil from '../img/bandeiraBrasil.png';
import bandeiraEua from '../img/bandeiraEua.png';
import bandeiraEspanha from '../img/bandeiraEspanha.png';
import bandeiraFranca from '../img/bandeiraFranca.png';
import bandeiraRussia from '../img/bandeiraRussia.png';
import bandeiraJapao from '../img/bandeiraJapao.png';



import Image from 'next/image';
import styles from '../scss/languageselector.module.scss';

interface LanguageSelectorProps {
  setLocale: (locale: string) => void;
}

function LanguageSelector({ setLocale }: LanguageSelectorProps) {
  return (
    <div className={styles.top}>
      <button onClick={() => setLocale('pt')}>
        <Image src={bandeiraBrasil} alt="Bandeira do Brasil" width={40} style={{ height: 'auto' }} />
      </button>
      <button onClick={() => setLocale('en')}>
        <Image src={bandeiraEua} alt="Bandeira dos EUA" width={40} style={{ height: 'auto' }} />
      </button>
      <button onClick={() => setLocale('es')}>
        <Image src={bandeiraEspanha} alt="Bandeira da Espanha" width={40} style={{ height: 'auto' }} />
      </button>
      <button onClick={() => setLocale('fr')}>
        <Image src={bandeiraFranca} alt="Bandeira da França" width={40} style={{ height: 'auto' }} />
      </button>
      <button onClick={() => setLocale('ru')}>
        <Image src={bandeiraRussia} alt="Bandeira da Russia" width={40} style={{ height: 'auto' }} />
      </button>
      <button onClick={() => setLocale('ja')}>
        <Image src={bandeiraJapao} alt="Bandeira do Japão" width={40} style={{ height: 'auto' }} />
      </button>
    </div>
  );
}

export default LanguageSelector;
