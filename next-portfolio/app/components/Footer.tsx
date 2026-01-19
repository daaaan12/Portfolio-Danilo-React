import React from 'react';
import { useIntl } from 'react-intl';
import styles from '../scss/footer.module.scss';

function Footer() {
  const intl = useIntl();

  return (
    <footer>
      <div className={styles['container-footer']}>
        <p>{intl.formatMessage({ id: 'rightsReserved' })}</p>
        <p>{intl.formatMessage({ id: 'authorName' })}</p>
      </div>
    </footer>
  );
}

export default Footer;
