import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import DescriptionSection from './components/DescriptionSection';
import ProjectsSection from './components/ProjectsSection';
import LanguageSelector from './components/LanguageSelector';
import Footer from './components/Footer';
import messages_en from './translations/messages_en.json';
import messages_pt from './translations/messages_pt.json';
import messages_es from './translations/messages_es.json';
import messages_fr from './translations/messages_fr.json';
import messages_ru from './translations/messages_ru.json';
import messages_jp from './translations/messages_jp.json';

import './scss/global.scss';

function App() {
  const [locale, setLocale] = useState('pt');
  let messages;

  switch (locale) {
    case 'en':
      messages = messages_en;
      break;
    case 'es':
      messages = messages_es;
      break;
    case 'fr':
      messages = messages_fr;
      break;
    case 'ru':
      messages = messages_ru;
      break;
    case 'jp':
      messages = messages_jp;
      break;
    default: // Definindo pt-BR como padrão
      messages = messages_pt;
      break;
  }

  return (
    <body>
      <main>
        <IntlProvider locale={locale} messages={messages}>
          <div>
            <LanguageSelector setLocale={setLocale} />
            <header>
              <Header />
            </header>
            <section>
              <DescriptionSection />
            </section>
            <ProjectsSection />
            <Footer />
          </div>
        </IntlProvider>
      </main>
    </body>
  );
}

export default App;
