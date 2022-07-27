import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './modules/ActionProvider';
import config from './modules/config';
import MessageParser from './modules/MessageParser';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_en from './translations/en/globla.json'
import global_es from './translations/es/globla.json'


i18next.init({ 
  interpolation: {escapeValue: false},
  lng: "es",
  resources:{
  en:{
    global: global_en
  },
  es:{
    global: global_es
  }
} })

function App() {
  return (
    <div>
      <I18nextProvider i18n={i18next}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </I18nextProvider>
    </div>
  );
}

export default App;
