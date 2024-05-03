// Footer.js
import React from 'react';
import { useIntl } from 'react-intl';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit, DiGithubAlt, DiVisualstudio, DiBootstrap } from "react-icons/di";
import '../scss/footer.scss';

function Footer() {
  const intl = useIntl();

  return (
    <footer>
      <div className="container-footer">
        <p>{intl.formatMessage({ id: 'rightsReserved' })}</p>
        <p>{intl.formatMessage({ id: 'authorName' })}</p>
        <div className='icon-container'>
          <DiHtml5 className='icon-dev' />
          <DiCss3 className='icon-dev' />
          <DiJavascript1 className='icon-dev' />
          <DiReact className='icon-dev' />
          <DiGit className='icon-dev' />
          <DiGithubAlt className='icon-dev' />
          <DiVisualstudio className='icon-dev' />
          <DiBootstrap className='icon-dev' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
