import React from 'react';
import { useTranslation } from 'react-i18next';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [ t, i18n] = useTranslation("global")


  const handleHello = () => {
    const botMessage = createChatBotMessage(t("init-conversation.init"));
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLanguage = () => {
    const botMessage = createChatBotMessage(
      t("init-conversation.select-language"),
      {
        widget: 'buttonsLanguage',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleYou = () => {
    const botMessage = createChatBotMessage(
      t("init-conversation.i-am")
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleLanguage,
            handleYou
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;