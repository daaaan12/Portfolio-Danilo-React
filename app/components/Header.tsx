
import React from 'react';

import styles from '../scss/header.module.scss';
import Image from 'next/image';

interface HeaderProps {
  theme: string;
}

function Header({ theme }: HeaderProps) {
  return (
    <header className={styles['secao-header']}>
      <div className={styles.container}>
        <div className={styles['container-logo']}>
          <Image
            src={theme === 'light' ? '/img/logoDaniloLight.png' : '/img/logoDanilo.png'}
            alt="Danilo Logo"
            width={200}
            height={60}
            style={{ height: 'auto' }}
          />
        </div>
        <div className={styles['container-icone']}>
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
