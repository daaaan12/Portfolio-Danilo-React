import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import DescriptionSection from './components/DescriptionSection';
import ProjectsSection from './components/ProjectsSection';
import LanguageSelector from './components/LanguageSelector';
import Footer from './components/Footer';
import messages_en from './translations/messages_en.json';
import messages_pt from './translations/messages_pt.json';

import './scss/global.scss';

function App() {
  const [locale, setLocale] = useState('pt');
  const messages = locale === 'pt' ? messages_pt : messages_en;
  
  return (
    <IntlProvider locale={locale} messages={messages}>
      <body>
        <main>
          <LanguageSelector setLocale={setLocale} />
          <header>
            <Header />
          </header>
          <section>
            <DescriptionSection />
          </section>
          <ProjectsSection />
          <Footer />
        </main>
      </body>
    </IntlProvider>
  );
}

export default App;
