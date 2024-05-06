import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import TagManager from 'react-gtm-module';

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

  useEffect(() => {
    // Função para enviar um evento personalizado para o dataLayer
    const sendCustomEvent = (eventName, eventData) => {
      // Verifica se o dataLayer está disponível
      if (window.dataLayer) {
        // Envia o evento personalizado para o dataLayer
        window.dataLayer.push({
          event: eventName,
          ...eventData,
        });
      } else {
        console.error('O dataLayer não está disponível.');
      }
    };

    // Configuração do Google Tag Manager
    const tagManagerArgs = {
      gtmId: 'G-DJCLD5YB2R', // Seu ID de propriedade do Google Tag Manager
    };
    
    // Inicialização do Google Tag Manager
    TagManager.initialize(tagManagerArgs);

    // Exemplo de envio de um evento personalizado para o dataLayer
    sendCustomEvent('page_view', {
      pagePath: window.location.pathname,
      pageTitle: document.title,
      pageLocale: locale,
    });
  }, [locale]);

  return (
    <body>
      <main>

        <IntlProvider locale={locale} messages={messages}>
            <LanguageSelector setLocale={setLocale} />

            <header>
              <Header />
            </header>

            <section>
              <DescriptionSection />
            </section>
            
            <section>
            <ProjectsSection />
            </section>

            <footer>
            <Footer />
            </footer>

        </IntlProvider>

      </main>
    </body>
  );
}

export default App;
