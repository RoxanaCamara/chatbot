// in MessageParser.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const MessageParser = ({ children, actions }) => {
  const [ t, i18n] = useTranslation("global")
  
  const parse = (message) => {    

    if (message.includes(t('user.dog'))) {
      actions.handleDog();
      return;
    }
    if (message.includes(t('user.you'))) {
      actions.handleYou();
      return;
    }
    if (message.includes(t('user.about-her'))) {
      actions.handleYou();
      return;
    }
      actions.handleNotUnderstand()
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;